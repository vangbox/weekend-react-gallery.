



function GalleryList(props){
    
    return(
    <>
      
        <h2>Gallery goes here</h2>

        {props.galleryList.map(gallery => (
            <div className = 'divImg' key={gallery.id}>
            <img src={`${gallery.path}`}/>
            <button>love it!</button>
            {gallery.likes} people love this!
            </div>
        
        ))}
       
    </>
  )
}

export default GalleryList;