export default function Card(props) {
  let badgeText
  if (props.item.openSpots === 0) {
    badgeText = 'SOLD-OUT'
  } else if (props.item.location === 'Online') {
    badgeText = 'ONLINE'
  }

  return (
    <section className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img className="card--image" src={props.item.coverImg} alt="Katie Zaferes" />
      <div className="card--stats">
        <div>
          <img src="./images/star.png" alt="Star Icon" className="card--star"/>
          <span>{props.item.rating}</span>
          <span className="gray"> ({props.item.stats.reviewCount}) • </span>
          <span className="gray"> {props.item.location}</span>
        </div>
        <p className="card--title">{props.item.title}</p>
        <p className="card--price"><span className="bold">From ${props.item.price}</span> / person</p>
      </div>
    </section>
  )
}