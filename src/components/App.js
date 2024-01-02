import React, { useState, useEffect } from "react";
import Courses from "./Courses";
import Footer from "./Footer";
import NavBar from "./NavBar";

function App() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/courses')
      .then(response => response.json())
      .then(data => setCourses(data))
  }, []);

  return (
    <div className="App">
      <NavBar/>
      <Courses courses={courses}/>
      <Footer />
    </div>
  );
}

export default App;
