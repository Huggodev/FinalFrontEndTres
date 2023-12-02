import { useReducer, useContext, createContext, useEffect  } from "react";
import { types } from "../types/types";
import axios from "axios";
import { urlUser } from "../../helpers/url";
import dentistReducer from "../../reducer/dentistReducer";
import favReducer from "../../reducer/favReducer";
import themeReducer from "../../reducer/themeReducer";

const getFavStorage = JSON.parse(localStorage.getItem('fav'));
const getThemeStorage = JSON.parse(localStorage.getItem('darkMode'));

const ContextGlobal = createContext();

// eslint-disable-next-line react/prop-types
const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const initialState = {
    user: [],
    loadingUser: true,
    error: null,
    fav: getFavStorage ? getFavStorage : [],
    darkMode: getThemeStorage ? getThemeStorage : false,
  };

  const [dentistState, dispatch] = useReducer(dentistReducer, initialState);
  const [favState, dispatchFav] = useReducer(favReducer, initialState);
  const [themeState, dispatchTheme] = useReducer(themeReducer, initialState);

  useEffect(() => {
    const getDentist = async () => {
      try {
        const res = await axios(urlUser);
        dispatch({
          type: types.GET_DENTIST, payload: res.data
        });
      } catch (err) {
        dispatch({
          type: types.ERROR_DENTIST, payload: err.message
        });
      }
    };

    getDentist();
  }, [])

  useEffect(() => {
    localStorage.setItem("fav", JSON.stringify(favState.fav));
  }, [favState.fav])

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(themeState.darkMode));
    document.body.classList.toggle("dark", themeState.darkMode);
  }, [themeState.darkMode])
  

  return (
    <ContextGlobal.Provider value={{
      dentistState, dispatch,
      favState, dispatchFav,
      themeState, dispatchTheme,
    }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;

// eslint-disable-next-line react-refresh/only-export-components
export const useContextGlobal = () => useContext(ContextGlobal);