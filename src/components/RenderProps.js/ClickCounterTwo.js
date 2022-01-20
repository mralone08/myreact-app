import React, { Component } from 'react'

class ClickCounterTwo extends Component {
   
    render() {
        const { count, incrementCount } = this.props // destructuring
        return <button onClick={incrementCount}>Clicked {count} times</button>
    }
}

export default ClickCounterTwo
