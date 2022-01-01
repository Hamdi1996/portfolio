import React from 'react'
import './contactMe.css'
import { navigationLinks } from '../../helpers/navigationLinks'
import { ImGithub, ImLinkedin, ImLocation, ImUserTie } from "react-icons/im";
import { GoMail } from "react-icons/go";
import { HiPhone } from "react-icons/hi";

function createLinks() {
  return navigationLinks.map((e, idx) => (
    <p key={idx}><a href={e.ref}>{e.name}</a></p>
  ))
}

function ContactMe() {
  return (
    <div className="contactMe__container" id="contact">
      <div className="contactMe__data__links">
        <div>
         
          <p style={{display:'block'}}>  <ImLocation/> Cairo, Egypt</p>
          <p> <ImUserTie/> Hamdy Mahmoud</p>
          <p> <HiPhone/> (020) 15-51-84-80-94</p>
             {/* eslint-disable-next-line */}
          <p> <GoMail/> <a href='hamdy.fcai@gmail.com' aria-hidden rel="noreferrer"></a> hamdy.fcai@gmail.com</p>
          <p><a href='https://www.linkedin.com/in/hamdimahmoud/' aria-hidden  rel="noreferrer"> <ImLinkedin/> </a>LinkedIn</p>
          <p> <a href='https://github.com/Hamdi1996'aria-hidden rel="noreferrer"> <ImGithub/> </a>Git-Hub</p>
        </div>
        <div>
          {createLinks()}
        </div>
      </div>
      <div style={{ textAlign:'center'}}>Copyright&copy; {new Date().getFullYear()} All rights reserved</div>
    </div>
  )
}

export default ContactMe
