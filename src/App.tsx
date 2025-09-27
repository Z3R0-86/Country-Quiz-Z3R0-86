import { lazy, Suspense } from 'react';

const Quiz = lazy(() => import('./components/Quiz'));

function App() {
  return (
    <Suspense 
      fallback={
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          height: '100vh',
          color: '#fff',
          fontSize: '1.5rem'
        }}>
          Loading...
        </div>
      }
    >
      <Quiz />
    </Suspense>
  );
}

export default App;