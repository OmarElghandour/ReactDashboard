import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FontAwesome from "react-fontawesome";
import SideBar from "./SideBar";
import { Row, Container } from 'react-bootstrap';


const TeachersListing = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => {
                setProducts(json);
                console.log(json);
                console.log(products);
            });
    }, []);

    const truncate = (str) => {
        return str.length > 10 ? str.substring(0, 20) + "..." : str;
    }

    return (

        <div className="product-page">
            <Container>
                <Row>
                <SideBar />
                <div className="col-md-8">
                <ul className="all-teachers">
                <li className="teacher">
                    <img src="https://1.bp.blogspot.com/-hDepzidBFoM/XaIaHQbH4II/AAAAAAAAD8g/0hJdgLpIchQmYnjxPf4vAmK28rLE89C-QCNcBGAsYHQ/s1600/whatsapp%2Bprofile%2Bpictures.jpg" />
                    <div className="teacher-details">
                    <h4 className="tilte">Jone doe</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>

                    <div className="rating"> 
                        <FontAwesome name="fas fa-star" />
                        <FontAwesome name="fas fa-star" />
                        <FontAwesome name="fas fa-star" />
                        <FontAwesome name="fas fa-star" />
                    </div>
                    <span>260 Reviews</span>
                    <h5 className="price">30 usd / hour</h5>
                    <a className="button">Enroll now</a>
                    </div>
                </li>

                <li className="teacher">
                    <img src="https://1.bp.blogspot.com/-hDepzidBFoM/XaIaHQbH4II/AAAAAAAAD8g/0hJdgLpIchQmYnjxPf4vAmK28rLE89C-QCNcBGAsYHQ/s1600/whatsapp%2Bprofile%2Bpictures.jpg" />
                    <div className="teacher-details">
                    <h4 className="tilte">Jone doe</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>

                    <div className="rating"> 
                        <FontAwesome name="fas fa-star" />
                        <FontAwesome name="fas fa-star" />
                        <FontAwesome name="fas fa-star" />
                        <FontAwesome name="fas fa-star" />
                    </div>
                    <span>260 Reviews</span>
                    <h5 className="price">30 usd / hour</h5>
                    <a className="button">Enroll now</a>
                    </div>
                </li>

                <li className="teacher">
                    <img src="https://1.bp.blogspot.com/-hDepzidBFoM/XaIaHQbH4II/AAAAAAAAD8g/0hJdgLpIchQmYnjxPf4vAmK28rLE89C-QCNcBGAsYHQ/s1600/whatsapp%2Bprofile%2Bpictures.jpg" />
                    <div className="teacher-details">
                    <h4 className="tilte">Jone doe</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>

                    <div className="rating"> 
                        <FontAwesome name="fas fa-star" />
                        <FontAwesome name="fas fa-star" />
                        <FontAwesome name="fas fa-star" />
                        <FontAwesome name="fas fa-star" />
                    </div>
                    <span>260 Reviews</span>
                    <h5 className="price">30 usd / hour</h5>
                    <a className="button">Enroll now</a>
                    </div>
                </li>

                <li className="teacher">
                    <img src="https://1.bp.blogspot.com/-hDepzidBFoM/XaIaHQbH4II/AAAAAAAAD8g/0hJdgLpIchQmYnjxPf4vAmK28rLE89C-QCNcBGAsYHQ/s1600/whatsapp%2Bprofile%2Bpictures.jpg" />
                    <div className="teacher-details">
                    <h4 className="tilte">Jone doe</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>

                    <div className="rating"> 
                        <FontAwesome name="fas fa-star" />
                        <FontAwesome name="fas fa-star" />
                        <FontAwesome name="fas fa-star" />
                        <FontAwesome name="fas fa-star" />
                    </div>
                    <span>260 Reviews</span>
                    <h5 className="price">30 usd / hour</h5>
                    <a className="button">Enroll now</a>
                    {/* <a className="wishlist"> <FontAwesome name="fas fa-star" /> </a> */}
                    </div>
                </li>

            </ul>
            </div>
                </Row>
            </Container>
        </div>
    )

    

}

export default TeachersListing;