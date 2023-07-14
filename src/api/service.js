import axios from "axios";
const base = "https://61c35faa9cfb8f0017a3eb2e.mockapi.io/api/v1/posts"
async function apiPromociones(data) {
    try {
      const response = await axios({
        url: `${base}/?page=1&limit=10`,
        method: "GET",
      });
      console.log("<------------------------>", response);
      return response.data

    } catch (error) {
      return {
        codRes: "99",
        message: "Error",
      };
    }
  }
  
  async function apiPromocion(data) {
    try {
      const response = await axios({
        url: `${base}/${data}/`,
        method: "GET",
      });
      console.log("<------------------------>", response);
      return response.data

    } catch (error) {
      return {
        codRes: "99",
        message: "Error",
      };
    }
  }
  async function apiComment(data) {
    try {
      const response = await axios({
        url: `${base}/${data}/comments`,
        method: "GET",
      });
      console.log("<------------------------>", response);
      return response.data

    } catch (error) {
      return {
        codRes: "99",
        message: "Error",
      };
    }
  }
  async function apiComentario(data) {
    const body = {
      "comentario":data
    }
    console.log("body", body);
    try {
      const response = await axios({
        url: `${base}/${data}/comments`,
        method: "POST",
      });
      return response.data
    } catch (error) {
      return {
        codRes: "99",
        message: "Error",
      };
    }
     }
  export { apiPromociones, apiPromocion, apiComment, apiComentario}