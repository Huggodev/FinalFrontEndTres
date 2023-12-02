/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { useContextGlobal } from './utils/global.context';
import { types } from './types/types';
import doctor from '../../public/images/doctor.jpg'
import { StarOutlined, StarFilled } from '@ant-design/icons';


// eslint-disable-next-line react/prop-types
const Card = ({ user }) => {
  const { favState, dispatchFav, themeState } = useContextGlobal();

  const isFav = favState.fav.find((fav) => fav.id === user.id);

  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
    isFav
      ? dispatchFav({ type: types.REMOVE_FAVORITE, payload: user })
      : dispatchFav({ type: types.SET_FAVORITE, payload: user });
  };

  return (
    <div className={`card ${themeState.darkMode ? 'dark' : 'light'}`}>
      {/* En cada card deberan mostrar en name - username y el id - ok  */}
      <img src={doctor} alt='doctor' />
      <Link to={`/dentist/${user.id}`}>{user.name}</Link>
      <span>{user.username}</span>
      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle  Falta*/}

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage  Falta */}
      <button onClick={addFav} className="favButton">
        {isFav
          ? <StarFilled style={{ fontSize: '25px' }} />
          : <StarOutlined style={{ color: 'black', fontSize: '25px' }} />
        }
      </button>
    </div>
  );
};

export default Card;
