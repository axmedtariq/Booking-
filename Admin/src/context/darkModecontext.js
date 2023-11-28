import DarkModeReducer from "./darkModeReducer";
import { createContext, useReducer } from "react";
const INITIAL_STATE = {
	darkMode: false,
};

export const DarkModecontext = createContext(INITIAL_STATE)


export const DarkModecontextProvider = ({ children }) => {

	const [state, dispatch] = useReducer(DarkModeReducer, INITIAL_STATE);

	return (

		<DarkModecontext.Provider value={{ darkMode: state.darkMode, dispatch }}>
		{children}
		</DarkModecontext.Provider>

		);

}