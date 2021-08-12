import React from 'react'
import { connect, styled } from "frontity"
import Link from "@frontity/components/link"


function Pagination( { state, actions, libraries }) {
    const { totalPages } = state.source.get(state.router.link);
    const { path, page, query } = libraries.source.parse(state.router.link)
    
    const isThereNextPage = page < totalPages;
    console.log(isThereNextPage);
    const isTherePreviousPage = page > 1;
    console.log("hello world");

    const nextPageLink = libraries.source.stringify({path, page: page + 1, query});
    const prevPageLink = libraries.source.stringify({path, page: page - 1, query})
    console.log(prevPageLink)
    console.log(nextPageLink)
    return (
        <div>
            {isTherePreviousPage && (
                <Link link={prevPageLink}>New Posts</Link>
            ) }

            {isThereNextPage && (
                <Link link={nextPageLink}>Older Posts</Link>
            ) }
            
        </div>
    )
}

export default connect(Pagination)