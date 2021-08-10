import React from 'react'
import { styled } from "frontity";
import  { TiSocialInstagram } from "react-icons/ti";
import  { TiSocialFacebook } from "react-icons/ti";
import  { TiSocialYoutube } from "react-icons/ti";

export default function Footer() {
    return (
        <StyledMobileFooter>
            <div className="container">
                <div className="column-1">
                    <h1>UMM YOGA</h1>
                    <h2>About</h2>
                    <hr/>
                    <h2>Schedule</h2>
                    <hr/>
                    <h2>Contact</h2>
                    <hr/>
                        <div className="socials">
                            <TiSocialInstagram size={28} />
                            <TiSocialFacebook size={28}  />
                            <TiSocialYoutube size={28} />
                        </div>
                </div>

                <div className="column-2">
                    <h1>YOGA FOR ALL</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ipsa est at delectus ea ipsam?</p>
                    <button>Click</button>
                </div>

                <div className="column-3">
                    <div className="container-3">
                        <h1>RECENT BLOGS</h1>
                        <ul>
                            <li>Blog Title</li>
                            <li>Blog Title</li>
                            <li>Blog Title</li>
                            
                        </ul>
                    </div>

                </div>

                    
            </div>

        </StyledMobileFooter>
    )
}

const StyledMobileFooter = styled.div`
@media(min-width:1em){
    color:white;
    padding:2rem;
    width:100%;
    height:30vh;
    background:#707070;
    overflow: auto;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    .container{
        display:flex;
        flex-direction:column;
        width:100%;
        height:100%;
        justify-content: space-between;
        .column-1{
            flex-basis:100%;
            height:100%;
            display:flex;
            flex-direction:column;
            justify-content: space-between;
        }
        .column-2{
            display:none;
        }
        .column-3{
            display: none;
        }
    ul{
        list-style: none;
        justify-content: space-between;
        display:flex;
        flex-direction:column;

    }
    .socials{
        display:flex;
    }
}

}


@media(min-width: 600px){
    .container{
        display:flex;
        flex-direction:row;
        .column-1{
            hr{
                display:none;
            }
        }
        .column-2{
            display:block;
            display:flex;
            flex-direction: column;
            flex-basis:100%;
            height:100%;
            justify-content:space-between;
            p{
                font-size: var(--med-text-s) ;
                max-width: 25ch;
            }
            button{
                width:30%;
                height:3ch;
                border-radius:10px;

            }
        }
    }

}

@media(min-width: 1000px){
    .container{

        .column-3{
            height:100%;
            flex-basis:100%;
            display: block;
            justify-content: space-around;
            text-align: right;
            ul{
                margin-top:1rem;
                li{
                   margin-left:2rem;
                   margin-top: 1rem;
                   font-size:1.6rem;
                }
            }
        }
    }

}

`