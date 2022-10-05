import styled from "styled-components";
export default function Seats() {
  
    return (
        <>
            <Title>Selecione o(s) assento(s)</Title>
            <SeatsChooser>
            <EachSeat>1</EachSeat>
            <EachSeat>2</EachSeat>
            <EachSeat>3</EachSeat>
            <EachSeat>4</EachSeat>
            <EachSeat>5</EachSeat>
            <EachSeat>1</EachSeat>
            <EachSeat>2</EachSeat>
            <EachSeat>3</EachSeat>
            <EachSeat>4</EachSeat>
            <EachSeat>5</EachSeat>

            </SeatsChooser>
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
const EachSeat = styled.button`
  width: 52px;
  height: 52px;
  border: 1px solid #808F9D;
  background-color: #C3CFD9;
  border-radius: 50%;
  font-size: 25px;
  color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 18px;
  margin-right: 8px;
  cursor: pointer;
`