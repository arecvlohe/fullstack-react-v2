import React, { Component } from "react";
import { compose } from "recompose";
import axios from "axios";

const handlers = WrappedComponent =>
  class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        input: "",
        todos: []
      };
    }

    componentDidMount() {
      axios.get("http://localhost:3000/api").then(({ data }) => {
        this.setState({ todos: data.todos });
      });
    }

    render() {
      return <WrappedComponent {...this.props} {...this.state} />;
    }
  };

export default compose(handlers);
