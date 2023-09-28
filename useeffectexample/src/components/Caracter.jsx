import React, { useEffect, useState } from 'react';
import axios from "axios";
import '../style/caracter.css'
import { useParams } from "react-router-dom";

function Caracter() {
    const [caracter,setCaracter] = useState({})
    const params = useParams()

    useEffect(() => {
        async function getData() {
            try {
                const response = await (axios.get(`https://rickandmortyapi.com/api/character/${params.id}`))
                setCaracter(response.data)
            }
            catch (err) {
                console.log("error : ", err)
            }
        }

        return () => {
            getData()
        }
    },[params.id])

    if (Object.keys(caracter).length === 0) {
        return (
            <div>
                <h1>Loading </h1>
            </div>
        )
    }

    return (
        <div>
            <h1 id={"name"}>{caracter.name}</h1>
            <p id={"status"}> {caracter.status} </p>
            <div id="contentMoreInformation">
                <div id="rightpart">
                    <img src={caracter.image} alt={"image of " + caracter.name}/>
                </div>
                <div id="leftpart">
                    <h2>{caracter.species} - {caracter.gender}</h2>
                    <p>{caracter.type}</p>
                </div>
            </div>
        </div>
    );
}

export default Caracter;