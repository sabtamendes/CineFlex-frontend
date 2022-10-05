import styled from "styled-components";
export default function Footer({dataSection, name, weekday}){
    return(
        <Wrapper>
        <Poster>
          <img src={dataSection.posterURL} />
        </Poster>
  
        <Info>
          <span>{dataSection.title}</span>
          {name ? (
            <span>
              {weekday} - {name}
            </span>
          ) : (
            ''
          )}
        </Info>
      </Wrapper>
    )
}
const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 117px;
  border-top: 1px solid #9eadba;
  background-color: #dfe6ed;
  padding: 14px 10px;
  display: flex;
`;

const Poster = styled.div`
  padding: 8px;
  border-radius: 2px;
  background-color: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

  & img {
    width: 48px;
    height: 72px;
    object-fit: cover;
  }
`;

const Info = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 16px;
  font-size: 26px;
  line-height: 120%;
`;
