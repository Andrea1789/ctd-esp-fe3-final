import { createContext, useContext, useState, useReducer, useEffect } from "react";

export const ContextGlobal = createContext();


export const initialThemeState = "light"

const themeReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return state === "light" ? "dark" : "light";
        default:
      return state.themeState;
  }
};

const initialFavState = JSON.parse(localStorage.getItem('favs')) || []

const favReducer = (state, action) => {
    switch(action.type){
        case 'ADD_FAV':
            return [...state, action.payload]
        default:
            throw new Error
    }
}


export const Context = ({ children }) => {
const [dentistList, setDentistList] = useState([])
const url = 'https://jsonplaceholder.typicode.com/users'

const [themeState, themeDispatch] = useReducer(themeReducer, initialThemeState);
const [favState, favDispatch] = useReducer(favReducer, initialFavState)

useEffect(() => {
  localStorage.setItem('favs', JSON.stringify(favState))
}, [favState])


useEffect(() => {
const fetchDentists = async () => {
    const res= await fetch(url);
    const data = await res.json();
    setDentistList(data)
    //dispatch({ type: 'SET_DATA', payload: data });
};
fetchDentists()
}, []);


  return (
    <ContextGlobal.Provider value={{dentistList, setDentistList, themeState, themeDispatch, favState, favDispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useContextGlobal = () => useContext(ContextGlobal)