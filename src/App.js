import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Guitars from './components/Guitars';

export default function App(props) {
  const [guitars, setGuitars] = useState([])
    const [formInputs, updateFormInputs] = useState({
      brand: '',
      model: '',
      year: '',
      style: '',
      img: ''
    })

  const getGuitars = async () => {
    try {
        const response = await fetch('https://guitars-u4.herokuapp.com/guitars')
        const data = await response.json()
        console.log(data)
        setGuitars(data)
    } catch(error) {
        console.error(error)
    }
  }
  useEffect(() => {
      (async function () {
              await getGuitars()
          }
      )()
  }, [])
    
  const handleChange = (event) => {
    const updateInput = Object.assign({}, formInputs, { [event.target.id]: event.target.value })
    updateFormInputs(updateInput)
  }

  const handleSubmit  = async(event) =>{
    event.preventDefault();
    try {
      const response = await axios.post('https://guitars-u4.herokuapp.com/guitars', formInputs);
      const data = response.data;
      await updateFormInputs({
        brand: '',
        model: '',
        year: '',
        style: '',
        img: ''
      })
      await setGuitars([data, ...guitars])
      }catch(error){
        console.error(error)
      }
  }
  return (
    <div className="App">
      <div className="container">
        <nav>
          <h4>Post a Guitar</h4>
          <form onSubmit={handleSubmit}>
            <label htmlFor="brand">Brand</label>
            <input
              type="text"
              id="brand" value={formInputs.brand}
              onChange={handleChange}
            />
            <label htmlFor="model">Model</label>
            <input
              type="text"
              id="model" value={formInputs.model}
              onChange={handleChange}
            />
            <label htmlFor="year">Year</label>
            <input
              type="text"
              id="year" value={formInputs.year}
              onChange={handleChange}
            />
            <label htmlFor="style">Style</label>
            <input
              type="text"
              id="style" value={formInputs.style}
              onChange={handleChange}
            />
            <label htmlFor="img">Image</label>
            <input
              type="text"
              id="img" value={formInputs.img}
              onChange={handleChange}
            />
            <input type="submit" className="submit" />
          </form>
        </nav>
        <main>
          <Guitars guitars={guitars} />
        </main>
        <aside>
        </aside>
      </div>
      <footer />
    </div>
  );
}

