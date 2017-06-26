import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { compose } from "recompose";

import { fetchTodos } from "../../store/actions";
import { getTodos } from "../../store/selectors";

const mapStateToProps = state => {
  return {
    todos: getTodos(state)
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchTodos }, dispatch);
};

const handlers = WrappedComponent =>
  class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        input: ""
      };
    }

    componentDidMount() {
      this.props.fetchTodos();
    }

    render() {
      return <WrappedComponent {...this.props} {...this.state} />;
    }
  };

export default compose(connect(mapStateToProps, mapDispatchToProps), handlers);
