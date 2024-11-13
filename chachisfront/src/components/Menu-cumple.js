import React from 'react';
import './estilos/Menu-Items.css';
import bday1 from './cakes/bday/bday-cake1.png';
import bday2 from './cakes/bday/bday-cake2.png';
import bday3 from './cakes/bday/bday-cake3.png';
import bday4 from './cakes/bday/bday-cake4.png';
import bday5 from './cakes/bday/bday-cake5.png';
import bday6 from './cakes/bday/bday-cake6.png';

function Menu() {
    return (
        <div className="menu-item-container">
            
            <h1 className="menu-item-title">PASTELES DE CUMPLEAÑOS</h1>
            
            <div className="grid-container-item">
                <div className="grid-item-bday">
                    <img src={bday1} alt="Pastel de Cumpleaños" />
                    </div>
                    <div className="grid-item-bday">
                    <img src={bday2} alt="Pastel de Cumpleaños" />
                    </div>
                    <div className="grid-item-bday">
                    <img src={bday3} alt="Pastel de Cumpleaños" />
                    </div>
                    <div className="grid-item-bday">
                    <img src={bday4} alt="Pastel de Cumpleaños" />
                    </div>
                    <div className="grid-item-bday">
                    <img src={bday5} alt="Pastel de Cumpleaños" />
                    </div>
                    <div className="grid-item-bday">
                    <img src={bday6} alt="Pastel de Cumpleaños" />
                    </div>
            </div>
        </div>
    );
}

export default Menu;
