
import React, { useState, useEffect } from 'react';
import { useParams , Link } from 'react-router-dom';
import axios from 'axios';
import './ShowSummary.css';

function ShowSummary(props) {

    const [summary, setSummary] = useState('');
    const [name , setName] = useState();
    const { id } = useParams();
    useEffect(() => {
        //  Fetching the summary data here  for the show using the API endpoint
        axios.get(`https://api.tvmaze.com/shows/${id}`)
          .then(response => setSummary(response.data.summary))
          .catch(error => console.error('Error fetching summary:', error));
      }, [id]);

    useEffect(() => {
        // Fetching the summary data for the show using the API endpoint
        axios.get(`https://api.tvmaze.com/shows/${id}`)
          .then(response => setName(response.data.name))
          .catch(error => console.error('Error fetching summary:', error));
      }, [id]);

  return (
    <div className='sumarry-container'>
      <p>Show Name: {name}</p>
      <p>Show ID: {id}</p>

      <div className="sum-section">
      <h2 className='summary'>Summary</h2>
    {summary ? (
      <p className='para' dangerouslySetInnerHTML={{ __html: summary }} />
      ) : (
        <p>No summary available for this show.</p>
        )}
        </div>

      <Link to={`/book-ticket/${id}`}><button className="btn">Book Ticket </button> </Link>

    </div>
  );
}

export default ShowSummary;
