import React from 'react'
import { connect } from "frontity"

function Post( { state } ) {
    const data = state.source.get(state.router.link);
    const post = state.source[data.type][data.id];
    console.log(post);
    
    return (
        <div>
            <h1>{post.title.rendered}</h1>
            <p dangerouslySetInnerHTML={{__html: post.content.rendered}}></p>
            
        </div>
    )
}

export default connect(Post)