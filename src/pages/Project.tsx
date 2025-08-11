// src/pages/Project.tsx
import React, { Component } from "react";
import "./style/Project.css";
import { Card } from "../components/Card"; // adapte le chemin si besoin

export default class Project extends Component {
  render(): React.ReactNode {
    return (
      <div className="projects-container">
        {/* ===== EXPÉRIENCES PRO ===== */}
        <h1 className="section-title">Expériences Professionnelles</h1>

        <div className="cards-grid">
          <Card year="2025" title="Développeur Web – Stage – 3 mois">
            <p><strong>Entreprise :</strong> InnovQube</p>
            <ul>
              <li>Conception et développement de features responsives (Laravel, Vue.js, Tailwind, Filament).</li>
              <li>Modélisation de données (MySQL, Redis) et création d’APIs REST.</li>
              <li>Prototypage de solutions avec l’équipe (Figma).</li>
            </ul>
          </Card>

          <Card year="2023 – 2024" title="Développeur Full-stack – Stage – 6 mois">
            <p><strong>Entreprise :</strong> PMDreams</p>
            <ul>
              <li>Système de certification des résultats d’examens.</li>
              <li>Front-end en React JS.</li>
              <li>Back-end en Django (Python 3).</li>
            </ul>
          </Card>
        </div>

        {/* ===== PROJETS UNIVERSITAIRES & PERSOS ===== */}
        <h1 className="section-title">Projets Universitaires et Personnels</h1>

        <div className="cards-grid">
          <Card year="2024 – 2025" title="Développeur Backend">
            <p><strong>Établissement :</strong> ISTIC, Université de Rennes 1</p>
            <p><strong>Projet :</strong> Plateforme de Mise en Relation Post-Événement</p>
            <ul>
              <li>UI/UX prototypées sur Figma.</li>
              <li>Front Angular (pattern MVVM).</li>
              <li>API Spring Boot + Hibernate.</li>
              <li>Tests unitaires JUnit 5.</li>
            </ul>
          </Card>

          <Card year="2023 – 2024" title="Application de Lavage de Voiture">
            <p><strong>Type :</strong> Projet personnel en Java EE</p>
            <ul>
              <li>Application de réservation (architecture MVC).</li>
              <li>MySQL + JSP/Servlets.</li>
            </ul>
          </Card>

          <Card year="2024 – 2025" title="Développeur en Robotique – Projet de recherche">
            <p><strong>Établissement :</strong> Inria</p>
            <ul>
              <li>Migration de plugins C++ pour simulateur robotique.</li>
              <li>Gazebo Classic → Gazebo Harmonic (C++).</li>
              <li>Adaptation aux nouvelles APIs/structures.</li>
              <li>Tests fonctionnels sur environnement simulé.</li>
              <li>Collaboration avec chercheurs et ingénieurs.</li>
            </ul>
          </Card>

          <Card year="2024" title="Portfolio Personnel">
            <ul>
              <li>React + Tailwind, déploiement GitHub Pages.</li>
              <li>Sections dynamiques : compétences, projets, contact.</li>
              <li>Optimisation responsive mobile/desktop.</li>
            </ul>
          </Card>
        </div>

        {/* ===== AUTRES ===== */}
        <h1 className="section-title">Autres Expériences</h1>

        <div className="cards-grid">
          <Card year="2024" title="Certification Fondamentaux du Marketing Digital">
            <p><strong>Organisme :</strong> Google Ateliers Numériques</p>
            <ul>
              <li>SEO, SEA, réseaux sociaux, stratégie de contenu.</li>
            </ul>
          </Card>
        </div>
      </div>
    );
  }
}
