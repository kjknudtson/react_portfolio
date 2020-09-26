import React from "react";
import { Link, Route } from "react-router-dom";
import "./style/mainstyle.css";
import "./style/contactstyle.css"



function Contact() {
  return (
    <section className="container">
    
        <div className="row">
            <div className="col-md-12">
                <h1>Contact Form</h1>
            </div>
        </div>
      <form>
        <div className="form-group">
          
          <label for="formGroupExampleInput">Full Name</label>
          <input type="text" className="form-control" id="formGroupExampleInput" placeholder="John Smith" />
        </div>
        <div className="form-group">
         
          <label for="exampleInputEmail1">Email</label>
          <input type="email" className="form-control" id="exampleInputEmail1" placeholder="example@gmail.com" />
        </div>
        <div className="form-group">
          
          <label for="exampleFormControlTextarea1">Message</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Contact Form Still Under Construction!"></textarea>
        </div>
        <button type="submit" className="btn btn-primary submit">Submit</button>
      </form>

    </section>
  );
}

export default Contact;
