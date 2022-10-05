import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";

import Movie from "./Movie";

export default function Movies() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");

        promise.then((response) => {
            setImages([...response.data]);
        });
        promise.catch((error) =>
            console.log(error.response.data));
    }, []);

    return (
        <>
            <Title>Selecione o filme</Title>

            {images.map(item =>
                <Movie
                    key={item.id}
                    item={item}
                />)
            }

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
