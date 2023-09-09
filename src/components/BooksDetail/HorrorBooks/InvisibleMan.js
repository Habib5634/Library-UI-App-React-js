import React from 'react';
import { Link } from 'react-router-dom';

function InvisibleMan(props) {
  const { title, imageUrl, Genre, author,published } = props;

  return (
    <div className="mt-8 mx-16" >
      <h2 className="text-3xl font-bold border-b-4 border-lime-500 mb-8 pb-2 w-full">{title}</h2>
      <div className="flex mt-8 ">
      <div className="w-1/4">
    <img className='h-[500px] w-full' src={imageUrl} alt={title} />
    <br/>
    <p>Published: {published}</p>
    </div>  
    <div className=" ml-8 w-1/2" >
    <div className=" justify-between items-center">
      <h2 className="text-3xl font-bold border-b-4 border-lime-500 pb-2">{title}</h2>
      
      <p className="font-bold text-lime-500">By<Link to="#" className='text-gray-600 text-blue-600'> {author}</Link></p>
      <p className="font-bold text-lime-500">Genre <span className='text-gray-600'> {Genre}</span></p>
      <p className="text-3xl font-bold border-b-4 border-lime-500 pb-2">Book Description</p>
      <p className='w-3/4 pb-4'>The Invisible Man of the title is ''Griffin'', a scientist who theorizes that if a person's refractive index is changed to exactly that of air and his body does not absorb or reflect light, then he will not be visible. He successfully carries out this procedure on himself, but begins to become mentally unstable as a result...</p>
     <button className="bg-lime-500 text-white px-4 py-2 rounded shadow">Download PDF</button>
    </div>
    </div>
    
    
  </div>  
  
    </div>
  );
}

export default InvisibleMan;