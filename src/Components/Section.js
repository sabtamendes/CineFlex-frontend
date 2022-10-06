import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
export default function Section({ weekday, date, showtimes }) {
const {id} = useParams()
    return (
        <>
            <DayTitle>{weekday} - {date}</DayTitle>

            {showtimes.map((item, index) => <Link to={`/seats/${id}`} style={{textDecoration : 'none'}} key={index}><DayButton >{item.name}</DayButton></Link>)}


        </>

    )
}
const DayTitle = styled.p`
font-family: 'Roboto', sans-serif;
color: #293845;
font-size: 20px;
`
const DayButton = styled.button`
 background-color: #E8833A;
  border-radius: 3px;
  border:none;
  width: 83px;
  height: 43px;
  display: inline;
  flex-direction: row;
  justify-content: center;
  text-decoration:inherit;
  align-items: center;
  color: #fff;
  margin-right: 8px;
  margin-bottom: 2%;
  cursor: pointer;
`