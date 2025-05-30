const BarradePesquisa = () => {
    const handleClick = () => {
        alert('Você clicou no campo de pesquisa!');
    };

    return ( 
        <input
            className="px-1.5 placeholder-white border-2 border-solid border-white rounded-2xl flex"
            type="text"
            placeholder="Digite seu nome"
            onClick={handleClick}
        />
    ); 
}
 
export default BarradePesquisa;
import React from 'react';
import PropTypes from 'prop-types';