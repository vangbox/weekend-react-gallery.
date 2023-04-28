import React from 'react';
import './App.css';
//added imports
import { useState, useEffect } from 'react';
import axios from 'axios';


//components import

function App() {
  //const for app
  //const for galleryList for the whole list
  //const for galleryItem for each items
  const [galleryList, setGalleryList] = useState([]); 
  const [galleryItem, setGalleryItem] = useState('');
  
  // //on load, get galleryList
  useEffect(() => {
    getGalleries()
  }, [])

  // Get axios
  const getGalleries = () => {
    axios.get('/gallery')
    .then(response =>{
      setGalleryList(response.data)
      // console.log('this is the response data from axios.GET', response.data); - got the object needed
    })
    .catch(err => {
      alert('error axios.GET!')
      console.log('error at axios.GET!!');
    })
  }

function galleryLists(){


}
function galleryItems(){
  
}

    return (

      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        {/* galleryList .map below, it should loop to show all gallery with a love it button for each components*/}
        
        
        <table>
          <thead>
            <tr>
              <th>Gallery goes here</th>
            </tr>
          </thead>
          <tbody>
          {galleryList.map(gallery => (
              <tr key={gallery.id}>
                <td><img src={`${gallery.path}`}/></td>
                <td>{gallery.description}</td>
                <button>love it!</button>
                <td>{gallery.likes} people love this!</td>
              </tr>
            ))}
          </tbody>
        </table>
        
      </div>
    );
}

export default App;
