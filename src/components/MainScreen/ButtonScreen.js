import { useEffect, useState } from 'react';
import CalculaterButton from './ButtonComponent';
import ButtonComponent from './ButtonComponent'
import './Counter.css'
export default function ButtonScreen(){

    const [count,setCount]=useState(0);
    const numberOfItem = [{by:1},{by:10},{by:20},{by:30},{by:50}]

    function inc(val){
        console.log("inc",val)
        setCount(count+val)
    }

    function dec(val){
        console.log("dec",val)
        setCount(count-val)
    }

    useEffect(()=>{
        console.log("use effect")
    })

   
    return( 
        <div>
            {

                numberOfItem.map((item)=>{
        
                    return(
                    <div>
                        <CalculaterButton by={item.by}  inc={inc} dec={dec}/> 
                    </div>
                )})
            }
            <span className="count">{count}</span>
        </div>
    );

}