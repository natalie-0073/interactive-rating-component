import React from "react";
import icon from './images/icon-star.svg';
import Numbers from './Numbers';
export default function Component(props){
    
    return(
        <main>
            <div className="container">
            <div className="content">
            <div className="row">
            <div className="top col-12 text-start"><a href='/' className="star-wrapper">
                <img src={icon} alt="star-icon" /></a></div>
            <div className="text col-12 text-start">
                <h3>How did we do?</h3>
                <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
            </div>
            <div className="numbers col-12">
                <ul>
                <li><Numbers number={1}/></li>
                <li><Numbers number={2}/></li>
                <li><Numbers number={3}/></li>
                <li><Numbers number={4}/></li>
                <li><Numbers number={5}/></li>
                </ul>
                </div>
            <div className="button col-12">
                <button className="button-primary" onClick={()=>props.setIsSubmitted(true)}>SUBMIT</button>
            </div>
            
            </div>
            </div>
            
            
            </div>
        </main>
    );
}