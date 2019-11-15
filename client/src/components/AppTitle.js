import React, { Component } from 'react'

class AppTitle extends Component {
    render() {
        return (
        <div>
            <h2 className="mb-4">{this.props.title}</h2>
        </div>
        )
    }
}

export default AppTitle
