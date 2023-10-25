import React from 'react'
import { Container } from 'react-bootstrap'
import foter from "../assets/img/foter.png";
import { Discord, Instagram, Twitter } from './Mysvg';

const Myfooter = () => {
  return (
    <div className='bcg_footer'>
        <Container>
            <div className='text-center pt-3'>
                <img className='pt-3' src={foter} alt="" />
                <div className='pt-3'>
                <Twitter/>
                <Instagram/>
                <Discord/>
                </div>
            </div>
        </Container>
        <div className='pt-4'>
            <p className='footer_line'></p>
        </div>
            <div className='text-center pb-4 pt-1'>
                <p className='font_Montserrat fs_16 fw_400 text-white mb-0'>© Cyber FPS 2022</p>
            </div>
    </div>
  )
}

export default Myfooter