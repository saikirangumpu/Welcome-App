// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {
    isSubscribed: false,
  }

  onChangeStatus = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  render() {
    const {isSubscribed} = this.state
    const subText = isSubscribed ? 'Subscribed' : 'Subscribe'
    return (
      <div className="bg-container">
        <div className="content-container">
          <h1 className="title"> Welcome </h1>
          <p className="description"> Thank you! Happy Learning </p>
          <button
            className="button"
            onClick={this.onChangeStatus}
            type="button"
          >
            {subText}
          </button>
        </div>
      </div>
    )
  }
}

export default Welcome
