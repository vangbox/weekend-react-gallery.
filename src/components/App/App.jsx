import React from 'react';
import './App.css';
//added imports
import { useState, useEffect } from 'react';
import axios from 'axios';

//components import
import GalleryList from '../GalleryList/GalleryList.js';
import GalleryItem from '../GalleryItem/GalleryItem.js';


function App() {
  //const for app
  //const for galleryList for the whole list
  //const for galleryItem for each items
  const [galleryList, setGalleryList] = useState([]); 
  const [galleryItem, setGalleryItem] = useState(false);
  
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
      setGalleryItem(response.data)
      
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
          />
          
        {/* galleryItem next */}
        <GalleryItem 
        galleryItem={galleryItem}
        />
       
      </div>
    );
}

export default App;
