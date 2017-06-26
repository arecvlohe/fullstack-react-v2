import React, { Component } from "react";
import { compose } from "recompose";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { addTodo } from "../../store/actions";

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ addTodo }, dispatch);
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

    handleUpdateForm({ target: { name, value } }) {
      this.setState({ [name]: value });
    }

    handleSubmit(e) {
      e.preventDefault();
      this.props.addTodo({ title: this.state.title }).then(res => {
        if (res.status === 200) {
          this.setState({ title: "" });
          this.props.history.push("/");
        }
      });
    }

    render() {
      return (
        <WrappedComponent
          {...this.props}
          {...this.state}
          handleUpdateForm={this.handleUpdateForm}
          handleSubmit={this.handleSubmit}
        />
      );
    }
  };

export default compose(connect(null, mapDispatchToProps), withRouter, handlers);
