import React from 'react'
import { connect, } from "frontity"
import Link from "@frontity/components/link"
import Post from "../components/Post"
import Pagination from "../components/Pagination"


function Blogs( { state , actions }) {
    const data = state.source.get(state.router.link)
    return (
        <div>
            {data.items.map(item => {
                const post = state.source[item.type][item.id]
                return (
                    <div key={item.id}>
                        <Link link={item.link}>
                            {post.title.rendered}
                        </Link>

                        
                    </div>
                    
                )
            })}
            <Pagination />
            
        </div>
    )
}

export default connect(Blogs)