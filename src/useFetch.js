import { useState,useEffect } from 'react';
function useFetch(url){
    const [blogs,getBlockName]=useState(null)
    const [err,setErr]=useState(null)



    useEffect(()=>{

      const abortCont = new AbortController();
        fetch(url,{signal : abortCont.signal})
        .then(res=>{
          if(!res.ok){
            throw Error("could not find url")
          }
           return res.json();
        })
        .then(
          data =>{
           getBlockName(data);
          }
        )
        .catch(err=>{
          if(err.message==="AbortError"){
            console.log("aborted by chance!!");
          }
          else{
            setErr(err.message)
          }
        
        })

        return ()=>abortCont.abort();

     },[url])

     return {blogs,err}

}

export default useFetch