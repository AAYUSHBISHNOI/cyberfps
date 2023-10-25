import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Discord, Dscrd, Inst, Instagram, Twiter, Twitter } from './Mysvg'
import logo from "../assets/img/menu.png";
import hero from "../assets/img/cyber.png";
import man from "../assets/img/hero.png";
import arow from "../assets/img/arrow.png";
import arrow from "../assets/img/arow.png";

const Myheader = () => {
  return (
    <div className='bcg_header min-vh-100 d-flex flex-column'>
    <Container>
      <nav className='d-flex align-items-center justify-content-between pt-2 pb-2'>
        <div>
          <img className='w_50' src={logo} alt="" />
        </div>
        <div className='d-xl-none'>
        <Twiter/>
        <Inst/>
        <Dscrd/>
        </div>
        <label for="iconbox" >
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                    <input type="checkbox" id="iconbox" hidden></input>
        <ul className='d-flex align-items-center nav-lg-screen'>
          <div className=' position-relative hover-link margin_link'>
            <img className='arrw_pstn' src={arrow} alt="" />
          <li className='abt_img'><a href="w" className='fw_400 fs_16 font_Audiowide text-white'>About</a></li>
          <img className='arw_pstn' src={arow} alt="" />
          </div>
          <div  className=' position-relative hover-link margin_link'>
          <img className='arrw_pstn_1' src={arrow} alt="" />
          <li className='cry_img ms-3'><a href="w" className='fw_400 fs_16 font_Audiowide text-white'>CryptoStraps</a></li>
          <img className='arw_pstn_1' src={arow} alt="" />
          </div>
          <div  className=' position-relative hover-link margin_link'>
          <img className='arw_pstn_3' src={arrow} alt="" />
          <li className='team_img ms-3'><a href="w" className='fw_400 fs_16 font_Audiowide text-white'>Team</a></li>
          <img className='arw_pstn' src={arow} alt="" />
          </div>
          <div  className=' position-relative hover-link margin_link'>
          <img className='arrw_pstn_2' src={arrow} alt="" />
          <li className='faq_img ms-3'><a href="w" className='fw_400 fs_16 font_Audiowide text-white'>Faq</a></li>
          <img className='arw_pstn' src={arow} alt="" />
          </div>
          <div  className=' position-relative hover-link margin_link'>
          <img className='arrw_pstn_4' src={arrow} alt="" />
          <li className='light_img ms-3'><a href="w" className='fw_400 fs_16 font_Audiowide text-white'>Light Paper</a></li>        
          <img className='arw_pstn_4' src={arow} alt="" />
          </div>
        </ul>
        <div className='dnone'>
        <Twitter/>
        <Instagram/>
        <Discord/>
        </div>
      </nav>
    </Container>
     <section className='d-lg-flex flex-grow-1'>
      <Container>
      <Row className='align-items-center h-100'>
          <Col lg={6} className='h-100 d-flex flex-column justify-content-center align-items-center align-items-lg-start'>
            <img className=' w-100' src={hero} alt="" />
            <h1 className='font_Audiowide fs_28 fw_400 text-white'>Web3 Gaming Reimagined</h1>
            <div className='mt-4'>
            <button className='fs_16 fw_400 font_Audiowide bttn_get'>Get Started</button>
            <button className='fs_16 fw_400 font_Audiowide text-white bttn_learn ms-3'>Learn More</button>
            </div>
          </Col>
          <Col lg={6} className='h-100 d-flex align-items-end'>
            <img className=' w-100' src={man} alt="" />
          </Col>
        </Row>
      </Container>
      </section>
</div>
  )
}

export default Myheader