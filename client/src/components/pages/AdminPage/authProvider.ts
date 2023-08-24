import { AuthProvider, PreviousLocationStorageKey } from "ra-core";
import { Auth0Client } from "@auth0/auth0-spa-js";

export const Auth0AuthProvider = (
	client: Auth0Client,
	{
		loginRedirectUri,
		logoutRedirectUri,
		redirectOnCheckAuth = true,
	}: {
		loginRedirectUri?: string;
		logoutRedirectUri?: string;
		redirectOnCheckAuth?: boolean;
	} = {
		redirectOnCheckAuth: true,
	}
): AuthProvider => ({
	// Used when the redirection to Auth0 is done from a custom login page
	async login() {
		client.loginWithRedirect({
			authorizationParams: {
				redirect_uri:
					loginRedirectUri ?? `${window.location.origin}/auth-callback`,
			},
		});
	},
	// called when the user clicks on the logout button
	async logout() {
		return client
			.logout({
				logoutParams: {
					returnTo: logoutRedirectUri || window.location.origin,
				},
			})
			.then(() => logoutRedirectUri || "/");
	},
	// called when the API returns an error
	async checkError({ status }) {
		if (status === 401 || status === 403) {
			throw new Error("Unauthorized");
		}
	},
	// called when the user navigates to a new location, to check for authentication
	async checkAuth() {
		const isAuthenticated = await client.isAuthenticated();
		if (isAuthenticated) {
			return;
		}

		if (redirectOnCheckAuth) {
			localStorage.setItem(PreviousLocationStorageKey, window.location.href);
			return client.loginWithRedirect({
				authorizationParams: {
					redirect_uri:
						loginRedirectUri ?? `${window.location.origin}/auth-callback`,
				},
			});
		}
		throw new Error("Unauthorized");
	},
	// called when the user navigates to a new location, to check for permissions / roles
	async getPermissions() {
		if (!(await client.isAuthenticated())) {
			return;
		}

		// If Auth0 instance contains rules for returning permissions, use them
		const claims = await client.getIdTokenClaims();
		const roleProperty = Object.keys(claims!).find((key) =>
			key.includes("role")
		);
		return claims![roleProperty!];
	},
	async getIdentity() {
		if (await client.isAuthenticated()) {
			const user = await client.getUser();
			return {
				id: user!.email as string,
				fullName: user!.name as string,
				avatar: user!.picture as string,
			};
		}
		throw new Error("Failed to get identity.");
	},
	async handleCallback() {
		const query = window.location.search;
		if (query.includes("code=") && query.includes("state=")) {
			try {
				await client.handleRedirectCallback();
				return;
			} catch (error: unknown) {
				if (typeof error === "object" && error !== null && "message" in error) {
					// eslint-disable-next-line no-throw-literal
					throw { redirectTo: false, message: error.message };
				}
			}
		}
		throw new Error("Failed to handle login callback.");
	},
});
