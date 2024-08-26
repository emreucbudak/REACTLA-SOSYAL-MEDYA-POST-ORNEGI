import React from 'react'
import ShowPost from './ShowPost'

function ListPost({ postList }) {
    return (
        <div>
            <div>
                {
                    postList.map((data,index) => {
                        return <ShowPost postdata = {data} key={index}/>
                    })
                }
            </div>
        </div>
    )
}

export default ListPost