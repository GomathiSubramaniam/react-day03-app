import { Badge, Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Cards } from './compontents/Cards';

function App() {
  const datas = [
    {
      productImage: "450 X 300",
      productName: <b>Fancy Product</b>,
      price: "40.00 - $80.00",

    },
    {
      Sale : "Sale",
      productImage: "450 X 300",
      productName: <b>Special Item</b>,
      rating: "⭐⭐⭐⭐⭐",
      price: <s>20.00</s>,
      amount : " $18.00",
      

    },
    {
      Sale : "Sale",
      productImage: "450 X 300",
      productName: <b>Sale Item</b>,
      price: <s>50.00</s>,
      amount : " $25.00",
      
      

    },
    {
      productImage: "450 X 300",
      productName: <b>Popular Item</b>,
      rating: "⭐⭐⭐⭐⭐",
      price: "40.00",

    },
    {
      Sale : "Sale",
      productImage: "450 X 300",
      productName: <b>Sale Item</b>,
      price: <s>50.00</s>,
      amount : " $25.00",
    },
    {
      productImage: "450 X 300",
      productName: <b>Fancy Product</b>,
      price: "120.00 - $280.00",

    },
    {
      Sale : "Sale",
      productImage: "450 X 300",
      productName: <b>Special Item</b>,
      price: <s>20.00</s>,
      amount : " $18.00",

    },
    {
      productImage: "450 X 300",
      productName: "Popular Item",
      rating: "⭐⭐⭐⭐⭐",
      price: "40.00",

    },
  ];

    const [count , setCount] = useState(0)
  return (
    <div className="App">

      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Start Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <NavDropdown title="shop" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">All Products</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2">
                  Popular Items
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">New Arrivals</NavDropdown.Item>

              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
       
      </Navbar>
      <div className= "cart-value">
      <Badge bg="success">
        Cart {count}
      </Badge>
        </div>
      <div className="data">
        <h1 style={{ fontSize: "3rem" }}><b>Shop in style</b></h1>
        <p style={{ color: "gray", fontSize: "1.5rem" }}>with this shop homepage template</p>
      </div>
      <div className="card-container">
      {datas.map((prod, idx)=> <Cards
      idx = {idx}
      prod = {prod}
      count = {count}
      setCount = {setCount}
      />)}
  
    </div>
    <footer>
        <p>Copyright © Your Website 2023</p>
      </footer>
   </div>
  );

}

export default App;

