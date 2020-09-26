import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./style/portfoliostyle.css";
import Planner from "../assets/img/Workday_Scheduler.png";
import WX from "../assets/img/Weather_Dashboard.png";
import Pokedex from "../assets/img/Pokedex.png";
import Park from "../assets/img/FindAPark.png";
import Note from "../assets/img/Note_Taker_Pic.png";
import Site from "../assets/img/sitelogic_pic.png";

function Portfolio() {
  return (
    <section className="container">
      <div className="row">
        <div className="col-md-12">
          <h1>My Portfolio</h1>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-6">
          <div className="row">            
            <div className="col-sm-12">              
              <a href="https://kjknudtson.github.io/DayPlanner/" target="_blank"><img className="img-responsive" src={Planner} alt="Project Web Page" height="100px" width="50%" /></a>
            </div>
          </div>  
          <div className="row">
            <div className="col-sm-12">
              <p className="portfolioContent">Day Planner (<a href="https://github.com/kjknudtson/DayPlanner" target="_blank">Repository</a>)</p>              
            </div>
          </div>
           
        </div>

        <div className="col-sm-6">
          <div className="row">
            <div className="col-sm-12">
              <a href="https://kjknudtson.github.io/Weather_Dashboard/" target="_blank"><img className="img-responsive" src={WX} alt="Picture of Project Web Page" height="100px" width="50%" /></a>
            </div>
          </div>
        
          <div className="row">
            <div className="col-sm-12">
              <p className="portfolioContent">Weather Dashboard (<a href="https://github.com/kjknudtson/Weather_Dashboard" target="_blank">Repository</a>)</p>
            </div>
          </div> 
        </div>
      </div>

      <div className="row">
        <div className="col-sm-6">
          <div className="row">
            <div className="col-sm-12">
              <a href="https://kjknudtson.github.io/Project_Pokedex/" target="_blank"><img className="img-responsive" src={Pokedex} alt="Picture of Project Web Page" height="100px" width="50%" /></a>
            </div>
          </div>  
          <div className="row">
            <div className="col-sm-12">
              <p className="portfolioContent">Pokedex (<a href="https://github.com/kjknudtson/Project_Pokedex" target="_blank">Repository</a>)</p>
            </div>
          </div>  
        </div>

        <div className="col-sm-6">
          <div className="row">
            <div className="col-sm-12">
              <a href="https://shanerunnels.github.io/FindAPark/" target="_blank"><img className="img-responsive" src={Park} alt="Picture of Project Web Page" height="100px" width="50%" /></a>
            </div>
          </div>
        
          <div className="row">
            <div className="col-sm-12">
              <p className="portfolioContent">Find a Park! (<a href="https://github.com/shanerunnels/FindAPark" target="_blank">Repository</a>)</p>
            </div>
          </div> 
       </div>
      </div>

      <div className="row">
        <div className="col-sm-6">
          <div className="row">
            <div className="col-sm-12">
              <a href="https://radiant-coast-15901.herokuapp.com/notes" target="_blank"><img className="img-responsive" src={Note} alt="Picture of Project Web Page" height="100px" width="50%" /></a>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <p className="portfolioContent">Note Taker (<a href="https://github.com/kjknudtson/Note_Taker" target="_blank">Repository</a>)</p>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="row">
            <div className="col-sm-12">
              <a href="https://glacial-reef-34949.herokuapp.com/" target="_blank"><img className="img-responsive" src={Site} alt="Picture of Project Web Page" height="100px" width="50%" /></a>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <p className="portfolioContent">SiteLogic (<a href="https://github.com/dbreznay/Daring-Donkeys" target="_blank">Repository</a>)</p>
            </div>
          </div>
        </div>
      </div>    

    </section>
  );
}

export default Portfolio;
