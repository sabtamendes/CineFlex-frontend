import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Seat({ name, isAvaliable }) {
  return (
    <>
      <Link to={`/forms/${isAvaliable}`} style={{ textDecoration: 'none' }}>
        <EachSeat>{name}</EachSeat>
      </Link>
    </>
  )
}

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