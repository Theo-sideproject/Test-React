import axios from "axios";
import React, { useEffect, useState } from 'react';
import CardCaracter from "./CardCaracter";
import '../style/cardCaracter.css'
import '../style/homePage.css'

function HomePage() {
    const [finish,setFinish] = useState(false)
    const [caracters,setCaracters] = useState([])

    // useEffect(() => {
    //     if (caracters.length !== 0) {
    //         console.log(caracters);
    //     }
    // }, [caracters]);

    useEffect(() => {
        async function getDataApi(page) {
            try {
                const response = await (axios.get(`${page}` ))
                setCaracters(prevCaracters => [...prevCaracters, ...response.data.results]);

                if (response.data.info.next === null) {

                    setFinish(true)
                    return
                }

                await getDataApi(response.data.info.next)
            } catch (error) {
                console.error('Une erreur s\'est produite :', error);
            }
        }

        return () => {
            getDataApi('https://rickandmortyapi.com/api/character/?page=1')
        }
    }, []);

    if (!finish) {
        return (
            <div>
                <h1>Loading</h1>
            </div>
        )
    }

    return (
        <div id="homePage">
            <button> Test : {caracters[0].name}</button>
            <div id="cardsContainer">
                {caracters.map(caracter =>
                        <CardCaracter key={caracter.id} name={caracter.name} img={caracter.image} url={"http://localhost:3000/caracter/" + caracter.id}/>
                )}
            </div>
        </div>
    );
}

export default HomePage;