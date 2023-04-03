import { createContext, useReducer, useEffect } from "react";

export const initialState = {theme: "light", data: []}

const globalReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };
      case 'SET_DATA':
      return { ...state, data: action.payload
      };
    default:
      return state;
  }
};

export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const [state, dispatch] = useReducer(globalReducer, initialState);

  
    const setData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        dispatch({ type: 'SET_DATA', payload: data });
    };
    
    useEffect(() => {
      setData()
    }, []);
  
  const toggleTheme = () => dispatch({ type: 'TOGGLE_THEME' });

  return (
    <ContextGlobal.Provider value={{state, toggleTheme, setData}}>
      {children}
    </ContextGlobal.Provider>
  );
};
