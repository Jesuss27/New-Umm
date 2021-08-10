import React from "react";
import Home from "../components/Home";
import Checklist from "../components/Checklist"
import Cards from "../components/Cards.js"
import Testimonials from "../components/Testimonials.js"
import Opt from "../components/Opt.js"
import { styled } from "frontity"






const Landing = () => {
    return(
    <StyledLanding>
        <Home />
        <Checklist />
        <Cards />
        <Testimonials />
        <Opt />
   </StyledLanding>

    )
}

export default Landing

const StyledLanding = styled.div`

`