import { connect, styled } from 'frontity'
import React from 'react'
//ContactForm is connected to frontity state management

function ContactForm( { state, libraries }) {
    //expose CF-7 info for use
    const data = state.source.get("/contact");
    const contactForm = state.source.page[data.id];
    const Html2React = libraries.html2react.Component;

    return (
        <StyledForm>
            <Html2React html={contactForm.content.rendered} />
        </StyledForm>
    )
}

export default connect(ContactForm)

const StyledForm = styled.div`
    max-width:80%;
input{
    border-radius: 20px;
}
textarea{
    border-radius: 10px;
}
label{
    margin-left:.5rem;
}
`