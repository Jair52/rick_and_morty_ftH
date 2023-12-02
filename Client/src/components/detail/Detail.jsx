import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const URL = "https://rym2.up.railway.app/api/character";
const API_key = "henrystaff";

export default function Detail(props){
   
    const {id} = useParams();

    const [character, setCharacter] = useState({});

    useEffect(() => {
        // axios(`${URL}/${id}?key=${API_key}`)
        axios(`http://localhost:3001/rickandmorty/character/${id}`)
            .then(
                ({ data }) => {
                    if (data.name) {
                        setCharacter(data);
                    } else {
                        window.alert('No hay personajes con ese ID');
                    }
                }
            );
        return setCharacter({});
     }, [id]);

  return (
    <div style={{backgroundColor:"darkgoldenrod", padding:"20px", borderRadius:"20px"}}>
        <h1>Detail</h1>
        <h2>{character.name}</h2>
        <img src={character.image} alt={character.name} />
        <h3>Status: {character.status}</h3>
        <h3>Species: {character.species}</h3>
        <h3>Gender: {character.gender}</h3>
        <h3>Origin: {character.origin?.name}</h3>
        <h3>Location: {character.location?.name}</h3>
    </div>
  );
}
