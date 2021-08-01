import React from 'react'
import { styled } from "frontity"

export default function Cards() {
    return (
        <BannerContainer>
            <div className="cards">
                <div className="card">
                    <div className="svg-container">
                        <svg xmlns="http://www.w3.org/2000/svg" width="46.909" height="35.983" viewBox="0 0 46.909 35.983">
                            <path id="Icon_zocial-persona" data-name="Icon zocial-persona" d="M19.252,28.264a87.834,87.834,0,0,1-9.725-.33s.38-5.806,3.037-6.849,3.307-.9,4.227-1.453l.069-.038V18.031a7.2,7.2,0,0,1-2-3.28,2.594,2.594,0,0,1-.756-1.77,2.41,2.41,0,0,1,.369-1.259c.157-3.273,2.239-5.439,4.787-5.439s4.631,2.166,4.787,5.439a2.4,2.4,0,0,1,.369,1.259,2.594,2.594,0,0,1-.756,1.77,7.183,7.183,0,0,1-2,3.279v1.563c.023.012.046.025.068.038.923.556,1.573.408,4.23,1.453s3.035,6.849,3.035,6.849a88.3,88.3,0,0,1-9.738.33m12.23-28.3H1.707A1.713,1.713,0,0,0-.006,1.679V34.237a1.712,1.712,0,0,0,1.713,1.712H31.482L46.9,17.958,31.482-.035Z" transform="translate(0.006 0.035)"/>
                        </svg>
                    </div>

                    <h2>ABOUT</h2>
                    
                </div>
                <div className="card">
                    <div className="svg-container">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24.005" height="30.002" viewBox="0 0 24.005 30.002">
                            <g id="Icon_ionic-md-journal" data-name="Icon ionic-md-journal" transform="translate(-5.998 -3.002)">
                                <path id="Path_29" data-name="Path 29" d="M8.248,3A2.257,2.257,0,0,0,6,5.252v25.5A2.257,2.257,0,0,0,8.248,33H22.5V3Z"/>
                                <path id="Path_30" data-name="Path 30" d="M27.049,3H25.875V33h1.174A2.962,2.962,0,0,0,30,30.052V5.955A2.962,2.962,0,0,0,27.049,3Z"/>
                            </g>
                        </svg>
                    </div>

                    <h2>BLOG</h2>
                </div>
                <div className="card">
                    <div className="svg-container">
                        <svg xmlns="http://www.w3.org/2000/svg" width="31.5" height="36" viewBox="0 0 31.5 36">
                            <path id="Icon_awesome-calendar-alt" data-name="Icon awesome-calendar-alt" d="M0,32.625A3.376,3.376,0,0,0,3.375,36h24.75A3.376,3.376,0,0,0,31.5,32.625V13.5H0ZM22.5,18.844A.846.846,0,0,1,23.344,18h2.813a.846.846,0,0,1,.844.844v2.813a.846.846,0,0,1-.844.844H23.344a.846.846,0,0,1-.844-.844Zm0,9A.846.846,0,0,1,23.344,27h2.813a.846.846,0,0,1,.844.844v2.813a.846.846,0,0,1-.844.844H23.344a.846.846,0,0,1-.844-.844Zm-9-9A.846.846,0,0,1,14.344,18h2.813a.846.846,0,0,1,.844.844v2.813a.846.846,0,0,1-.844.844H14.344a.846.846,0,0,1-.844-.844Zm0,9A.846.846,0,0,1,14.344,27h2.813a.846.846,0,0,1,.844.844v2.813a.846.846,0,0,1-.844.844H14.344a.846.846,0,0,1-.844-.844Zm-9-9A.846.846,0,0,1,5.344,18H8.156A.846.846,0,0,1,9,18.844v2.813a.846.846,0,0,1-.844.844H5.344a.846.846,0,0,1-.844-.844Zm0,9A.846.846,0,0,1,5.344,27H8.156A.846.846,0,0,1,9,27.844v2.813a.846.846,0,0,1-.844.844H5.344a.846.846,0,0,1-.844-.844ZM28.125,4.5H24.75V1.125A1.128,1.128,0,0,0,23.625,0h-2.25A1.128,1.128,0,0,0,20.25,1.125V4.5h-9V1.125A1.128,1.128,0,0,0,10.125,0H7.875A1.128,1.128,0,0,0,6.75,1.125V4.5H3.375A3.376,3.376,0,0,0,0,7.875V11.25H31.5V7.875A3.376,3.376,0,0,0,28.125,4.5Z"/>
                        </svg>
                    </div>

                    <h2>SCHEDULE</h2>


                </div>

            </div>
            

            </BannerContainer>
            
 
    )
}

const BannerContainer = styled.div`
    @media(min-width:1em){
        width:100%;
        height:auto;
        .cards{
            width:auto;
            height:auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            .card{
                display:flex;
                color:white;
                flex-direction: column;
                align-items: center;
                justify-content: space-around;
                width:24rem;
                height:24rem;
                background-color:var(--color-secondary);
                margin:1rem 2rem;
                border-radius:1.5rem;  
                box-shadow: 3px 3px 6px #DCDCDC; 
                transition: all .2s ease;  
                         
                    h2{
                        font-size:3.5rem;
                        font-family: abuget;
                        letter-spacing: 0.6rem;
                    }
                    .svg-container{
                        width:20%;
                        height:20%;
                        svg{
                            width:100%;
                            height:100%;
                            fill:white;
                        }
                }
            }
            .card:hover{
                    transform: scale(1.1);
                }  
        }
    }
    @media(min-width:600px){
        display:flex;
        justify-content: center;
        align-items: center;
        .cards{
            display:flex;
            width:80%;
            align-items: center;
            justify-content: space-around;
            flex-direction: row;
            flex-wrap: wrap;
        }
    }
    @media(min-width:1000px){
        .cards{
            .card{
                width:28rem;
                height:28rem;
            }
        }
    }
    @media(min-width:1500px){
        .cards{
            .card{
                width:32rem;
                height:32rem;
            }
        }
    }
    
`