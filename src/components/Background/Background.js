
const Background = ({background}) => {
  return (
      <img className='background-images' src={background.path} alt={background.description}/>
  )
}

export default Background