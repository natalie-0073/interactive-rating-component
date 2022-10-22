import React from "react";

import img from './images/illustration-thank-you.svg';
export default function Thankyou(){
    return(
        <main>
        <div className="container">
            
       <div className="content">
        <div className="row">
        <div className="thankyou-image"><img src={img} alt="Thank you"/></div>
        <div className="rating">
            <span>You selected number out of 5</span>
        </div>
        <div className="text col-12 text-center">
            <h3>Thank you!</h3>
            <p>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
        </div>
        
        
        </div>
        </div>
        </div>
        </main>
        
    );
}