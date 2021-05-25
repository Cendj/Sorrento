import Logo from './hammer-solid.png';
import './App.css';
import {Header} from './components/Header'

const items = [
  {"name": "Home" , "link" : "/home"},
  {"name": "The Apartment" , "link" : "/apartment"},
  {"name": "pricing" , "link" : "/pricing"},
  {"name": "Book" , "link" : "/Book"},
  {"name": "Local Area" , "link" : "/local"},
  {"name": "Contact" , "link" : "/contact"},
]
function App() {
  return (
    <div className="website">
     <Header logo = {Logo} nav={items}/> 
      <main className="content"></main>
      <footer className="footer"></footer>

    </div>
  );
}

export default App;
