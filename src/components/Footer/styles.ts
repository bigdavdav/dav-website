import styled from "styled-components";

export const FooterContainer = styled.footer`
  height: 42.875rem;
  padding: 10rem 14.375rem 0;

  color: ${props => props.theme["gray-200"]};
  background: ${props => props.theme["gray-800"]};
`

export const SocialLinks = styled.div`
  padding-top: 2rem;

  a {
    width: 3.125rem;
    height: 3.125rem;
    border-radius: 50px;

    display: inline-flex;
    align-items: center;
    justify-content: center;

    color: ${props => props.theme["gray-100"]};

    transition: background 0.2s;
  }

  a + a {
    margin-left: 1rem;
  }

  a:hover {
    background-color: ${props => props.theme["gray-100-transparent"]};
  }
`

export const InquiriesBox = styled.div`
  margin-top: 3.375rem;
`