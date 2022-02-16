import './App.css';
import { Suspense } from 'react';
import { Welcome } from './components/Welcome';

function App() {
  return (
    <Suspense fallback="Loading traducciones">
      <Welcome/>
    </Suspense>
  );
}

export default App;
