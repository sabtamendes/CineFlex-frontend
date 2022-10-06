import styled from "styled-components";
export default function Footer({ posterURL, title, name, day, moviePoster, movieTitle }) {
 
  return (
    <Container>
      <Movie>
        {posterURL ?
          <img src={posterURL} /> : <img src={moviePoster} />}
      </Movie>

      <Info>

        {title ? <span>{title}</span> : <span>{movieTitle}</span>}

        {name ?
          <span>
            {day} - {name}
          </span>
          : ''
        }
      </Info>
    </Container>
  )
}
const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 117px;
  border-top: 1px solid #9eadba;
  background-color: #dfe6ed;
  padding: 14px 10px;
  display: flex;
`
const Movie = styled.div`
  padding: 8px;
  border-radius: 2px;
  background-color: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

  & img {
    width: 60px;
    height: 100px;
    object-fit: cover;
  }
`
const Info = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 16px;
  font-size: 26px;
  line-height: 120%;
  font-family: 'Roboto', sans-serif;
`
