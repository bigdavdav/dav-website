import styled from "styled-components";

export const WelcomeContainer = styled.main`
  height: 100vh;
  padding: 9.5rem 4rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 6rem;

  color: ${props => props.theme["gray-100"]};

  img {
    height: 48rem;
    border-radius: 8px;
  }

  h3 {
    padding-bottom: 1.5rem;
  }
`

export const MoreInfo = styled.aside`
  height: 100vh;
  padding: 9.5rem 4rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;

  background: ${props => props.theme["gray-100"]};

  div {
    h3 {
      padding-bottom: 1rem;
    }
  }

  img {
    height: 37rem;
    border-radius: 8px;
  }
`

export const LinksTab = styled.div`
  height: 18.75rem;

  padding: 9.5rem 8rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 6rem;

  color: ${props => props.theme["gray-100"]};

  .links {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.25rem;

    padding-right: 1rem;
  }

  a {
      color: ${props => props.theme["gray-100"]};
      text-decoration: none;

      transition: color 0.2s;
    }

    a:hover {
      color: ${props => props.theme["red"]};
    }
`