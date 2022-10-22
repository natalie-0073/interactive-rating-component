import React from "react";
import { useState } from "react";
import Thankyou from "./Thankyou";
import Component from "./Component";
export default function Rating(){
    const [isSubmitted, setIsSubmitted]=useState(false);
    
    
    return(
        <div>
        {isSubmitted && <Thankyou setIsSubmitted={setIsSubmitted} />}
        {!isSubmitted && <Component setIsSubmitted={setIsSubmitted}/>}
        </div>
    );
    
}