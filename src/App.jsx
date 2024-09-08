import styles from './App.module.css';
import { Navbar } from './components/Navbar/Navbar';
import { AboutMe } from './components/AboutMe/AboutMe';
import { Projects } from './components/Projects/Projects';
import { Contacts } from './components/Contacts/Contacts';

function App() {

  return (
    <div className={styles.App}>
      <Navbar />
      <AboutMe />
      <Projects />
      <Contacts />
    </div>
  );
}

export default App;
