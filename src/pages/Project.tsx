import React, {Component} from "react";
import './style/Project.css';

export default class Project extends Component {
    render(): React.ReactNode {
       return (
    <div className="projects-container">
      <h1 className="projects-title">Expériences Professionnelles</h1>
      <div className="projects-list">
        <div className="project-item">
          <span className="date-badge">2025</span>
          <div className="project-details">
            <h3 className="project-role">Développeur Web – Stage – 3 mois</h3>
            <p className="description">
              <strong>Entreprise :</strong> InnovQube<br />
              - Conception et développement de fonctionnalités web responsives avec Laravel, Vue.js, Tailwind CSS, Filament.<br />
              - Participation à la modélisation de données (MySQL, Redis) et à la création d’APIs REST.<br />
              - Prototypage de solutions techniques en collaboration avec l’équipe (Figma).
            </p>
          </div>
        </div>
        <div className="project-item">
          <span className="date-badge">2023 – 2024</span>
          <div className="project-details">
            <h3 className="project-role">Développeur Full-stack – Stage – 6 mois</h3>
            <p className="description">
              <strong>Entreprise :</strong> PMDreams<br />
              - Système de certification des résultats d'examens.<br />
              - Développement et intégration du front-end avec React JS.<br />
              - Conception et implémentation du back-end en Django Python3.
            </p>
          </div>
        </div>
      </div>

      <h1 className="projects-title">Projets Universitaires et Personnels</h1>
      <div className="projects-list">
        <div className="project-item">
          <span className="date-badge">2024 – 2025</span>
          <div className="project-details">
            <h3 className="project-role">Développeur Backend</h3>
            <p className="description">
              <strong>Établissement :</strong> ISTIC, Université de Rennes 1<br />
              <strong>Projet :</strong> Plateforme de Mise en Relation Post-Événement<br />
              - Conception et prototypage de l’interface utilisateur avec Figma.<br />
              - Développement du front-end en Angular en suivant les principes MVVM.<br />
              - Intégration avec un back-end Spring Boot, utilisation de Hibernate pour la gestion des données.<br />
              - Rédaction des tests unitaires avec Junit 5.
            </p>
          </div>
        </div>
        <div className="project-item">
          <span className="date-badge">2023 – 2024</span>
          <div className="project-details">
            <h3 className="project-role">Application de Lavage de Voiture</h3>
            <p className="description">
              <strong>Type :</strong> Projet personnel en Java EE<br />
              - Développement d’une application web de réservation de lavage de voiture, en appliquant l'architecture MVC.<br />
              - Gestion des bases de données MySQL et utilisation des technologies JSP/Servlets.
            </p>
          </div>
        </div>
        <div className="project-item">
          <span className="date-badge">2024 – 2025</span>
          <div className="project-details">
            <h3 className="project-role">Développeur en Robotique – Stage / Projet de recherche</h3>
            <p className="description">
              <strong>Établissement :</strong> Inria<br />
              - Migration de plugins C++ pour simulateur robotique.<br />
              - Migration de plugins de Gazebo Classic vers Gazebo Harmonic en C++.<br />
              - Adaptation du code aux changements d’API et de structure logicielle de la nouvelle version de Gazebo.<br />
              - Tests fonctionnels et validation du bon comportement des plugins dans l’environnement simulé.<br />
              - Collaboration avec des chercheurs et ingénieurs en robotique pour garantir la compatibilité avec les outils existants.
            </p>
          </div>
        </div>
        <div className="project-item">
          <span className="date-badge">2024</span>
          <div className="project-details">
            <h3 className="project-role">Portfolio Personnel</h3>
            <p className="description">
              - Création d’un site portfolio avec React, Tailwind CSS et déploiement sur GitHub Page<br />
              - Intégration de sections dynamiques pour les compétences, projets et contact.<br />
              - Optimisation pour une expérience utilisateur responsive sur mobile et desktop.
            </p>
          </div>
        </div>
      </div>

      <h1 className="projects-title">Autres Expériences</h1>
      <div className="projects-list">
        <div className="project-item">
          <span className="date-badge">2024</span>
          <div className="project-details">
            <h3 className="project-role">Certification Fondamentaux du Marketing Digital</h3>
            <p className="description">
              <strong>Organisme :</strong> Google Ateliers Numériques<br />
              - Compréhension approfondie des bases du marketing digital, incluant SEO, SEA, réseaux sociaux, et stratégies de contenu.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
}