import React, { Component } from "react";
import "./style/Education.css";
import { AcademicItem, type Edu } from "../components/AcademicItem"; // adapte le chemin

const items: Edu[] = [
  {
    years: "2024–2025",
    degree: "Master 1 MIAGE",
    university: "Université de Rennes",
    status: "En cours",
    location: "Rennes, France",
    link: { href: "https://www.univ-rennes.fr", label: "Site de l'université" },
    description: (
      <>
        L’Université de Rennes est un établissement public expérimental,
        au cœur de l’écosystème breton. Ambition : répondre aux grands défis
        sociétaux (environnement, santé globale, numérique) via la formation
        et la recherche.
      </>
    ),
  },
  {
    years: "2022–2023",
    degree: "Licence MIAGE",
    university: "Université Félix Houphouët-Boigny",
    status: "Obtenu",
    location: "Abidjan, Côte d’Ivoire",
    link: { href: "https://univ-fhb.edu.ci", label: "Site de l'université" },
    description: (
      <>
        Formation alliant informatique de gestion et sciences des organisations.
        Valeurs phares : excellence, humilité, solidarité et ouverture au monde.
      </>
    ),
  },
];

export default class Education extends Component {
  render(): React.ReactNode {
    return (
      <div className="education-container">
        <h1 className="education-title">Éducation</h1>
        <h2 className="subtitle">Formations & diplômes</h2>

        <section className="education-timeline">
          {items.map((item) => (
            <AcademicItem key={item.years + item.degree} data={item} />
          ))}
        </section>
      </div>
    );
  }
}
