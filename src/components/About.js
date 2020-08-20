import React, { Component } from 'react';
import {Link} from "react-router-dom"
import Clock from "./Time"
import  "./About.css"

class About extends Component {
  render() {
    return (
        <div class="box">
          <div class='mor'> 
          <h2 class='new'>Good morning Developers</h2>
          </div>
          <div class='read'>
          <Link>
          Read the full article
          </Link>
          </div >
          <div class='time'>

          <Clock ></Clock>
          </div>
        </div>
    );
  }
}

export default About;