

import { useState } from 'react';


function loveButton(){
            
        }


function GalleryItem(props){
    

        
        const [boolean, setBoolean] = useState(false)
        const galleryItem = props.item;  
        
        
    

    if(boolean === false){

        return(
            <>
        
            <div className = 'divImg' key={props.key}>
                <img src={`${galleryItem.path}`} onClick = {() => {setBoolean(true)}}/>
                <button>love it!</button>
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
                 <button>love it!</button>
                 {galleryItem.likes} people love this!
                 </div>
                 </>
            )
            }  
}






export default GalleryItem;