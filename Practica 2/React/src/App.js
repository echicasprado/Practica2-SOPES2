
import './App.css';
import axios from 'axios'
import NavBar from './components/NavBar/NavBar';
import React, { useEffect, useState, Component } from 'react';
import Principal from './components/Principal/Principal';



export default function App() {

  return (
    <div>
        <NavBar/>
        <Principal/>
    </div>
    
  );
}
