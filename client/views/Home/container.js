import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { compose } from "recompose";

import { fetchTodos, deleteTodo } from "../../store/actions";
import { getTodos } from "../../store/selectors";

const mapStateToProps = state => {
  return {
    todos: getTodos(state)
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchTodos, deleteTodo }, dispatch);
};

const handlers = WrappedComponent =>
  class extends Component {
    constructor(props) {
      super(props);
      this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
      this.props.fetchTodos();
    }

    handleDelete(id) {
      this.props.deleteTodo(id).then(res => {
        if (res.status === 200) {
          this.props.fetchTodos();
        }
      });
    }

    render() {
      return (
        <WrappedComponent
          {...this.props}
          {...this.state}
          handleDelete={this.handleDelete}
        />
      );
    }
  };

export default compose(connect(mapStateToProps, mapDispatchToProps), handlers);
