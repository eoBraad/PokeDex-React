import { NavButton, NavContainer, ThemeActive, ThemeContainer } from './style';
import { useContext, useState } from 'react';
import { MyThemeContext } from '../../contexts/theme';

export const Navigation = () => {
  const [active, setActive] = useState(false);
  const [setTheme, setThemeActive] = useState(false);
   const { handleSetThemeContext } = useContext(MyThemeContext)


  function handleActive() {
    setActive(!active);
  }

  function handleSetTheme() {
    setThemeActive(!setTheme);
  }

  return (
    <>
      <NavButton activeButton={active} onClick={handleActive}>
        <div></div>
      </NavButton>

      <NavContainer active={active}>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/Kanto">Kanto</a>
            </li>
            <ThemeActive themeActive={setTheme} onClick={handleSetTheme}>
              Temas {setTheme ? '🡇' : '🡆'}
            </ThemeActive>
            <ThemeContainer setTheme={setTheme}>
              <li onClick={handleSetThemeContext}>Dark</li>
              <li onClick={handleSetThemeContext}>Red</li>
              <li onClick={handleSetThemeContext}>Blue</li>
            </ThemeContainer>
          </ul>
        </nav>
      </NavContainer>
    </>
  );
};
