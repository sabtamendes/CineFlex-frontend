import styled from "styled-components";
import { Link } from "react-router-dom";
export default function Section({ weekday, date, showtimes }) {

    return (
        <>
            <DayTitle>{weekday} - {date}</DayTitle>

            {showtimes.map((item, index) => <Link to={`/seats/${item.id}`} style={{ textDecoration: 'none' }} key={index}><DayButton >{item.name}</DayButton></Link>)}

        </>
    )
}
const DayTitle = styled.p`
font-family: 'Roboto', sans-serif;
color: #22333b;
font-weight: 500;
font-size: 16px;
margin-bottom:2%;
`
const DayButton = styled.button`
  background-color: #22333b;
  border-radius: 3px;
  border:none;
  width: 60px;
  height: 35px;
  display: inline;
  font-size:14px;
  font-weight:bold;
  flex-direction: row;
  justify-content: center;
  text-decoration:inherit;
  align-items: center;
  color: #adb6c4;
  margin-right: 8px;
  margin-bottom: 8%;
  cursor: pointer;
`