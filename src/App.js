import './App.css';

// Assignment
// Count App with two buttons, to incement and decrement
// I also want to see the Count Value

function App() {
  const name = 'Favour';
  return (
    <div onClick={() => alert('Hello World')} className="App">
      Introducing JSX to {name}
      <p></p>
      <aside></aside>
      <section></section>
    </div>
  );
}

export default App;
