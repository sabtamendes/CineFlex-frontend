import styled from "styled-components";
import { useEffect, useState } from "react";
// import axios from "axios";
import Movie from "./Movie";
import { getMovies } from "../services/getMovies";

export default function Movies() {
    const [images, setImages] = useState(undefined);
 
    useEffect(() => {
        // const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");

        // promise.then((response) => {
        //     setImages([...response.data]);
        // });
        // promise.catch((error) =>
        //     console.log(error.response.data));
        async function moviesRender() {
            try {
                const movies = await getMovies();
              
                setImages(movies)
            } catch (error) {
                console.log(error)
            }
        }

        moviesRender()
    }, []);

    if (images === undefined) {
        return <div>Carregando..</div>
    }
    return (
        <>
            <Title>Selecione o filme</Title>
            <ListMovies>

                {images.map(item =>
                    <Movie
                        key={item.id}
                        item={item}
                    />
                )}

            </ListMovies>
        </>
    )
}
const Title = styled.h1`
display:flex;
justify-content:center;

margin-top:28%;
font-family: 'Roboto', sans-serif;
font-size: 20px;
color: #22333b;
`
const ListMovies = styled.div`
display:flex;
justify-content:space-evenly;
flex-wrap:wrap;
cursor: pointer;

margin-top:10%;
`
