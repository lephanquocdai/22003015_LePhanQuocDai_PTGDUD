import { RecoilRoot } from 'recoil';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import './App.css';

function App() {
  return (
      <div className="app-container">
        <main className="main-content">
          <ComponentA />
          <ComponentB />
        </main>
      </div>
  );
}

export default App;
