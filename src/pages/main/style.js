import styled from "styled-components";
import pokeballIcon from '../../assets/pokeball-icon.png'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background-color: ${(props) => props.theme.backGroundColor};

   h1 {
     margin-top: 15px;
   }
   form { 
      margin-top: 20px;

      input {
        width: 300px;
        height: 35px;
        background: #ffffff url(${pokeballIcon}) no-repeat;
        background-position: 1% center;
        padding: 15px 35px;
        font-family: 'Poppins';
        font-size: 14px;
      }

      button {
        margin-left: 10px;
        width: 100px;
        height: 35px;
        border: none;
        cursor: pointer;
        background-color: ${(props) => props.theme.searchColor};
        font-size: 14px;
        color: #ffffff;
        font-family: 'Poppins';
        letter-spacing: .5px;
      }
      
   }
`

export const PokemonContainer = styled.div`
  margin-top: 20px;

   .error-tittle {
    max-width: 300px;
    font-size: 24px;
    text-align: center;
   }

     li {
       width: 300px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 10px 0;
        border: 2px solid #ffffff;
        border-radius: 20px;
        color: black;

        h1 {
          margin-bottom: 10px;
        }

        img {
          width: 150px;
          height: 150px;
        }
        
        .description-info {
          color: black;
          font-size: 17px;
          font-weight: bold;
        }
        
     }
`