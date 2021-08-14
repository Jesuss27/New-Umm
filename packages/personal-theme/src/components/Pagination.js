import React from 'react'
import { connect, styled } from "frontity"
import Link from "@frontity/components/link"


function Pagination( { state, actions, libraries }) {
    const { totalPages } = state.source.get(state.router.link);
    const { path, page, query } = libraries.source.parse(state.router.link)
    
    const isThereNextPage = page < totalPages;
    const isTherePreviousPage = page > 1;

    const nextPageLink = libraries.source.stringify({path, page: page + 1, query});
    const prevPageLink = libraries.source.stringify({path, page: page - 1, query})
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