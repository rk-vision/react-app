import { useState,useEffect } from 'react';
import './App.css';
import ButtonScreen from './components/MainScreen/ButtonScreen';
import useFetch from './useFetch';
import { BrowserRouter as Router, Route, Switch ,Link} from 'react-router-dom';
import Blogs from './components/MainScreen/Blogs';
function App() {

  const{blogs,err}=useFetch("http://localhost:8000/blogs");
     
  return (
    <Router>
    <div className="App">
    <div>
                <Link to="/">home</Link>
                <Link to="/cal">Calculater</Link>
               </div>

    <Switch>
    <Route path="/cal">
     <ButtonScreen/> 
     </Route>
     <Route path="/blogs">
     <Blogs/>
     </Route>
     <Route exact path="/">
     {err &&<div>{err}</div>}
     {blogs && blogs.map((blog) => (
          <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          </div>
        ))}
        </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
