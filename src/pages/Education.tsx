import React, { Component } from 'react';
import  './style/Education.css';

export default class Education extends Component {
  render(): React.ReactNode {
    return (
        <div className="education-container">
          <h1 className="education-title">Éducation</h1>
          <h2 className="subtitle">Formations & diplômes</h2>
          <div className="education-list">
            <div className="education-item">
              <span className="date-badge">2024-2025</span>
              <div className="education-details">
                <h3 className="degree">Master 1 Miage</h3>
                <p className="description">
                  <span className='university'>Université de Rennes.</span> L’Université de Rennes est un établissement public expérimental. Ouverte sur l’Europe et le monde, au cœur de la Région Bretagne et en lien avec Rennes Métropole et son écosystème, elle est bâtie sur une histoire commune et les atouts de ses membres fondateurs. Elle poursuit un ambitieux : relever les grands défis sociétaux d’un monde en transition en particulier dans les domaines de l’environnement, de la santé globale et du numérique.
                </p>
              </div>
            </div>
            <div className="education-item">
              <span className="date-badge">2022-2023</span>
              <div className="education-details">
                <h3 className="degree">Licence Miage</h3>
                <p className="description">
                  <span className='university'>Université Félix Houphouët-Boigny. </span> L’Université Félix-Houphouët-Boigny est une université ivoirienne située à Abidjan, dans le quartier de Cocody. Elle se distingue non seulement par son importance académique, mais aussi par les valeurs essentielles qui la guident. Celles-ci s’articulent autour d’un certain nombre de principes fondamentaux, parmi lesquels : l’excellence, l’humilité, la solidarité et l’ouverture au monde.
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    };
}