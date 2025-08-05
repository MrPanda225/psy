import React, { Component } from 'react';
import './style/Skill.css';

export default class Skill extends Component {
  render(): React.ReactNode {
    const skillCategories = {
      Languages: [
        { name: 'JavaScript', image: '../assets/skill/js.png' },
        { name: 'TypeScript', image: '../assets/skill/ts.png' },
        { name: 'Python', image: '../assets/skill/python.png' },
        { name: 'Java', image: '../assets/skill/java.png' },
        { name: 'C++', image: '../assets/skill/c++.png' },
        { name: 'Kotlin', image: '../assets/skill/kotlin.png' },
        { name: 'HTML5', image: '../assets/skill/html.png' },
        { name: 'CSS', image: '../assets/skill/css.png' },
        { name: 'PHP', image: '../assets/skill/php.png' },
      ],
      "Frameworks Frontend": [
        { name: 'React', image: '../assets/skill/react.png' },
        { name: 'Angular', image: '../assets/skill/angular.png' },
        { name: 'WordPress', image: '../assets/skill/wordpress.png' },
      ],
      "Frameworks Backend": [
        { name: 'Express.js', image: '../assets/skill/express.png' },
        { name: 'Node.js', image: '../assets/skill/node.png' },
        { name: 'Django', image: '../assets/skill/django.png' },
        { name: 'Spring Boot', image: '../assets/skill/spring.png' },
      ],
      Database: [
        { name: 'MySQL', image: '../assets/skill/mysql.png' },
        { name: 'MongoDB', image: '../assets/skill/mongo.png' },
        { name: 'PostgreSQL', image: '../assets/skill/postgre.png' },
      ],
      Tools: [
        { name: 'Git', image: '../assets/skill/git.png' },
        { name: 'Docker', image: '../assets/skill/docker.png' },
      ],
      "Modeling & Design": [
        { name: 'Figma', image: '../assets/skill/figma.png' },
        {name: "UML", image: '../assets/skill/uml.png' },
        { name: 'API Design', image: '../assets/skill/postma.png' },
      ],
      "IDEs & Editors": [
        { name: 'Visual Studio Code', image: '../assets/skill/vscode.png' },
        { name: 'IntelliJ IDEA', image: '../assets/skill/intellij.png' },
        { name: "Android Studio", image: '../assets/skill/androidStudio.png' },
      ],
      'IA Tools': [
        { name: 'ChatGPT', image: '../assets/skill/chatgpt-seeklogo.png' },
        { name: 'Grok', image: '../assets/skill/grok.png' },
        { name: 'Copilot', image: '../assets/skill/github-copilot-seeklogo.png' },
        { name: 'Claude', image: '../assets/skill/claude-seeklogo.png' },
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