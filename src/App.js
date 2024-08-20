import Header from './companents/Header/Header';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Introduction from './companents/Introduction/Introduction';
import About from './companents/About/About'
import Education from './companents/Education/Educaton'
import SkillTitle from './companents/Skills/SkillTitle';
import Skills from './companents/Skills/Skills'
import Projects from './companents/Projects/Projects'
import Contact from './companents/Contact/Contact'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Introduction />
      <About />
      <Education />
      <SkillTitle />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
