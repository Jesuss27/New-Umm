import Nav from "./Nav.js"
import Landing  from "../pages/Landing"
import{ connect, Global, css, styled } from "frontity"
import Footer from "./Footer"
import Switch from "@frontity/components/switch"
import About from "../pages/About"
import Blogs from "../pages/Blogs"





const Root = ( { state }) => {
  const data = state.source.get(state.router.link)
  console.log(data.link)

  return (
    <>
    <Global 
      styles={css`
      *{
        margin:0;
        padding:0;
        box-sizing:border-box;
      }
      :root{
        //color schemes
        --color-text:#707070;
        --color-accent:#fec5bb;
        --color-secondary:#fec89a;
        --color-bg:#FBFAF9;
        --color-secondary-bg:#FFD7BA;
        // Header font sizes
        --s-header:3.6rem;
        --md-header:4rem;
        --l-header:7rem;
        --xl-header:9rem;
        // Medium font sizes
        --med-text-s:2rem;
        --med-text-md:2.8rem;
        --med-text-l:4rem;
        --med-text-xl:6rem;
        //small font sizes
      }
      html{
        font-family: montserrat;
        background-color: #FBFAF9;
        font-size:62.5%;
      }`} />


      <Nav />
      <Switch>
        <About when={data.link === "/about/"}/>
        <Blogs when={data.link === "/blog/" }/>
        <Landing when={data.link === "/"} />
      </Switch>
      <Footer />
      
    </>
  );
};

export default connect(Root)