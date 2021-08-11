import React from 'react'

export default function Post( { post } ) {
    console.log(post)
    return (
        <div>
            <h1>{post.title.rendered}</h1>
            
        </div>
    )
}
