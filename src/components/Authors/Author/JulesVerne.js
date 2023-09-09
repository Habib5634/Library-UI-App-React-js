import React from 'react';
import { useNavigate } from 'react-router-dom';



function HorrorBooks() {
  
  const books = [
    {
      id: 1,
      title: 'The Call of Cthulhu',
      author: 'Jules Verne',
      Genre:'Horror',
      imageUrl: 'https://manybooks.net/sites/default/files/styles/220x330sc/public/old-covers/cover-cust-13095.jpg?itok=H0c1QL8Y',
      detailUrl: '../BooksDetail/HorrorBooks/CallOfCthulhu',
    },
   {
      id: 2,
      title: 'At the Mountains of Madness',
      author: 'Jules Verne',
      imageUrl: 'https://manybooks.net/sites/default/files/styles/220x330sc/public/old-covers/cover-orig-13235.jpg?itok=parx4bJU',
      Genre:'Horror',
      detailUrl: '../BooksDetail/HorrorBooks/MountainOfMaddneess',
    },
    {
      id: 3,
      title: 'The Best Ghost Stories',
      author: 'Jules Verne',
      imageUrl: 'https://manybooks.net/sites/default/files/styles/220x330sc/public/old-covers/cover-orig-13007.jpg?itok=_sl7pDVk',
      Genre:'Horror',
      detailUrl: '../BooksDetail/HorrorBooks/BestGhostStories',
    },
    {
      id: 4,
      title: 'Dracula',
      author: 'Jules Verne',
      imageUrl: 'https://manybooks.net/sites/default/files/styles/220x330sc/public/old-covers/cover-orig-6694.jpg?itok=1NNJXYUa',
      Genre:'Horror',
      detailUrl: '../BooksDetail/HorrorBooks/dracula',
    },
    {
        id: 5,
        title: 'The Invisible Man',
        author: 'Jules Verne',
        imageUrl: 'https://manybooks.net/sites/default/files/styles/220x330sc/public/old-covers/cover-orig-7340.jpg?itok=E-rNYNDg',
        Genre:'Horror',
        detailUrl: '../BooksDetail/HorrorBooks/InvisibleMan',
      },
      {
        id: 6,
        title: 'Collected Works of Poe',
        author: 'Jules Verne',
        imageUrl: 'https://manybooks.net/sites/default/files/styles/220x330sc/public/old-covers/cover-cust-5719.jpg?itok=td4M8RUi',
        Genre:'Horror',
        detailUrl: '../BooksDetail/HorrorBooks/CollectedWork',
      },
      {
        id: 7,
        title: 'The Strange Case of Dr. Jekyll and Mr. Hyde',
        author: 'Jules Verne',
        imageUrl: 'https://manybooks.net/sites/default/files/styles/220x330sc/public/old-covers/cover-orig-6635.jpg?itok=xg4yvBUC',
        Genre:'Horror',
        detailUrl: '../BooksDetail/HorrorBooks/StrangeCase',
      },
      {
        id: 8,
        title: 'The Shadow Over Innsmouth',
        author: 'Jules Verne',

        imageUrl: 'https://manybooks.net/sites/default/files/styles/220x330sc/public/old-covers/cover-orig-13097.jpg?itok=LYo_K44M',
        Genre:'Horror',
        detailUrl: '../BooksDetail/HorrorBooks/ShadowOverMouth',
      },
  ];

  const navigate = useNavigate();

  const handleBookClick = (detailUrl, title, author,Genre, imageUrl) => {
    navigate(detailUrl, { state: { title, author, Genre, imageUrl } });
  };


  
  return (
    <div className="mt-8 mx-16">
      <h2 className="text-3xl font-bold border-b-4 border-lime-500 mb-8 pb-2">JULES VERNE BOOKS</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">

        {books.map((book) => (
          <div
            key={book.id}
            onClick={() => handleBookClick(book.detailUrl, book.title, book.author,book.Genre, book.imageUrl)}
          >
            <div className="bg-white rounded-lg shadow p-4">
              <img src={book.imageUrl} alt={book.title} className="w-full h-64 object-contain" />
              <h3 className="text-lg font-bold mt-2 text-center">{book.title}</h3>
              <p className="font-bole text-lime-500">By   <span className="text-gray-500">{book.author}</span></p>
              <p className="text-gray-500">{book.Genre}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HorrorBooks;

// import React from 'react';

// function Book1(props) {
//   const { title, imageUrl } = props;

//   return (
//     <div>
//       <h2>{title}</h2>
      
//       <img src={imageUrl} alt={title} />
//     </div>
//   );
// }

// export default Book1;