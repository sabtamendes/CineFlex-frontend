import styled from "styled-components"

export default function Section() {
    return (
        <>
            <Title>Selecione o horário</Title>
            <DaySection>
                <DayTitle>Quinta-feira - 24/06/2021</DayTitle>
                <DayButton>15:00</DayButton>
                <DayButton>19:00</DayButton>
            </DaySection>
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
const DaySection = styled.div`
  padding: 0 23px;
  margin-top:15%;
  margin-bottom: 117px;
`
const DayTitle = styled.p`
font-family: 'Roboto', sans-serif;
color: #293845;
font-size: 20px;
margin: 0 0 22px;
`
const DayButton = styled.button`
 background-color: #E8833A;
  border-radius: 3px;
  width: 83px;
  height: 43px;
  display: inline;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #fff;
  margin-right: 8px;
  cursor: pointer;
`