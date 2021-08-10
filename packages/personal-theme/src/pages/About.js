import React from 'react'
import { styled } from "frontity"
import optional1 from "../Images/optional1.jpg"
import optional2 from "../Images/optional2.jpg"

export default function About() {
    return (
        <StyledAbout>
            <div className="top">
                <h1>YOGA FOR ALL</h1>
                <h2>Lorem, ipsum dolor.</h2>
                    <div className="svg-container">
                        <svg xmlns="http://www.w3.org/2000/svg" width="429.983" height="395.251" viewBox="0 0 429.983 395.251">
                            <g id="Group_45" data-name="Group 45" transform="translate(0)">
                                <g id="Group_18" data-name="Group 18" transform="translate(0 0)">
                                <g id="Group_17" data-name="Group 17" transform="translate(0)">
                                    <path id="Path_13" data-name="Path 13" d="M401.317,215.94c41.638,5.158,84.338-2.492,121.7,16.24,41.819,20.965,92.107,48.47,98.391,94.1,6.354,46.131-52.893,74.434-69.155,118.17-15.284,41.1,12.572,98.258-21.728,126.251-33.94,27.7-86.463,7.806-129.211-3.067-34.088-8.671-57.31-35.692-88.217-52.24-37.677-20.172-91.416-18.4-112.344-55.14-21.235-37.28,1.292-82.735,9.978-124.574,9.97-48.022,2.175-110.256,44.267-136.7,42.385-26.629,96.369,10.777,146.316,16.965" transform="translate(-191.904 -189.515)" fill="#ffebdb"/>
                                </g>
                                </g>
                            </g>
                        </svg>
                    </div>
            </div>

            <div className="story-container">
                <div className="story-title">
                    <h1>MY STORY</h1>
                </div>
                <div className="story-description">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum nostrum veniam, debitis quo in vel cum sit. Dolorum nostrum autem atque tenetur architecto, magnam, tempora harum blanditiis magni error necessitatibus. Tenetur, enim sapiente dolores inventore aliquam tempora architecto facere cum laborum optio, fuga repellat est accusamus eveniet. Deleniti, nostrum voluptas?</p>
                    <div className="optional-image1">
                        <img src={optional1} alt="" />
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita blanditiis consectetur vel officia, facere iste tempora minima provident autem necessitatibus cumque quasi perferendis similique, odio qui totam quia neque, excepturi voluptatibus. Est, ad itaque saepe sequi non quia ratione numquam totam voluptas adipisci quae culpa! Quidem reiciendis et illo sed!</p>
                </div>
            </div>

        <div className="mission-container">
            <div className="mission-title">
                <h1>MY MISSION</h1>
            </div>
            <div className="mission-description">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum nostrum veniam, debitis quo in vel cum sit. Dolorum nostrum autem atque tenetur architecto, magnam, tempora harum blanditiis magni error necessitatibus. Tenetur, enim sapiente dolores inventore aliquam tempora architecto facere cum laborum optio, fuga repellat est accusamus eveniet. Deleniti, nostrum voluptas?</p>
                <div className="optional-image2">
                    <img src={optional2} alt="" />
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita blanditiis consectetur vel officia, facere iste tempora minima provident autem necessitatibus cumque quasi perferendis similique, odio qui totam quia neque, excepturi voluptatibus. Est, ad itaque saepe sequi non quia ratione numquam totam voluptas adipisci quae culpa! Quidem reiciendis et illo sed!</p>
            </div>
        </div>

            <div className="bottom">
                <h1>YOGA FOR ALL</h1>
            </div>


            
        </StyledAbout>
    )
}


const StyledAbout = styled.div`

@media(min-width:1em){
    width:100%;
    .top{
         *{
        display:flex;
        justify-content: center;
        align-items: center;
        text-align:center;
        margin-top:1rem;
    
    }
}
    
    h1{
        font-family: rockwell;
        
    }
    color:var(--color-text);
    display:flex;
    align-items: center;
    flex-direction: column;
    overflow:hidden;
    .svg-container{
        margin-bottom: 5rem;

        svg{
            width:100%;
        }
    }
    .story-container{
        width:100%;
        .story-title{
            background:var(--color-secondary-bg);
            display:flex;
            justify-content: center;
            align-items: center;
            width:100%;
            height:20vh;
        }
        .story-description{
            padding:2rem;
            font-size: 1.6rem;
            line-height: 2.5rem;
            letter-spacing: 0.1rem;
            background: #fcd5ce;
            width:100%;
            display:flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            p{
                max-width:35ch;
                margin-top:1rem;
            }
            .optional-image1{
                margin: 2rem;
                display:flex;
                justify-content: center;
                width:auto;
                height:500px;
                img{
                    max-width:100%;
                    max-height:100%;
                    object-fit: cover;
                }
                
            }
    }
}
    .mission-container{
        width:100%;
        .mission-title{
            margin-top:5rem;
            background:var(--color-secondary-bg);
            display:flex;
            justify-content: center;
            align-items: center;
            width:100%;
            height:20vh;
        }
        .mission-description{
            display:flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding:2rem;
            font-size: 1.6rem;
            line-height: 2.5rem;
            letter-spacing: 0.1rem;
            background: #fcd5ce;
            width:100%;
            p{
                max-width:35ch;
            }
            .optional-image2{
                margin: 2rem;
                display:flex;
                justify-content: center;
                width:auto;
                height:500px;
                img{
                    max-width:100%;
                    max-height:100%;
                    object-fit: cover;
                }
                
            }
        }
}

    .bottom{
        display:flex;
        justify-content: center;
        align-items:center;
        height:30vh;
    }

} 

@media(min-width:1000px){
    .story-container{
        position:relative;
        height:100vh;
    .story-title{
        justify-content: flex-start;
        padding-left:20%;
        
    }
    .story-description{
        width:40%;
        max-width:50%;
        position:absolute;
        right:20%;
        top:5vh;
        

    .optional-image1{
        height:0px;
        display:none;
    }
    }
}

    .mission-container{
        position:relative;
        height:100vh;
        .mission-title{
            justify-content:flex-start;
            padding-left: 20%;
            margin-top:0;
        }
        .mission-description{
        width:40%;
        max-width:50%;
        position:absolute;
        right:20%;
        top:5vh;
       
    .optional-image2{
        height:0px;
        display:none;
        
    }
    }
}

} 
`
