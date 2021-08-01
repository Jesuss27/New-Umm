import React from 'react'
import { styled } from "frontity"
import background from "../Images/background.jpg"
import ContactForm from './ContactForm'


export default function Opt() {
    return (
        <OptContainer>

           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="var(--color-bg)" fill-opacity="1" 
                d="M0,160L80,149.3C160,139,320,117,480,138.7C640,160,800,224,960,224C1120,224,1280,160,1360,128L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z">
               </path>
            </svg>

            <div className="big-text">
                <h1></h1>
                <h1></h1>
                <h1></h1>
            </div>


            <div className="form-container">
                <h1>STAY IN TOUCH</h1>
                <ContactForm />
            </div>


            
        </OptContainer>
    )
}

const OptContainer = styled.div`
    height:120vh;
    width:100%;
    background-image: url(${background}) ;
    background-size: cover;
    .form-container{
        padding:2rem;
        background:grey;
    }

`

