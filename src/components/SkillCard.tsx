import React from "react";

interface SkillCardProps {
  name: string;
  image: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ name, image }) => {
  return (
    <article className="skill-card" aria-label={name}>
      <div className="skill-avatar">
        <img src={image} alt={name} loading="lazy" />
      </div>
      <span className="skill-name">{name}</span>
    </article>
  );
};

export default SkillCard;
