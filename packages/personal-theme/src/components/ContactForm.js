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
    *{
        max-width:100%;
        color:var(--color-text)
    }
  
input{
    border-radius: 10px;
    padding:1ch;
    height:3ch;
    border: 1px solid #707070;


}
textarea{
    border-radius: 10px;
    padding:1ch;
}
label{
    margin-left:.5rem;
    
}
.wpcf7-submit{
    background:var(--color-secondary-bg);
    color:black;
    width:100%;
    padding:1ch;
    transition: all 0.2s ease;
    border:none;
    :hover{
        background: #ffc69d;
    }


}
`