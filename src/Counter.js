import React, { Component } from 'react'

class Counter extends Component {
    state ={
        count:0
    }

onIncrement = ()=>{
    this.setState(prevState=>({
        count:prevState.count+1
    }))
}

onDecrement = ()=>{
    const {count} =this.state
    this.setState(prevState=>({
    
        count:prevState.count-1
        
    }))
    
}
    
  render() {
      const {count} = this.state
    return (
      <div>
          <h1>Counter</h1>
            <p>{count}</p>
            <button onClick={this.onIncrement}>Increment</button>
            <button onClick={this.onDecrement}>Decrement</button>
          </div>
    )
  }
}

export default Counter