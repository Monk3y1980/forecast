import React from 'react'
import Header from './components/Header'
import InputCity from './containers/InputCity'

export default class App extends React.Component{

  state = {
    temperature: '',
    error: '',
    isBusy: false,
  }
  getTemperature = (city) =>{
    const url = 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&units=metric&appid=73086d8cdcc1c284c6c173a777e9a180'
    this.setState({
      isBusy: true,
    })
    fetch(url).then(response=>{
      return response.json()
    }).then(data=>{
      const temp = Math.round(data.main.temp)
      this.setState({
        temperature: temp,
        isBusy: false
      })
    }).catch(error=>{
      console.log(error)
    })
  }
  render() {
    let data = null;
    if (this.state.isBusy && !this.state.error){
      data = <p style={{textAlign: 'center'}}>Loading...</p>
    } else if (this.state.error){
      data = <p style={{textAlign: 'center'}}>Ошибка: {this.state.error}</p>
    } else if (this.state.temperature !== ''){
      data = <p style={{textAlign: 'center'}}>Температура сейчас: {this.state.temperature}</p>
    }
    return(
      <React.Fragment>
      <Header />
      <InputCity getTemperature={this.getTemperature}/>
      {data}
      </React.Fragment>
    )
  }
}