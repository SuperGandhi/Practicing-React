import PropTypes from 'prop-types'
// reusabilidad
// types props 
export function Button({text, name}){

    // if(!text) console.error('Just text!');

    return <button>
        {text} - {name}
    </button>
}

Button.propTypes ={
    text: PropTypes.string.isRequired,
}

Button.defaultProps = {
    name: "Usuario",
}