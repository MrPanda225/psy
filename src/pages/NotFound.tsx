import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
import './style/NotFound.css';

export default class NotFound extends Component {
    render(): React.ReactNode {
        return (
          <div className="not-found-container">
            <h1 className="error-code">404</h1>
            <p className="message">
              Oups ! On dirait que vous êtes perdu. Pas de souci, ça arrive aux meilleurs d'entre nous !
              <br />
              Retournez à l'accueil pour reprendre votre aventure.
            </p>
            <Link to="/" className="home-link">Retour à l'accueil</Link>
          </div>
        );
    }
}
