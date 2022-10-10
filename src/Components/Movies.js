import styled from "styled-components";
import { useEffect, useState } from "react";
import Movie from "./Movie";
import Spinner from "./Spinner";
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
        return <Spinner />
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
margin-top:8%;
`