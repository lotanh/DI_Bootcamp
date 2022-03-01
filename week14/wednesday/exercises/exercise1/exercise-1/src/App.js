import './App.css';
import PrintHelloComponent from './components/PrintHelloComponent'
import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapCard from './components/BootstrapCard';
import BootsrapCardPaul from './components/BootsrapCardPaul';

const PrintHello = () =>{
  return (
    <div>
      <p>Exercise 1: Function / JSX </p>
      <h1>I Love React</h1>
      <br></br>

      <p>Exercise 2: Creating A Functional Component </p>
      <PrintHelloComponent/>
      <br></br>

      <p>Exercise 3: Bootstrap</p>
      <BootstrapCard />
      <br></br>

      <p>Exercise 4: Component Properties</p>
      <BootsrapCardPaul />
      <br></br>

      <p>Exercise 5: Jumbotron</p>
      <Jumbotron
    title="Welcome to react"
    description="React is the most popular rendering library in the world"
    buttonLabel="Go to the official website"
    buttonURL="https://reactjs.org/"/>
    </div>
  );
}

export default PrintHello;

