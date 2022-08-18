import React from 'react';
import './App.css';
import WordCard from './WordCard';

const word = "Hello";
const animal = "elephant";
const animal1 = "Dog";
const animal2 = "cat";
const animal3 = "pig";
const car = "car";
const umbrella = "umbrella";
const pen = "pen";

function App() {
  return (
    <div>
      <div class="cities">
      <header>
      <h1>Word Game</h1>
      </header>
      <p>~~~~~~~~~~~~~~~~~~~~~~~</p>
      
      <button type="button"
      onclick="document.getElementById('test').innerHTML = Date()">
        Spell the words correctly.
        
        </button>
          </div>
        <h2>Category</h2>
        <WordCard value={word}/>
        <h2>Animal</h2>
        <WordCard value={animal}/>
        <WordCard value={animal1}/>
        <WordCard value={animal2}/>
        <h2>Consumables</h2>
        <WordCard value={car}/>
        <WordCard value={umbrella}/>
        <WordCard value={pen}/>

    </div>
      );
   }
  export default App;