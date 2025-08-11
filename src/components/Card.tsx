import React from "react";
import "./style/Card.css";

type CardProps = {
  year: string;
  title: string;
  children: React.ReactNode;
};

export const Card: React.FC<CardProps> = ({ year, title, children }) => {
  return (
    <article className="card reveal">
      <div className="card-header">
        <span className="badge-year">{year}</span>
        <h3 className="card-title">{title}</h3>
      </div>
      <div className="card-divider" />
      <div className="card-body">{children}</div>
    </article>
  );
};
