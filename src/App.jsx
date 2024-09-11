import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import MainHeader from './common/MainHeader';
import MainFooter from './common/MainFooter';
import MainNav from './common/MainNav';

import Home from './sections/home/Home';
import Education from './sections/education/Education.jsx';
import Experience from './sections/experience/Experience.jsx';
import Project from './sections/projects/Projects.jsx';
import Publications from './sections/publications/Publications.jsx';

function App() {
  return (
    <>
      <Router>
        <MainHeader />
        <MainNav />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Estudios" element={<Education />} />
            <Route path="/Experiencia" element={<Experience />} />
            <Route path="/Proyectos" element={<Project />} />
            <Route path="/Publicaciones" element={<Publications />} />
          </Routes>
        </main>
        <MainFooter />
      </Router>
    </>
  );
}

export default App;