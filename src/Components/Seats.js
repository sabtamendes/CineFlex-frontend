import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { getSeats } from "../services/getSeats";
import Seat from "./Seat";
import Footer from "./Footer";
import axios from "axios";
export default function Seats() {
    const [showtimes, setShowTimes] = useState(undefined);
    const [dataInput, setDataInput] = useState("")
    const { seatsId } = useParams();

    useEffect(() => {
        async function chairs() {
            try {
                const chair = await getSeats(seatsId);
                setShowTimes(chair)
            } catch (error) {
                console.log(error)
            }
        }

        chairs();
    }, []);

    useEffect(() => {
        const URL = "https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many"
        const promise = axios.get(URL)

        promise.then((res) => {
            console.log(res.data)
            setDataInput(res.data)
        })

        promise.catch((err) => {
            console.log(err.response.data)
        })
    }, []);

    function sendRequest() {


    }

    if (showtimes === undefined) {
        return <Loading>Carregando......:D</Loading>;
    }

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

            <Selections>
                <ButtonSelected></ButtonSelected>
                <ButtonAvailable></ButtonAvailable>
                <ButtonUnavailable></ButtonUnavailable>
            </Selections>

            <SpanSelected>Selecionado</SpanSelected>
            <SpanAvailable>Disponível</SpanAvailable>
            <SpanUnavailable>Indisponível</SpanUnavailable>

            <Paragraph>Nome do comprador(a):</Paragraph>
            <InputStyle placeholder="Digite seu nome..." ></InputStyle>
            <br></br>

            <Paragraph>CPF do comprador(a):</Paragraph>
            <InputStyle placeholder="Digite seu CPF..." value={dataInput} onChange={(e) => setDataInput(e.target.value)}></InputStyle>
            <br></br>

            <Link to={`/forms/${seatsId}`} style={{ textDecoration: 'none' }}>
                <ButtonStyle onClick={sendRequest}>Reservar assento(s):</ButtonStyle>
            </Link>

            <Footer title={showtimes.movie.title} posterURL={showtimes.movie.posterURL} name={showtimes.name} day={showtimes.day.weekday} />
        </>
    )
}
const Title = styled.h1`
display:flex;
justify-content:center;

margin-top:28%;
margin-bottom:5%;
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
margin-top:50px;
margin-left: 160px;
padding:10px;
font-family: 'Roboto', sans-serif;
font-size:19px;
color: #adb6c4;
background-color: #22333b;
`
const Selections = styled.div`
display:flex;
justify-content:center;
`
const ButtonSelected = styled.button`
    width: 52px;
    height: 52px;
    margin:-1% 10% 2% 2%;
    border-radius:50%;
    border:none;
    background-color: #1AAE9E;
`
const ButtonAvailable = styled.button`
  width: 52px;
    height: 52px;
    margin:-1% 10% 2% 2%;
    border-radius:50%;
    border:none;
    background-color: #C3CFD9;
`
const ButtonUnavailable = styled.button`
   width: 52px;
    height: 52px;
    margin:-1% 10% 2% 2%;
    border-radius:50%;
    border:none;
    background-color: #F7C52B;
`
const SpanSelected = styled.span`
margin-right: 10px;
margin-left:70px;
font-size:20px;
font-family: 'Roboto', sans-serif;
`
const SpanAvailable = styled.span`
margin-left:15px;
font-size:20px;
font-family: 'Roboto', sans-serif;
`
const SpanUnavailable = styled.span`
margin-left:21px;
font-size:20px;
font-family: 'Roboto', sans-serif;
`