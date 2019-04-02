
import React, { Component } from 'react'
import Header from '../components/headerComponent/header'
import Footer from '../components/footerComponent/footer'
import './about.css'
// import {Container, Row, Col} from 'reactstrap'
 
class About extends Component {
  render() {
    return (
      <div>
        <Header />
 

        <div className="aboutWrapper">
        <h3>About WhyCS</h3>
        <p>We created WhyCS to highlight the importance of core values when it comes to computer science education. Different reasons for teaching computer science aren’t just important so that we can get other people to care about CS, they should also shape what our computer science classes look like - who’s in them, what kinds of things get taught and in what ways. Our values should be expressed in our practice.
          <br /><br />
          This activity draws on the <a href="https://drive.google.com/open?id=0B90AflGXRKMFdzFjYkNTTDRSR2s" target="_blank" rel="noopener noreferrer" >CSed Visions framework</a>, which explores the varied purposes of computer science education and their intersections. The framework was developed by Sara Vogel, Rafi Santo and Dixie Ching through a collaborative process with CS education stakeholders in New York City associated with the <a href="https://Hivenyc.org" target="_blank">Hive NYC Learning Network</a>.  It’s now <a herf="https://www.csforall.org/script/" target="_blank">been used</a> to help over one hundred K12 school districts across the United States deliberate about their core values around CS education and design their local efforts around what they care about most. Researchers at CSforAll and UC-Irvine are also drawing on the CSed Visions framework in a research-practice partnership studying how district values around CSed play out within the planning and implementation of district-wide CS initiatives.</p>
        <h3>About CSforALL</h3>
        <p>CSforALL’s mission is to make high-quality computer science an integral part of the educational experience of all K-12 students and teachers and to support student pathways to college and career success.
        <br /><br />
        CSforALL, shorthand for “Computer Science for All,” serves as the national hub for the K-12 computer science education movement. We are the community organizer of school districts, nonprofits, for-profits, and government agencies that share the goal of rigorous, inclusive and sustainable CS education in the U.S.</p>
        <p>The organization employs the following strategies for achieving this mission:</p>
        <ul>
          <li><b>Supporting Local Change</b> — helping education systems at the local and regional level connect and develop strategic plans to serve all students</li>
          <li><b>Increasing Rigor and Equity</b> — building the knowledge base and connecting research to practice</li>
          <li><b>Growing the Movement</b> — serving as a “front door” for newcomers and supporting a national network of all participants</li>
        </ul>
        <p>CSforALL was founded in 2013 as CSNYC — the New York City Foundation for Computer Science Education — with a mission to bring CS to all 1.1 million students in the NYC public school system. Our early efforts to build community support and funding for CS in local public schools led to the 2015 launch of a 10-year “Computer Science for All” initiative in partnership with the city that will reach every student by 2025. In 2018, CSNYC became CSforALL to steward the national movement and support local change efforts like New York City’s across the country.</p>
        </div>



        <Footer />
 
      </div>
    )
  }
}

export default About
