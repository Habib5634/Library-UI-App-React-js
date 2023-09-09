import React from 'react';
import './Banner.css';

function Banner() {
    

    return (
        <>
      <div className="container-fluid">
  <div className="responsive-background mb-4 pb-none flex flex-wrap justify-start justify-items-start" style={{justifyContent: 'flex-start', alignItems: 'flex-start'}}>
    <div className="bg-slate-50 bg-opacity-70 p-4 text-center mt-56 w-8/12 ">
      <h1 className="text-black ml-10 text-start text-4xl sm:text-5xl md:text-6xl lg:text-6 xl xl:text-6xl font-bold border-b-8 border-lime-500">
        KPRLibrary  
      </h1>
      <p className="text-black ml-10 text-start text-lg sm:text-xl md:text-2xl">
      KPRLibrary: Your online destination for books. Discover a wide range of fiction, non-fiction, and academic literature in one place. Easy-to-use and accessible from anywhere, KPRLibrary is your go-to source for reading material.
      </p>
    </div>
  </div>
</div>
        </>
    );
}

export default Banner;