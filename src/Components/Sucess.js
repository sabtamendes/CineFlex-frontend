import { useLocation, Link } from 'react-router-dom';
import styled from 'styled-components';
export default function Sucess() {
    const location = useLocation();
    return (
        <>
            <Title>Pedido feito <br></br> com sucesso!</Title>
            <Container>
                <Subtitle>Filme e sessão</Subtitle>
                <p>Enola Holmes</p>
                <p>24/06/2021 15:00</p>
                <Subtitle>Ingressos</Subtitle>
                <p>Assento 15</p>
                <p>Assento 16</p>
                <Subtitle>Comprador(a)</Subtitle>
                <p>Nome: João da Silva Sauro</p>
                <p>CPF: 123.456.789-10</p>
            </Container>
            <Link to="/"><StyledButton>Voltar para Home</StyledButton></Link>
        </>
        //     <>
        //   <span>
        //     Nome: {location.state.form} - CPF:{location.state.form}
        //   </span>
        //   {location.state.seatsId.map((value) => (
        //     <span>Assento: {value}</span>
        //   ))}
        // </>
    )
}
const Title = styled.h1`
text-align: center;
margin-top:25%;
font-family: Roboto, sans-serif;
color: #317A6D;
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
width:38%;
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