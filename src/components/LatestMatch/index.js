import './index.css'

const Latest = props => {
  const {item} = props
  console.log(item)
  return (
    <div className="pcon">
      <div className="scon1">
        <p>{item.CompetingTeam}</p>
        <p>{item.Date}</p>
        <p>{item.Venue}</p>
        <p>{item.Result}</p>
      </div>
      <div className="scon2">
        <img
          src={item.CompetingTeamLogo}
          alt={`latest match ${item.CompetingTeam}`}
        />
      </div>
      <div className="scon3">
        <p>FIrstInnings</p>
        <p>{item.FirstInnings}</p>
        <p>SecondInnings</p>
        <p>{item.SecondInnings}</p>
        <p>Umpires</p>
        <p>{item.Umpires}</p>
        <p>ManOfTheMatch</p>
        <p>{item.ManOfTheMatch}</p>
      </div>
    </div>
  )
}
export default Latest
