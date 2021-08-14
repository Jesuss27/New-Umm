import React from 'react'
import { connect, styled } from "frontity"
import Link from "@frontity/components/link"
import Post from "../components/Post"
import Pagination from "../components/Pagination"


function Blogs( { state , actions }) {
    const data = state.source.get(state.router.link)
    console.log(state)
    let counter = 0;
    return (
        <StlyedBlogPage>
            {data.items.map(item => {
                const post = state.source[item.type][item.id];
                const excerpt = `<div class="excerpt">${post.excerpt.rendered}</div>`
                const fmedia = post.featured_media;
                console.log(fmedia)
                const target = state.source.attachment[fmedia]
                const imgUrl = ( target ? target.source_url : "")
                console.log(imgUrl)
                console.log(post)
                counter++
                if(counter % 2 != 0){
                return (
                    <div className="listing" key={item.id}>

                            <Link link={item.link}>
                                <img src={imgUrl} alt="" />
                            </Link>
                            <div className="info">
                                <h1>{post.title.rendered}</h1>
                                <div dangerouslySetInnerHTML={{__html:excerpt}}></div>
                                
                                <Link link={item.link}>
                                    <p>Read More</p>
                                </Link>
                            </div>
                        
                    </div>     
                )
            }else{
                return(
                    <div className="listing-reversed" key={item.id}>
                        <Link link={item.link}>
                                <img src="" alt="" />
                            </Link>
                            <h1>{post.title.rendered}</h1>
                            <div dangerouslySetInnerHTML={{__html:excerpt}}></div>
                            
                            <Link link={item.link}>
                                <p>Read More</p>
                            </Link>
                    </div> 
                )
            }
            })}
            <Pagination />
            
        </StlyedBlogPage>
    )
}

export default connect(Blogs)

const StlyedBlogPage = styled.div`
    padding:2rem;
    display:flex;
    flex-direction: column;
    align-items: center;
    .listing{
        display:flex;
        width:100%;
        height:92vh;
        .excerpt{
            font-size:2rem;
            a{
                display:none;
            }
        }
        a{
            width:60vw;
        img{
            width:100%;
            height:90%;
            object-fit: cover;
        }
    }
        .info{
            width:30vw;
            display:flex;
            flex-direction:column;
            justify-content: space-around;
            margin-left:2rem;
        }
    }

    .listing-reversed{
        width:100%;
        height:92vh;
        .excerpt{
            a{
                display:none;
            }
        }


    }
`

