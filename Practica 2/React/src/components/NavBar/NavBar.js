import React, { useState } from 'react';
import { makeStyles, ThemeProvider, useTheme } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListaReportes from '../ListaReportes/ListaReportes'
import EnviarReporte from '../EnviarReporte/EnviarReporte'
import ReporteIndividual from '../ReporteIndividual/ReporteIndividual'
import Principal from '../Principal/Principal'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
    drawerHeader: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    link: {
        textDecoration: 'none'
    }
}));

const NavBar = () =>{
    const classes = useStyles();
    const theme= useTheme();
    const [open, setOpen] = useState(false);

    const drawerOpen = () =>{
        setOpen(true)
    }

    const drawerClose = () =>{
        setOpen(false)
    }

    return(
        <div>
            <AppBar position='static'>
                <Toolbar variant='dense'>
                    <IconButton onClick={drawerOpen} edge='start'>
                        <MenuIcon></MenuIcon>
                    </IconButton>
                    <Typography variant='h6'>
                        Grupo 8_Practica 2
                    </Typography>
                </Toolbar>
            </AppBar>
            <Router>
                <Drawer open={open}>
                    <div className={classes.drawerHeader}>
                        <IconButton onClick={drawerClose} edge='start'>
                            { theme.direction === 'ltr' ? <ChevronLeftIcon/>:<ChevronRightIcon/> }
                        </IconButton>
                    </div>
                    <List>
                        <Link to='ListaReportes' className={classes.link}>
                            <ListItem button>
                                <ListItemText primary="Lista de Reportes"/>
                            </ListItem>
                        </Link>
                        <Link to='EnviarReporte' className={classes.link}>
                            <ListItem button>
                                <ListItemText primary="Enviar Reporte"/>
                            </ListItem>
                        </Link>
                        <Link to='ReporteIndividual' className={classes.link}>
                            <ListItem button>
                                <ListItemText primary="Ver reporte individual"/>
                            </ListItem>
                        </Link>
                    </List>
                </Drawer>
                <Switch>
                    <Route exact path='/ListaReportes'>
                        <ListaReportes/>
                    </Route>
                    <Route exact path='/EnviarReporte'>
                        <EnviarReporte/>
                    </Route>
                    <Route exact path='/ReporteIndividual'>
                        <ReporteIndividual/>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}


export default NavBar;