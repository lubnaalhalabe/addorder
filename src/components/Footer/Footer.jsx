import React from 'react';
import { Container , Row , Col, ListGroup, ListGroupItem } from "reactstrap";
import loge from '../../assets/image/1.jfif';
import '../../style/footer.css'
import {NavLink , Link} from "react-router-dom" ;

const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg="3" md='4' sm='6'>
          <div className=" footer__loge text-start">
                    <img src={loge} path="loge" />
                    <h5> Tasty Treat</h5>
                    <p>
                      Lorem  ipsum dolor sit amet consectetur adipisicing elit.
                      Nesciunt pariatur
                    </p>
          </div>
          </Col>
          <Col lg="3" md='4' sm='6'>
           <h5 className='footer-title'>Delivery Time</h5>
           <ListGroup className='delivery-time-list'>
            <ListGroupItem className='delivary-time-item border-0 ps-0'>
             <span> Sunday - Thursday</span>
             <p>10:00am - 11:00pm</p>
            </ListGroupItem>
            <ListGroupItem className='delivary-time-item border-0 ps-0'>
             <span> Friday - Saturday</span>
             <p>off day</p>
            </ListGroupItem>
           </ListGroup>

            
          </Col>
          <Col lg="3" md='4' sm='6'>
          <h5 className='footer-title'>Contact</h5>
           <ListGroup className='delivery-time-list'>
           <ListGroupItem className="delivary-time-item border-0 ps-0">
             <p>Location: Syria,bnn, vbnmjhfdd ,sdfghj</p>
            </ListGroupItem>
            <ListGroupItem className="delivary-time-item border-0 ps-0">
             <span>Phone: 0102355486398</span>
            </ListGroupItem>
            <ListGroupItem className="delivary-time-item border-0 ps-0">
             <span> Email: onlid@gmail.com</span>
            </ListGroupItem>
           </ListGroup>


          </Col>
          <Col lg="3" md='4' sm='6'>
          <h5 className='footer-title'>Newsletter</h5>
          <p className='footer-dec'>Subscribe our newsletter</p>
          <div className='newseletter'>
            <input type="email" placeholder='Enter your email'/>
            <span><i class="ri-send-plane-line"></i></span>
          </div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col lg="6" md="6">
            <p className='copyright-text'>Copyright - 2023 , websit mode by Muhibur Rahman .
               All Rights Reserved</p>
          </Col>
          <Col>
          <div className="social-links d-flex align-items-center gap-4 justify-content-end">
          <p className='m-0 '>Follow: </p>
          <span><Link to='https://www.facebook.com'> <i class="ri-facebook-line"></i></Link></span>
          <span><Link to='https://www.github.com'> <i class="ri-github-line"></i></Link></span>
          <span><Link to='https://www.youtube.com'> <i class="ri-youtube-line"></i></Link></span>
          <span><Link to='https://www.linkedin.com'> <i class="ri-linkedin-line"></i></Link></span>
          </div>
          </Col>

        </Row>
      </Container>
    </footer>
  ) 
}

export default Footer
