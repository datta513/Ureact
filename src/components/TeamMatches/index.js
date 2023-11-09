import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Latest from '../LatestMatch/index'
import Card from '../MatchCard/index'
import './index.css'

export default class Details extends Component {
  state = {th: false, latestMatch: [], recentMatch: [], Ban: null, pteam: null}

  componentDidMount() {
    this.getd()
  }

  getd = async () => {
    const Camelatest = thi => {
      const k = {
        Umpires: thi.umpires,
        Result: thi.result,
        ManOfTheMatch: thi.man_of_the_match,
        CompetingTeam: thi.competing_team,
        CompetingTeamLogo: thi.competing_team_logo,
        Date: thi.date,
        FirstInnings: thi.first_innings,
        ID: thi.id,
        MatchStatus: thi.match_status,
        SecondInnings: thi.second_innings,
        Venue: thi.venue,
      }
      return k
    }

    const Camelrecent = prop => {
      const l = 0
      return 'hi'
    }

    const {match} = this.props
    const {params} = match
    const {Id} = params
    const link = `https://apis.ccbp.in/ipl/${Id}`
    const res = await fetch(link)
    console.log(Id)
    const resu = await res.json()
    const latest = Camelatest(resu.latest_match_details)
    const recent = resu.recent_matches.map(each => Camelatest(each))
    console.log('recent')
    console.log(recent)
    const Banner = resu.team_banner_url
    this.setState(prev => ({
      th: true,
      latestMatch: latest,
      recentMatch: recent,
      Ban: Banner,
      pteam: Id,
    }))

    console.log('total')
    console.log(resu)
  }

  loader() {
    const {latestMatch, Ban, recentMatch, pteam} = this.state

    return (
      <div className={`sty ${pteam}`}>
        <img src={Ban} alt="team banner" />
        <Latest item={latestMatch} />
        <ul className="unlis">
          {recentMatch.map(each => (
            <Card item={each} key={each.ID} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {th, recentMatch, latestMatch} = this.state
    console.log(recentMatch, latestMatch)

    return (
      <div>
        {th ? (
          this.loader()
        ) : (
          <div data-testid="loader">
            <Loader type="Oval" />
          </div>
        )}
      </div>
    )
  }
}
