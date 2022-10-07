import styled from "styled-components";
import Footer from "./Footer";
import Section from "./Section";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSections } from "../services/getSections";

export default function Sections() {
    const [showtimes, setShowTimes] = useState(undefined);
    const { sectionId } = useParams();

    useEffect(() => {
        async function sections() {
            try {
                const movies = await getSections(sectionId);
                setShowTimes(movies)
            } catch (error) {
                console.log(error)
            }
        }

        sections()
    }, [])
    if (showtimes === undefined) {
        return <Loading>Carregando...</Loading>
    }

    return (
        <>
            <Title>Selecione o horário</Title>
            <DaySection >
                {showtimes.days.map((item, index) =>
                    <Section
                        key={index}
                        weekday={item.weekday}
                        date={item.date}
                        showtimes={item.showtimes}
                    />
                )}
            </DaySection>

            <Footer posterURL={showtimes.posterURL} title={showtimes.title} />
        </>
    )
}
const Title = styled.h1`
display:flex;
justify-content:center;
margin-top:28%;
font-family: 'Roboto', sans-serif;
font-size: 26px;
color: #22333b;
`
const DaySection = styled.div`
  padding: 0 83px;
  margin-top:10%;
  margin-bottom: 30%;
`
const Loading = styled.h1`
margin-top:30%;
font-size:20px;

`