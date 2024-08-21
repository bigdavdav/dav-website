import { InquiriesBox, FooterContainer, SocialLinks } from "./styles";
import { SpotifyLogo, GithubLogo } from 'phosphor-react'
import { SoundcloudLogo } from "@phosphor-icons/react";

export function Footer() {
  return (
    <FooterContainer>
      <h4>Follow me at:</h4>
      <SocialLinks>
        <a href="https://soundcloud.com/djdavidnb" target="_blank" title="Soundcloud Artist Profile">
          <SoundcloudLogo size={30} />
        </a>
        <a href="https://open.spotify.com/user/s5o9a5fpq6khkbrlkgovhlb2j?si=cd0245f583b049b6" target="_blank" title="Spotify Profile">
          <SpotifyLogo size={30} />
        </a>
        <a href="https://github.com/bigdavdav" target="_blank" title="Github Profile">
          <GithubLogo size={30} />
        </a>
      </SocialLinks>
      <InquiriesBox>
        <h4>Email inquiries will be taken at:</h4>
        <span>davi.castelo.branco.almeida@gmail.com</span>
      </InquiriesBox>
    </FooterContainer>
  )
}