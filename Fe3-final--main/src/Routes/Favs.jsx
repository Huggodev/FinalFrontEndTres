

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
import { useContextGlobal } from "../components/utils/global.context";
import Card from "../components/Card";
import { types } from "../components/types/types";

const Favs = () => {
  const { favState, dispatchFav } = useContextGlobal();

  const handleDeleteFav = () => {
    localStorage.removeItem("fav");
    dispatchFav({ type: types.REMOVE_ALL_FAVORITES, payload: [] });
  };

  return (
    <div className="main">
      <h1>Dentists Favs</h1>
      <button className='clearFavButton' onClick={handleDeleteFav}>Quitar mis favoritos</button>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {favState.fav.map((fav) => <Card user={fav} key={fav.id} />)}
      </div>
    </div>
  );
};

export default Favs;
