import React, { Component } from 'react';
import './style/Home.css';
import logo from '../assets/personal.jpg';
import FloatingShapes from '../components/FloatingShapes';
import cvPdf from "../assets/CV_Sahire_YAPI.pdf";

export default class Home extends Component {
  state = {
    showContact: '',
  };

  handleMouseEnter = (type: string) => {
    this.setState({ showContact: type });
  };

  handleMouseLeave = () => {
    this.setState({ showContact: '' });
  };

  render(): React.ReactNode {

    return (
      <div className="home-container animate-page">
        <FloatingShapes />
        <div className="profile-section">
          {/* wrap pour l'anneau animé */}
          <div className="avatar">
            <img src={logo} alt="Sahiré Yapi" className="profile-image tilt-on-hover" />
          </div>

          <div className="text-content reveal-up delay-1">
            <h1 className="reveal-up">{`Sahiré YAPI`}</h1>
            <p className="role reveal-up delay-2">
              Etudiant en Master 2 MIAGE spécialisé en Data & Business Intelligence, je suis curieux, avec un esprit d'équipe et organisé. Passionné par le développement et les nouvelles technologies, je recherche un stage de fin d'études dans le domaine de l'IT pour mettre en pratique mes compétences et contribuer à des projets innovants.
            </p>
            
            {/* Bouton télécharger CV */}
            <a href={cvPdf} download="CV_Sahire_YAPI.pdf"
               className="cv-download-btn reveal-up delay-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Télécharger mon CV
            </a>
          </div>
        </div>

        <div className="services-section reveal-up delay-3">
          <h2>Contact</h2>
          <p>Contactez-moi pour collaborer sur des projets innovants ou discuter de nouvelles opportunités dans le domaine de l'IT !</p>


          <div className="icons">
            <a href="tel:+33761991659"
               className="icon lift"
               onMouseEnter={() => this.handleMouseEnter('tel')}
               onMouseLeave={this.handleMouseLeave}>Tel</a>

            <a href="mailto:sahire-guy-michel.yapi@etudiant.univ-rennes.fr"
               className="icon lift"
               onMouseEnter={() => this.handleMouseEnter('email')}
               onMouseLeave={this.handleMouseLeave}>Email</a>

            <a href="https://www.linkedin.com/in/sahiré-guy-michel-yapi-40366620a"
               className="icon lift" target="_blank" rel="noopener noreferrer">LinkedIn</a>

            <a href="https://gitlab.com/SahireYapi"
               className="icon lift" target="_blank" rel="noopener noreferrer">GitLab</a>
          </div>
        </div>
      </div>
    );
  }
}