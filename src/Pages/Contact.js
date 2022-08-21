import React from 'react';
import { Wrapper, Content, MAP, ImageLOGO } from './Contact.styles';
import Lower from './../components/Lower';
import Footer from './../components/Footer';

import LocationMAP from './../images/rect21.png';
import CrowdLOGO from '../images/crowd-image.jpg';
import LOGOImg from '../images/LogoImg.png';


const Contact = () => (
    <Wrapper>
        <Content>
        <div className = "Behind" style={{ backgroundImage: `url(${CrowdLOGO})` }}>
          <>  
          <div className='Cover'>  
            <div className='Logo'>
                <ImageLOGO src={LOGOImg} alt='logo-image' />
            </div>
            <div className='Nav'>
            <ul class="nav justify-content-center">
                <li class="nav-item">
                    <a class="nav-link"
                 href="../Pages/Home">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href='../Pages/About'>About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="../Pages/Donate">Donations</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="../Pages/Contact">Contact</a>
                </li>
            </ul>
            </div>
                                
            <div class="text-center">
                <div class= "contact">
                <h1><b>Contact Us</b></h1>
                </div>
            </div>
        </div>
        </> 
        </div>

{/* the middle part containing the contact details */}

<div class="container-fluid">
        <div class="row">
            <div class="col">
                <h3 id="condet" >Contact Details</h3>
                    <div class="rectangle"></div>
                        <div class="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" color="green" class="bi bi-telephone" viewBox="0 0 16 16">
                                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                                  </svg>
                                  <i class="bi bi-telephone">080122222222</i>
                            </div>
                        <div class="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" color="green" class="bi bi-envelope-paper" viewBox="0 0 16 16">
                                    <path d="M4 0a2 2 0 0 0-2 2v1.133l-.941.502A2 2 0 0 0 0 5.4V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5.4a2 2 0 0 0-1.059-1.765L14 3.133V2a2 2 0 0 0-2-2H4Zm10 4.267.47.25A1 1 0 0 1 15 5.4v.817l-1 .6v-2.55Zm-1 3.15-3.75 2.25L8 8.917l-1.25.75L3 7.417V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v5.417Zm-11-.6-1-.6V5.4a1 1 0 0 1 .53-.882L2 4.267v2.55Zm13 .566v5.734l-4.778-2.867L15 7.383Zm-.035 6.88A1 1 0 0 1 14 15H2a1 1 0 0 1-.965-.738L8 10.083l6.965 4.18ZM1 13.116V7.383l4.778 2.867L1 13.117Z"/>
                                  </svg>
                                  <i class="bi bi-envelope-paper" >hello@voiceofresilience.org</i>
                            </div>
                        <div class="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" color="green" class="bi bi-geo-alt" viewBox="0 0 16 16">
                                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                              </svg>
                            <i class="bi bi-geo-alt">Lagos Nigeria</i>
                            </div>
                        <div id="map" class="img-fluid">
                                <MAP src={LocationMAP} alt="Location-map" />
                            </div>
                        </div>
            <div id="formfloor" class="col">
                            
                            <form id="form">
                                <div class="mb-3">
                                    <label for="exampleInputName" class="form-label"><b>Full Name</b></label>
                                    <input type="Name" class="form-control" id="exampleInputName"/>
                                </div>
            
                                <div class="mb-3">
                                  <label for="exampleInputEmail1" class="form-label"><b>Email Address</b></label>
                                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                  
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputNumber" class="form-label"><b>Phone Number</b></label>
                                    <input type="Number" class="form-control" id="exampleInputNumber" aria-describedby="PhoneNumberHelp"/>
                                    
                                  </div>
                                  <div class="mb-3">
                                    <label for="exampleInputtext" class="form-label"><b>Subject</b></label>
                                    <input type="Text" class="form-control" id="exampleInputtext" aria-describedby="SubjectHelp"/>
                                    
                                  </div>
                                  <div class="mb-3">
                                    <label for="exampleInputtext" class="form-label"><b>Message</b></label>
                                    <input type="Text" class="form-control" className="mbox" 
                                    id="exampleInputtext" aria-describedby="MessageHelp"/>
                                    
                                  </div>
                                    <input class="submitbtn" type="submit" value="Submit" id="submit"/>
                                
                              </form>
                        </div>
                    </div>   
                </div>
            <Lower />
            <Footer />

        </Content>
    </Wrapper>
);

export default Contact;