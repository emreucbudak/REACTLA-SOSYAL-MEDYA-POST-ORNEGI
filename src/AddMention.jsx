import React, { useState } from 'react'
import Logo from './img/tony.jpg'

function AddMention({postSend}) {
    const [postTitle,setPostTitle] = useState("")
    const [postImg,setPostImg] = useState("")
    const postChange = (e) => {
        setPostTitle(e.target.value)
    }
    const postChangeImg = (e) => {
        setPostImg(e.target.value)
    }
    const submitClick = (e) => {
        e.preventDefault();
        postSend(postTitle,postImg)
        setPostImg("")
        setPostTitle("")
    }
    return (
        <div className='form1'>
            <div className='form'>
                <form action="">
                    <img src={Logo} alt="" className='logo' />
                    <input type="text" className='input' placeholder='Ne Paylaşmak İstersin?' onChange={postChange} value={postTitle}/>
                    <input type="text" className='resimlink' placeholder='Resim Lİnki Girin' onChange={postChangeImg} value={postImg}/>
                    <div>
                        <button type='submit' className='paylas' onClick={submitClick}>Paylaş</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddMention