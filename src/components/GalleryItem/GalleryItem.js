import { useState } from 'react';
import axios from 'axios';

function GalleryItem(props){
          
    const [boolean, setBoolean] = useState(false)
    const galleryItem = props.item;  
        
    //PUT Axios
    const putLoveButton = (likeId) => {
        axios.put(`/gallery/like/${likeId}`)
        .then(response =>{
            // console.log(props.response.likes);
            props.getGalleries()
        })
        .catch(err => {
            alert('error axios.PUT!')
            console.log('error at axios.PUT!!');
        })
    }
             
    if(boolean === false){

        return(
            <>
                <div className = 'divImg' key={props.key}>
                    <img src={`${galleryItem.path}`} onClick = {() => {setBoolean(true)}}/>
                    <button onClick = {() => {putLoveButton(galleryItem.id)}}>love it!</button>
                    {galleryItem.likes} people love this!
                </div>
            </> 
        ) 
            //  console.log('click on picture works!!') 
    }
        else{
            return(
                <>
                    <div className = 'divDescription' key={props.key}>
                        <p>{`${galleryItem.description}`}</p>
                        <button onClick = {() => {putLoveButton(galleryItem.id)}}>love it!</button>
                        {galleryItem.likes} people love this!
                    </div>
                </>
            )
        }  
}

export default GalleryItem;