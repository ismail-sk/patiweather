import './App.css';
import Header from "./components/Header"
import { MainProvider } from "./Context"
import Container from './components/Container';

function App() {
  return (
    <div className="main-container">
      <MainProvider>
      <Header />
      <div className='weather-container'>
        <Container/>
      </div>
      </MainProvider>
    </div>
  );
}

export default App;
