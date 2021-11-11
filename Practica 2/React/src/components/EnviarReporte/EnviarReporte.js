import React, {Fragment, useState} from 'react';
import axios from 'axios'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



  var button = {
    background: 'linear-gradient(45deg, #008b8b 30%, #926bfe 90%)',
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


    const text = {
        background: 'linear-gradient(45deg, #CCDCEB 30%, #D0E0E3 90%)',
        border: 0,
        borderRadius: 3,
        color: 'white',
        height: 30,
        display: 'block',
        fontSize: '20px',
        color: 'black',
        fontFamily: "ProductSans-Regular",
        fontSize: 20,
        min: 0,
        justifyContent: 'space-between'
    };

    const text1 = {
        color: 'black',
        fontFamily: "ProductSans-Regular",
        fontSize: 18,
        padding: "5px",
        width: "310px",
    };

    const textArea = {
        color: 'black',
        fontFamily: "ProductSans-Regular",
        fontSize: 18,
        padding: "5px",
        width: "310px",
        height: "200px"
    };

const EnviarReporte = () => {


    const flexDirections = ['row', 'row-reverse', 'column', 'column-reverse'];
    const justifyContents = [
    'flex-start',
    'flex-end',
    'center',
    'space-between',
    'space-around',
    'space-evenly',
    ];
    const alignItemsArr = [
    'flex-start',
    'flex-end',
    'center',
    'stretch',
    'baseline',
    ];

    const wraps = ['nowrap', 'wrap', 'wrap-reverse'];
    const directions = ['inherit', 'ltr', 'rtl'];
    const [flexDirection, setFlexDirection] = useState(0);
    const [justifyContent, setJustifyContent] = useState(0);
    const [alignItems, setAlignItems] = useState(0);
    const [direction, setDirection] = useState(0);
    const [wrap, setWrap] = useState(0);

    const divStyle = {
        flexDirection: flexDirections[flexDirection],
        justifyContent: justifyContents[justifyContent],
        alignItems: alignItemsArr[alignItems],
        direction: directions[direction],
        flexWrap: wraps[wrap],
        marginTop: "0px",
        background: "#eee",
        padding: "20px",
        height: "800px",
        with: "300px",
        marginTop: "80px",
        marginRight: "450px",
        marginLeft: "450px",
    };

    const [startDate, setStartDate] = useState(new Date());

    const [datos, setDatos] = useState({
        carnet: '',
        nombre: '',
        curso: '',
        descripcion: ''
    })

    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault()
        var jsonUsuario = {
            carne: datos.carnet,
            nombre: datos.nombre,
            curso: datos.curso,
            cuerpo: datos.descripcion,
            fecha: startDate.toLocaleDateString()
        }
        getMsg(jsonUsuario);
        
        console.log('enviando datos...' + datos.carnet + ' ' + datos.nombre+ ' ' + datos.curso + ' ' + datos.descripcion)
    }


    const getMsg = async (jsonUsuario) => {
        const headers = { 
            'Content-Type': 'application/json'
        };
        await axios.post('http://localhost:4000/crear', JSON.stringify(jsonUsuario), { headers })
            alert("INGRESADO EXITOSAMENTE")
            window.location.reload();
        
        /*.catch(error => {
            console.error('There was an error!', error);
            
        });*/

    }

    return (
        <Fragment>
            
            <div style={divStyle}>
                    
            <form className="row" onSubmit={enviarDatos}>
                <button type="submit" className="btn btn-primary" style={button}>Enviar reporte</button>
                <br/>
                <br/>
                <div className="mb-2">
                    <label style={text}> Numero de carnet: </label>
                    <input style={text1} placeholder="Carnet" className="form-control" onChange={handleInputChange} name="carnet"></input>
                </div>
                <br/>
                <br/>
                <div className="mb-2">
                    <label style={text}> Nombre del estudiante:  </label>
                    <input style={text1} placeholder="Estudiante" className="form-control" onChange={handleInputChange} name="nombre"></input>
                </div>
                <br/>
                <br/>
                <div className="mb-2">
                    <label style={text}> Nombre del curso/proyecto:  </label>
                    <input style={text1} placeholder="Curso/proyecto" className="form-control" onChange={handleInputChange} name="curso"></input>
                </div>
                <br/>
                <br/>
                <div className="mb-2">
                    <label style={text}> Seleccione la fecha </label>
                    <DatePicker style={text} selected={startDate} onChange={(date) => setStartDate(date)} />
                </div>
                <br/>
                <br/>
                <div className="mb-2">
                    <label style={text}> Mensaje o Descripcion:  </label>
                    <textarea style={textArea} placeholder="Curso/proyecto" className="form-control" onChange={handleInputChange} name="descripcion"></textarea>
                </div>
            </form>
            
            <br/>

        </div>
        </Fragment>
    );
}
 
export default EnviarReporte;