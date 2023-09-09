import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
// Genre
import Horror from './components/BooksCollection/Genre/horror';
import Action from './components/BooksCollection/Genre/ActionAdventure';
import Childrens from './components/BooksCollection/Genre/Children';
import Fantasy from './components/BooksCollection/Genre/Fantasy';
import Historical from './components/BooksCollection/Genre/Hostorical';
import Mystry from './components/BooksCollection/Genre/MystryThriller';
import NonFiction from './components/BooksCollection/Genre/NonFiction';
import Romance from './components/BooksCollection/Genre/Romance';
import ScienceFiction from './components/BooksCollection/Genre/ScienceFiction';
// Authors
import JulesVerne from './components/Authors/Author/JulesVerne';
// horror books
import CallOfCthulhu from './components/BooksDetail/HorrorBooks/CallOfCthulhu';
import MountainOfMaddmess from './components/BooksDetail/HorrorBooks/MountainOfMaddneess';
import BestGhostStories from './components/BooksDetail/HorrorBooks/BestGhostStories';
import Dracula from './components/BooksDetail/HorrorBooks/Dracula';
import InvisibleMan from './components/BooksDetail/HorrorBooks/InvisibleMan';
import CollectedWork from './components/BooksDetail/HorrorBooks/CollectedWork';
import StrangeCase from './components/BooksDetail/HorrorBooks/StrangeCase';
import ShadowOverMouth from './components/BooksDetail/HorrorBooks/ShadowOverMouth';

function App() {  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Setting Route for bookcollection to genre */}
        <Route path="/Genre/horror" element={<Horror />} />
        <Route path="/Genre/ActionAdventure" element={<Action />} />
        <Route path="/Genre/Children" element={<Childrens />} />
        <Route path="/Genre/Fantasy" element={<Fantasy />} />
        <Route path="/Genre/Hisorical" element={<Historical />} />
        <Route path="/Genre/MystryThriller" element={<Mystry/>} />
        <Route path="/Genre/NonFiction" element={<NonFiction />} />
        <Route path="/Genre/Romance" element={<Romance />} />
        <Route path="/Genre/ScienceFiction" element={<ScienceFiction />} />

        {/* Setting Routes fpr Authors to authors books collection */}

        <Route path="/Author/JulesVerne" element={<JulesVerne />} />
         {/* Setting Routs for HorrorBooks */}
         <Route
           path="/BooksDetail/HorrorBooks/CallOfCthulhu"
          element={<CallOfCthulhu title="The Call of Cthulhu" author="H. P. Lovecraft" Genre="Horror" imageUrl="https://manybooks.net/sites/default/files/styles/220x330sc/public/old-covers/cover-cust-13095.jpg?itok=H0c1QL8Y" />}
        />
         <Route
           path="/BooksDetail/HorrorBooks/MountainOfMaddneess"
          element={<MountainOfMaddmess title="At the Mountains of Madness" author="H. P. Lovecraft" Genre="Horror" imageUrl="https://manybooks.net/sites/default/files/styles/220x330sc/public/old-covers/cover-orig-13235.jpg?itok=parx4bJU" published="1935" />}
        />
        <Route
           path="/BooksDetail/HorrorBooks/BestGhostStories"
          element={<BestGhostStories title="The Best Ghost Stories" author="Unknown" Genre="Horror" imageUrl="https://manybooks.net/sites/default/files/styles/220x330sc/public/old-covers/cover-orig-13007.jpg?itok=_sl7pDVk" published="1919" />}
        />
        <Route
           path="/BooksDetail/HorrorBooks/Dracula"
          element={<Dracula title="Dracula" author="Bram Stoker" Genre="Horror" imageUrl="https://manybooks.net/sites/default/files/styles/220x330sc/public/old-covers/cover-orig-6694.jpg?itok=1NNJXYUa" published="1897" />}
        />
         <Route
           path="/BooksDetail/HorrorBooks/InvisibleMan"
          element={<InvisibleMan title="The Invisible Man" author="H. G. Wells" Genre="Horror" imageUrl="https://manybooks.net/sites/default/files/styles/220x330sc/public/old-covers/cover-orig-7340.jpg?itok=E-rNYNDg" published="1897" />}
        />
        <Route
           path="/BooksDetail/HorrorBooks/CollectedWork"
          element={<CollectedWork title="Collected Works of Poe" author="Edgar Allan Poe" Genre="Horror" imageUrl="https://manybooks.net/sites/default/files/styles/220x330sc/public/old-covers/cover-cust-5719.jpg?itok=td4M8RUi" published="Null" />}
        />
        <Route
           path="/BooksDetail/HorrorBooks/StrangeCase"
          element={<StrangeCase title="The Strange Case of Dr. Jekyll and Mr. Hyde" author="Robert Louis Stevenson" Genre="Horror" imageUrl="https://manybooks.net/sites/default/files/styles/220x330sc/public/old-covers/cover-orig-6635.jpg?itok=xg4yvBUC" published="1931" />}
        />
        <Route
           path="/BooksDetail/HorrorBooks/ShadowOverMouth"
          element={<ShadowOverMouth title="The Shadow Over Innsmouth" author="H. P. Lovecraft" Genre="Horror" imageUrl="https://manybooks.net/sites/default/files/styles/220x330sc/public/old-covers/cover-orig-13097.jpg?itok=LYo_K44M" published="1931" />}
        />

      </Routes>
    </Router>
  );
}

export default App;

{/* <Route path="/book2" element={<Book2 />} />
        <Route path="/book3" element={<Book3 />} /> */}

        // <Route
        //   path="/horror"
        //   element={<Book1 title="Horror" author="Author 1" imageUrl="https://via.placeholder.com/150" />}
        // />
