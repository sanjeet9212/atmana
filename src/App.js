import React, {useState, useEffect} from 'react';

function App() {

  const [joke, setJoke] = useState([]);
  const [cat, setCat] = useState('None');

  const newJoke = () => {
    if (cat==='Animal'){
      // eslint-disable-next-line
      {animalJoke()}
    }
    else if (cat==='Career'){
      // eslint-disable-next-line
      {careerJoke()}
    }
    else if (cat==='Celebrity'){
      // eslint-disable-next-line
      {celebrityJoke()}
    }
    else if (cat==='Dev'){
      // eslint-disable-next-line
      {devJoke()}
    }
    else if (cat==='Explicit'){
      // eslint-disable-next-line
      {explicitJoke()}
    }
    else if (cat==='Fashion'){
      // eslint-disable-next-line
      {fashionJoke()}
    }
    else if (cat==='Food'){
      // eslint-disable-next-line
      {foodJoke()}
    }
    else if (cat==='History'){
      // eslint-disable-next-line
      {historyJoke()}
    }
    else if (cat==='Money'){
      // eslint-disable-next-line
      {moneyJoke()}
    }
    else if (cat==='Movie'){
      // eslint-disable-next-line
      {movieJoke()}
    }
    else if (cat==='Music'){
      // eslint-disable-next-line
      {musicJoke()}
    }
    else if (cat==='Political'){
      // eslint-disable-next-line
      {politicalJoke()}
    }
    else if (cat==='Religion'){
      // eslint-disable-next-line
      {religionJoke()}
    }
    else if (cat==='Science'){
      // eslint-disable-next-line
      {scienceJoke()}
    }
    else if (cat==='Sports'){
      // eslint-disable-next-line
      {sportJoke()}
    }
    else if (cat==='Travel'){
      // eslint-disable-next-line
      {travelJoke()}
    }
    else{
      alert("Please Select a category first from Below Given Options")
    }
  }

  const animalJoke = () => {
    console.log({joke})
    setCat('Animal')
    fetch('https://api.chucknorris.io/jokes/random?category=animal')
      .then(res => res.json())
      .then(data => setJoke(data.value));
  }

  const careerJoke = () => {
    console.log({joke})
    setCat('Career')
    fetch('https://api.chucknorris.io/jokes/random?category=career')
      .then(res => res.json())
      .then(data => setJoke(data.value));
  }

  const celebrityJoke = () => {
    console.log({joke})
    setCat('Celebrity')
    fetch('https://api.chucknorris.io/jokes/random?category=celebrity')
      .then(res => res.json())
      .then(data => setJoke(data.value));
  }

  const devJoke = () => {
    console.log({joke})
    setCat('Dev')
    fetch('https://api.chucknorris.io/jokes/random?category=dev')
      .then(res => res.json())
      .then(data => setJoke(data.value));
  }

  const explicitJoke = () => {
    console.log({joke})
    setCat('Explicit')
    fetch('https://api.chucknorris.io/jokes/random?category=explicit')
      .then(res => res.json())
      .then(data => setJoke(data.value));
  }

  const fashionJoke = () => {
    console.log({joke})
    setCat('Fashion')
    fetch('https://api.chucknorris.io/jokes/random?category=fashion')
      .then(res => res.json())
      .then(data => setJoke(data.value));
  }

  const foodJoke = () => {
    console.log({joke})
    setCat('Food')
    fetch('https://api.chucknorris.io/jokes/random?category=food')
      .then(res => res.json())
      .then(data => setJoke(data.value));
  }

  const historyJoke = () => {
    console.log({joke})
    setCat('History')
    fetch('https://api.chucknorris.io/jokes/random?category=history')
      .then(res => res.json())
      .then(data => setJoke(data.value));
  }

  const moneyJoke = () => {
    console.log({joke})
    setCat('Money')
    fetch('https://api.chucknorris.io/jokes/random?category=money')
      .then(res => res.json())
      .then(data => setJoke(data.value));
  }

  const movieJoke = () => {
    console.log({joke})
    setCat('Movie')
    fetch('https://api.chucknorris.io/jokes/random?category=movie')
      .then(res => res.json())
      .then(data => setJoke(data.value));
  }

  const musicJoke = () => {
    console.log({joke})
    setCat('Music')
    fetch('https://api.chucknorris.io/jokes/random?category=music')
      .then(res => res.json())
      .then(data => setJoke(data.value));
  }

  const politicalJoke = () => {
    console.log({joke})
    setCat('Political')
    fetch('https://api.chucknorris.io/jokes/random?category=political')
      .then(res => res.json())
      .then(data => setJoke(data.value));
  }

  const religionJoke = () => {
    console.log({joke})
    setCat('Religion')
    fetch('https://api.chucknorris.io/jokes/random?category=religion')
      .then(res => res.json())
      .then(data => setJoke(data.value));
  }

  const scienceJoke = () => {
    console.log({joke})
    setCat('Science')
    fetch('https://api.chucknorris.io/jokes/random?category=science')
      .then(res => res.json())
      .then(data => setJoke(data.value));
  }

  const sportJoke = () => {
    console.log({joke})
    setCat('Sports')
    fetch('https://api.chucknorris.io/jokes/random?category=sport')
      .then(res => res.json())
      .then(data => setJoke(data.value));
  }

  const travelJoke = () => {
    console.log({joke})
    setCat('Travel')
    fetch('https://api.chucknorris.io/jokes/random?category=travel')
      .then(res => res.json())
      .then(data => setJoke(data.value));
  }

  useEffect(() => {
  }, [])

  return (
    <div className = 'main'>
        <div className = 'box'>
          <h2>Chuck Morris Jokes Generator</h2>
          <h3>Selected Category: {cat}</h3>
          <p dangerouslySetInnerHTML = {{__html: joke}} />
          <button onClick = {newJoke}>New Joke</button>
        </div>

        <div id="container">
          <button onClick = {animalJoke}>Animal</button>
          <button onClick = {careerJoke}>Career</button>
          <button onClick = {celebrityJoke}>Celebrity</button>
          <button onClick = {devJoke}>Dev</button>

          <button onClick = {explicitJoke}>Explicit</button>
          <button onClick = {fashionJoke}>Fashion</button>
          <button onClick = {foodJoke}>Food</button>
          <button onClick = {historyJoke}>History</button>

          <button onClick = {moneyJoke}>Money</button>
          <button onClick = {movieJoke}>Movie</button>
          <button onClick = {musicJoke}>Music</button>
          <button onClick = {politicalJoke}>Political</button>

          <button onClick = {religionJoke}>Religion</button>
          <button onClick = {scienceJoke}>Science</button>
          <button onClick = {sportJoke}>Sport</button>
          <button onClick = {travelJoke}>Travel</button>
        </div>
    </div>
  );
}

export default App
