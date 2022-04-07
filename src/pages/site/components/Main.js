import React from "react";
import styled from "styled-components";

function Main() {
  return (
    <div>
      <Section>
        <Title>
          Listening is
          <span className="heading">everything</span>
        </Title>
        <Heading>
          This is a spotify clone made by Dheeraj, to visit the original site
          click the button.
        </Heading>
        <a href="https://www.spotify.com/">
          <div className="btn">VISIT ORIGINAL SPOTIFY</div>
        </a>
      </Section>
    </div>
  );
}

const Section = styled.div`
  padding: 100px 190px;
  background-color: #2941ab;
  position: realtive;
  background-image: url("https://www-growth.scdn.co/static/home/bursts.svg");
  background-position: 55% 15%;
  background-repeat: no-repeat;
  color: #1ed760;
  display: grid;
  place-items: center;
  & > a {
    text-decoration: none;
    & .btn {
      padding: 14px 30px;
      display: grid;
      place-items: center;
      font-weight: bold;
      font-size: 0.8rem;
      border-radius: 50px;
      background: #1ed760;
      cursor: pointer;
      letter-spacing: 1px;
      color: #29419c;
      &:hover {
        transform: scale(1.05);
        background: #2de26d;
      }
    }
  }
`;

const Title = styled.p`
  font-size: 8rem;
  font-weight: 800;
  width: 60vw;
  padding: 50px 0 0;
  display: flex;
  flex-direction: column;
  & .heading {
    align-self: flex-end;
  }
`;
const Heading = styled.div`
  font-size: 1rem;
  font-weight: 600;
  margin: 2em 0 3rem;
`;

export default Main;
