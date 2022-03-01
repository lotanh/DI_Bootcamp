import './App.css';
import { Alert } from './Alert';
import { Alert2 } from './Alert2';


function App() {
  return (
    <div className="App">
      {/* <Alert text="OMG! Something really bad has happended!" /> */}
      <Alert2 />
    {/* <Alert2 text="Are you sure?" show={false} /> */}
    </div>
  );
}

export default App;
