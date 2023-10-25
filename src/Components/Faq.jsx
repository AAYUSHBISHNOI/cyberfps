import React from 'react'
import { Container } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import acd from "../assets/img/ac1.png";
import acde from "../assets/img/abc.png";

const Faq = () => {
  return (
    <div className='bg-black pt-5 pb-5'>
        <Container className='pb-lg-5'>
          <div className='text-center'>
            <h2 className='font_Audiowide fs_64 fw_400 text-white'>Faq</h2>
            <div className='d-flex justify-content-center'>
               <p className='linee_2'></p>
           </div>
        </div>
        <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0" className='mt-4 position-relative'> <img className='acd_bttn' src={acd} alt="" />
        <Accordion.Header>Dui lectus auctor fermentum potenti enim. ?</Accordion.Header>
        <Accordion.Body>
        Dui lectus auctor fermentum potenti enim. Quam donec mauris phasellus at auctor. Risus maecenas commodo <span className='d-xl-block'>eget tellus nullam magna adipiscing facilisis a, nulla.</span> 
        </Accordion.Body>
        <img className='pstn_bttn' src={acde} alt="" />
      </Accordion.Item>
      <Accordion.Item eventKey="1" className='mt-4 position-relative'>  <img className='acd_bttn' src={acd} alt="" />
        <Accordion.Header>Placerat eros faucibus aliquam nunc, mattis</Accordion.Header>
        <Accordion.Body>
        Dui lectus auctor fermentum potenti enim. Quam donec mauris phasellus at auctor. Risus maecenas commodo <span className='d-xl-block'>eget tellus nullam magna adipiscing facilisis a, nulla.</span> 
        </Accordion.Body>
        <img className='pstn_bttn' src={acde} alt="" />
      </Accordion.Item>
      <Accordion.Item eventKey="2" className='mt-4 position-relative'> <img className='acd_bttn' src={acd} alt="" />
        <Accordion.Header>Lorem nunc nunc risus viverra a</Accordion.Header>
        <Accordion.Body>
        Dui lectus auctor fermentum potenti enim. Quam donec mauris phasellus at auctor. Risus maecenas commodo <span className='d-xl-block'>eget tellus nullam magna adipiscing facilisis a, nulla. </span>
        </Accordion.Body>
        <img className='pstn_bttn' src={acde} alt="" />
      </Accordion.Item>
      <Accordion.Item eventKey="3" className='mt-4 position-relative'> <img className='acd_bttn' src={acd} alt="" />
        <Accordion.Header>In aliquet fusce id dictumst id</Accordion.Header>
        <Accordion.Body>
        Dui lectus auctor fermentum potenti enim. Quam donec mauris phasellus at auctor. Risus maecenas commodo <span className='d-xl-block'>eget tellus nullam magna adipiscing facilisis a, nulla. </span>
        </Accordion.Body>
        <img className='pstn_bttn' src={acde} alt="" />
      </Accordion.Item>
      <Accordion.Item eventKey="4" className='mt-4 position-relative'> <img className='acd_bttn' src={acd} alt="" />
        <Accordion.Header>Elementum pellentesque nisi, sagittis, </Accordion.Header>
        <Accordion.Body>
        Dui lectus auctor fermentum potenti enim. Quam donec mauris phasellus at auctor. Risus maecenas commodo <span className='d-xl-block'>eget tellus nullam magna adipiscing facilisis a, nulla. </span>
        </Accordion.Body>
        <img className='pstn_bttn' src={acde} alt="" />
      </Accordion.Item>
         </Accordion>
        </Container>
    </div>
  )
}

export default Faq