import styled from 'styled-components';
import { useLocation, Link } from 'react-router-dom';

export default function Sucess() {
    const location = useLocation();

    return (
        <>
            <Title>Pedido feito <br></br> com sucesso!</Title>

            <Container>

                <Subtitle>Filme e sessão</Subtitle>
                <p>{location.state.showtimes.movie.title}</p>
                <p>{location.state.showtimes.day.date} - {location.state.showtimes.name}</p>

                <Subtitle>Ingressos</Subtitle>
                {location.state.chairNumber.map((value) => (
                    <p key={value}>Assento: {value}</p>
                ))}

                <Subtitle>Comprador(a)</Subtitle>
                <p>Nome: {location.state.name}</p>
                <p>CPF: {location.state.cpf}</p>

            </Container>

            <Link to="/">
                <StyledButton>Voltar para Home</StyledButton>
            </Link>
        </>
    )
}
const Title = styled.h1`
text-align: center;
margin-top:25%;
font-family: Roboto, sans-serif;
color: #1AAE9E;
`
const Container = styled.div`
padding-left: 15%;
p{
    font-family: Roboto, sans-serif;  
    font-size:25px;
    letter-spacing:4%;
    margin-top:-4%;
    color: #293845;

}
`
const Subtitle = styled.h5`
font-size: 26px;
font-family: Roboto, sans-serif;
margin-bottom:30px;
color: #293845;
`
const StyledButton = styled.button`
width:50%;
height:50px;
margin:18% 31%;
font-size: 25px;
font-weight: bold;
font-family:Roboto,sans-serif;
cursor: pointer;
color:#22333b;
background: #adb6c4;
border-radius:5px;
border:none;
`