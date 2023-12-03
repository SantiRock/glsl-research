import styles from './App.module.css';
import { Gallery } from './components/gallery/gallery';


function App() {
  return (
    <div class={styles.container}>
      <Gallery />
    </div>
  );
}

export default App;
