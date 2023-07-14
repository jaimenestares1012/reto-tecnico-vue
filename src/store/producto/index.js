
import { apiPromociones, apiPromocion, apiComment,apiComentario } from '@/api/service';
export const state = () => ({
  isLoading: false,
  promociones: [],
  promocion: '',
  comentarios: [],
});

export const mutations = {
  SET_PROMOCIONES(state, data){
    state.promociones = data
  },
  SET_PROMOCION(state, data){
    state.promocion = data
  },
  SET_COMENTARIOS(state, data){
    state.comentarios = data
  }
};

export const actions = {
    async getPromociones({ commit }, payload) {
      const responseApiPromociones = await apiPromociones(payload);
      commit('SET_PROMOCIONES', responseApiPromociones.items);
    },
    async getPromocion({ commit }, id) {
      const responseApiPromocion = await apiPromocion(id);
      commit('SET_PROMOCION', responseApiPromocion);
      const responseApicoment = await apiComment(id);
      commit('SET_COMENTARIOS', responseApicoment);
    },
    async postComentario({ commit }, id){
      const responseApiComentario = await apiComentario(id);
      // console.log("responseApiComentario", responseApiComentario);
      return responseApiComentario
    }
};



export const getters = {
    promociones: (state) => state.promociones,
    promocion: (state) => state.promocion,
    comentarios: (state) =>state.comentarios,
};
