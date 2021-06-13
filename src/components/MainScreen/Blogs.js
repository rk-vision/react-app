import React, { useState } from "react"
import { useParams } from "react-router"
export default function Blogs(){

    const[title,setTitle]=useState();
    const[body,SetBody]=useState();
    const[author,setAuthor]=useState("Rahul");

    const handleSubmit =(e)=>{
        e.preventDefault();
        const blog={title,body,author}

        fetch("http://localhost:8000/blogs",{
            method :'POST',
            headers:{"Content-Type":"applcation/json"},
            body:JSON.stringify(blog)
        }).then(()=>{
            console.log("new blog added")
        }

        )
    }
    return(
        <div>
        <h1>Add a blog</h1>
        <form onSubmit={handleSubmit}>
        <label> Blog Title :</label>
        <input type="text"
         required 
         value={title}
         onChange={(e)=>setTitle(e.target.value)}
         /><br/>
        <label> Blog Body :</label>
        <textarea 
        required
        value={body}
        onChange={(e)=>SetBody(e.target.value)}
        />
        <label> Author name :</label>
        <select
        value={author}
        onChange={(e)=>setAuthor(e.target.value)}>
            <option value="rahul">Rahul</option>
            <option value="sonu">Sonu</option>
        </select><br/>
        
        <button>add blog</button>
        {body}<br/>
        {title}<br/>
        {author}<br/>
        </form>




        </div>
    )
}