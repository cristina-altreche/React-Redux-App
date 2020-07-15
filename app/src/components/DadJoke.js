import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getDadJoke } from "../store/actions";

//styles
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    fontSize: 16,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  },
}));

const DadJoke = (props) => {
  const classes = useStyles();

  const fetchJoke = (e) => {
    e.preventDefault();
    props.getDadJoke();
  };

  useEffect(() => {
    props.getDadJoke();
  }, []);

  return (
    <div className="container">
      <Card className="card">
        <h1>Dad Jokes</h1>
        {props.isLoading && <h4>Loading dad jokes...</h4>}
        {props.error && <p>Uh oh, something happened...</p>}
        {props.jokes.map((joke) => (
          <h3 key={joke.text}>{joke.text}</h3>
        ))}
      </Card>
      <Button
        className={classes.root}
        variant="contained"
        color="primary"
        onClick={fetchJoke}
        endIcon={<ArrowForwardIcon />}
      >
        Next
      </Button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  jokes: state.jokes,
  error: state.error,
});

export default connect(mapStateToProps, { getDadJoke })(DadJoke);
