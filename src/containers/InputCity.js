import React from 'react';

export default class InputCity extends React.Component {
    state = {
        city: '',
    }
    handleChange = event => {
        this.setState({
            city: event.target.value
        })
    }
    render(){
        return(
            <div style={{textAlign: 'center', fontSize: '20px', marginTop: '20px'}}>
                <input 
                type="text" 
                placeholder="Enter City"
                value={this.state.city} 
                onChange={this.handleChange}
                />
                <button onClick={() => {this.props.getTemperature(this.state.city)}}>Get Temperature</button>
            </div>
        )
    }
}