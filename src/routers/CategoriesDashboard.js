import React from 'react';
import {Switch, Route,Redirect, } from 'react-router-dom';
import Header from '../Components/Header/Header';
import NavBar from '../Components/Navbar/NavBar';
import BebidasCalientes from '../pages/BebidasCalientes';
import BebidasFrias from '../pages/BebidasFrias';
import Empanadas from '../pages/Empanadas';
import Merengadas from '../pages/Merengadas';
import Pasteles from '../pages/Pasteles';
import Tequeños from '../pages/Tequeños';
import Todas from '../pages/Todas';
import Footer from '../Components/Footer/Footer';


const CategoriesDashBoard = () => {
    return (
        <>    
            <Header />
            <NavBar />
            <div>
            <Switch>
                <Route path="/BebidasCalientes" component={BebidasCalientes}/>
                <Route path="/BebidasFrias" component={BebidasFrias}/>
                <Route path="/Empanadas" component={Empanadas}/>
                <Route path="/Merengadas" component={Merengadas}/>
                <Route path="/Pasteles" component={Pasteles}/>
                <Route path="/Tequeños" component={Tequeños}/>
                <Route path="/" component={Todas}/>
                <Redirect to="/"/>
            
            </Switch>
            </div>   
            <Footer />
        </>
    )
}

export default CategoriesDashBoard
