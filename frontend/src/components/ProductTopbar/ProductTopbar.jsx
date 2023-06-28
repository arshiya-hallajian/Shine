import React from 'react'
import './ProductTopbar.css'
import { SiTelegram } from 'react-icons/si'
import { FaLinkedinIn } from 'react-icons/fa'
import { ImPinterest } from 'react-icons/im'
import { SiTwitter } from 'react-icons/si'
import { FaFacebookF } from 'react-icons/fa'
export default function ProductTopbar() {
  return (
    <nav className='ProductTopbar'>
      <p className='mb-0'>1402/1/29</p>
      <div>
        <a href="#"><SiTelegram /></a>
        <a href="#"><FaLinkedinIn /></a>
        <a href="#"><ImPinterest /></a>
        <a href="#"><SiTwitter /></a>
        <a href="#"><FaFacebookF /></a>
      </div>
    </nav>
  )
}
