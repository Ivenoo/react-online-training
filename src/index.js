import React from 'react';
import ReactDOM from 'react-dom';

import events from './data/events.json';

ReactDOM.render(<div>
    <ul>
    {events.map( (event,index) => {
      return (
      <ol key={index}>
      {event.id}: {event.name} <br/>
      place: {event.place} <br/>
      date: {event.date} : {event.time} <br/><br/><br/>
      </ol>
      )
    })}
    </ul>
  </div>, document.getElementById('root'));


