import React from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { BiCaretLeft, BiCaretRight } from "react-icons/bi";

function FamousAuthor() {
  
  const books = [
    {
      id: 1,
      title: 'Jules Verne   ',
      
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAh-FdOKY9TINIRa4Pb2jRkNdV6INtEqebdp4JE0KEi-EvKpXC',
      detailUrl: '/Author/JulesVerne',
    },
    {
      id: 2,
      title: 'Jack London',
      
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Jack_London_young.jpg/1200px-Jack_London_young.jpg',
      detailUrl: '/Genre/Romance',
    },
    {
      id: 3,
      title: 'Frances Hodgson Burnett',
      
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/db/Frances_Burnett.jpg',
      detailUrl: '/Genre/ActionAdventure',
    },
    {
      id: 4,
      title: 'Jane Austen (Jane Austen)',
      
      imageUrl: 'https://cdn.britannica.com/12/172012-050-A9AFF8AF/Jane-Austen-Cassandra-engraving-portrait-1810.jpg',
      detailUrl: '/Genre/MystryThriller',
    },
    {
      id: 5,
      title: 'Tamara Leigh',
      
      imageUrl: 'https://agfundernews.com/wp-content/uploads/2022/03/Tamara-Leigh1-1-e1646869157220.jpg',
      detailUrl: '/Genre/Children',
    },
    {
      id: 6,
      title: 'Emily Brontë',
      
      imageUrl: 'https://cdn2.penguin.com.au/authors/original/34655au.jpg',
      detailUrl: '/Genre/Fantasy',
    },
    {
      id: 7,
      title: 'Bram Stoker',
      
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Bram_Stoker_1906.jpg',
      detailUrl: '/Genre/Hisorical',
    },
    {
      id: 8,
      title: 'Louisa May Alcott',
      
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Louisa_May_Alcott%2C_c._1870_-_Warren%27s_Portraits%2C_Boston.jpg',
      detailUrl: '/Genre/NonFiction',
    },
    {
      id: 9,
      title: 'Helen Keller',
      
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Helen_Keller_circa_1920_-_restored.jpg/1200px-Helen_Keller_circa_1920_-_restored.jpg ',
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
      <h2 className="text-3xl font-bold border-b-4 border-lime-500">FAMOUS AUTHORS</h2>
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

export default FamousAuthor;