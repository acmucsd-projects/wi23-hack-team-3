import {getRandomColor,createImageFromInitials} from './Utils'
import React, { useState, useEffect } from 'react';

function EventForm() {
  const [name, setName] = useState('');
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Event submitted: ${name} at ${time}\n`);
    console.log(`Date submitted: ${date}`);
  };

  return (
    <form onSubmit={handleSubmit} className="event-form">
      <h2>Submit an Event</h2>
      <label htmlFor="name">Event Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <label htmlFor="time">Event Time:</label>
      <input
        type="time"
        id="time"
        value={time}
        onChange={(event) => setTime(event.target.value)}
      />
      <label htmlFor="date">Date:</label>
      <input
        type="date"
        id="date"
        value={date}
        onChange={(event) => setDate(event.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}


function Text(){
    const [text, setText] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Libero volutpat sed cras ornare arcu dui. Sed sed risus pretium quam vulputate. At erat pellentesque adipiscing commodo elit. Vitae semper quis lectus nulla at volutpat. Viverra aliquet eget sit amet tellus cras adipiscing enim eu. Sollicitudin ac orci phasellus egestas tellus rutrum tellus. Felis eget velit aliquet sagittis id consectetur purus. Pretium nibh ipsum consequat nisl vel. Ipsum dolor sit amet consectetur adipiscing elit duis tristique sollicitudin.');

  function handleTextClick() {
    const newText = prompt('Enter new text:', text);
    if (newText !== null) {
      setText(newText);
    }
  }

  return (
    <p className = "textdesc" onClick={handleTextClick}>{text}</p>
  );
}

function Profile() {
    const [windowSize, setWindowSize] = useState({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  
    useEffect(() => {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
  
      window.addEventListener('resize', handleResize);
  
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    let size = (windowSize.width + windowSize.height)/(1.5);
    let name = "Joshua Kave";
    let imgSrc = "";
    let color = getRandomColor();
    
    return (
        <>
        <img className = "profileImage"
        id='preview'
        src={
            imgSrc.length <= 0 ? createImageFromInitials(size/7, name, color) : imgSrc
        }
        alt='profile-pic'/>
        <div className = "desc">
        <Text />
        </div>
        <div className = "inputE">
        <EventForm />
        </div>
        </>
    );
  }

  export default Profile;