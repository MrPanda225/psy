import  { Component } from 'react';
import './style/Header.css'; // Assurez-vous d'avoir un fichier CSS associé

interface HeaderState {
  isMenuOpen: boolean;
}
export default class Header extends Component<object, HeaderState> {
  state: HeaderState = {
    isMenuOpen: false,
  };

  toggleMenu = () => {
    this.setState((prevState) => ({
      isMenuOpen: !prevState.isMenuOpen,
    }));
  };

  render() {
    const { isMenuOpen } = this.state;
    return (
      <header className="header">
        <div className="logo">
          <h1>Sahiré YAPI</h1>
        </div>
        <button className="hamburger" onClick={this.toggleMenu}>
          {isMenuOpen ? '✖' : '☰'}
        </button>
        <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="/" onClick={this.toggleMenu}>Accueil</a></li>
            <li><a href="/skill" onClick={this.toggleMenu}>Skill</a></li>
            <li><a href="/project" onClick={this.toggleMenu}>Project</a></li>
            <li><a href="/education" onClick={this.toggleMenu}>Éducation</a></li>
          </ul>
        </nav>
      </header>
    );
  }
}