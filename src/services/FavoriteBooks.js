import axios from "axios"

const favoriteBooksApi = axios.create({baseURL: "http://localhost:8000/favorite"}) // Cria uma instância do axios com a baseURL apontando para o endpoint /favorite

const getFavoriteBooks = async () =>{
    const response = await favoriteBooksApi.get("/") // Faz uma requisição GET para o endpoint /favorite
    return response.data
}

export {getFavoriteBooks  }