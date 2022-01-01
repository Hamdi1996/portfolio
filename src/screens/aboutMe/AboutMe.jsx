import React from 'react'
import './aboutMe.css'
import person from '../../images/person.png'
import Typed from 'react-typed';
function AboutMe() {
  return (
    <div className="about__container" id="about-me">
     <div>
      <img src={person} alt="person icon" style={{width:'300px'}}/>
     </div>
     <div className="about__text">
       <h1>ABOUT ME</h1>
       <p id="about_pragragh">
       Motivated software engineering graduate from Benha university Faculty of computers and artificial intelligence computer science department.
        NTi Scholarship winner in 2021, NTL Scholarship winner in 2018. Seeking to use improve my skills and learn more
        <Typed 
        strings={[
          "...!!",  
          "...!!", 
          "...!!"]}
          typeSpeed={70}
          backSpeed={60}
          loop
      />
       </p>
     </div>
    </div>
  )
}

export default AboutMe
