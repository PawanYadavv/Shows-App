import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import axios from 'axios';
import ShowList from './Components/ShowLists/ShowList';
import BookTicketForm from './Components/BookTickets/BookTicketForm';
import './App.css';
import ShowSummary from './Components/ShowSummary/ShowSummary';

function App() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    // Fetching data from the API
    axios.get('https://api.tvmaze.com/search/shows?q=all')
      .then(({ data }) => setShows(data)) 
      .catch(error => console.error('Error fetching data:', error));
  }, []);


  return (
    <BrowserRouter>
      <div>
    
        <Routes>

          <Route path="/" element={ <ShowList shows={shows} />   } />
          <Route path="/summary/:id" element={ <ShowSummary shows={shows}/>} />
          <Route path="/book-ticket/:id" element={ <BookTicketForm shows={shows}/>} />

        </Routes>

      </div>
 
   </BrowserRouter>
  );
}

export default App;

