import React from 'react';

export default function Numbers(props){
    
    return(
        <button className='number-button' onClick={function(){
            props.setRate(props.number);
        }}>{props.number}</button>
        );
}