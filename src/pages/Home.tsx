import React, { Component } from 'react';
import './style/Home.css';
import logo from '../assets/personal.jpg';
import FloatingShapes from '../components/FloatingShapes';

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
      <div className="home-container animate-page">
        <FloatingShapes />
        <div className="profile-section">
          {/* wrap pour l’anneau animé */}
          <div className="avatar">
            <img src={logo} alt="Sahiré Yapi" className="profile-image tilt-on-hover" />
          </div>

          <div className="text-content reveal-up delay-1">
            <h1 className="reveal-up">{`Sahiré YAPI`}</h1>
            <p className="role reveal-up delay-2">
              Etudiant en Master MIAGE, je suis curieux, avec un esprit d'équipe et organisé.
              Passionné par le développement et les nouvelles technologies, je suis à la
              recherche d'une alternance dans le domaine de l'IT.
            </p>
          </div>
        </div>

        <div className="services-section reveal-up delay-3">
          <h2>Contact</h2>
          <p>Contactez-moi pour collaborer sur des projets innovants ou discuter de nouvelles opportunités dans le domaine de l'IT !</p>

          <div className={`contact-info ${showContact ? 'show' : ''}`}>
            {showContact === 'tel' && <p className="contact-text">+33 7 61 99 16 59</p>}
            {showContact === 'email' && <p className="contact-text">sahire-guy-michel.yapi@etudiant.univ-rennes.fr</p>}
          </div>

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