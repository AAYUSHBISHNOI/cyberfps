import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import solana from "../assets/img/solana.png";
import unreal from "../assets/img/unreal.png";

const Solana = () => {
  return (
    <div className='pb-5 pt-5 bcg_solana'>
        <Container className='pt-lg-5 pb-lg-5'>
            <Row className='pt-lg-5 pb-lg-5 text-center'>
                <Col md={1}>
                </Col>
                <Col lg={5}>
                    <img className='w-100' src={solana} alt="" />
                </Col>
                <Col lg={5} className='mt-3 mt-lg-0'>
                    <img className='w-60' src={unreal} alt="" />
                </Col>
                <Col md={1}>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Solana