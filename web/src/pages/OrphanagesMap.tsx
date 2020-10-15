import React from 'react';

import mapMarkerImg from '../images/marcation-map.png';
import {Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import '../styles/pages/orphanages.css';

function OrphanagesMap(){
    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy"/>

                    <h2>Escolha um orfonato do mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita</p>
                </header>

                <footer>
                    <strong>Miracema do Tocantins</strong>
                    <span>Tocantins</span>
                </footer>
            </aside>

            <Map
                center={[-9.5632475,-48.4057355]}
                zoom={15}
                style={{width: '100%', height: '100%'}}
                >
                    <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            </Map>

            <Link to="" className="create-orpha">
                <FiPlus size={32} color="#FFF"/>
            </Link>

        </div>
    );
}

export default OrphanagesMap;