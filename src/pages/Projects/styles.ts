import styled from "styled-components";

export const ProjectsContainer = styled.main`
  padding: 4rem;
  background: ${props => props.theme["gray-100"]};

  display: flex;
  gap: 3.5rem;

  justify-content: center;
  flex-wrap: wrap;
`