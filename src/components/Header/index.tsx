import { NavLink } from "react-router-dom";
import { HeaderContainer } from "./styles";

interface HeaderProps {
  mainText: string,
}

export function Header({mainText}: HeaderProps) {
  return (
    <HeaderContainer>
      <header>
        <h1 id="title">Davi Almeida</h1>
        <nav>
          <NavLink to="/">
            Home
          </NavLink>
          <NavLink to="/about-me">
            About Me
          </NavLink>
          <NavLink to="/projects">
            Projects
          </NavLink>
        </nav>
      </header>
      <h2>{ mainText }</h2>
    </HeaderContainer>
  )
}