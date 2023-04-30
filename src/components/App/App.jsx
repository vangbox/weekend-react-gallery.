import React from 'react';
import './App.css';
//added imports
import { useState, useEffect } from 'react';
import axios from 'axios';

//components import
import GalleryList from '../GalleryList/GalleryList.js';

function App() {
  //const for app
  //const for galleryList for the whole list
  const [galleryList, setGalleryList] = useState([]); 
  
  // //on load, get galleryList
  useEffect(() => {
    getGalleries()
  }, [])

  // Get axios
  const getGalleries = () => {
    axios.get('/gallery')
    .then(response =>{
      // console.log('this is the response data from axios.GET', response.data); - got the object needed
      setGalleryList(response.data)
    })
    .catch(err => {
      alert('error axios.GET!')
      console.log('error at axios.GET!!');
    })
  }

    return (

      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>

        {/* galleryList .map below, it should loop to show all gallery with a love it button for each components*/}
          <GalleryList 
            galleryList={galleryList} 
            getGalleries={getGalleries}
          />    
      </div>
    );
}

export default App;

//SO get your data onto a STATE OBJECT on App.jsx, 
// pass that down to our LIST component, map out the data in list component, rendering a ITEM each time
// pass the ITEM information into the rendered ITEM
// Build the HTML for that Item within the ITEM component
