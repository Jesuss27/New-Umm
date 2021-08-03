import React from 'react'
import { styled } from "frontity"
import portrait1 from "../Images/portrait-1.jpg"
import portrait2 from "../Images/portrait-2.jpg"
import portrait3 from "../Images/portrait-3.jpg"
import background from "../Images/background.jpg"

export default function Testimonials() {
    return(
        <TestimonialsContainer>
            <div className="inner">

                <h1>Testimonials</h1>
                <div className="border"></div>

                <div className="row">
                    <div className="col">
                        <div className="testimonial">
                            <img src={portrait1} alt="" />
                            <div className="name">Full Name</div>
                            <div className="title">Title</div>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                                Magni nostrum ipsa ex consectetur excepturi molestiae doloremque!</p>
                        </div>
                    </div>

                    <div className="col">
                        <div className="testimonial">
                            <img src={portrait2} alt="" />
                            <div className="name">Full Name</div>
                            <div className="title">Title</div>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                                Magni nostrum ipsa ex consectetur excepturi molestiae doloremque!</p>
                        </div>
                    </div>

                    <div className="col">
                        <div className="testimonial">
                            <img src={portrait3} alt="" />
                            <div className="name">Full Name</div>
                            <div className="title">Title</div>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                                Magni nostrum ipsa ex consectetur excepturi molestiae doloremque!</p>
                        </div>
                    </div>
                </div>

                
            </div>

        </TestimonialsContainer>
    )
}

const TestimonialsContainer = styled.div`
@media(min-width:1em){

    padding: 4em 0;
    text-align:center;
    .inner{
        margin:auto;
        overflow:hidden;
        padding: 0 20px;
        display:flex;
        flex-direction: column;
        align-items: center;
        h1{
            font-family: rockwell;
            font-style: italic;
            font-size:var(--s-header);
            color:black
        }
        .border{
            width:50%;
            height:.5rem;
            background-color: var(--color-accent);
        }
        .row{
            width:100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            flex-wrap:wrap;
            justify-content: center;
            .col{
                padding:15px;
                align-items:center;
                justify-content: center;
                .testimonial{
                    font-family: montserrat;
                    background:#fff;
                    width:100%;
                    height:auto;
                    padding:1.5rem;
                    position:relative;
                    .name{
                        font-size: 1.6rem;
                        color: black;
                        font-weight: 600;
                    }
                    .title{
                        font-size:1.6rem;
                        color:var(--color-text);
                    }
                    p{
                        font-size:1.4rem;
                        color:var(--color-text);
                    }
                    img{
                        width:100px;
                        height:100px;
                        object-fit: cover;
                        border-radius:50%;

                    }
                    .name{
                        margin:0.5rem;
                    }
                    .title{
                        margin:0.5rem;
                    }
                }
            }
        }
    }
    
}

@media(min-width:600px){
    margin-top: 10rem;
    padding: 0 0;
    min-height:92vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .inner{
        justify-content: space-around;
        height:100%;
        .border{
            
        }
        .row{
            flex-direction: row;
            flex-wrap:wrap;
            width:100%;
            height:60vh;
           
            .col{
                width:30%;
                height:100%;

               
                .testimonial{
                    display:flex;
                    flex-direction: column;
                    justify-content:center;
                    align-items: center;
                    height:100%;
                   
                    img{
                      

                    }
                    .name{
                        
                    }
                    .title{
                    
                    }
                }
            }
        }
    }

}

`