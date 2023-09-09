import React from 'react';
import FamousAuthor from '../Authors/FamousAuthors';
import Banner from '../Banner/Banner';
import BookCollection from '../BooksCollection/BookCollection';
import LatestBooks from '../LatestBooks/LatestBooks';
import TrendingBooks from '../TrendingBooks/TrendingBooks';



function HomePage() {
  return (
    <div className="">
      
        <Banner />
        <BookCollection />
        <LatestBooks/>
        <FamousAuthor/>
        <TrendingBooks/>
      </div>
    
  );
}

export default HomePage;