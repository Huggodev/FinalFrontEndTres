import { useEffect, useReducer } from "react";
import { types } from "../components/types/types";
import dentistReducer from "../reducer/dentistReducer";
import { useParams } from "react-router-dom";
import axios from "axios";
import { urlDentist } from "../helpers/url";

const Detail = () => {
  const initialState = {
    user: {}
  };

  const [state, dispatch] = useReducer(dentistReducer, initialState);

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const { id } = useParams();
  const url = urlDentist(id);

  useEffect(() => {
    const getDentistById = async () => {
      try {
        const res = await axios(url);
        dispatch({
          type: types.GET_DENTIST_ID, payload: res.data
        });
      } catch (err) {
        console.log(err);
      }
    };

    getDentistById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="main">
      <h1>Detail Dentist {state.user.website} </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Teléfono</th>
            <th>Web</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{state.user.name}</td>
            <td>{state.user.email}</td>
            <td>{state.user.phone}</td>
            <td>{state.user.website}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Detail