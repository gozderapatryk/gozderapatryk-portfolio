import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from "./components/footer/Footer";
import Navbar from './components/navbar/Navbar';

function App() {

  const menuItems = [
    { to: '/', name: 'Home' },
    { to: '/chat', name: 'Start chatting' },
  ];

  return (
    <div>
      <Navbar menuItems={menuItems}/>
      <Header/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
