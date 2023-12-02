//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
import { Link } from "react-router-dom"
// import { DarkMode, WbSunny } from "@mui/icons-material"
import { types } from "./types/types";
import { useContextGlobal } from "./utils/global.context";

const Navbar = () => {
  const { dispatchTheme, themeState } = useContextGlobal();

  const handleThemeChange = () => {
    localStorage.removeItem("darkMode");
    dispatchTheme({ type: types.TOGGLE_THEME });
  };

  return (
    <nav className={`${themeState.darkMode ? 'dark' : 'light'}`}>
      <span>DH Odonto</span>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <section>
        <Link to={'/'}>Home</Link>
        <Link to={'/contact'}>Contact</Link>
        <Link to={'/favs'}>Favs</Link>
        {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
        <button onClick={handleThemeChange} className={themeState.darkMode ? 'dark' : 'light'}>
          {themeState.darkMode
            ? '🌞'
            : '🌙'
          }
        </button>
      </section>
    </nav>
  )
}

export default Navbar