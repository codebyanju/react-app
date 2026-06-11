import React from "react";
// import { Component } from "react";

// OR // class UserClass extends Component {
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count1: 0,
      count2: 1,
    };

    console.log(this.props.user.name, "constructor");
  }

  componentDidMount() {
    console.log(this.props.user.name, "Component Did Mount");
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.count1 !== prevState.count1) {
      // dependency array equivalent
    }
    console.log("componentDidUpdate", prevProps, prevState);
  }

  componentWillUnmount() {
    console.log(
      "componentWillUnmount - runs before component is removed from DOM",
    );
  }

  render() {
    const { name, age } = this.props.user;
    const { count1, count2 } = this.state;

    const handleCount1 = () => {
      this.setState({
        count1: this.state.count1 + 1,
        count2: this.state.count2 + 5,
      });
    };

    console.log(this.props.user.name, " render");
    return (
      <div>
        <h3>User Class Component </h3>
        <div>{name}</div>
        <div>{age}</div>
        <button onClick={handleCount1}>Count1: {count1}</button>
        <button>Count2: {count2}</button>
      </div>
    );
  }
}

export default UserClass;
