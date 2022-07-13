import PropTypes from 'prop-types';

//We can use fragmet, but it's not used a lot
const message = {
    age: 22,
    me: 'Alberto', 
}

const printMessage = (message) => message.age + ' ' + message.me

export const FirstApp = ( {title, number, subtitle} ) => {
  return (
    <>
        <h1>{ title }</h1>
        {/*<h1> { printMessage(message) } </h1>
        <p>This is a subtitle</p>
        <br/>*/}
        <p>{ subtitle }</p>
        <p>{ number }</p>
    </>
  )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
}

FirstApp.defaultProps = {
    //title: 'Alberto García',
    number: 888,
    //subtitle: 'This is a default propertie',
}
