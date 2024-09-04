// import styled from "styled-components"
import { getFavoriteBooks } from "../services/FavoriteBooks"

/* Somente teste para ver se API e dados favoritos funcionando, 
#Criar Logica e estilos melhores
#Realizar a componetizaçao 
#Refatorar o codigo
*/

import { useState, useEffect } from "react" // importa o useState e o useEffect 


function Favorites (){
    
    const fetchFavorites  = async() => { 
        const favoriteBooksApi = await getFavoriteBooks();
        console.log(favoriteBooksApi)
        setFavorites(favoriteBooksApi)
    }
    const [favorites, setFavorites] = useState([]) // cria um estado para os favoritos
    console.log(favorites)
    useEffect(() => {
        fetchFavorites()
    }, [])

    return(
        <div>
            <h1>Favoritos</h1>
            <div>
                {favorites.map((favorite) => 
                    <div key={favorite.id}>
                        <h2>{favorite.title}</h2>
                        <p>{favorite.genre}</p>
                        <p>{favorite.description}</p>
                    </div>
                )}
            </div>
        </div>
  
    )}

    export default Favorites;