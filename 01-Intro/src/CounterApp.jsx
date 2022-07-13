import PropTypes from 'prop-types';
import { useState } from 'react';

export const CounterApp = ( {value} ) => {
    const [counter, setCounter] = useState(value);
    
    const addValue = () => setCounter(counter + 1);
    //We can do it different, try ->  setCounter( (c) => c + 1 )

    const subsValue = () => setCounter(counter - 1);

    const resetValue = () => setCounter(value);

    return (
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2> 
            <button onClick={ addValue }> +1 </button>  
            <button onClick={ subsValue }> -1 </button>
            <button onClick={ resetValue }> Reset </button>
        </>
  )
}


CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
}

CounterApp.defaultProps = {
    value: 0,
}