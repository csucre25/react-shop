import React from 'react';
import './about.scss';

const About = () => {
  return (
    <div className='about-container'>
      <h1>Carlos Sucre Gamboa</h1>
      <div className='container'>
        <img src="https://avatars.githubusercontent.com/u/94577359?v=4" alt="" />
        <div>
          <p>Hi, I&apos;m Carlos Sucre, ABAP developer.</p>
          <ul>
            <li> I am constantly improving my skills to build quality software.</li>
            <li> I prefer novelty, imaginative ideas, and work that involves change and variety.</li>
            <li> I like to explore new technologies and develop software.</li>
          </ul>  
          <p>At Make It Real I learned:</p>
          <ul>
            <li> How to use flex box.</li>
            <li> Create apps using react.</li>
            <li> How to use sass.</li>
          </ul>
          <p>Contact:</p>
          <ul>
            <li> <a href="https://github.com/csucre25" target="_blank" rel="noreferrer">Github</a></li>
            <li> <a href="mailto:csucre.420@gmail.com">csucre.420@gmail.com</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
/*
console.log(new Date())
console.log(new Date().toLocaleTimeString())
let initialDate = new Date();
let auxiliarDate = new Date();
auxiliarDate.setSeconds(initialDate.getSeconds() + 100);
console.log(initialDate.toLocaleTimeString())
let timeStamp = new Date(auxiliarDate - initialDate);
console.log(timeStamp)
let timeStamp2 = auxiliarDate - initialDate;
console.log(parseInt(timeStamp2/60000),timeStamp2/1000%60);

*/
export default About;