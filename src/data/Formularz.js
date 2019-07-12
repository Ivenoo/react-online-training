import React from 'react';
import events from './events';


class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
         name: '', 
         place: '',
         date: '',
         time: '',
         };
  }

formWrite = (type, e) =>{
  const valueInput =   e.currentTarget.value;
  this.setState({
    [type]: valueInput
  })
}

  render() {
    return (
        <div>
            <input type='text' onChange={this.formWrite.bind(this, 'name')} placeholder="Name" ></input><br/>
            <input type='text' onChange={this.formWrite.bind(this, 'place')} placeholder="Place"></input><br/>
            <input type='date' onChange={this.formWrite.bind(this, 'date')} placeholder="Date"></input>  
            <input type='time' onChange={this.formWrite.bind(this, 'time')} placeholder="Time"></input><br/><br/>
            <input type='Submit' onClick={this.props.onSubmit.bind(this, this.state.name, this.state.place, this.state.date,this.state.time)}  value="Send"></input>
        </div>
    );
  }
};

export default Form;
