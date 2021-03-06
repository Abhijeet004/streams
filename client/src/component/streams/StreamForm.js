import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamForm extends React.Component {
  renderError = ({ error, touched }) => {
    if (error && touched) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  };

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} />
        <div>{this.renderError(meta)}</div>
      </div>
    );
  };

  onSubmit = formValues => {
    
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field name="title" component={this.renderInput} label="Enter title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter description"
        />
        <button className="ui primary button">Submit</button>
      </form>
    );
  }
}
const validate = formvalues => {
  const error = {};
  if (!formvalues.title) {
    error.title = "you must enter a title";
  }

  if (!formvalues.description) {
    error.description = "you must enter a description";
  }

  return error;
};

export default reduxForm({
  form: "StreamForm",
  validate
})(StreamForm);
