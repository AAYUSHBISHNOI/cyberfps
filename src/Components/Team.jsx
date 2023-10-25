import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import man from "../assets/img/colin.png";
import phra from "../assets/img/phara.png";
import zach from "../assets/img/zach.png";
import arlen from "../assets/img/arlen.png";

const Team = () => {
  return (
    <div className='pt-5 mt-lg-5 pb-lg-5'>
    <Container className='pt-xxl-5 pb-lg-2'>
    <h2 className='fs_64 fw_400 font_Audiowide text-black text-center'>Team</h2>
    <div className='d-flex justify-content-center'>
        <p className='linee_2'></p>
    </div>
    <Row className='mt-3 d-flex justify-content-center'>
        <Col sm={6} md={4} xl={3}>
            <div className='card_1'>
                <img className='w-100' src={man} alt="#" />
                <p className='fs_24 fw_600 font_Montserrat text-black mb-0'>Collin</p>
                <p className='fs_16 fw_400 font_Montserrat text-black'>Founder</p>
            </div>
        </Col>
        <Col sm={6} md={4} xl={3}>
            <div className='card_1'>
                <img className='w-100' src={phra} alt="#" />
                <p className='fs_24 fw_600 font_Montserrat text-black mb-0'>Pharaox</p>
                <p className='fs_16 fw_400 font_Montserrat text-black'>Founder</p>
            </div>
        </Col>
        <Col sm={6} md={4} xl={3}>
            <div className='card_1'>
                <img className='w-100' src={zach} alt="#" />
                <p className='fs_24 fw_600 font_Montserrat text-black mb-0'>Zach</p>
                <p className='fs_16 fw_400 font_Montserrat text-black'>CM</p>
            </div>
        </Col>
        <Col sm={6} md={4} xl={3}>
            <div className='card_1'>
                <img className='w-100' src={arlen} alt="#" />
                <p className='fs_24 fw_600 font_Montserrat text-black mb-0'>Arlen</p>
                <p className='fs_16 fw_400 font_Montserrat text-black'>CM</p>
            </div>
        </Col>
    </Row>
    </Container>
</div>
  )
}

export default Team