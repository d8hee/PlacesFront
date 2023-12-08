import './App.css';
// Pages
import Main from './pages/Main'
// Components
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <h1>Places App</h1>
      The place to find your next home.
      <Header />
      <Main/>
    </div>
  );
}

export default App;
