import { useState } from "react";
import styled from "styled-components";

export default function Seat({ name, isAvaliable, forms, handleForms }) {
    const [colorSelected, setColorSelected] = useState(false);

    function isSelected(name) {
        if (name) {
            setColorSelected(!colorSelected);
        } else {
            console.log("numeração do assento indisponivel", name)
        } if (!isAvaliable) {
            alert("Não está disponível")
            console.log(isAvaliable, name)
        } else {
            console.log("está disponível", name)
        }
    }
    return (
        <>
            <EachSeat name="ids" value={forms.ids} onChange={handleForms} onClick={() => isSelected(name)} isAvaliable={isAvaliable} colorSelected={colorSelected} >{name}</EachSeat>
        </>
    )
}

const EachSeat = styled.button`
  width: 52px;
  height: 52px;
  border: 1px solid #808F9D;
  background: ${props => props.isAvaliable ? '#C3CFD9' : '#F7C52B'};
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