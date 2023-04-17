import { axiosConfig } from "../configuration/axiosConfig";

// obtener los tipos de equipos
const getTipoEquipos = () => {
    return axiosConfig.get('estados', {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}


// crear tipo equipo
const createTipoEquipo = (data = {}) => {
    return axiosConfig.post('estados', data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

const editarTipoEquipo = (tipoId, data) => {
  return axiosConfig.put(`estados/${tipoId}`, data, {
   headers: {
      'Content-type': 'application/json'
   }
  });
}

// opcional
const borrarTipoEquipo = (tipoId) => {
  return axiosConfig.delete(`tipoequipos/${tipoId}`, {}, {
   headers: {
      'Content-type': 'application/json'
   }
  });
}


export {
    getTipoEquipos,
    createTipoEquipo,
    editarTipoEquipo,
    borrarTipoEquipo
}