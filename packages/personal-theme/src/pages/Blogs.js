import React from 'react'
import { connect, } from "frontity"
import Link from "@frontity/components/link"
import Post from "../components/Post"


function Blogs( { state , actions }) {
    const data = state.source.get("/")    
    return (
        <div>
            {data.items.map(item => {
                const post = state.source[item.type][item.id]
                return (
                    <div key={item.id}>
                        <Link link={item.link}>
                            <Post post={post} />
                        </Link>
                    </div>
                )
            })}
            
        </div>
    )
}

export default connect(Blogs)