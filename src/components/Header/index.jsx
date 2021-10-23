import { NavButton, NavContainer, ThemeActive, ThemeContainer } from './style';
import { useState } from 'react';

export const Navigation = () => {
  const [active, setActive] = useState(false);
  const [setTheme, setThemeActive] = useState(false);

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
              <li>Dark</li>
              <li>Red</li>
              <li>Blue</li>
            </ThemeContainer>
          </ul>
        </nav>
      </NavContainer>
    </>
  );
};
