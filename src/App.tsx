import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/common/Header';
import Home from './pages/Home';
import Skill from './pages/Skill';
import Education from './pages/Education';
import Project from './pages/Project';

function App() {

  return (
    <>
      <Router>
      <Header />
        <Routes>
          <Route path="/"         element={<Home />} />
          <Route path="/skill"    element={<Skill />} />
          <Route path="/project"  element={<Project />} />
          <Route path="/education"element={<Education />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
