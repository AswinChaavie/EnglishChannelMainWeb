import React from 'react'
import "./Footer.css"
import { ImageField } from '../MainComponents/ImageField'
import { TextField } from '../MainComponents/TextField'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { country, courses } from '../../StoreData';
export const Footer = () => {
    return (
        <>
            <div>
                <div className='FooterAlignment'>
                    <div className='FooterAlignmentSec p-4'>
                        <div className='FooterAlignmentImgAlign'>
                            <ImageField data={{ ImgName: "updateWhiteLogo.png", style: "FooterAlignmentImgs" }} />
                        </div>
                        <a href="https://internal.englishchannel.io">
                            <button className='FooterAlignmentButton'>Staff Sign in</button>
                        </a>
                    </div>
                    <div className='FooterAlignmentSec2 p-4'>
                        <div>
                            <TextField data={{ style: "FooterAlignmentIText", Text: "Head Office" }} />
                            <p className='FooterAlignmentIText2'>
                                1 st Floor, Park View Complex,
                                <br />
                                Cherooty Road, Opposite Gandhi Park,
                                <br />
                                Kozhikode, Kerala, India,
                                <br />
                                Pin code 673032
                            </p>
                        </div>
                    </div>
                    <div className='FooterAlignmentSec3 p-4'>
                        <div className="google-map-code">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.0388897968714!2d75.77615329999999!3d11.258549499999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba659ae0cca8cf9%3A0xca781b62e250e015!2sEnglish%20Channel%20Study%20Abroad!5e0!3m2!1sen!2sin!4v1709099891509!5m2!1sen!2sin" className='footerMapStyle' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>                    </div>
                        <div className='FooterAlignSec3Social'>
                            <a href="https://www.facebook.com/english.channel.12?locale=be_BY">
                                <FacebookIcon id="FooterAlignSec3SocialIcon" />
                            </a>
                            <a href="https://wa.me/918877222255">
                                <WhatsAppIcon id="FooterAlignSec3SocialIcon" />
                            </a>
                            <a href="https://www.instagram.com/englishchannel_studyabroad/?hl=en">
                                <InstagramIcon id="FooterAlignSec3SocialIcon" />
                            </a>
                            <a href="https://www.linkedin.com/company/englishchannel/?originalSubdomain=in">
                                <LinkedInIcon id="FooterAlignSec3SocialIcon" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className='FooterAlignFInalSecAlign'>
                    <TextField data={{ style: "FooterAlignmentImob", Text: "Branches" }} />
                    <TextField data={{ style: "FooterAlignmentIText3", Text: "London" }} />
                    <TextField data={{ style: "FooterAlignmentIText3", Text: "Kozhikode" }} />
                    <TextField data={{ style: "FooterAlignmentIText3", Text: "Kochi" }} />
                    <TextField data={{ style: "FooterAlignmentIText3", Text: "Kottayam" }} />
                    <TextField data={{ style: "FooterAlignmentIText3", Text: "Muvattupuzha" }} />
                    <TextField data={{ style: "FooterAlignmentIText3", Text: "Iritty" }} />
                </div>
                <div className='FootercopyRights'>
                    <p className='FootercopyRightsptag'>© Copyright English Channel. All Rights Reserved</p>
                    <a className='FootercopyRightsChaavie' href="//www.chaaviesolutions.com">
                        <p className='FootercopyRightsChaavie'>Powered By Chaavie Solutions</p>
                    </a>
                </div>
            </div>
        </>
    )
}
