import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getSeats } from "../services/getSeats";
import Seat from "./Seat";
import Footer from "./Footer";
export default function Seats() {
    const [showtimes, setShowTimes] = useState(undefined);
    const { id } = useParams();

    useEffect(() => {
        async function chairs() {
            try {
                const chair = await getSeats(id);
                setShowTimes(chair)
            } catch (error) {
                console.log(error)
            }
        }

        chairs();
    }, [])

    if (showtimes === undefined) {
        return <Loading>Carregando......:D</Loading>
    }
    console.log(showtimes.movie.title)
    return (
        <>
            <Title>Selecione o(s) assento(s)</Title>

            <SeatsChooser>
                {showtimes.seats.map(item =>
                    <Seat
                        key={item.id}
                        name={item.name}
                        isAvaliable={item.isAvailable}
                    />
                )}
            </SeatsChooser>

            <Paragraph>Nome do comprador(a):</Paragraph>
            <InputStyle  placeholder="Digite seu nome..."></InputStyle>
            <br></br>

            <Paragraph>CPF do comprador(a):</Paragraph>
            <InputStyle  placeholder="Digite seu CPF..."></InputStyle>
            <br></br>
            <ButtonStyle>Reservar assento(s):</ButtonStyle>

            <Footer movieTitle={showtimes.movie.title} moviePoster={showtimes.movie.posterURL} name={showtimes.name} day={showtimes.day.weekday} />
        </>
    )
}
const Title = styled.h1`
display:flex;
justify-content:center;

margin-top:28%;
margin-bottom:10%;
font-family: 'Roboto', sans-serif;
font-size: 20px;
color: #22333b;
`
const SeatsChooser = styled.div`
  padding: 0 58px;
  display: flex;
  flex-wrap: wrap;
  width: 85%;
`
const Loading = styled.h1`
margin-top:30%;
font-size:20px;
`
const Paragraph = styled.p`
font-size:25px;
font-family: 'Roboto', sans-serif;
margin-left:12%;
margin-bottom:-2%;
color: #0d3b66;
`
const InputStyle = styled.input`
width:50%;
margin-top:3.5%;
padding:2%;
background: white;
font-family: 'Roboto', sans-serif;
font-size: 20px;
margin-left:12%;
border-radius: 8px;
&::placeholder{
    color: #000000;
}

`
const ButtonStyle = styled.button`
margin-top:80px;
margin-left: 170px;
padding:10px;
font-family: 'Roboto', sans-serif;
font-size:19px;
color: #adb6c4;
background-color: #22333b;
`