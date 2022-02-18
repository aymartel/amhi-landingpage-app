import { Suspense } from 'react';
import { Navigation } from './routes/Navigation';
import { Loading } from './ui/Loading';

function App() {
  return (
    <Suspense fallback={<Loading/>}>
      <Navigation/>
    </Suspense>
  );
}

export default App;
