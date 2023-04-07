import { createContext, useContext, useState, useReducer, useEffect } from "react";

export const ContextGlobal = createContext();


export const initialGlobalState = { theme: "light", favs: []}
                                  

const globalReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return { theme: state.theme === "light" ? "dark" : "light",
               favs: state.favs
              }
      case 'ADD_FAV':
        return { theme: state.theme,
               favs: [...state.favs, action.payload]
              }
        default:
      return state;
  }
};



export const Context = ({ children }) => {
const [dentistList, setDentistList] = useState([])
const url = 'https://jsonplaceholder.typicode.com/users'

const [globalState, globalDispatch] = useReducer(globalReducer, initialGlobalState);

useEffect(() => {
    localStorage.setItem('favs', JSON.stringify(globalState.favs))
}, [globalState.favs])


useEffect(() => {
const fetchDentists = async () => {
    const res= await fetch(url);
    const data = await res.json();
    setDentistList(data)
};
fetchDentists()
}, []);


  return (
    <ContextGlobal.Provider value={{dentistList, setDentistList, globalState, globalDispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useContextGlobal = () => useContext(ContextGlobal)