import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Movie({ item }) {
    return (
        <ListMovies>
            <Link to="/section">
                <img src={item.posterURL} alt={item.title} />
            </Link>
        </ListMovies>
    )
}
const ListMovies = styled.div`
display:flex;
justify-content:center;
flex-wrap:wrap;
margin-top:10%;
width:100%;

/* margin-left: 15%;
margin-right:15%; */
padding: 1%;
display:flex;
flex-wrap: wrap;

img{
    width:129px;
    height:193px;
}
`