import './App.css';
// importing all built components
import Home from './components/Home';
import DataProvider from './context/DataProvider';

function App() {
  return (
    <DataProvider>
      <Home />
    </DataProvider>
  );
}

export default App;
