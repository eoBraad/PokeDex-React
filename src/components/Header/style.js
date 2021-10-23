import styled from 'styled-components'

export const NavButton = styled.button`
  width: 50px;
  height: 50px;
  background-color: ${({activeButton}) => activeButton ? "#d32a35" : "#e94c58"};
  position: absolute;
  top: 10px;
  left: ${({activeButton}) => activeButton ? '220px' : '20px'};
  border: 2px solid #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: .5s;
  cursor: pointer;
  z-index: 100;

    &:hover {
      background-color: ${({activeButton}) => activeButton ? "#e94c58" : "#d32a35"};
    }

    div {
      width: 30px;
      height: 2px;
      background-color: #ffffff;
      position: relative;
    }

    div:before {
      content: '';
      width: 30px;
      height: 2px;
      background-color: #ffffff;
      display: block;
      position: absolute;
      top: -10px;
    }

    div:after {
      content: '';
      width: 30px;
      height: 2px;
      background-color: #ffffff;
      display: block;
      position: absolute;
      top: 10px;
    }
    
`

export const NavContainer = styled.div`
  height: 100vh;
  width: 200px;
  position: absolute;
  top: 0;
  left: ${props => props.active ? '0' : '-200px'};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #d32a35;
  transition: .5s;
  z-index: 100;
  li {
    color: #ffffff;
    padding: 5px 0;
    width: 200px;
    text-align: center;
    cursor: pointer;
    transition: .3s;
  }

  li a {
    text-decoration: none;
    color: white;
    width: 200px;
  }

  li:hover {
    background-color: #80282f;
  }
`

export const ThemeActive = styled.li`
    background-color:  ${props => props.themeActive ? '#601a1e' : '#d32a35'};
    width: 100%;
    border: none;
    height: 100%;
` 
export const ThemeContainer = styled.ul`
  overflow-y: hidden;
  display: block;
  height: ${props => props.setTheme ? '110px' : '0'};
  transition: .3s;
  background-color: #80282f;
    li:hover{
      background-color: #601a1e;
    }
`