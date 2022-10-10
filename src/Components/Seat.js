import { useState } from "react";
import styled from "styled-components";

export default function Seat({ name, isAvaliable, ids, setIds, id, chairNumber, setChairNumber }) {
    const [colorSelected, setColorSelected] = useState(false);

    function isSelected(name) {
        if (name) {
            setColorSelected(!colorSelected);
            setIds([...ids, id]);
            setChairNumber([...chairNumber, name]);
        } if (!isAvaliable) {
            alert("Não está disponível");
        }
    }
    return (
        <>
            <EachSeat
                onClick={() => isSelected(name)}
                isAvaliable={isAvaliable}
                colorSelected={colorSelected} >
                {name}
            </EachSeat>
        </>
    )
}

const EachSeat = styled.button`
  width: 52px;
  height: 52px;
  border:none;
  background: ${props => props.isAvaliable ? '#84a59d' : '#F7C52B'};
  background-color: ${props => props.colorSelected ? '#1AAE9E' : ''};
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