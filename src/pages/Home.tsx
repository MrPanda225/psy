import React, { Component } from 'react';
import './style/Home.css';
import logo from '../assets/personal.jpg';

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
    const { showContact } = this.state;

    return (
      <div className="home-container">
        <div className="profile-section">
          <img src={logo}  alt="Sahiré Yapi" className="profile-image" />
          <div className="text-content">
            <h1>Sahiré YAPI</h1>
            <p className="role">
              Etudiant en Master MIAGE, je suis curieux, avec un esprit d'équipe et organisé. Passionné par le développement et les nouvelles technologies, je suis à la recherche d'une alternance dans le domaine de l'IT
            </p>
          </div>
        </div>
        <div className="services-section">
          <h2>Contact</h2>
          <p>Contactez-moi pour collaborer sur des projets innovants ou discuter de nouvelles opportunités dans le domaine de l'IT !</p>
          {showContact && (
            <div className="contact-info">
              {showContact === 'tel' && <p className="contact-text">+33 7 61 99 16 59</p>}
              {showContact === 'email' && <p className="contact-text">sahire-guy-michel.yapi@etudiant.univ-rennes.fr</p>}
            </div>
          )}
          <div className="icons">
            <a
              href="#"
              className="icon"
              onMouseEnter={() => this.handleMouseEnter('tel')}
              onMouseLeave={this.handleMouseLeave}
            >
              Tel
            </a>
            <a
              href="#"
              className="icon"
              onMouseEnter={() => this.handleMouseEnter('email')}
              onMouseLeave={this.handleMouseLeave}
            >
              Email
            </a>
            <a href="https://www.linkedin.com/in/sahiré-guy-michel-yapi-40366620a" className="icon" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="https://gitlab.com/SahireYapi" className="icon" target="_blank" rel="noopener noreferrer">
              GitLab
            </a>
          </div>
        </div>
      </div>
    );
  }
}