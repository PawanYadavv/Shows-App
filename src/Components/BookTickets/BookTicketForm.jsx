import React, { useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import './BookTicketForm.css'


function BookTicketForm({ shows }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [ticketCount, setTicketCount] = useState(1);

  const { id } = useParams();
  const [showDetails, setShowDetails] = useState(null);

  useEffect(() => {
    // Finding the show with the matching id from the shows array
    const show = shows.find(show => show.show.id.toString() === id);
    setShowDetails(show?.show || null);
  }, [id, shows]);

  // Handling cases where the show details are not available or if the showId is invalid
  if (!showDetails) {
    return <div>Sorry, show details not found.</div>;
  }

  // Handle form submission for booking tickets
  const handleSubmit = (event) => {
    event.preventDefault();
    // Saveing the booking details to local storage. 
    const bookingDetails = {
      showName: showDetails.name,
      name,
      email,
      ticketCount,
    };
    console.log(bookingDetails);

     // Converting the bookingDetails object to JSON and store it in local storage
  localStorage.setItem('bookingDetails', JSON.stringify(bookingDetails));
  
  console.log(bookingDetails);

  
  // Clearing the form fields after saving
  setName('');
  setEmail('');
  setTicketCount(1);
  };

  return (

    <div>

          <h1 className='app-heading'>Book the Ticket</h1>
    <div className="form-container">
      <h2>Show : {showDetails.name}</h2>
      <p>Runtime: {showDetails.runtime} minutes</p>
      <p>Type: {showDetails.type}</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="ticketCount">Ticket Count:</label>
          <input
            type="number"
            id="ticketCount"
            value={ticketCount}
            onChange={(e) => setTicketCount(e.target.value)}
            min="1"
            max="10"
            required
          />
        </div>
        <button type="submit" className="form-group" id = "submit-btn">
          Book Tickets
        </button>
      </form>
    </div>
    </div>
  );
}

export default BookTicketForm;
