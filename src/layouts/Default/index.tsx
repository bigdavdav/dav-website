import { Outlet, useLocation } from "react-router-dom";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

export function DefaultLayout() {
  const location = `${useLocation().pathname}`

  console.log(location)

  function createTexts(location: string) {
    if ( location == "/") {
      return "Welcome to my website."
    } else if ( location == "/about-me" ) {
      return "Why don't you learn a bit more about me!"
    } else if ( location == "/projects" ) {
      return "Have a look at some of my projects(Not fully functional yet, paul)."
    } else {
      return "What the sigma?"
    }
  }


  return(
    <div>
      <Header mainText={createTexts(location)} />
      <Outlet />
      <Footer />
    </div>
  )
}