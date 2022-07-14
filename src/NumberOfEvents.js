import React, { Component } from 'react';

class NumberOfEvents extends Component {
    state = {
      numberOfEvents: this.props.numberOfEvents
    }

    handleInputChanged = (event) => {
        const value = event.target.value;
        if (value < 1 || value > 32) {
          this.setState({
            numberOfEvents: '',
          })
        } else {
          this.setState({
            numberOfEvents: value
          });
          this.props.updateNumberOfEvents(value);
        }
      };
    render () {
        return (
            <div className='numberOfEvents'>
                <input 
                type='number'
                className='inputNumberOfEvents'
                onChange={this.handleInputChanged}
                value={this.state.numberOfEvents}
                />
            </div>
        )
    }
}

export default NumberOfEvents;