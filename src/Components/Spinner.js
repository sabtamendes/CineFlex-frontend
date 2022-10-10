import styled from "styled-components";
import loader from "../assets/loader.gif";

export default function Spinner() {
    return (
        <Screen>
            <img src={loader} alt="loader-gif" />
        </Screen>
    )
}
const Screen = styled.div`
    /* visibility: ${props => props.isLoading ? "visible" : "hidden"}; */
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 30%;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;
    bottom:0;
    background: #1B2538;
    img{
        margin-bottom: 45%;
        margin-right: 55%;
    }
`