import React from 'react'
import { connect, styled } from "frontity"

function Post( { state } ) {
    const data = state.source.get(state.router.link);
    const post = state.source[data.type][data.id];
    const fmedia = post.featured_media;
    const target = state.source.attachment[fmedia]
    const imgUrl = ( target ? target.source_url : "")
    
    
    return (
        <StyledPost>
            <h1>{post.title.rendered}</h1>

            <img src={imgUrl} alt="" />
            
            
            <p dangerouslySetInnerHTML={{__html: post.content.rendered}}></p>
            
        </StyledPost>
    )
}

export default connect(Post)

const StyledPost = styled.div`
@media(min-width:1em){
    display:flex;
    flex-direction: column;
    align-items: center;
    padding:2rem;
    background-color: #F8EDEB;


    h1{
        font-family:rockwell;
        color:black;
        font-size:var(--s-header);
        padding:0rem 1rem;
        margin-bottom: 2rem;
        background:linear-gradient(to bottom, #F8EDEB 60%, #FEC89A 40%);

    }
    img{
        width:50%;
        height:30vh;
        object-fit: cover;
    }

    p{
        color:var(--color-text);
        padding:1rem ;
        width:100%;
        font-size:1.4rem;
    }
}

@media(min-width:600px){
    h1{
        font-size: var(--md-header);
    }
    p{
        width:75%;
        font-size: 2rem;
        P{
            width:100%;
            line-height: 3.2rem;
        }
    }

}

@media(min-width:1000px){
    h1{
        font-size: var(--l-header);
    }
    p{
        width:50%;
        font-size: 2rem;
        P{
            width:100%;
        }
    }

}

@media(min-width:1400px){
    h1{
        font-size: 6rem;
    }
    p{
        width:50%;
        font-size: 2rem;
        P{
            width:100%;
        }
    }

}

`

