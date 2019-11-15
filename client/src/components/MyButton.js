import React, { Component } from 'react'
import {Button} from 'reactstrap'

class MyButton extends Component {
  render() {
    return (
      <div>
        <Button type="submit" color="primary" className="btn btn-primary btn-lg btn-block text-white btn-search">
        {this.props.title}
        </Button>
      </div>
    )
  }
}

export default MyButton
