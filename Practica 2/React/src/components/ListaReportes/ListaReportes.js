import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import Paper from '@material-ui/core/Paper';
import axios from 'axios'

import React, { useEffect, useState, Component } from 'react';
import CanvasJSReact from './canvasjs.react';
import Timeline from '@material-ui/lab/Timeline';


const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.info.light,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);


const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);


var divStyle = {
    background: "#eee",
    padding: "20px",
    margin: "20px"
  };


const text = {
    color: 'black',
    fontFamily: "ProductSans-Regular",
    fontSize: 25,
};

const text1 = {
    color: 'black',
    fontFamily: "ProductSans-Regular",
    fontSize: 20,
  };

  var button = {
    background: 'linear-gradient(45deg, #6bb9fe 30%, #926bfe 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 50,
    padding: '0 100px',
    display: 'block',
    margin: '0 auto',
    fontSize: '20px',
  };

  var buttonBuscar = {
    background: 'linear-gradient(45deg, #373737 30%, #373737 90%)',
    border: 0,
    borderRadius: 3,
    color: 'white',
    height: 30,
    display: 'block',
    fontSize: '16px',
  };



class ListaReportes extends Component{

    constructor() {
		super();
	}
	

  

	render() {

        function TablaListado (){
            const [msg, setMsg] = useState([]);

            var carnetG= {
              carne: ""
            }
            var listadoG= [];

            
            const buscar = (event) => {
              getMsg();
            }


            const handleInputChange = (event) => {
              carnetG.carne = event.target.value;
            }

            const getMsg = async () => {

              if(carnetG.carne!= " " && carnetG.carne!= ''){
                try {
                    const { data } = await axios.get('http://localhost:4000/obtenerMensajes');
                    console.log(data)
                    
                      data.map(Item => {
                          if(Item.carne == carnetG.carne){
                            listadoG.push({ carne: Item.carne, nombre: Item.nombre, curso: Item.curso, fecha: Item.fecha, procesado: Item.procesado  });
                          }
                        }
                      )
                    
                    setMsg(listadoG.map(Item => ({ carne: Item.carne, nombre: Item.nombre, curso: Item.curso, fecha: Item.fecha, procesado: Item.procesado  })))


                  }
                catch (err) {
                    console.log(err);
                }
                
              }
              else{
                try {
                    const { data } = await axios.get('http://localhost:4000/obtenerMensajes');
                    console.log(data)
                    setMsg(data.map(Item => ({ carne: Item.carne, nombre: Item.nombre, curso: Item.curso, fecha: Item.fecha, procesado: Item.procesado  })))
                  }
                catch (err) {
                    console.log(err);
                }
              }
              
              
            };

            useEffect(() => {
              const timeOut = setInterval(() => {
                getMsg();
              }, 100000000)
                getMsg();
              return () => clearInterval(timeOut);
             }, [])
      
             
            return(
              <div>
                <div style={divStyle}>
                
                  <div className="mb-2">
                  <br/>
                  <br/>
                      <button style={button} >Listado de Reportes</button>
                  </div>
                  <br/>
                  <br/>
                  <br/>
                  <label style={text1}> Numero de carnet:  
                    <input style={text1} placeholder="Carnet" className="form-control" name="carnet" onChange={handleInputChange}></input>
                    <button style={buttonBuscar} onClick={buscar} >Buscar</button>
                  </label>
                  <br/>
                  <br/>
                  <div style={divStyle}>
                      <TableContainer component={Paper}>
                      <Table aria-label="customized table">
                      <TableHead>
                          <TableRow>
                              <StyledTableCell>CARNET</StyledTableCell>
                              <StyledTableCell >NOMBRE</StyledTableCell>
                              <StyledTableCell align="left">CURSO/PROYECTO</StyledTableCell>
                              <StyledTableCell align="left">CUERPO</StyledTableCell>
                              <StyledTableCell align="left">PROCESADO</StyledTableCell>
                          </TableRow>
                          </TableHead>
                          <TableBody>
                              {msg.map((row) => (
                                  <StyledTableRow key={row.pid}>
                                  <StyledTableCell component="th" scope="row">{row.carne}</StyledTableCell>
                                  <StyledTableCell component="th" scope="row">{row.nombre}</StyledTableCell>
                                  <StyledTableCell component="th" scope="row">{row.curso}</StyledTableCell>
                                  <StyledTableCell component="th" scope="row">{row.fecha}</StyledTableCell>
                                  <StyledTableCell component="th" scope="row">{row.procesado}</StyledTableCell>
                                  </StyledTableRow>
                              ))}
                          </TableBody>
                      </Table>
                      </TableContainer>
                  </div>
                    
              </div>
            </div>

            )
        }

        return(
          <div>
            <TablaListado/>
          </div>
        );
        

	}
    dps= [];    
}


export default ListaReportes;

