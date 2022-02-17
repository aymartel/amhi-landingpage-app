import { Suspense } from 'react';
import { Navigation } from './routes/Navigation';

function App() {
  return (
    <Suspense fallback="Loading traducciones">
      <Navigation/>
    </Suspense>
  );
}

export default App;
