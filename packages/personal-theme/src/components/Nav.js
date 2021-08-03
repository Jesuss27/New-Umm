import React from 'react'
import { styled } from "frontity"
import  { TiSocialInstagram } from "react-icons/ti";
import  { TiSocialFacebook } from "react-icons/ti";
import  { TiSocialYoutube } from "react-icons/ti";
import { GiHamburgerMenu } from "react-icons/gi";




export default function Nav() {
    return (
        <>
        <StyledNav>

            <div className="mobile-nav">
       
                <div className="logo"><h1>UMM</h1></div>
                <GiHamburgerMenu size={28} />

            </div>

            <div className="desktop-nav">
                <div className="socials">
                    <TiSocialInstagram size={28} />
                    <TiSocialFacebook size={28}  />
                    <TiSocialYoutube size={28} />
                </div>

                <div className="logo">
                    <h1>UMM</h1>
                </div>

                <div className="links">
                    <ul>
                        <li>About</li>
                        <li>Blog</li>
                        <li>Schedule</li>
                    </ul>
                </div>

            </div>






            
        </StyledNav>
        </>
    )
}

const StyledNav = styled.div`
    padding:0rem 2rem;
    display:flex;
    width:100%;
    height:8vh;
    background:aliceblue;
    color:var(--color-text);
    li{
        font-size:1.6rem;
    }
    .mobile-nav{
        width:100%;
        display:flex;
        justify-content: space-between;
        align-items: center;
    }
    .desktop-nav{
        width:100%;
        display:flex;
        justify-content: space-between;
        align-items: center;
        .socials{
        display:flex;
        justify-content: space-between;
        width:33%;
         }
        .logo{
        text-align: center;;
        width:33%;
        }
        .links{
        width:33%;
        display:flex;
            ul{
            width:100%;
            display:flex;
            justify-content: space-between;
            text-decoration:none;
                li{
                list-style: none;
                }
            }
        }
    }
@media (min-width: 600px){
    .mobile-nav{
        display:none;
    }
}
@media (max-width: 601px){
    .desktop-nav{
        display:none;
    }
}
      
`