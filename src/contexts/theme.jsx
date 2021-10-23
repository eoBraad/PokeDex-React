import { createContext, useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'

export const MyThemeContext = createContext({})



export function ThemeContextProvider (props) {
  const [themeContext, setThemeContext] = useState({
    theme: {
      searchColor:'#2cb7ea',
      fontColor: '#ffffff',
      backGroundColor: '#e94c58',
      backGroundColorBlack: '#d32a35',
      hoverBG:'#80282f'
    }
  })
  
  

  function setThemeGlobal(value) {
    if (value === 'Red') {
      setThemeContext({
        theme: {
          searchColor:'#2cb7ea',
          fontColor: '#ffffff',
          backGroundColor: '#e94c58',
          backGroundColorBlack: '#d32a35',
          hoverBG:'#80282f'
        }
      })
    } else if (value === 'Dark') {
      setThemeContext({
        theme: {
          searchColor:'#FAA916',
          fontColor: '#ffffff',
          backGroundColor: '#1a1a1a',
          backGroundColorBlack: '#2f2f31',
          hoverBG:'#373737'
        }
      })
    } else if (value === 'Blue') {
      setThemeContext({
        theme: {  
          searchColor:'#00685e',
          fontColor: '#ffffff',
          backGroundColor: '#189AB4',
          backGroundColorBlack: '#05445E',
          hoverBG:'#08353a'
        }
      })
    }
    
  }

  useEffect(() => {
  setThemeContext(themeContext)
  console.log(themeContext.theme.backGroundColor)
}, [themeContext])

  function handleSetThemeContext(evt) {
    setThemeGlobal(evt.target.innerHTML)
    
  }
  return (
    // eslint-disable-next-line no-sequences
    <MyThemeContext.Provider value={{themeContext, setThemeContext, handleSetThemeContext}}>
      <ThemeProvider theme={themeContext.theme}>
        {props.children}
      </ThemeProvider>
    </MyThemeContext.Provider>
  )
}