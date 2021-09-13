import React from 'react'
import style from './Home.module.css'

function Home({history}) {
        
    const handleHome =() =>{
        history.push('/Productos');
    }
    
    return (
        <>
            <div className={style.ima}></div>
            <div class name={style.both}>
            <div className={style.logo}>AVILA CREPE'S</div>
            <h1>¿QUÉ DESEAS ORDENAR?</h1>
            <button className="btn-btn-primary"
                    onClick={handleHome}>PEDIR YA</button>
            
            </div>
        </>
    )
}

export default Home