import Logo from './sorrento_by_the_sea_logo.jpg';
import './App.css';
import {Switch,Route} from 'react-router-dom'
import {Home} from'./components/Home'
import {Apartment} from'./components/Apartment'
import {Pricing} from'./components/Pricing'
import {Book} from'./components/Book'
import {Local} from'./components/Local'
import {Contact} from'./components/Contact'
import {NotFound} from'./components/NotFound'

import {Header} from './components/Header'


const items = [
  {"name": "Home" , "link" : "/"},
  {"name": "Apartment" , "link" : "/apartment"},
  {"name": "Pricing" , "link" : "/pricing"},
  {"name": "Book" , "link" : "/Book"},
  {"name": "Local Area" , "link" : "/local"},
  {"name": "Contact" , "link" : "/contact"},
]
function App() {
  return (
    <div className="website">
     <Header logo = {Logo} nav={items}/> 
      <main className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Apartment">
            <Apartment />
          </Route>
          <Route path="/Pricing">
            <Pricing />
          </Route>
          <Route path="/Book">
            <Book />
          </Route>
          <Route path="/Local">
            <Local />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
          <Route path="/*">
            <NotFound />
          </Route>          
        </Switch>
      </main>
      <footer className="footer"></footer>

    </div>
  );
}

export default App;
