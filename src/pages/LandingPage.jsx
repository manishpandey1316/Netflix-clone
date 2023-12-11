import styled from "styled-components";
import backgroundImage from "../assets/login.jpg";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
const Container = styled.div`
.img-container {
  position: absolute;
  background: url(${backgroundImage});
  background-size: cover;
  height: 100vh;
  width: 100vw;
  opacity: 0.4;
}
.logo {
  background: url(${logo});
  position: absolute;
  background-size: 15vw 10vh;
  left: 5vw;
  top: 2vh;
  height: 10vh;
  width: 15vw;
}
.content {
  font-size: 14px;
  position: absolute;
  left: 25vw;
  top: 25vh;
  height: 50vh;
  width: 50vw;
  font-family: "Hedvig Letters Sans", sans-serif;
  display: grid;
  gap: 0.5em;
  grid-template-rows: repeat(5, 1fr);
  justify-content: center;
  align-items: center;
  font-weight: bold;
  text-align: center;
  letter-spacing: 0.05em;

  p {
    font-size: 3.5em;
  }
  h1 {
    font-size: 1.6em;
  }
  span {
    font-size: 1.2em;
  }
  a {
    display:flex;
    background-color: red;
    color: white;
    height: 4em;
    width: 8em;
    border: 0.2em black;
    border-radius: 0.3em;
    box-shadow: 0.2em 0.2em 0.1em black;
    justify-self: center;
    text-decoration: none;
    align-items:center;
    justify-content:center;
    span{
       font-size:1em;
    }
   &:active {
  transform: scale(0.95); 
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3); 
}
  }
}
@media (max-width: 768px) {
  .logo {
    height: 10vh;
    width: 20vw;
    background-size: 20vw 10vh;
  }
  .content {
    left: 0;
    height: 40vh;
    width: 100vw;
    p {
      font-size: 1.8em;
    }
    h1 {
      font-size: 1.2em;
    }
    span {
      font-size: 1em;
    }
  }
}
`;
export function LandingPage() {
 

  return (
    <>
      <Container>
        <div className="img-container"></div>
        <div className="logo"></div>
        <div className="content">
          <p>Unlimited movies, TV</p>
          <p>shows and more</p>
          <h1>Watch anywhere. Cancel anytime</h1>
          <span>Ready to watch? Let's get started</span>
         
            <Link to="/Netflix"><span>Get Started</span></Link>
         
        </div>
      </Container>
    </>
  );
}
