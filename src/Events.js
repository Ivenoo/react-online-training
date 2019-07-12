import React from 'react';
import events from './data/events';
import EventItem from './EventItem';

class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      events: [],
      inputvalue: ''
     };
  }

  componentDidMount() {
    this.setState({
      events
    });
  }

  onClearClicked(event) {
    event.preventDefault();

    this.setState({ events: [] });
  }

  onDeleteClicked(id, event) {
    event.preventDefault();

    const filteredArray = this.state.events.filter(item => item.id !== id);

    this.setState({
      events: filteredArray
    });
  }
  fnX =(e) =>{
  e.preventDefault();
  const findText = e.currentTarget.value
  this.setState({
    inputvalue: findText
  })
  console.log(findText)
  }
  render() {
    return (
      <div>
        <input type='text' placeholder="write text" onChange={this.fnX.bind(this)}></input><br/>
        <span>{this.state.inputvalue}</span><br/><br/>
        <ul>
          {this.state.events.map(item => {
            const date = new Date(item.date);

            if (date >= Date.now()) {
              if(item.name != ''){
                 if(item.name.toLowerCase().indexOf(this.state.inputvalue.toLowerCase()) != -1 ){
                  return (
                    <EventItem {...item} key={item.id} onDeleteClicked={this.onDeleteClicked.bind(this)} />
                  );
                 }else{
                  return null;
                 }
               
              }else{
                return (
                  <EventItem {...item} key={item.id} onDeleteClicked={this.onDeleteClicked.bind(this)} />
                );
              }
              
            }

            return null;
          })}
        </ul>
        <button onClick={this.onClearClicked.bind(this)}>Wyczyść</button>
      </div>
    );
  }
};

export default Events;
