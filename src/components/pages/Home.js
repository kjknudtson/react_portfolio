import React from "react";
import { Link } from "react-router-dom";
import "./style/mainstyle.css";
import "./style/style.css";

function Home() {
  return (
    <section>
    
      <div className="jumbotron">
        <h1 className="display-4">Welcome to Kyle Knudtson's Personal Portfolio Site!</h1>
        <p className="lead homeContent">This is a website I made to showcase the various projects I've worked on.</p>
        <hr className="my-4" />
        <p className="homeContent">Use the navigation bar above, or the button below, to jump straight into my portfolio.</p>
        <Link
          to="/portfolio"
          className="btn btn-primary btn-lg"
        >
          Let's go!
        </Link>
      </div>
    

  </section>
  );
}

export default Home;
