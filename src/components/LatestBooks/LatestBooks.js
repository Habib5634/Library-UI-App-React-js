import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LatestBook.css'


function LatestBooks() {
  
  const books = [
    {
      id: 1,
      title: 'The Trials of the Core',
      author: 'By Michael E. Thies',
      imageUrl: 'https://manybooks.net/sites/default/files/styles/220x330sc/public/2023-01/510Lx9FrvQS.jpg?itok=vR6SI-vX',
      Genre:'Romance',
      detailUrl: '/book1',
    },
    {
      id: 2,
      title: 'Book 2',
      author: 'Author 2',
      imageUrl: 'https://via.placeholder.com/150',
      Genre:'Romance',
      detailUrl: '/book2',
    },
    {
      id: 3,
      title: 'Book 3',
      author: 'Author 3',
      imageUrl: 'https://via.placeholder.com/150',
      Genre:'Romance',
      detailUrl: '/book3',
    },
    {
      id: 4,
      title: 'Book 4',
      author: 'Author 4',
      imageUrl: 'https://via.placeholder.com/150',
      Genre:'Romance',
      detailUrl: '/book4',
    },
    {
        id: 5,
        title: 'Book 1',
        author: 'Author 1',
        imageUrl: 'https://via.placeholder.com/150',
        Genre:'Romance',
        detailUrl: '/book1',
      },
      {
        id: 6,
        title: 'Book 2',
        author: 'Author 2',
        imageUrl: 'https://via.placeholder.com/150',
        Genre:'Romance',
        detailUrl: '/book2',
      },
      {
        id: 7,
        title: 'Book 3',
        author: 'Author 3',
        imageUrl: 'https://via.placeholder.com/150',
        Genre:'Romance',
        detailUrl: '/book3',
      },
      {
        id: 8,
        title: 'Book 4',
        author: 'Author 4',

        imageUrl: 'https://via.placeholder.com/150',
        Genre:'Romance',
        detailUrl: '/book4',
      },
  ];

  const navigate = useNavigate();

  const handleBookClick = (detailUrl, title, author, Genre, imageUrl) => {
    navigate(detailUrl, { state: { title, author,Genre, imageUrl } });
  };


  
  return (
    <div className="mt-8 mx-16">
      <h2 className="text-3xl font-bold border-b-4 border-lime-500 mb-8 pb-2">LATEST BOOKS</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">

        {books.map((book) => (
          <div
            key={book.id}
            onClick={() => handleBookClick(book.detailUrl, book.title, book.author,book.Genre, book.imageUrl)}
          >
            <div className="bg-white rounded-lg shadow p-4">
              <img src={book.imageUrl} alt={book.title} className="w-full h-64 object-contain" />
              <h3 className="text-lg font-bold mt-2 text-center">{book.title}</h3>
              <p className="text-gray-500">{book.author}</p>
              <p className="text-gray-500">{book.Genre}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LatestBooks;