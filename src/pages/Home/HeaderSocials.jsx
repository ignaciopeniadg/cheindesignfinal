
import React from 'react'
import './headersocials.css'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiOutlineYoutube} from 'react-icons/ai'
import {AiOutlineBehance} from 'react-icons/ai'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {AiOutlineGithub} from 'react-icons/ai'


const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a className='iconos__rrss' href='https://linkedin.com' target='_blank'><AiOutlineLinkedin/></a>
            <a className='iconos__rrss' href='https://behance.net' target='_blank'><AiOutlineBehance/></a>
            <a className='iconos__rrss' href='https://github.com' target='_blank'><AiOutlineGithub/></a>
            <a className='iconos__rrss' href='https://youtube.com' target='_blank'><AiOutlineYoutube/></a>
            <a className='iconos__rrss' href='https://instagram' target='_blank'><AiOutlineInstagram/></a>
        </div>
    )
}

export default HeaderSocials