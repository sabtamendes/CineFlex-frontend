import styled from "styled-components";
import { useEffect, useState } from "react";
import Movie from "./Movie";
import { getMovies } from "../services/getMovies";

export default function Movies() {
    const [images, setImages] = useState(undefined);

    useEffect(() => {
        async function moviesRender() {
            try {
                const movies = await getMovies();
                setImages(movies);

            } catch (error) {
                console.log(error)
            }
        }
        moviesRender();
    }, []);

    if (images === undefined) {
        return <Loading>Carregando..</Loading>
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

margin-top:24%;
font-family: 'Roboto', sans-serif;
font-size: 26px;
color: #22333b;
`
const ListMovies = styled.div`
display:flex;
justify-content:space-evenly;
flex-wrap:wrap;
cursor: pointer;

margin-top:10%;
`
const Loading = styled.h1`
margin-top:30%;
font-size:20px;
`
