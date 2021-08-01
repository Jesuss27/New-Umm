import Nav from "./components/Nav.js"
import Landing  from "./pages/Landing.js"
import{ connect, Global, css, styled } from "frontity"
import p from "./processors/paragraph"
import input from "./processors/input"





const Root = () => {

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
      <Landing />
      
    </>
  );
};

export default {
  name: "personal-theme",
  roots: {
    theme: Root
  },
  state: {
    theme: {}
  },
  actions: {
    theme: {
      beforeSSR: async( { actions  }) =>{
        await actions.source.fetch("/contact");
      }
    }
  },
  libraries : {
    html2react: {
      processors: [p, input]
    }

  }
};


