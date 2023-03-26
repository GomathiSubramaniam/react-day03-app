import { useState } from "react";
import { Badge, Button, Card } from "react-bootstrap";

export function Cards({prod, idx, setCount, count}){
    const [show, setShow] = useState(false);

    function addToCart(){
      setShow(!show)
      setCount(count + 1)
    }

    function removeFromCart(){
      setShow(!show)
      setCount(count - 1)
    }
    return(
      
          
            <Card key= {idx} style={{ width: '18rem' }}>
              <Card.Img variant="top" src={prod.productImage} />
              <Card.Body>
                <div className= "value">
                <Badge bg="dark">{prod.Sale}</Badge></div>
                <Card.Title>{prod.productName}</Card.Title>
                <Card.Text>{prod.rating}</Card.Text>
                <Card.Text> ${prod.price}{prod.amount}</Card.Text>
                                        
                {!show ?<Button 
                variant="outline-dark"
                onClick={addToCart}
                >Add to cart</Button> : ""}
                 
  
                {show ?<Button 
                 variant="outline-danger"
                 onClick={removeFromCart}
                 >Remove cart</Button> :""}
                
  
              </Card.Body>
            </Card>
          
    )
  }