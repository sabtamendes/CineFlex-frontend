import axios from "axios";
import styled from "styled-components";

import { getSeats } from "../services/getSeats";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Footer from "./Footer";
import Seat from "./Seat";
import Spinner from "./Spinner";

export default function Seats() {
    const navigate = useNavigate();
    const { seatsId } = useParams();
    const [showtimes, setShowTimes] = useState(undefined);
    const [ids, setIds] = useState([]);
    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");
    const [chairNumber, setChairNumber] = useState([]);
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

    function sendRequest() {
        if (name === "" || cpf === "" || ids.length <= 0) {
            alert("Preencha corretamente!");
        } else {
            const URL = "https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many"

            // const body = { name: name, cpf: cpf, ids: [...ids] }

            const promise = axios.post(URL, { name: name, cpf: cpf, ids: [...ids] })

            promise.then((response) => {
                console.log(response)

                navigate("/sucess", {
                    state: {
                        showtimes: showtimes,
                        name: name,
                        cpf: cpf,
                        chairNumber: [...chairNumber]
                    },
                });
            })
            promise.catch((error) => {
                console.log(error.response.data)
            })
        }
    }

    if (showtimes === undefined) {
        return <Spinner />
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
                        id={item.id}
                        ids={ids}
                        setIds={setIds}
                        chairNumber={chairNumber}
                        setChairNumber={setChairNumber}
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

            <Label >Nome do comprador(a):</Label>
            <InputStyle
                name="name"
                type="text"
                onChange={(e) => setName(e.target.value)}
                placeholder="Digite seu nome..."
            >
            </InputStyle>

            <br></br>

            <Label>CPF do comprador(a):</Label>
            <InputStyle
                name="cpf"
                type="number"
                onChange={(e) => setCpf(e.target.value)}
                placeholder="Digite seu CPF..."
            >
            </InputStyle>

            <br></br>

            <ButtonStyle onClick={sendRequest}>Reservar assento(s):</ButtonStyle>

            <Footer title={showtimes.movie.title} posterURL={showtimes.movie.posterURL} name={showtimes.name} day={showtimes.day.weekday} />
        </>
    )
}
const Title = styled.h1`
display:flex;
justify-content:center;
margin-top:24%;
margin-bottom:5%;
font-family: 'Roboto', sans-serif;
font-size: 26px;
color: #22333b;
`
const SeatsChooser = styled.div`
  padding: 0 58px;
  display: flex;
  flex-wrap: wrap;
  width: 85%;
`
const Label = styled.p`
font-size:25px;
font-weight: 430;
font-family: 'Roboto', sans-serif;
margin-left:12%;
margin-bottom:-2%;
color:#22333b;
`
const InputStyle = styled.input`
width:50%;
margin-top:3.5%;
padding:2.5%;
background: white;
font-size:25px;
margin-left:12%;
border: 1px solid #22333b;
border-radius: 10px;
&::placeholder{
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color:#22333b;
}
`
const ButtonStyle = styled.button`
margin-top:35px;
margin-left: 33%;
padding:15px;
font-family: 'Roboto', sans-serif;
border-radius:6px;
border:none;
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
    background-color: #84a59d;
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
margin-left:90px;
color: #22333b;
font-size:20px;
font-family: 'Roboto', sans-serif;
`
const SpanAvailable = styled.span`
margin-left:20px;
font-size:20px;
color: #22333b;
font-family: 'Roboto', sans-serif;
`
const SpanUnavailable = styled.span`
margin-left:27px;
font-size:20px;
color: #22333b;
font-family: 'Roboto', sans-serif;
`