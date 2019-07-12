import React from 'react';
import ReactDOM from 'react-dom';

import events from './data/events.json';

const zad3 = () =>(
    events.map(item => {
      const date = new Date(item.date);

      if (date >= Date.now()) {
        return (
          <li key={item.id}>
            <strong>{item.name}</strong><br />
            Gdzie: {item.place}<br />
            Kiedy: {item.date} - {item.time}<br /><br />
          </li>
        );
      }

      return null;
    })
)


ReactDOM.render(<ul>{zad3()}</ul>, document.getElementById('root'));
