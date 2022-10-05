import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getSeats } from "../services/getSeats";
import Seat from "./Seat";
import Footer from "./Footer";
export default function Seats() {
    const [seat, setSeat] = useState(undefined);
    const { id } = useParams();

    useEffect(() => {
        async function seats() {
            try {
                const chair = await getSeats(id);
                setSeat(chair)
            } catch (error) {
                console.log(error)
            }
        }

        seats();
    }, [])

    if (seat === undefined) {
        return <Loading>Carregando..</Loading>
    }
    return (
        <>
            <Title>Selecione o(s) assento(s)</Title>

            <SeatsChooser>
                {seat.map(item =>
                    <Seat
                        key={item.id}
                        item={item}
                    />
                )}
            </SeatsChooser>
            <Footer name={seat.name} isAvaliable={seat.isAvailable} />
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