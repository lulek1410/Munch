import { Button, CreateButton, TopToolbar, useRedirect } from "react-admin";

import CategoryIcon from "@mui/icons-material/Category";

interface ListActionsProps {
    sectionName?: string;
}

const ListActions = ({ sectionName }: ListActionsProps) => {
    const redirect = useRedirect();

    return (
        <TopToolbar>
            <CreateButton label="Dodaj" />
            {sectionName ?
                <Button
                    onClick={() => {
                        redirect(`/admin/${sectionName}/categories`);
                    }}
                    label="Edytuj Kategorie"
                >
                    <CategoryIcon />
                </Button> : null}
        </TopToolbar>
    );
};

export default ListActions;