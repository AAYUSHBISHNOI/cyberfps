import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import rect from "../assets/img/Rectangle 27.png";

const Cyber = () => {
  return (
    <div className='bcg_cyber mt-lg-5 pb-lg-5 pt-lg-5'>
    <Container className='pb-5 pt-5'>
        <Row className='pb-lg-5'>
            <Col lg={6}>
                   <h2 className='fs_64 fw_400 font_Audiowide text-black'>What is <span className='txt_clr'>CyberFPS</span></h2>
                   <div className='linee'></div>
                   <p className='txt_clr_1 fw_400 fs_16 font_Montserrat mt-4'>CyberFPS is centered around 5v5 Search & Destroy style combat with <span className='d-xl-block'>P2E mechanics featuring the $AMMO Token and deep integrations</span> <span className='d-xl-block'>within the CryptoStraps ecosystem.</span></p>
                   <p className='txt_clr_1 fw_400 fs_16 font_Montserrat mt-4'>CyberFPS pits 2 teams of 5 players against each other with the <span className='d-xl-block'>objective being to attack or defend depending on which side you</span><span className='d-xl-block'>start on. This "Search & Destroy" style combat has been implemented</span><span className='d-xl-block'>in many popular FPS titles and is a high-skill cap game mode.</span></p>
            </Col>
            <Col lg={6} className=''>
                <img className='w-100' src={rect} alt="" />
            </Col>
        </Row>
    </Container>
</div>
  )
}

export default Cyber