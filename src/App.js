import './App.css';
import { Suspense } from 'react';
import { Welcome } from './components/Welcome';
import { Navigation } from './routes/Navigation';

function App() {
  return (
    <Suspense fallback="Loading traducciones">
      <Navigation/>
    </Suspense>
  );
}

export default App;
