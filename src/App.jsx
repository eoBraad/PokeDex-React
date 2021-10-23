import { BrowserRouter, Route } from 'react-router-dom'

import {Kanto} from './pages/Kanto'
import { Home } from './pages/main'
import { GlobalStyle } from './globalStyle'
import { ThemeContextProvider } from './contexts/theme'




function App() {

  return (
    //<ThemeContextProvider>
      <BrowserRouter>
       <ThemeContextProvider>
          <GlobalStyle />
          <Route path='/' exact component={Home}/>
           <Route path='/Kanto' exact component={Kanto}/>
        </ThemeContextProvider>
      </BrowserRouter>
    //</ThemeContextProvider>
  );
}

export default App;
