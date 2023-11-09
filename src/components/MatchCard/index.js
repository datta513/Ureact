import './index.css'

const Card = props => {
  const {item} = props
  const {MatchStatus} = item
  const sty = MatchStatus !== 'Lost' ? 'Gc' : 'Rc'
  return (
    <li className="cards">
      <img
        src={item.CompetingTeamLogo}
        alt={`competing team ${item.CompetingTeam}`}
        height="50"
      />
      <h1>{item.CompetingTeam}</h1>
      <p>{item.Result}</p>
      <p className={sty}>{item.MatchStatus}</p>
    </li>
  )
}

export default Card
