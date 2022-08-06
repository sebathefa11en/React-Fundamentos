import React, { useState } from "react";

const Contador = () => {

    const [contador, setContador] = useState(0);

    const aumentar = () => {
	setContador(contador + 1);
    };

    return (
	<div>
	    <h2>Contador</h2>
	    <button onClick={() => aumentar()}>+1</button>
	    <p>{contador}</p>
	</div>
    );
}

export default Contador;
