import React, { useEffect, useState } from 'react'
import "./BlogSec.css"
import Navbar from '../../../Components/Navbar/Navbar'
import { TextField } from '../../../Components/MainComponents/TextField'
import ReactPlayer from 'react-player'
import { Footer } from '../../../Components/Footer/Footer'
import axios from 'axios'
import { Loader } from '../../../Components/Loader/Loader'
import { api } from '../../../config'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
export const BlogSec = () => {
    const [blogs, setblogs] = useState([])
    useEffect(() => {
        axios.get(`${api}/users/getblog`).then((res) => {
            setTimeout(() => {
                setblogs(res.data.data)
            }, 1000);
        })
    }, [])

    return (    
        <>
            <Navbar countrie={true} />
            {blogs.length > 0 ? <>
                <div className='BlogSecAlign'>
                    <div className='BlogSecSetText'>
                        <TextField data={{ style: "BlogSecSetTextField", Text: "Explore" }} />
                        <span className='BlogSecSetTextFieldSpan'>Vlogs</span>
                    </div>
                    <div className='BlogSecFlexSet'>
                        {blogs.map(blog =>
                            <div className='BlogSec'>
                                <div className='BlogSecInnerSec'>
                                    <ReactPlayer
                                        url={blog.blog_link}
                                        controls={true}
                                        height={"100%"}
                                        width={"100%"}
                                    />
                                </div>
                                <div className='BlogSecInnerSec'>
                                    <TextField data={{ style: "BlogSecInnerSecText", Text: blog.title }} />
                                    <TextField data={{ style: "BlogSecInnerSecText2", Text: blog.description }} />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <Footer />
                <div className='floatingButton'>
                    <a href='https://wa.me/918877222255' className='floatingButtonWhatsApp'>
                        <WhatsAppIcon id="floatingButtonWhatsAppIcon" />
                    </a>
                </div>
            </>
                :
                <Loader />
            }
        </>
    )
}
