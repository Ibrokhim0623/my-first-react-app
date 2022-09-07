import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram'
import TelegramIcon from '@mui/icons-material/Telegram'
import TwitterIcon from '@mui/icons-material/Twitter'
import FacebookIcon from '@mui/icons-material/Facebook'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='mediaSocial'>
            <InstagramIcon />
            <TelegramIcon />
            <TwitterIcon />
            <FacebookIcon />
        </div>
    </div>
  )
}

export default Footer