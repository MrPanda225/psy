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
        L’Université de Rennes est un établissement public expérimental. Ouverte sur l’Europe et le monde, au cœur de la Région Bretagne et en lien avec Rennes Métropole et son écosystème, elle est bâtie sur une histoire commune et les atouts de ses membres fondateurs. Elle poursuit une ambition : relever les grands défis sociétaux d’un monde en transition en particulier dans les domaines de l’environnement, de la santé globale et du numérique.
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
        L’Université Félix-Houphouët-Boigny est une université ivoirienne située à Abidjan, dans le quartier de Cocody. 
        Elle se distingue non seulement par son importance académique, mais aussi par les valeurs essentielles qui la guident.
        Celles-ci s’articulent autour d’un certain nombre de principes fondamentaux, parmi lesquels : le savoir, la rigueur, l’excellence, l’humilité, la solidarité et l’ouverture au monde.
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
