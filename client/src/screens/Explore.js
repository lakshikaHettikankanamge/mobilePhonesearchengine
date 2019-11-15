import React, { Component } from 'react'
import ExploreContainer from './ExploreContainer'

class Explore extends Component {
  render() {
    return (
      <div>
        <div className='explore'>
                <div className='bg-light'>
                    <div className='inner'>
                        <ExploreContainer></ExploreContainer>
                    </div>
                </div>
            </div>
      </div>
    )
  }
}

export default Explore

