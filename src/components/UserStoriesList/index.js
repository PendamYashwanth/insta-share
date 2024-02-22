import {Component} from 'react'
import Cookies from 'js-cookie'

import ReactSlick from './ReactSlick'

const userStoriesAPI = 'https://apis.ccbp.in/insta-share/stories'

const apiStatusConstants = {
  initial: 'INITIAL',
  progress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class UserStoriesList extends Component {
  state = {apiStatus: apiStatusConstants.initial, storiesData: []}

  componentDidMount = () => {
    this.getUserStories()
  }

  getUserStories = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(userStoriesAPI, options)
    if (response.ok === true) {
      const fetchedData = await response.json()
      const usersStoriesData = fetchedData.users_stories
      const formatUserStoriesData = usersStoriesData.map(eachItem => ({
        id: eachItem.user_id,
        name: eachItem.user_name,
        storyUrl: eachItem.story_url,
      }))
      this.setState({storiesData: formatUserStoriesData})
    }
  }

  render() {
    const {storiesData} = this.state
    return (
      <article className="container">
        <ReactSlick storiesData={storiesData} />
      </article>
    )
  }
}

export default UserStoriesList
