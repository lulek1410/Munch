import { useNavigate } from "react-router-dom";

const useClickRedirection = (path: string) => {
	const navigate = useNavigate();
	return () => {
		navigate(path);
	};
};

export default useClickRedirection;
