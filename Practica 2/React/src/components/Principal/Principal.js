
import React, { useEffect, useState, Component } from 'react';


var divStyle = {
    background: "#eee",
    padding: "20px",
    margin: "40px",
    height: "120px"
  };



  var button = {
    background: '#008b8b',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 50,
    padding: '0 120px',
    display: 'block',
    margin: '0 auto',
    fontSize: '30px',
  };

class Principal extends Component{

    constructor() {
		super();
	}
	

	render() {
		return (
            <div>
                <div style={divStyle}>
                
                  <div className="mb-2">
                  <br/>
                  <br/>
                      <button style={button} >GRUPO    #21</button>
                  </div>
              </div>
            </div>
            
          );
	}
    dps= [];    
}



export default Principal;

