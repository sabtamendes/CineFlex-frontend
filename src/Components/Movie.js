import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Movie({ item }) {
    return (
        <>
            <Link to={`/sections/${item.id}`}>
                <ImageMovie src={item.posterURL} alt={item.title} />
            </Link>
        </>
    )
}

const ImageMovie = styled.img`
    width:129px;
    height:193px;
    margin-bottom:20%;
    padding: 8px;
    border-radius: 3px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    object-fit: cover;
`