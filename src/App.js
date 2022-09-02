import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Layout from './Layout';
import './App.css';
import Asynchronous_js from "./Asynchronous_js";
import Promise_JS from "./Promise_JS";

function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
}

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>
          That feels like an existential question, don't you
          think?
        </p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

function App() {
  return (
    <div className="App">        
      <Routes>
        <Route path="/" element={<Layout/>}>

          <Route index element={<Home />} />

          <Route path="about" element={<About />} />

          <Route path="async" >

              <Route index element={<Asynchronous_js/>} />
              <Route path="promise" element={<Promise_JS />} />

          </Route>

          

        </Route>
       
      </Routes>
    </div>
  );
}

export default App;
