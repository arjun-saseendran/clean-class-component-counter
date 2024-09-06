import React, { Component } from 'react'

export default class App extends Component {
  constructor(){
    super()

    this.state({
      count: 0
    })
  }
  render() {
    return (
      <>
      
      <button onClick={()=> this.setState({count: this.state.count + 1})}>Plus</button>
      
      <h1>{this.state.count}</h1>
      <button onClick={()=> this.setState({count: this.state.count - 1})}>Minus</button>
      
      
      </>
    )
  }
}
