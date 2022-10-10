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
  width: 35px;
  height: 35px;
  border:none;
  background: ${props => props.isAvaliable ? '#84a59d' : '#F7C52B'};
  background-color: ${props => props.colorSelected ? '#1AAE9E' : ''};
  border-radius: 50%;
  font-size: 13px;
  color: #000000;
  margin-bottom: 10px;
  margin-right: 8px;
  cursor: pointer;
`