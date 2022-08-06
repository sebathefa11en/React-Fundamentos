import React, { useState } from 'react';

const Eventos = () => {

    const [texto, setTexto] = useState('Texto desde Estado');

    const eventoClick = () => {
	console.log("Me diste un click");
	setTexto("Nuevo texto");
    }

    return (
	<>
	    <hr/>
	    <h2>Eventos</h2>
	    <p>{texto}</p>
	    <button onClick={() => eventoClick()}>Click</button>
	</>
    )
}

export default Eventos;
