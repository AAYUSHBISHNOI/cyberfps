import React from 'react'
import loader from '../assets/img/cyber.png'

const Preloader = () => {
  setTimeout(() => {
    const box = document.getElementById("box");
    box.style.display = "none";
    document.body.classList.remove("overflow-hidden")
}, 3000);
  return (
    <div id="box" class="overflow-hidden">
        <div id="preloader-box">
            <img class="mx-auto Animation w-25" src={loader} alt="preloder" />
        </div>
    </div>
  )
}

export default Preloader