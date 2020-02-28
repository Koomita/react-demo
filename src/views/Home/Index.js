import './Index.scss'
import React, { PureComponent as Component} from 'react'
import Counter from '@/components/Counter'

class Home extends Component {
  render() {
    return (
      <div className="Home p20">
        <Counter />
      </div>
    )
  }
}

export default Home