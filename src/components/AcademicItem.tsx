import React from "react";
import "./style/AcademicItem.css";

export type Edu = {
  years: string;
  degree: string;
  university: string;
  description: React.ReactNode;
  location?: string;
  status?: string; // ex: "En cours", "Obtenu", "Mention Bien"
  link?: { href: string; label: string };
};

export const AcademicItem: React.FC<{ data: Edu }> = ({ data }) => {
  return (
    <article className="edu-card reveal">
      <div className="edu-card__rail">
        <span className="edu-dot" />
        <span className="edu-line" />
      </div>

      <div className="edu-card__content">
        <header className="edu-header">
          <span className="edu-badge">{data.years}</span>
          <h3 className="edu-title">{data.degree}</h3>
        </header>

        <div className="edu-meta">
          <span className="edu-univ">{data.university}</span>
          {data.status && <span className="edu-tag">{data.status}</span>}
          {data.location && <span className="edu-loc">{data.location}</span>}
        </div>

        <p className="edu-desc">{data.description}</p>

        {data.link && (
          <div className="edu-actions">
            <a
              className="edu-button"
              href={data.link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {data.link.label}
            </a>
          </div>
        )}
      </div>
    </article>
  );
};
