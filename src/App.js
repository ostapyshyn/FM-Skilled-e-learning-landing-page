import './App.css';
import About from './components/About';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <About />
      <Main />
      <About backColor={'--dark-blue'} />
    </div>
  );
}

export default App;
