import styled from "styled-components";
export default function NavBar() {
    return (
        <Header>
            <h1>CINEFLEX</h1>
        </Header>
    )
}
const Header = styled.div`
width:100%;
height:110px;
position: fixed;
top:0;
right:0;
background: #22333b;
h1{
    text-align: center;
    padding: 5px;
    font-family: 'Roboto', sans-serif;
    font-size: 40px;
    color: #adb6c4;
}
`