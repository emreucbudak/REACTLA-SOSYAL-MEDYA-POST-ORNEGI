import React from 'react'
import Logo from './img/tony.jpg'

function ShowPost({ postdata }) {
    return (
        <div className='kapsa'>
            <div className='showPost'>
                <div className='information'>
                    <img src={Logo} alt="" className='logomsu'/>
                    <p className='gonder'>Emre Üçbudak</p>
                </div>
                <div className='postDesc'>
                    <h2>{postdata.title}</h2>
                    <img src={postdata.img} alt="" />
                </div>
            </div>
        </div>
    )
}

export default ShowPost