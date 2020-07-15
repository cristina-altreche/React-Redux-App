import React, { useEffect } from "react";
import { connect } from 'react-redux'
import { getDadJoke } from '../store/actions'

const DadJoke = (props) => {

    useEffect(() => {
        props.getDadJoke()
    }, [])
  return (
    <div>
      <h1>Dad Joke</h1>
        {props.isLoading && <h4>Loading dad jokes...</h4>}
        {props.error && <p>Uh oh, something happened...</p>}
        {props.jokes.map(joke => (
          <h4 key={joke.text}>{joke.text}</h4>
        ))}
    </div>
  );
};

const mapStateToProps = state => ({
    isLoading: state.isLoading,
    jokes: state.jokes,
    error: state.error
})

export default connect(mapStateToProps, {getDadJoke})(DadJoke);
