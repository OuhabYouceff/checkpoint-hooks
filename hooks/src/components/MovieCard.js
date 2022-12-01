import React from 'react';
import '../App.css';

const MovieCard = (props) => {

    let [title, description, posterURL, rating] = Object.values(props.movie);
    return(
        <div className='movieCard'>
            <div className='tout'>
            <img className='film1' src = {posterURL} width={350} height={350}></img>
            <h3 className='h3Class'>Title:</h3>
            <label className='labelC'>{title}</label> 
            <br></br>  
            {/* <br></br>       */}
            <h3 className='h3Class'>Description:</h3>
            <label className='labelC'>{description}</label>
            <br></br>
            {/* <br></br>   */}
            <h3 className='h3Class'>Rating:</h3>  
            <label className='labelC'>{rating}</label>
            
            </div>
            
            
        </div>
    );
    
    }

    MovieCard.defaultProps = {
        title: "Movie Title",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, enim doloribus quia voluptatibus odit minima sequi tempora commodi aliquam odio perferendis officia dolores cumque distinctio, minus architecto dolorem officiis corrupti!",
        posterURL: "None",
    };
    
    export default MovieCard;