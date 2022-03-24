import React, { useState, useEffect } from 'react';

const PokemonList = () => {

    const [pokemonList, setPokemonList] = useState([]);
    const [URL, setURL] = useState(`https://pokeapi.co/api/v2/pokemon?limit=`);

    useEffect(() => {
        let configuracion = {
            method: 'GET'
        };
        fetch(URL+10, configuracion)
            .then(respuesta => {
                if (respuesta.ok) {
                    return respuesta.json();
                }
            })
            .then(response => {
                console.log(response);
                setPokemonList(response.results);
            });
    }, []);
    
    const handleOnClick = (e) =>{
        let configuracion = {
            method: 'GET'
        };
        fetch(URL+1126, configuracion)
            .then(respuesta => {
                if (respuesta.ok) {
                    return respuesta.json();
                }
            })
            .then(response => {
                console.log(response.results);
                setPokemonList(response.results);
            });
    } 

    return(
        <div>
            <button className='btn btn-success' onClick={handleOnClick}>Fetch Pokemon</button>
            <h2>List</h2>
            <ul className='col-2 mx-auto'>
            {
                pokemonList.map((item,index) => {
                    return(
                        <li key={index}>{item.name}</li>
                    );
                })
            }
            </ul>
        </div>
    );
}

export default PokemonList;