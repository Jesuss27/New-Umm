import React from 'react'
import { styled } from "frontity"
import background from "../Images/background.jpg"
import ContactForm from './ContactForm'
import { GrLocationPin } from "react-icons/gr";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";



export default function Opt() {
    return (
        <OptContainer>

           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="var(--color-bg)" fillOpacity="1" 
                d="M0,160L80,149.3C160,139,320,117,480,138.7C640,160,800,224,960,224C1120,224,1280,160,1360,128L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z">
               </path>
            </svg>

            <div className="info-container">

                <div className="big-text">
                    <h1>THIS IS A</h1>
                    <h1>BIG TITLE</h1>
                    <h1>TEXT AND CAN</h1>
                </div>


                <div className="form-container">
                    <h1>STAY IN TOUCH</h1>
                    <ul>
                        <li>
                            <GrLocationPin className="list-icon" />
                            <h3>91911 Dolor St. San Diego, CA</h3>
                        </li>
                        <li>
                            <FaPhoneAlt className="list-icon" />
                            <h3>619-234-7791</h3>
                        </li>
                        <li>
                            <MdEmail className="list-icon" />
                            <h3>umm@gmail.com</h3>
                        </li>
                    </ul>
                    <ContactForm />
            </div>

            </div>


            
        </OptContainer>
    )
}

const OptContainer = styled.div`
    @media(min-width:1em){

    height:150vh;
    width:100%;
    background-image: url(${background}) ;
    background-size: cover;
    .big-text{
        display:none;
    }
    .info-container{
        color:var(--color-text);
        padding:0rem 0.5rem 0rem 0.5rem;
        height:100vh;
        overflow:auto;
        display:flex;
        align-items: center;
        justify-content: center;
    .form-container{
        height:80%;
        overflow:auto;
        word-break: break-all;
        h1{
            text-align:center;
            font-family:rockwell;
        }
        ul{
            display:flex;
            flex-direction:column;
            justify-content: center;
            align-items:center;
            li{
                .list-icon{
                    font-size:14px;
                }
                display:flex;
                width:70%;
                list-style: none;
                margin-top:1rem;
                h3{
                    margin-left:2rem;
                }
            }
        }
        max-width:80%;
        height:auto;
        padding:2rem ;
        background: rgba(255, 255, 255, .7);
        backdrop-filter: blur(10px);
        border-radius:33px;
        border: 1px solid #707070 ;
    }
}
}

@media(min-width:600px){
    .info-container{
        justify-content: space-around;
        .form-container{
        ul{
           
            li{
                
                h3{
                    
                }
            }
        }
        max-width:80%;
        height:auto;
        padding:2rem ;
        background: rgba(255, 255, 255, .7);
        backdrop-filter: blur(10px);
        border-radius:33px;
        border: 1px solid #707070 ;
    }
    }
    .big-text{
        display:block;
        h1{
            font-size:42px;
            margin-top:3rem;
            font-family:rockwell;
        }
    }
}

@media(min-width:800px){
    .big-text{
        h1{
            font-size:68px;
            margin-top:3rem;
            font-family:rockwell;
        }
    }
}

@media(min-width:1400px){
    .info-container{
        .form-container{
            transform:scale(1.4)
        }
    }
    .big-text{
        h1{
            font-size:75px;
            margin-top:3rem;
            font-family:rockwell;
        }
    }
}

`

