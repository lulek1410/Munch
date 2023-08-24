export {};

declare global {
	namespace NodeJS {
		interface ProcessEnv {
			REACT_APP_I18NEXT_API_KEY: string;
			REACT_APP_API_URL: string;
			REACT_APP_AUTH0_DOMAIN: string;
			REACT_APP_AUTH0_CLIENT_ID: string;
			REACT_APP_AUTH0_AUDIENCE: string;
			REACT_APP_LOGIN_REDIRECT_URL: string;
			REACT_APP_LOGOUT_REDIRECT_URL: string;
		}
	}
}
