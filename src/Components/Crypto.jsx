import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import head from "../assets/img/cs.png";

const Crypto = () => {
  return (
    <div className='bg-black'>
    <Container className='pt-5 pb-5'>
        <Row className='pt-lg-5 pb-lg-5 align-items-center justify-content-between'>
            <Col md={5} className=''>
                <img className='w-100' src={head} alt="" />
            </Col>
            <Col md={1}></Col>
            <Col md={6} className='pt-4'>
                <h2 className='fs_64 fw_400 font_Audiowide text-white'>CryptoStraps </h2>
                <div className='linee'></div>
                <p className='font_Montserrat fs_16 fw_400 txt_clr_2 pt-3'>CryptoStraps are firearms pushing the boundaries of 3D animated art. <span className='d-xl-block'>CyberFPS will be powered by CryptoStraps $AMMO and is directly</span> <span className='d-xl-block'> integrated with the existing CryptoStraps NFTs. You will be able to use</span><span className='d-xl-block'> CryptoStraps NFTs in-game and the visuals/graphics of CyberFPS are</span> <span className='d-xl-block'>designed by the CryptoStraps 3D Studio.</span></p>
            </Col>
        </Row>
    </Container>
</div>
  )
}

export default Crypto