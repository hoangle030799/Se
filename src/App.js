import logo from './logo.svg';
import './styles/globals.css';
import Header from './components/header/header';
import Main from './components/main/main';
import Footer from './components/footer/footer';

const App = () => {
  return (
    <div className="App flex flex-col">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
