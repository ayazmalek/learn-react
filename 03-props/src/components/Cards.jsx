const Cards = (props) => {
  return (
      <div className='card'>
        <img 
          src={props.img}
          alt='Ayaz malek'
        />  

        <h1>{props.user},{props.age }</h1>
        <p>{props.pr}.</p>
        <button>View Profile</button>
      </div>

  )
}

export default Cards