import { LinksTab, MoreInfo, WelcomeContainer } from './styles'

import portrait from '../../assets/Home/me.png'
import moreInfoImage from '../../assets/Home/more-info-image.png' 
import { NavLink } from 'react-router-dom'

export function Home() {
  return (
    <>
      <WelcomeContainer>
        <img src={portrait} alt="Man with long hair smiling. He is wearing a full black suit with a tie" />
        <div>
          <h3>Well hello there.</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa quod necessitatibus aliquid, explicabo suscipit rerum quos in qui soluta animi inventore, quas voluptates laudantium sunt magnam, expedita alias cupiditate rem?
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur magni maiores necessitatibus unde nostrum nam sunt corrupti pariatur, eveniet voluptate totam repellat enim nisi! Odio atque sint cupiditate voluptatibus consequatur?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis tenetur velit fugit quae quia totam nulla harum, ullam quibusdam eaque excepturi asperiores aperiam amet a aspernatur quam mollitia, cupiditate accusamus.
          </p>
        </div>
      </WelcomeContainer>
      <MoreInfo>
        <div>
          <h3>Music???????</h3>
          <p>Very shocking indeed.</p>
          <p>I didn't know what to put as an image so you can look at Shaq Dj-ing</p>
        </div>
        <img src={moreInfoImage} alt="Shaquile O'Neal DJ-ing" />
      </MoreInfo>
      <LinksTab>
        <h2>Why don't you check out something else:</h2>
        <div className="links">
          <NavLink to="/about-me">
            About Me
          </NavLink>
          <NavLink to="/projects">
            Projects
          </NavLink>
        </div>
      </LinksTab>
    </>
  )
}
