import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FontAwesome from "react-fontawesome";


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
            {/* <Link to="/add-product" >
                Add Product
            </Link> */}
            {/* <div className="data-section">
                <h2>Earnings By Items</h2>
                <div className="table">
                    <table>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>category</th>
                                <th>description</th>
                                <th>price</th>
                                <th>header 1</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.length > 0 ?
                                products.map(product => {
                                    return (
                                        <tr key={product.id}>
                                        <td className="productImage">
                                        <img src={product.image} width="50px" height="50px" />
                                        <p>{truncate(product.title)}</p>
                                        </td>
                                        <td>{product.category}</td>
                                        <td>{truncate(product.description)}</td>
                                        <td>{product.price}</td>
                                        <td>data 3</td>
                                    </tr>        
                                   
                                    )
                                }) : null
                            }

                        </tbody>
                    </table>
                </div>
            </div> */}

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
                    </div>
                </li>

            </ul>



        </div>
    )

    

}

export default TeachersListing;