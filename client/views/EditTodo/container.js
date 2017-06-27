import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { compose } from "recompose";
import { withRouter } from "react-router-dom";

import { getTodo } from "../../store/selectors";
import { fetchTodo, editTodo } from "../../store/actions";

const mapStateToProps = state => {
  return {
    todo: getTodo(state)
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchTodo, editTodo }, dispatch);
};

const handlers = WrappedComponent =>
  class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        title: ""
      };
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleUpdateForm = this.handleUpdateForm.bind(this);
    }

    componentDidMount() {
      this.props.fetchTodo(this.props.match.params.id);
    }

    handleSubmit(e) {
      e.preventDefault();
      this.props
        .editTodo({
          id: this.props.todo._id,
          title: this.state.title,
          completed: false
        })
        .then(res => {
          if (res.status === 200) {
            this.props.history.push("/");
          }
        })
        .catch(err => {
          console.error(err);
        });
    }

    handleUpdateForm({ target: { name, value } }) {
      this.setState({ [name]: value });
    }

    componentWillReceiveProps(nextProps) {
      this.setState({ title: nextProps.todo.title });
    }

    render() {
      return (
        <WrappedComponent
          {...this.props}
          {...this.state}
          handleSubmit={this.handleSubmit}
          handleUpdateForm={this.handleUpdateForm}
        />
      );
    }
  };

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
  handlers
);
