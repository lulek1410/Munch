import { stringify } from "query-string";

const getTotalContentRange = (contentRange) => {
	return contentRange ? parseInt(contentRange.split("/").pop(), 10) : 0;
};

const dataProvider = (httpClient, apiUrl) => {
	return {
		getList: (resource, params) => {
			const { page, perPage } = params.pagination;
			const { field, order } = params.sort;

			const query = {
				sort: JSON.stringify([field, order]),
				range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
				filter: JSON.stringify(params.filter),
			};
			const url = `${apiUrl}/${resource}?${stringify(query)}`;
			return httpClient(url).then(({ headers, json }) => {
				return {
					data: json.map((resource) => ({ ...resource, id: resource._id })),
					total: getTotalContentRange(headers.get("content-range")),
				};
			});
		},

		getOne: (resource, params) =>
			httpClient(`${apiUrl}/${resource}/${params.id}`).then(({ json }) => {
				const data = json;
				data.id = data._id;
				delete data._id;
				return {
					data: data,
				};
			}),

		getMany: (resource, params) => {
			const query = {
				filter: JSON.stringify({ ids: params.ids }),
			};
			const url = `${apiUrl}/${resource}?${stringify(query)}`;
			return httpClient(url).then(({ json }) => ({
				data: json.map((resource) => ({ ...resource, id: resource._id })),
			}));
		},

		getManyReference: (resource, params) => {
			const { page, perPage } = params.pagination;
			const { field, order } = params.sort;
			const query = {
				sort: JSON.stringify([field, order]),
				range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
				filter: JSON.stringify({
					...params.filter,
					[params.target]: params.id,
				}),
			};
			const url = `${apiUrl}/${resource}?${stringify(query)}`;

			return httpClient(url).then(({ headers, json }) => ({
				data: json.map((resource) => ({ ...resource, id: resource._id })),
				total: getTotalContentRange(headers.get("content-range")),
			}));
		},

		create: async (resource, params) => {
			return httpClient(`${apiUrl}/${resource}`, {
				method: "POST",
				body: JSON.stringify(params.data),
			}).then(({ json }) => {
				return {
					data: params.data,
				};
			});
		},

		update: (resource, params) => {
			return httpClient(`${apiUrl}/${resource}/${params.id}`, {
				method: "PUT",
				body: JSON.stringify(params.data),
			}).then(({ json }) => ({ data: { ...json, id: json._id } }));
		},

		updateMany: (resource, params) => {
			const query = {
				filter: JSON.stringify({ id: params.ids }),
			};
			return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
				method: "PUT",
				body: JSON.stringify(params.data),
			}).then(({ json }) => ({ data: json }));
		},

		delete: (resource, params) =>
			httpClient(`${apiUrl}/${resource}/${params.id}`, {
				method: "DELETE",
			}).then(({ json }) => ({ ...json, id: json._id })),

		deleteMany: (resource, params) => {
			const query = {
				filter: JSON.stringify({ id: params.ids }),
			};
			return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
				method: "DELETE",
				body: JSON.stringify(params.data),
			}).then(({ json }) => ({ data: [json] }));
		},
	};
};

export default dataProvider;
