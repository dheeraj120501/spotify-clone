import React, { useEffect } from "react";
import axios from "axios";
import qs from "qs";
import styled from "styled-components";
import { AiFillHome, AiOutlineSearch } from "react-icons/ai";
import { BiLibrary } from "react-icons/bi";
import { MdAddBox } from "react-icons/md";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import fav from "../../../assets/fav.jfif";
import { url } from "../../../utils";

function WebPlayerLogin() {
  useEffect(() => {
    var authOptions = {
      method: "post",
      url: "https://accounts.spotify.com/api/token",
      headers: {
        Authorization:
          "Basic " +
          Buffer.from(
            process.env.REACT_APP_CLIENT_ID +
              ":" +
              process.env.REACT_APP_CLIENT_SECRET
          ).toString("base64"),
      },
      data: qs.stringify({
        grant_type: "client_credentials",
      }),
    };

    axios(authOptions)
      .then(function (response) {
        console.log(response);
        if (response.status === 200) {
          var token = response.data.access_token;
          var options = {
            method: "get",
            url: "https://api.spotify.com/v1/tracks?ids=4iV5W9uYEdYUVa79Axb7Rh,1301WleyT98MSxVHPZCA6M;market=ES",
            headers: {
              Authorization: "Bearer " + token,
            },
          };
          axios(options).then(function (response) {
            console.log(response.data);
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  });
  return (
    <div>
      <Section>
        <SideBar>
          <div className="logo">
            <svg
              width="140"
              height="50"
              viewBox="0 0 65 20"
              xmlns="http://www.w3.org/2000/svg"
              // preserveAspectRatio="xMidYMin meet"
              fill="white"
            >
              <g fillRule="evenodd" className="svelte-1gcdbl9 logo">
                <path d="M61.842 9.506a1.02 1.02 0 0 1-1.023-1.024c0-.562.453-1.03 1.029-1.03a1.02 1.02 0 0 1 1.023 1.024 1.03 1.03 0 0 1-1.029 1.03m.006-1.952a.915.915 0 0 0-.922.928c0 .51.394.921.916.921a.916.916 0 0 0 .922-.927.908.908 0 0 0-.916-.922m.226 1.027l.29.406h-.244l-.26-.372h-.225v.372h-.204V7.912h.48c.249 0 .413.128.413.343 0 .176-.102.284-.25.326m-.172-.485h-.267v.34h.267c.133 0 .212-.065.212-.17 0-.11-.08-.17-.212-.17m-12.804-3.52a1.043 1.043 0 1 0-.001 2.086 1.043 1.043 0 0 0 0-2.087m.72 2.89h-1.454a.107.107 0 0 0-.106.107v6.346c0 .06.047.107.106.107h1.455a.107.107 0 0 0 .107-.107V7.572a.107.107 0 0 0-.107-.107m3.233.006v-.2c0-.592.227-.856.736-.856.303 0 .546.06.82.152a.106.106 0 0 0 .14-.102V5.24a.107.107 0 0 0-.076-.102 3.993 3.993 0 0 0-1.21-.174c-1.343 0-2.053.757-2.053 2.188v.308h-.699a.107.107 0 0 0-.107.106v1.257c0 .059.048.107.107.107h.699v4.99c0 .058.047.106.106.106h1.455a.107.107 0 0 0 .106-.107v-4.99h1.358l2.081 4.99c-.236.523-.468.628-.785.628-.257 0-.527-.077-.803-.228a.109.109 0 0 0-.084-.008.106.106 0 0 0-.063.058l-.493 1.081a.106.106 0 0 0 .045.138c.515.279.98.398 1.554.398 1.074 0 1.668-.5 2.191-1.847L60.6 7.617a.106.106 0 0 0-.099-.146h-1.514a.107.107 0 0 0-.1.072l-1.552 4.431-1.7-4.434a.106.106 0 0 0-.099-.069h-2.485m-5.577-.006h-1.6V5.828a.106.106 0 0 0-.107-.106h-1.455a.107.107 0 0 0-.106.106v1.637h-.7a.106.106 0 0 0-.106.107v1.25c0 .059.048.107.106.107h.7v3.234c0 1.308.65 1.97 1.934 1.97.522 0 .954-.107 1.362-.338a.106.106 0 0 0 .054-.093v-1.19a.106.106 0 0 0-.154-.096c-.28.141-.551.206-.854.206-.467 0-.675-.211-.675-.686V8.929h1.6a.106.106 0 0 0 .107-.107v-1.25a.106.106 0 0 0-.106-.107m-7.671-.133c-1.96 0-3.497 1.51-3.497 3.437 0 1.907 1.526 3.4 3.473 3.4 1.967 0 3.508-1.504 3.508-3.424 0-1.914-1.53-3.413-3.484-3.413m0 5.362c-1.043 0-1.83-.838-1.83-1.95 0-1.115.76-1.924 1.806-1.924 1.05 0 1.84.838 1.84 1.95 0 1.115-.763 1.924-1.816 1.924m-7.014-5.362c-.82 0-1.492.323-2.046.984v-.744a.107.107 0 0 0-.106-.107h-1.455a.107.107 0 0 0-.106.107v8.27c0 .058.048.106.106.106h1.455a.107.107 0 0 0 .106-.106v-2.61c.555.621 1.227.925 2.046.925 1.522 0 3.063-1.172 3.063-3.412s-1.54-3.413-3.063-3.413m1.372 3.413c0 1.14-.703 1.937-1.709 1.937-.995 0-1.745-.833-1.745-1.937s.75-1.937 1.745-1.937c.99 0 1.71.814 1.71 1.937m-8.437-1.81c-1.624-.388-1.913-.66-1.913-1.231 0-.54.508-.903 1.264-.903.732 0 1.459.275 2.22.843a.107.107 0 0 0 .15-.023l.794-1.119a.107.107 0 0 0-.02-.144c-.906-.728-1.927-1.081-3.12-1.081-1.755 0-2.98 1.052-2.98 2.559 0 1.615 1.057 2.187 2.884 2.628 1.554.358 1.817.658 1.817 1.195 0 .594-.53.963-1.385.963-.948 0-1.721-.32-2.587-1.068a.11.11 0 0 0-.078-.026.105.105 0 0 0-.073.038l-.89 1.058a.105.105 0 0 0 .011.148 5.303 5.303 0 0 0 3.581 1.373c1.89 0 3.112-1.033 3.112-2.631 0-1.351-.807-2.098-2.787-2.58M9.507.305a9.41 9.41 0 1 0 0 18.82 9.41 9.41 0 0 0 0-18.82m4.316 13.572a.586.586 0 0 1-.807.195c-2.21-1.35-4.99-1.655-8.266-.907a.586.586 0 1 1-.261-1.143c3.584-.82 6.659-.467 9.139 1.049.276.169.363.53.195.806m1.15-2.562a.734.734 0 0 1-1.008.242c-2.529-1.555-6.385-2.005-9.377-1.097a.735.735 0 0 1-.426-1.404c3.418-1.037 7.666-.534 10.57 1.25a.734.734 0 0 1 .242 1.01m.1-2.669C12.04 6.846 7.036 6.68 4.141 7.56a.88.88 0 1 1-.511-1.684c3.323-1.01 8.849-.814 12.34 1.258a.88.88 0 0 1-.898 1.514"></path>
              </g>
            </svg>
          </div>
          <div className="menu">
            <ActionItem className="active">
              <AiFillHome size={24} className="action-icon" /> Home
            </ActionItem>
            <ActionItem className="">
              <AiOutlineSearch size={24} className="action-icon" />
              Search
            </ActionItem>
            <ActionItem className="">
              <BiLibrary size={24} className="action-icon" />
              Library
            </ActionItem>
          </div>
          <ActionItem className="">
            <MdAddBox size={24} className="action-icon" />
            Create Playlist
          </ActionItem>
          <ActionItem className="">
            <img src={fav} className="action-icon" alt="liked-songs" />
            Liked Songs
          </ActionItem>
          <Box>
            <Spacer />
            <span>Cookies</span>
            <span>Privacies</span>
          </Box>
        </SideBar>
        <Main>
          <Navbar>
            <div className="action-navigation">
              <div className="navigation">
                <IoIosArrowBack size={25} />
              </div>
              <div className="navigation">
                <IoIosArrowForward size={25} />
              </div>
            </div>
            <div className="action-login">
              <a href="https://www.spotify.com/">
                <div className="btn sign">SIGN UP</div>
              </a>
              <a href={url}>
                <span className="btn log">LOG IN</span>
              </a>
            </div>
          </Navbar>
          <Content>
            <span className="greeting">Good afternoon</span>
          </Content>
        </Main>
      </Section>
      <Footer>
        <div className="content">
          <p>Preview of Spotify Clone</p>
          <p className="notice">
            This is a spotify clone made by Dheeraj, to visit the original site
            click the link on the side.
          </p>
        </div>
        <a href="https://www.spotify.com/">
          <span className="sign-up">SIGN UP FREE</span>
        </a>
      </Footer>
    </div>
  );
}

const Section = styled.div`
  width: 100vw;
  background-color: grey;
  height: 88vh;
  display: flex;
  & .active {
    color: white;
  }
`;

const ActionItem = styled.div`
  padding: 10px 34px;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: gray;
  font-weight: 800;
  font-size: 0.9rem;
  transition: all 0.3s;
  & .action-icon {
    margin-right: 15px;
  }
  & > img {
    width: 24px;
  }
  &:hover {
    color: white;
  }
`;

const SideBar = styled.div`
  min-width: 220px;
  background-color: black;
  height: 100%;
  padding: 16px 0;
  display: flex;
  flex-direction: column;

  & .logo {
    display: grid;
    place-items: center;
    cursor: pointer;
  }

  & .menu {
    margin: 20px 0;
  }

  & .box {
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  color: grey;
  flex: 1;
  padding: 10px 34px;
  & span {
    margin-top: 10px;
    font-weight: 600;
    font-size: 12px;
    align-self: start;
    cursor: pointer;
  }
  & span:hover {
    text-decoration: underline;
  }
`;

const Spacer = styled.div`
  flex: 1;
`;

const Main = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(#1f1f1f, #000000);
`;
const Navbar = styled.div`
  width: 100%;
  height: 60px;
  background-color: #000000bc;
  position: sticky;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;

  & .action-navigation {
    & .navigation {
      padding: 4px;
      border-radius: 50%;
      display: grid;
      place-items: center;
      background: black;
      margin-left: 10px;
      cursor: pointer;
    }
    display: flex;
  }

  & .action-login {
    & > a {
      text-decoration: none;
    }
    & .btn {
      padding: 10px 40px;
      display: grid;
      place-items: center;
      font-weight: bold;
      font-size: 12px;
      border-radius: 50px;
      cursor: pointer;
      letter-spacing: 1px;
      &:hover {
        transform: scale(1.05);
      }
      &:first-child {
        margin-right: 10px;
      }
    }
    & .log {
      background: white;
      color: black;
    }
    & .sign {
      color: white;
    }
    display: flex;
  }
`;
const Content = styled.div`
  color: white;
  padding: 10px 30px;
  & .greeting {
    font-size: 32px;
    font-weight: 800;
  }
`;

const Footer = styled.div`
  width: 100vw;
  background: linear-gradient(to right, #af2896, #509af5);
  height: 12vh;
  padding: 20px 40px;
  display: flex;
  & .content {
    color: white;
    font-size: 12px;
    flex-grow: 1;

    & > p {
      letter-spacing: 1px;
      text-transform: uppercase;
      margin-bottom: 10px;
    }
    & > .notice {
      font-weight: 600;
      font-size: 14px;
      text-transform: none;
    }
  }
  & a {
    text-decoration: none;
  }
  & .sign-up {
    background: white;
    color: #2e77d0;
    border: none;
    font-weight: bold;
    font-size: 14px;
    letter-spacing: 1.5px;
    display: grid;
    place-items: center;
    align-self: center;
    padding: 10px 40px;
    border-radius: 40px;
    &:hover {
      cursor: pointer;
      transform: scale(1.05);
    }
  }
`;

export default WebPlayerLogin;
