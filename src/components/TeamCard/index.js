import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {ele} = props
  const {Id, Name, TeamImageUrl} = ele
  return (
    <Link to={`/team-matches/${Id}`}>
      <li key={Id} className="style">
        <img src={TeamImageUrl} alt={Name} />
        <p>{Name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
