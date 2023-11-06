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
    this.setState(prev => ({load: teams}))
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
        <ul className="uls">
          {k ? (
            <div data-testid="loader">
              <Loader type="Rings" color="#ffffff" height={50} />
            </div>
          ) : (
            load.map(each => <TeamCard ele={each} key={each.id} />)
          )}
        </ul>
      </div>
    )
  }
}
