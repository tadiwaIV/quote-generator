import React from 'react'
import quotes from '../QuoteDB'
import {Container, Row, Col, Button, Card, Form} from 'react-bootstrap';

export default function QuoteAndAuthor(props) {
  const styles = {
   backgroundColor: 'aqua',
 	}

  var button = document.querySelector("button");


function CreateRGB () {
   var p = document.querySelector("#demo");


  const color = "rgb(" + Math.floor(Math.random()*255) + "," + Math.floor(Math.random()*255)  + "," + Math.floor(Math.random()*255) + ")";

  document.body.style.backgroundColor = color ;
  document.body.style.color = color ;
  document.getElementById("color").style.backgroundColor = color ;
  document.getElementById("color").style.color = "white" ;
  document.getElementById("color2").style.backgroundColor = color ;
  document.getElementById("color2").style.color = "white" ;
  document.getElementById("color3").style.backgroundColor = color ;
  document.getElementById("color3").style.color = "white" ;

document.body.style.transition = "all 0.3s ease"



}

  const { quote, generateRandomQuote } = props;
  return (
    <div className="card" >
      <div className="card-body" >
        <p className="card-text">{quote.quote}</p>
        <h5 className="card-title">- {quote.author}</h5>
        <br/>
        <div className="links">
          <Row >
            <Col sm={8}>
              <a id="color" onClick={() => { generateRandomQuote(quotes); CreateRGB() }}> Generate Quote </a>
            </Col>
            <Col sm={4}>
            <a id="color2" className=" twitter" onClick={() => { generateRandomQuote(quotes);
                  window.open('https://twitter.com/intent/tweet/?text=' + encodeURIComponent(quote.quote + '--' + quote.author))}}>
              <i class="fab fa-twitter"></i>
            </a>
            <a id="color3" className=" facebook" onClick={() => { generateRandomQuote(quotes);
                  window.open('https://twitter.com/intent/tweet/?text=' + encodeURIComponent(quote.quote + '--' + quote.author))}}>
              <i class="fab fa-facebook"></i>
            </a>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
}
