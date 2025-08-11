import React, { Component } from "react";
import "./style/Skill.css";
import SkillCard from "../components/SkillCard";

/* Imports images */
import jsImg from "../assets/skill/js.png";
import tsImg from "../assets/skill/ts.png";
import pythonImg from "../assets/skill/python.png";
import javaImg from "../assets/skill/java.png";
import cppImg from "../assets/skill/c++.png";
import kotlinImg from "../assets/skill/kotlin.png";
import htmlImg from "../assets/skill/html.png";
import cssImg from "../assets/skill/css.png";
import phpImg from "../assets/skill/php.png";

import reactImg from "../assets/skill/react.png";
import angularImg from "../assets/skill/angular.png";
import wordpressImg from "../assets/skill/wordpress.png";

import expressImg from "../assets/skill/express.png";
import nodeImg from "../assets/skill/node.png";
import djangoImg from "../assets/skill/django.png";
import springImg from "../assets/skill/spring.png";

import reactNativeImg from "../assets/skill/reactNative.png"

import mysqlImg from "../assets/skill/mysql.png";
import mongoImg from "../assets/skill/mongo.png";
import postgreImg from "../assets/skill/postgre.png";

import gitImg from "../assets/skill/git.png";
import dockerImg from "../assets/skill/docker.png";

import figmaImg from "../assets/skill/figma.png";
import umlImg from "../assets/skill/uml.png";
import postmaImg from "../assets/skill/postma.png";

import vscodeImg from "../assets/skill/vscode.png";
import intellijImg from "../assets/skill/intellij.png";
import androidStudioImg from "../assets/skill/androidStudio.png";

import chatgptImg from "../assets/skill/chatgpt-seeklogo.png";
import grokImg from "../assets/skill/grok.png";
import copilotImg from "../assets/skill/github-copilot-seeklogo.png";
import claudeImg from "../assets/skill/claude-seeklogo.png";

export default class Skill extends Component {
  render(): React.ReactNode {
    const skillCategories = {
      Languages: [
        { name: "JavaScript", image: jsImg },
        { name: "TypeScript", image: tsImg },
        { name: "Python", image: pythonImg },
        { name: "Java", image: javaImg },
        { name: "C++", image: cppImg },
        { name: "Kotlin", image: kotlinImg },
        { name: "HTML5", image: htmlImg },
        { name: "CSS", image: cssImg },
        { name: "PHP", image: phpImg },
      ],
      "Frameworks Frontend": [
        { name: "React", image: reactImg },
        { name: "Angular", image: angularImg },
        { name: "WordPress", image: wordpressImg },
      ],
      "Frameworks Mobile App": [
        { name: "React Native", image: reactNativeImg },
        { name: "Android / Kotlin", image: kotlinImg },
      ],
      "Frameworks Backend": [
        { name: "Express.js", image: expressImg },
        { name: "Node.js", image: nodeImg },
        { name: "Django", image: djangoImg },
        { name: "Spring Boot", image: springImg },
      ],
      Database: [
        { name: "MySQL", image: mysqlImg },
        { name: "MongoDB", image: mongoImg },
        { name: "PostgreSQL", image: postgreImg },
      ],
      Tools: [
        { name: "Git", image: gitImg },
        { name: "Docker", image: dockerImg },
      ],
      "Modeling & Design": [
        { name: "Figma", image: figmaImg },
        { name: "UML", image: umlImg },
        { name: "API Design", image: postmaImg },
      ],
      "IDEs & Editors": [
        { name: "Visual Studio Code", image: vscodeImg },
        { name: "IntelliJ IDEA", image: intellijImg },
        { name: "Android Studio", image: androidStudioImg },
      ],
      "IA Tools": [
        { name: "ChatGPT", image: chatgptImg },
        { name: "Grok", image: grokImg },
        { name: "Copilot", image: copilotImg },
        { name: "Claude", image: claudeImg },
      ],
    };

    return (
      <div className="skills-container">
        <h1 className="skills-title">Technologies & Outils</h1>

        {Object.entries(skillCategories).map(([category, skills]) => (
          <section className="skill-category" key={category}>
            <h2 className="category-title">
              <span>{category}</span>
            </h2>

            <div className="skill-grid">
              {skills.map((s) => (
                <SkillCard key={s.name} {...s} />
              ))}
            </div>
          </section>
        ))}
      </div>
    );
  }
}
