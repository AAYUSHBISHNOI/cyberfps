import React from 'react'
import { Container } from 'react-bootstrap'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import gameply from "../assets/img/game.png";
import game from "../assets/img/gif.gif";
import { Play } from './Mysvg';

const Game = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className='mt-md-5'>
        <Container>
          <div className='text-center pt-5'>
            <h2 className='fs_64 fw_400 font_Audiowide line position-relative'>CyberFPS <span className='txt_clr'>Gameplay</span></h2>

    <Button variant="primary" onClick={handleShow}>
      <Play/>
      </Button>
      <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter"
      centered>
        <Modal.Header>
          <Modal.Title  id="contained-modal-title-vcenter"><img className='w-100' src={game} alt="" /></Modal.Title>
        </Modal.Header>
        <Modal.Body></Modal.Body>
      </Modal>
      <img className='w-100' src={gameply} alt="" />
          </div>
        </Container>
    </div>
  )
}

export default Game