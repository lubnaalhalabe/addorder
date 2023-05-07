import React, { useState ,useEffect } from "react";

import Helemt from "../components/Helemt/Helemt";
import { Container , Row , Col , ListGroup ,ListGroupItem } from "reactstrap";
import heroimg from "../assets/image/hero-img.png" ;
import {NavLink , Link} from "react-router-dom" ;
import products from "../assets/fake-date/products.js";

import "../style/hero-set.css";
import "../style/home.css";
import Category from "../components/Ul/category/Category";

import featerimg05 from "../assets/image/06.png";
import featerimg06 from "../assets/image/08.png";
import featerimg07 from "../assets/image/07.png";
import ProductCart from "../components/Ul/category/product-card/ProductCart";
import populer11 from "../assets/image/11.png";
import populer15 from "../assets/image/15.png";
import populer23 from "../assets/image/23.png";
import delivery from "../assets/image/motor.png";
import networkimg from "../assets/image/network.png"
import TerimanalSlider from "../components/Ul/category/slider/TerimanalSlider";


const featerData = [
    {
        title:"Quick Delivery " ,
        imgUrl : featerimg05 ,
        desc :"Lorem ipsum door sit amet , consectetur adipiscing elit "
    },
    {
        title:"Super Dines in " ,
        imgUrl : featerimg07 ,
        desc :"Lorem ipsum door sit amet , consectetur adipiscing elit "
    },
    {
        title: "Easy Pick Up" ,
        imgUrl : featerimg06 ,
        desc : "Lorem ipsum door sit amet , consectetur adipiscing elit "
    },
]

const Home = () => {
    const [category ,setCategory] = useState('ALL')
    const [allProducts ,setAllProducts] = useState(products)
    const [hotPizza ,setHotPizza] = useState([])
    useEffect (()=> {
        const pizzafilter = products.filter(item => item.category ==='Pizza');
        const siledpizza = pizzafilter.slice(0,4);
        setHotPizza(siledpizza);

    } ,[])
      

    useEffect (()=>{
      if(category === 'ALL'){
        setAllProducts(products)
      }
      if (category === 'BURGER'){
        const  filterredproduct = products.filter(item => item.category === "Burger")
        setAllProducts(filterredproduct)
      }
      if (category === 'PIZZA'){
        const  filterredproduct = products.filter(item => item.category === "Pizza")
        setAllProducts(filterredproduct)
      }
      if (category === 'BREAD'){
        const  filterredproduct = products.filter(item => item.category === "Bread")
        setAllProducts(filterredproduct)
      }
    } ,[category])
    return <Helemt title="Home">
        <section>
            <Container>
                <Row>
                    <Col lg="6" md="6">
                        <div className="hero-content">
                            <h5 className="mb-3"> Easy  way to make on order </h5>
                            <h1 className="mb-4 hero-title"><span>HUNGRY?</span> Just wait <br /> food  at <span> your door</span></h1>
                            <p>Lorem ipsum door sit amet , consectetur adipiscing elit . 
                                Qui magni delectus tentur autem, sint veritatis</p>
                            <div className="hero-butn d-flex align-items-center gap-5 mt-4">
                                <button className="Order-butn d-flex align-items-center
                                justify-content-between"> Order Now
                                 <i class="ri-arrow-right-s-line"></i></button>
                                 <button className="all-food"><Link to="/foods">See all foods</Link></button>
                            </div>
                            <div className=" hero-service d-flex align-items-center gap-5 mt-5">
                                <p className="d-flex align-items-center gap-2">
                                <span className="shopping-icon"><i class="ri-car-line"></i></span>
                                No Shapping  charge </p>
                                <p className="d-flex align-items-center gap-2">
                                    <span className="shopping-icon">
                                    <i class="ri-shield-check-line"></i></span> 100% secure
                                checkout</p>
                            </div>
                        </div>

                    </Col>
                    <Col lg="6" md="6">
                        <div className="hero-img">
                            <img src={heroimg} alt="hero-img" className="w-100"></img>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        <section className="pt-0">
            <Category />
        </section>
        <section>
            <Container>
                <Row>
                    <Col lg="12" className="text-center">
                        <h5 className="feater-sub mb-4">What we serve</h5>
                        <h2 className="feater-title">just sit back at home</h2>
                        <h2 className="feater-title">we will <span>take  care</span></h2>
                        <p className=" mt-4 mb-1 feater-text">Lorem ipsum door sit amet , consectetur adipiscing elit . </p>
                        <p className="feater-text">Lorem ipsum door sit amet , consectetur adipiscing elit .</p>

                    </Col>
                    {
                        featerData.map((item ,index)=>(
                            <Col lg="4" md="6"  sm="6" key= {index} className="mt-5">
                             <div className="deater-items text-center p-3 py-10">
                                <img src={item.imgUrl} alt="feater-img" className="mb-2" ></img>
                                <h5 className="fw-bold mb-3">{item.title}</h5>
                                <p >{item.desc}</p>
                             </div>
                           </Col>

                        ))
                    }
                    
                </Row>
            </Container>
        </section>
        <section>
            <Container>
                <Row>
                    <Col lg="12" className="text-center">
                    <h2>Populer Foods</h2>
                    </Col>
                    <Col lg="12">
                        <div className="food-populer d-flex align-items-center justify-content-center gap-5">
                            <button className={` all-but ${category === 'ALL' ? 'populerbutnActive' : '' } ` }  onClick={()=> {setCategory('ALL')}}>All</button>
                            <button className={` all-but  d-flex align-items-center gap-2 ${category === 'BURGER' ? 'populerbutnActive' : '' } ` } 
                             onClick={()=> {setCategory('BURGER')}}><img src={populer11} alt="" />Burger</button>
                            <button className={` all-but  d-flex align-items-center gap-2 ${category === 'PIZZA' ? 'populerbutnActive' : '' } ` }
                            onClick={()=> {setCategory('PIZZA')}}><img src={populer15} alt="" />pizza</button>
                            <button className={` all-but  d-flex align-items-center gap-2 ${category === 'BREAD' ? 'populerbutnActive' : '' } ` }
                            onClick={()=> {setCategory('BREAD')}}><img src={populer23} alt="" />bread</button> 
                        </div>
                    </Col>
                    {
                        allProducts.map(item =>(
                            <Col lg="3" md="4" sm="6" xs="6" key={item.id} className ="mt-5">
                            <ProductCart  item={item}   />
                            </Col>
                        ))
                    }
                  
                </Row>
            </Container>
        </section>
        <section className="why-loger">
            <Container>
                <Row>
                    <Col lg="6" md="6" className="mt-10">
                        <img src={delivery} alt="delivery-img"  className="w-100 "/>
                    </Col>
                    <Col lg="6" md="6">
                    <div className="why-treaty-try">
                        <h2 className="why-treat-text mb-4">Why <span> Testy-Treat ?</span> </h2>
                        <p className="tread-text-desc">Lorem ipsum door sit amet , consectetur adipiscing elit .
                            Lorem ipsum door sit amet , 
                           consectetur adipiscing elit .Lorem ipsum door sit amet , 
                          consectetur adipiscing elit Lorem ipsum door sit amet , 
                          consectetur adipiscing elit 
                        </p>
                        <ListGroup>
                            <ListGroupItem className="border-0 ps-0">
                                <p className="choose-titel d-flex align-items-center gap-2">
                                <i class="ri-checkbox-circle-line"></i> Fresh and 
                                testy 
                                foods
                                </p>
                                <p className="choose-desc">Lorem ipsum door sit amet , consectetur adipiscing elit.</p>
                                </ListGroupItem>
                                <ListGroupItem className="border-0 ps-0">
                                    <p className="choose-titel d-flex align-items-center gap-2">
                                    <i class="ri-checkbox-circle-line"></i> Quality  
                                    support
                                    foods
                                    </p>
                                    <p className="choose-desc">Lorem ipsum door sit amet , consectetur adipiscing elit .</p>
                                </ListGroupItem>
                                <ListGroupItem className="border-0 ps-0">
                                   <p className="choose-titel d-flex align-items-center gap-2">
                                    <i class="ri-checkbox-circle-line"></i> Order from
                                    any location 
                                    </p>
                                    <p className="choose-desc">Lorem ipsum door sit amet , consectetur adipiscing elit .</p>
                                </ListGroupItem>
                        </ListGroup>
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>
         <section className="pt-0">
            <Container>
                <Row >
                    <Col lg="12" className="text-center mb-5">
                        <h2>Hot Pizza</h2>
                    </Col>

                    {
                       hotPizza.map(item =>(
                        <Col lg='3' md='4' key={item.id}>
                            <ProductCart item={item} />
                        </Col>
                       )) 
                    }
                </Row>
            </Container>
         </section>
         <section>
            <Container>
                <Row>
                    <Col lg="6" md="6">
                        <div className="testimonial">
                        <h5 className="termenal-network mb-3 ">Testimonial</h5>
                        <h2 className="termenal-title  mb-3">
                            What our <span>customers</span> are saying
                        </h2>
                        <p className="termanal-desc mb-5  ">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit
                        . Ut dolor optio, vel omnis aut et 
                        nulla aspernatur nihil accusantium ipsam!
                        </p>
                        <TerimanalSlider />
                        </div>
                    </Col>
                     <Col lg="6" md="6">
                        <img src={networkimg} alt="networkimg" className="w-100" />
                    </Col>
                </Row>
            </Container>
         </section>
        </Helemt>;
}
export default Home;