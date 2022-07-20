import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
    state = {
      numberOfEvents: this.props.numberOfEvents
    }

    handleInputChanged = (event) => {
        const value = event.target.value;
        if (value < 1 || value > 32) {
          this.setState({
            numberOfEvents: '',
            infoText: 'Select a number from 1 to 32'
          })
        } else {
          this.setState({
            numberOfEvents: value,
            infoText: ''
          });
          this.props.updateNumberOfEvents(value);
        }
      };

    render () {

        return (
            <div className='numberOfEvents'>
              <ErrorAlert text={this.state.infoText} />
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