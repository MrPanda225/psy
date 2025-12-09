import React, { Component } from "react";
import "./style/Education.css";
import { AcademicItem, type Edu } from "../components/AcademicItem"; // adapte le chemin

const items: Edu[] = [
   {
    years: "2025–2026",
    degree: "Master 2 MIAGE - Data & Business Intelligence",
    university: "Université de Rennes",
    status: "En cours",
    location: "Rennes, France",
    link: { 
      href: "https://formations.univ-rennes.fr/mention/master-mention-methodes-informatiques-appliquees-la-gestion-des-entreprises-miage", 
      label: "Site de l'université" 
    },
    description: (
      <>
        Le Master 2 MIAGE parcours Data & Business Intelligence forme des experts capables d'exploiter les données massives pour la prise de décision stratégique en entreprise. Cette formation combine l'informatique décisionnelle, l'analyse de données, le machine learning et la visualisation pour transformer les données en insights actionnables. Les diplômés maîtrisent les technologies Big Data, les outils de BI et les méthodes d'analyse avancées pour accompagner la transformation digitale des organisations.
      </>
    ),
  },
  {
    years: "2024–2025",
    degree: "Master 1 MIAGE",
    university: "Université de Rennes",
    status: "Obtenu",
    location: "Rennes, France",
    link: { href: "https://formations.univ-rennes.fr/mention/master-mention-methodes-informatiques-appliquees-la-gestion-des-entreprises-miage", label: "Site de l'université" },
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
