import React from "react";
import { useState } from "react";
import Thankyou from "./Thankyou";
import Component from "./Component";
export default function Rating(){
    const [isSubmitted, setIsSubmitted]=useState(false);
    const [rate, setRate]=useState(null);
    return(
        <div>
        {isSubmitted && <Thankyou setIsSubmitted={setIsSubmitted} rate={rate} setRate={setRate}/>}
        {!isSubmitted && <Component setIsSubmitted={setIsSubmitted}rate={rate} setRate={setRate}/>}
        </div>
    );
    
}