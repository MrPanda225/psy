import React, { Component } from 'react';
import './style/Skill.css';

export default class Skill extends Component {
  render(): React.ReactNode {
    const skillCategories = {
      Languages: [
        { name: 'JavaScript', image: '/src/assets/skill/js.png' },
        { name: 'TypeScript', image: '/src/assets/skill/ts.png' },
        { name: 'Python', image: '/src/assets/skill/python.png' },
        { name: 'Java', image: '/src/assets/skill/java.png' },
        { name: 'C++', image: '/src/assets/skill/c++.png' },
        { name: 'Kotlin', image: '/src/assets/skill/kotlin.png' },
        { name: 'HTML5', image: '/src/assets/skill/html.png' },
        { name: 'CSS', image: '/src/assets/skill/css.png' },
        { name: 'PHP', image: '/src/assets/skill/php.png' },
      ],
      "Frameworks Frontend": [
        { name: 'React', image: '/src/assets/skill/react.png' },
        { name: 'Angular', image: '/src/assets/skill/angular.png' },
        { name: 'WordPress', image: '/src/assets/skill/wordpress.png' },
      ],
      "Frameworks Backend": [
        { name: 'Express.js', image: '/src/assets/skill/express.png' },
        { name: 'Node.js', image: '/src/assets/skill/node.png' },
        { name: 'Django', image: '/src/assets/skill/django.png' },
        { name: 'Spring Boot', image: '/src/assets/skill/spring.png' },
      ],
      Database: [
        { name: 'MySQL', image: '/src/assets/skill/mysql.png' },
        { name: 'MongoDB', image: '/src/assets/skill/mongo.png' },
        { name: 'PostgreSQL', image: '/src/assets/skill/postgre.png' },
      ],
      Tools: [
        { name: 'Git', image: '/src/assets/skill/git.png' },
        { name: 'Docker', image: '/src/assets/skill/docker.png' },
      ],
      "Modeling & Design": [
        { name: 'Figma', image: '/src/assets/skill/figma.png' },
        {name: "UML", image: '/src/assets/skill/uml.png' },
        { name: 'API Design', image: '/src/assets/skill/postma.png' },
      ],
      "IDEs & Editors": [
        { name: 'Visual Studio Code', image: '/src/assets/skill/vscode.png' },
        { name: 'IntelliJ IDEA', image: '/src/assets/skill/intellij.png' },
        { name: "Android Studio", image: '/src/assets/skill/androidStudio.png' },
      ],
      'IA Tools': [
        { name: 'ChatGPT', image: '/src/assets/skill/chatgpt-seeklogo.png' },
        { name: 'Grok', image: '/src/assets/skill/grok.png' },
        { name: 'Copilot', image: '/src/assets/skill/github-copilot-seeklogo.png' },
        { name: 'Claude', image: '/src/assets/skill/claude-seeklogo.png' },
      ],
    };

    return (
      <div className="skills-container">
        <h1 className="skills-title">Technologies & Outils</h1>
        {Object.entries(skillCategories).map(([category, skills]) => (
          <div className="skill-category" key={category}>
            <h2 className="category-title">{category}</h2>
            <div className="skill-cards">
              {skills.map((skill) => (
                <div className="skill-card" key={skill.name}>
                  <img src={skill.image} alt={skill.name} className="skill-icon" />
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }
}