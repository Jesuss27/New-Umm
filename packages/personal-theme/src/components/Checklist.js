import React from 'react'
import { styled } from "frontity" 

export default function Checklist() {

    return (
        <Container2>
            <div className="svg-container">
                    <svg perserveaspectratio="xMinYMin meet"  width="517.964" height="485.742" viewBox="0 0 517.964 485.742">
                        <path id="Path_13" data-name="Path 13" d="M444.166,221.989c50.158,6.339,101.595-3.063,146.606,19.958,50.376,25.764,110.953,59.568,118.523,115.641,7.654,56.693-63.716,91.476-83.305,145.224-18.411,50.515,15.144,120.754-26.174,155.156-40.885,34.04-104.155,9.593-155.65-3.77C403.1,643.542,375.13,610.334,337.9,590c-45.386-24.79-110.121-22.61-135.332-67.764-25.58-45.816,1.556-101.676,12.02-153.1,12.01-59.017,2.62-135.5,53.325-168C318.97,168.415,384,214.385,444.166,221.989" transform="translate(-191.904 -189.515)" fill="#ffebdb"/>
                    </svg>
            </div>
        <div className="text-container">
            <div className="text-info">
                <div className="header">
                    <h1>YOGA FOR ALL</h1>
                    <h3>THIS IS A MEDIUM TITLE</h3>
                </div>

                <div className="list">
                    <ul>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="26.846" viewBox="0 0 36 26.846">
                                <path id="Icon_awesome-check" data-name="Icon awesome-check" d="M12.227,30.9.527,19.2a1.8,1.8,0,0,1,0-2.546L3.073,14.1a1.8,1.8,0,0,1,2.546,0L13.5,21.986,30.382,5.1a1.8,1.8,0,0,1,2.546,0L35.473,7.65a1.8,1.8,0,0,1,0,2.546l-20.7,20.7A1.8,1.8,0,0,1,12.227,30.9Z" transform="translate(0 -4.577)" fill="#fec5bb"/>
                            </svg>
                            <h4>THIS IS A MEDIUM TITLE</h4>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="26.846" viewBox="0 0 36 26.846">
                                <path id="Icon_awesome-check" data-name="Icon awesome-check" d="M12.227,30.9.527,19.2a1.8,1.8,0,0,1,0-2.546L3.073,14.1a1.8,1.8,0,0,1,2.546,0L13.5,21.986,30.382,5.1a1.8,1.8,0,0,1,2.546,0L35.473,7.65a1.8,1.8,0,0,1,0,2.546l-20.7,20.7A1.8,1.8,0,0,1,12.227,30.9Z" transform="translate(0 -4.577)" fill="#fec5bb"/>
                            </svg>
                            <h4>THIS IS A MEDIUM TITLE</h4>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="26.846" viewBox="0 0 36 26.846">
                                <path id="Icon_awesome-check" data-name="Icon awesome-check" d="M12.227,30.9.527,19.2a1.8,1.8,0,0,1,0-2.546L3.073,14.1a1.8,1.8,0,0,1,2.546,0L13.5,21.986,30.382,5.1a1.8,1.8,0,0,1,2.546,0L35.473,7.65a1.8,1.8,0,0,1,0,2.546l-20.7,20.7A1.8,1.8,0,0,1,12.227,30.9Z" transform="translate(0 -4.577)" fill="#fec5bb"/>
                            </svg>
                            <h4>THIS IS A MEDIUM TITLE</h4>
                        </li>
                    </ul>
                </div>

            </div>
        </div>   
        </Container2>
    )
}

const Container2 = styled.div`
    color:var(--color-text);
    padding:0 1vw;
    display:flex;
    //mobile view (xs)
@media (min-width:1em){
    width:100%;
    height:100%;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    .text-container{
        width:100%;
        .text-info{
            width:100%;
            display:flex;
            flex-direction: column;
            align-items:center;
            h1{
            text-align: center;
            font-family: rockwell;
            font-size:var(--s-header);
        }
            h3{
            text-align:center;
            margin-bottom:2rem;
            font-size:var(--med-text-s);
        
        }
        }
    }
   
    ul{
        display:flex;
        flex-direction: column;
        align-items:center;
        justify-content: center;
        margin-bottom:2rem;
        width:100%;
        li{
            width:100%;
            justify-content: space-around;
            display:flex;
            margin-top:2rem;
            h4{
                font-size:2rem;
                margin-left: 1rem;
            }
        } 
    }
    .svg-container{
            display:flex;
            align-items: center;
            justify-content: center;
            width:100%;
            height:100%;
            overflow:hidden;
            vertical-align:middle;
            svg{
                width:100%;
            }
            
        }
    }
@media(min-width:600px){
    min-height: 92vh;
    flex-direction: row;
    .text-container{
        .text-info{
            .header{
                h1{
                    font-size: var(--md-header);
                }
                h3{
                    font-size: var(--med-text-md);
                }
            }
        ul{
            li{
                h4{
                    
                }
            }
        }
        }
    }
}
@media(min-width:1000px){
    .text-container{
        .text-info{
            .header{
                h1{
                    font-size:var(--l-header);
                }
                h3{
                    font-size:var(--med-text-l);
                }
            }
            ul{
                li{
                    h4{
                        font-size:var(--med-text-md);
                        margin-left:3rem;
                    }
                }
            }
        }
    }
}
@media(min-width:1500px){
    .text-container{
        .text-info{
            .header{
                h1{
                    font-size:var(--xl-header)
                }
                h3{
                    font-size:var(--med-text-xl)
                }
            }
            ul{
                li{
                    h4{
                        font-size:var(--med-text-l)
                    }
                }
            }
        }
    }
}
`