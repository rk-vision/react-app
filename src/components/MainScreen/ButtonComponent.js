import React,{ useState, useEffect } from "react"

export default function CalculaterButton(props){

   
    function increase(){
        props.inc(props.by)
    }

    function decrease(){
        props.dec(props.by)
    }
  

    return(
        <div>
        <button onClick={increase}>{props.by}</button>
        <button onClick={decrease}>-{props.by}</button>
        </div>
    );
}