import { PropsWithChildren } from "react";
import { Datagrid } from "react-admin";

const CustomDatagrid = ({ children }: PropsWithChildren) => {
	return (
		<Datagrid
			sx={{
				"& .RaDatagrid-headerCell": {
					textAlign: "center",
				},
				"& .RaDatagrid-rowEven": {
					backgroundColor: "#FAFAFA",
				},
			}}
			bulkActionButtons={false}
		>
			{children}
		</Datagrid>
	);
};

export default CustomDatagrid;
