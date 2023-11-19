import PropTypes from "prop-types"

const Button = ( props ) => {
  return (
    <div className={`${props.className} w-full flex items-center justify-center button px-8 py-4 border border-silver text-silver bg-transparent hover:cursor-pointer hover:brightness-50`}>
      <p>{props.value}</p>
    </div>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
};

export default Button