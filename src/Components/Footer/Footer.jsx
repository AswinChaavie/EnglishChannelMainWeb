import React from 'react'
import "./Footer.css"
import { ImageField } from '../MainComponents/ImageField'
import { TextField } from '../MainComponents/TextField'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
export const Footer = () => {
    const Courses = ["Health and Medicine", "Hospitality and Tourism", "Engineering",
        "Business and Management", "Environmental Science", "Building and Architecture",
        "Welfare Studies and Services", "Media and Communication"]
    const Countries = ["United Kingdom", "Canada", "Australia", "New Zealand", "France"]
    return (
        <>
            <div className='FooterAlignment'>
                <div className='FooterAlignmentSec p-4'>
                    <div className='FooterAlignmentImgAlign'>
                        <ImageField data={{ ImgName: "logo (1) 1.png", style: "FooterAlignmentImgs" }} />
                    </div>
                    <TextField data={{ style: "FooterAlignmentIText", Text: "ENGLISH HOUSE" }} />
                    <TextField data={{ style: "FooterAlignmentIText2", Text: "Block, Ground floorMunicipal No: 30 Vaishnavi Silicon TerracesHosur Rd, AdugodiBengaluru, Karnataka 560 095" }} />
                </div>
                <div className='FooterAlignmentSec2 p-4'>
                    <TextField data={{ style: "FooterAlignmentIText", Text: "Countries" }} />
                    {
                        Countries.map((ele, index) =>
                            <TextField key={index} data={{ style: "FooterAlignmentIText3", Text: ele }} />
                        )
                    }
                </div>
                <div className='FooterAlignmentSec3 p-4'>
                    <TextField data={{ style: "FooterAlignmentIText", Text: "Courses" }} />
                    {Courses?.map((ele, index) =>
                        <TextField key={index} data={{ style: "FooterAlignmentIText3", Text: ele }} />
                    )}
                    <div className='FooterAlignSec3Social'>
                        <FacebookIcon id="FooterAlignSec3SocialIcon" />
                        <WhatsAppIcon id="FooterAlignSec3SocialIcon" />
                        <InstagramIcon id="FooterAlignSec3SocialIcon" />
                        <LinkedInIcon id="FooterAlignSec3SocialIcon" />
                    </div>
                </div>
            </div>

        </>
    )
}
