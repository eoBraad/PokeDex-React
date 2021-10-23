import { BrowserRouter, Route } from 'react-router-dom'
import {Kanto} from './pages/Kanto'
import { Home } from './pages/main'
import { GlobalStyle } from './globalStyle'
function App() {

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Route path='/' exact component={Home}/>
      <Route path='/Kanto' exact component={Kanto}/>
    </BrowserRouter>
  );
}

export default App;
