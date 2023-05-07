import React from 'react'
import { Container , Row , Col } from 'reactstrap';
import categoryimg01 from "../../../assets/image/02.png";
import categoryimg02 from "../../../assets/image/05.png";
import categoryimg03 from "../../../assets/image/03.png";
import categoryimg04 from "../../../assets/image/04.png";
import "../../../style/category.css";

 const categoryData = [
    {
        display: 'fastfood',
        imgUrl : categoryimg01
    },
    {
        display: 'Pizza',
        imgUrl : categoryimg02
    },
    {
        display: 'Asian food',
        imgUrl : categoryimg03
    },
    {
        display: 'Row Meat ',
        imgUrl : categoryimg04
    },
 ]



const Category = () => {
  return (
    <Container>
        <Row>
            {
                categoryData.map((item,index) => (
                    <Col lg='3' md='4' sm="6" xs="6" className='coling mt-3'> 
                    <div className="category-item d-flex align-items-center gap-3  mb-25">
                        <div className="category-img">
                            <img src={item.imgUrl} alt='category-img'></img>
                        </div>
                        <h6>{item.display}</h6>
                    </div>
                    </Col>

                ))

                }    
           
        </Row>
    </Container>
  )
}

export default Category
