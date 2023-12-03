import styles from './App.module.css';
import { Gallery } from './components/gallery/gallery';
import { About } from './components/about/about';


function App() {
  return (
    <div class={styles.container}>
      <Gallery />
      <About />
    </div>
  );
}

export default App;
