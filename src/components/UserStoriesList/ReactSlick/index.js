import {Component} from 'react'
import Slider from 'react-slick'

import './index.css'

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 7,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
}

class ReactSlick extends Component {
  renderSlider = storiesData => (
    <Slider {...settings}>
      {storiesData.map(eachItem => {
        const {id, name, storyUrl} = eachItem
        return (
          <div className="slick-item" key={id}>
            <div className="story-image-container">
              <img className="story-image" src={storyUrl} alt="user story" />
            </div>
            <p>{name}</p>
          </div>
        )
      })}
    </Slider>
  )

  render() {
    const {storiesData} = this.props
    return (
      <div className="main-container">
        <div className="slick-container">{this.renderSlider(storiesData)}</div>
      </div>
    )
  }
}

export default ReactSlick
