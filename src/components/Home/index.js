import Loader from 'react-loader-spinner'
import {Component} from 'react'
import TeamCard from '../TeamCard'

import './index.css'

export default class Home extends Component {
  state = {load: []}

  componentDidMount() {
    this.data()
  }

  data = async () => {
    const l = await fetch('https://apis.ccbp.in/ipl')
    const {teams} = await l.json()
    console.log(teams)
    const it = teams.map(each => ({
      Name: each.name,
      TeamImageUrl: each.team_image_url,
      Id: each.id,
    }))
    console.log(it)
    this.setState(prev => ({load: it}))
  }

  render() {
    const {load} = this.state
    console.log(load)
    const k = load.length === 0
    console.log(k)
    return (
      <div className="tri">
        <img
          src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
          alt=" ipl logo"
          height="70"
        />
        <h1>IPL Dashboard</h1>
        {k ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={50} />
          </div>
        ) : (
          <div>
            <ul className="uls">
              {load.map(each => (
                <TeamCard ele={each} key={each.Id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}
