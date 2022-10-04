import styled from "styled-components";
export default function Movies() {
    // function allCine() {
    //     const pegar = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies")
    //     pegar.then(renderizarFilmes)
    // }
    // allCine();
    return (
        <>
            <Title>Selecione o filme</Title>
            <ListMovies>
                <li>oiiiiiii</li>
                <li>oiiiii</li>
                <li>oiiiiiii</li>
                <li>oiiiiii</li>
                <li>oiiii</li>
                <li>oiiiii</li>
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
const ListMovies = styled.ul`
margin-top:10%;
/* margin-left: 15%;
margin-right:15%; */
padding: 15%;
display:flex;
flex-wrap: wrap;
li{
    width:129px;
    height:193px;
}
`