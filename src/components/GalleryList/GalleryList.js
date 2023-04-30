
import GalleryItem from "../GalleryItem/GalleryItem";



function GalleryList(props){
    
    return(
    
        <>
            <h2>Gallery goes here</h2>

            {props.galleryList.map(item => {

                return (
                    <GalleryItem 
                        key={item.id}
                        item={item}
                    />
                )            
            })}
        </>
    )  
}

export default GalleryList;

//List -> build the list of items. Really only needs to map the data and create 
//GalleryItems by passing the Data to the <GalleryItem>