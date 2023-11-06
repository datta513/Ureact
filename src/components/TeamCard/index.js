const TeamCard = props => {
  const {ele} = props
  return (
    <li>
      <img src={ele.team_image_url} />
    </li>
  )
}

export default TeamCard
