import { ProjectContainer } from "./styles"
import displayImage from "../../assets/Projects/project-image.png"

export function Project() {
  return (
    <ProjectContainer>
      <img src={displayImage} alt="" />
      <h4>Project 1 - Bob</h4>
    </ProjectContainer>
  )
}