import React, {useEffect, useState} from "react";
import axios from "axios";

function Perfil({atributomio}){

    const [paises, setPaises] = useState([]);
    const [status, setStatus] = useState(false);

    useEffect( () => {
        
        axios.get('https://restcountries.com/v2/all')
            .then( resultado => {
                setPaises(resultado.data);
                setStatus(true);
            })
            .catch( error => {
                setStatus(true);
            })


    },[]);

    if(status){
        return (
            <div style={{background: 'yellow'}}>
                <ul>
                    { paises.map( (pais, key) => 
                        <li key={key}>{pais.name}</li> 
                    ) }
                </ul>
            </div>
        )
    }else{
        return (
            <div style={{background: 'yellow'}}>
                <h1>Esta cargando los valores</h1>
            </div>
        )

    }

    

}

export default Perfil;