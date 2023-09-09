import React from 'react';
import { Link } from 'react-router-dom';

function MountainOfMaddmess(props) {
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
      <p className='w-3/4 pb-4'>On an expedition to Antarctica, Professor William Dyer and his colleagues discover the remains of ancient half-vegetable, half-animal life-forms. The extremely early date in the geological strata is surprising because of the highly-evolved features found in these previously unkown life-forms. Through a series of dark revelations, violent episodes, and misunderstandings, the group learns of Earth's secret history and legacy.</p>
     <button className="bg-lime-500 text-white px-4 py-2 rounded shadow">Download PDF</button>
    </div>
    </div>
    
    
  </div>  
  
    </div>
  );
}

export default MountainOfMaddmess;