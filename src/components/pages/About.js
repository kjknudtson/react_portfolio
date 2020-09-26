import React from "react";
import "./style/mainstyle.css";
import IMG from "../assets/img/Kyle_Profile_Pic.jpg";
import RES from "../assets/docs/Kyle_Web_Developer_Resume.pdf";

function About() {
  return (
    <section className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="page-header">
            <h1>About Me</h1>
          </div>
        </div>
      </div>
      <div className="row">          
        <div className="col-md-4">
          <img src={IMG} alt="Kyle" />
        </div>
        <div className="col-md-8">            
          <div className="row">
            <p className="aboutContent">Hello!  My name is Kyle Knudtson and I am a student currently enrolled in coding bootcamp.  I am originally from Wisconsin, but have now been living in Tennessee for the last eight years with my lovely wife, Vileka, and our sweet puppy, Morty.</p>
          </div>
          <div className="row">
            <p className="aboutContent">I am a hardworking, focused, and dedicated individual, that doesn't back down from a challenge and always gives one hundred percent.  I will be learning a multitude of coding languages and skills during this boot code that I will use to handle any task one might have.</p>
          </div>
        </div>           
      </div>
      <div className="row contact">
        <p className="stuff">Email: kjknudtson1989@gmail.com</p>
      </div>
      <div className="row contact">
        <p className="stuff">Phone: 262-880-4271</p>
      </div>
      <div className="row contact">
        <p className="stuff"><a href={RES} target="_blank">Resume</a></p>
      </div>       
    </section>
  );
}

export default About;
