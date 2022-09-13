import Proptypes from 'prop-types'

const Button = ({text, onClick}) => {

    return (
        <button onClick={onClick}>
            {text}
        </button>
  )
}
Button.propTypes = {
    text: Proptypes.string,
    color: Proptypes.string,
    onClick: Proptypes.func
}

export default Button