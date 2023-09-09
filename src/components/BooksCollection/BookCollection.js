import React from 'react';
import {  useNavigate } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { BiCaretLeft, BiCaretRight } from "react-icons/bi";

function BookCollection() {
  
  const books = [
    {
      id: 1,
      title: 'HORROR',
      
      imageUrl: 'https://manybooks.net/sites/default/files/styles/465x295sc/public/2017-12/genre-9.png?itok=bxM3cfU-',
      detailUrl: '/Genre/horror',
    },
    {
      id: 2,
      title: 'ROMANCE',
      
      imageUrl: 'https://manybooks.net/sites/default/files/styles/465x295sc/public/2017-12/genre-1.png?itok=JPijQ3xG',
      detailUrl: '/Genre/Romance',
    },
    {
      id: 3,
      title: 'ACTION $ ADVENTURE',
      
      imageUrl: 'https://manybooks.net/sites/default/files/styles/465x295sc/public/2017-12/genre-2.png?itok=1k5Az45m',
      detailUrl: '/Genre/ActionAdventure',
    },
    {
      id: 4,
      title: 'MYSTERY & THRILLER',
      
      imageUrl: 'https://manybooks.net/sites/default/files/styles/465x295sc/public/2017-12/genre-3.png?itok=hyUUCWf2',
      detailUrl: '/Genre/MystryThriller',
    },
    {
      id: 5,
      title: 'CHILDRENS',
      
      imageUrl: 'https://manybooks.net/sites/default/files/styles/465x295sc/public/2017-12/genre-5.png?itok=DLhAjsN2',
      detailUrl: '/Genre/Children',
    },
    {
      id: 6,
      title: 'FANTASY',
      
      imageUrl: 'https://manybooks.net/sites/default/files/styles/465x295sc/public/2017-12/genre-7.png?itok=ldRsRCOi',
      detailUrl: '/Genre/Fantasy',
    },
    {
      id: 7,
      title: 'HISTORICAL FICTION',
      
      imageUrl: 'https://manybooks.net/sites/default/files/styles/465x295sc/public/2017-12/genre-8.png?itok=BjsPtIN2',
      detailUrl: '/Genre/Hisorical',
    },
    {
      id: 8,
      title: 'NON FICTION',
      
      imageUrl: 'https://manybooks.net/sites/default/files/styles/465x295sc/public/2017-12/genre-11.png?itok=4se_Ue98',
      detailUrl: '/Genre/NonFiction',
    },
    {
      id: 9,
      title: 'SCIENCE FICTION',
      
      imageUrl: 'https://manybooks.net/sites/default/files/styles/465x295sc/public/2017-12/genre-12.png?itok=Ev6LGiP_',
      detailUrl: '/Genre/ScienceFiction',
    },
  ];

  const navigate = useNavigate();

  const handleBookClick = (detailUrl, title, imageUrl) => {
    navigate(detailUrl, { state: { title, imageUrl } });
  };



  const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", }}
        onClick={onClick}
      >
        <BiCaretLeft className="text-lime-500 text-4xl" />
      </div>
    );
  };

  const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div className={className} style={{ ...style, display: "block" }} onClick={onClick}>
        <BiCaretRight className="text-lime-500 text-4xl" />
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="mt-8 mx-16">
      <h2 className="text-3xl font-bold border-b-4 border-lime-500">BOOKS COLLECTION</h2>
      <Slider {...settings}>
        {books.map((book) => (
          <div
            key={book.id}
            onClick={() => handleBookClick(book.detailUrl, book.title, book.imageUrl)}
          >
            <div className="bg-white rounded-lg shadow p-4">
              <img src={book.imageUrl} alt={book.title} className="w-72 h-96 mx-auto" />
              <h3 className="text-lg font-bold mx-auto text-center ">{book.title}</h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default BookCollection;