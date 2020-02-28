import React, { PureComponent as Component } from 'react'
import PropTypes from 'prop-types'
// 链接redux
import { connect } from 'react-redux'

@connect(
  // 第一项是state
  state => {
    return {
      value: state.counter
    }
  },
  // 第二项是reducer
  dispatch => {
    return {
      onIncrement: () => dispatch({ type: 'INCREMENT' }),
      onDecrement: () => dispatch({ type: 'DECREMENT' })
    }
  }
)

class Counter extends Component {
  constructor(props) {
    super(props)
    this.incrementAsync = this.incrementAsync.bind(this)
    this.incrementIfOdd = this.incrementIfOdd.bind(this)
  }

  incrementIfOdd() {
    if (this.props.value % 2 !== 0) {
      this.props.onIncrement()
    }
  }

  incrementAsync() {
    setTimeout(this.props.onIncrement(), 1000)
  }

  static propTypes = {
    // reducer、state作为prop传入本组件
    value: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired,
  }
  
  render() {
    const { value, onIncrement, onDecrement } = this.props
    return (
      <p>
        Clicked: {value} times
        <button onClick={onIncrement}>
          +
        </button>
        {' '}
        <button onClick={onDecrement}>
          -
        </button>
        {' '}
        <button onClick={this.incrementIfOdd}>
          奇数相加
        </button>
        {' s'}
        <button onClick={this.incrementAsync}>
          异步相加
        </button>
      </p>
    )
  }
}

export default Counter