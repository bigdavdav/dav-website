import styled from "styled-components";

import background from "../../assets/Header/header-img.jpg"

export const HeaderContainer = styled.div`
  color: ${props => props.theme["gray-100"]};
  height: 100vh;

  background-image: url(${background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  flex-direction: column;

  header {
    padding: 4rem 4rem 0;
    display: flex;
    align-items: baseline;
    justify-content: space-between;

    a {
      color: ${props => props.theme["gray-100"]};
      text-decoration: none;

      transition: color 0.2s;
    }

    a + a {
      margin-left: 3rem;
    }

    a:hover {
      color: ${props => props.theme["red"]};
    }
  }

  h2 {
    display: flex;
    align-items: center;
    justify-content: center;

    flex: 1;

    text-align: center;

    padding-bottom: 11.5rem;
  }
`