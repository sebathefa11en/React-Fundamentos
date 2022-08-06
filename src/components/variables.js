import React from 'react';

const Variables = () => {
    
    const saludo = "Hola desde constante";
    const img = "https://cuarteldelmetal.com/wp-content/uploads/2021/04/t65Yx5aY73iMyeudA2mwuG-1200-80.jpg"
    
    return (
	<div>
	    <h2>Nuevo Componente {saludo}</h2>
	    <img src={img} alt="imagenJasonBecker"/>
	</div>
    )
}

export default Variables;
