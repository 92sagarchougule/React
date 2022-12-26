
import './App.css';



function App() {

  var a = 10

  function UpdateState(){

     a = 20;

    console.log(a)
    alert('You have clicked on Page ');

  }

  return (
    <>
      <h1> Code for World {a}</h1>
      <button onClick={UpdateState}> Click Me</button>
      
    </>
  );
}

export default App;
