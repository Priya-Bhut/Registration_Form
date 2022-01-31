import React from "react";
import "./New_form.css";
import View_Data from "./View_Data/View_Data";

class RegisterForm extends React.Component {
  constructor() {
    super();
    this.state = {
      fields: {},
      errors: {},
      show: true,
    };
    this.inputFile = React.createRef("");
    this.handleChange = this.handleChange.bind(this);
    this.submitUserForm = this.submitUserForm.bind(this);
  }
  handleChange(e) {
    let fields = this.state.fields;
    e.target.type === "file"
      ? (fields[e.target.name] = this.inputFile.current.files[0])
      : (fields[e.target.name] = e.target.value);
    this.setState({
      fields,
    });
  }

  submitUserForm(e) {
    // if (this.validateForm()) {
    //   this.setState({ show: !this.state.show });
    // }
    this.validateForm();
    e.preventDefault();
  }

  validateForm() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (fields["firstName"]) {
      if (!fields["firstName"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["firstName"] = "*Please enter alphabet characters only.";
      } else if (fields["firstName"].length > 20) {
        formIsValid = false;
        errors["firstName"] = "*Please enter only up to 20 chracter.";
      }
    }
    if (fields["lastName"]) {
      if (!fields["lastName"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["lastName"] = "*Please enter alphabet characters only.";
      } else if (fields["lastName"].length > 20) {
        formIsValid = false;
        errors["lastName"] = "*Please enter only up to 20 chracter.";
      }
    }

    if (fields["age"]) {
      if (!fields["age"].match(/^([0-9]{2}|100)$/)) {
        formIsValid = false;
        errors["age"] = "*Please enter valid age.";
      }
    }

    if (fields["address"]) {
      if (!fields["address"].match(/^([a-zA-z0-9/\\' '(),-\s]{2,10})$/)) {
        formIsValid = false;
        errors["address"] = "*Please enter address up to 240 characters.";
      }
    }
    this.setState({
      errors: errors,
      show: !formIsValid,
    });
    // return formIsValid;
  }
  render() {
    const { fields, errors } = this.state;
    const { firstName, lastName, age, address } = fields || {};
    const {
      firstName: fnameErrorMsg,
      lastName: lnameErrorMsg,
      age: ageErrorMsg,
      address: addressErrorMsg,
    } = errors || {};

    return (
      <div>
        {this.state.show ? (
          <div id="main-registration-container">
            <div id="register">
              <h2>Registration</h2>
              <form
                method="post"
                name="userRegistrationForm"
                onSubmit={this.submitUserForm}
              >
                <div className="user-box">
                  <input
                    type="text"
                    name="firstName"
                    required
                    value={firstName}
                    onChange={this.handleChange}
                  />
                  <label>FirstName</label>
                  <div className="errors">{fnameErrorMsg}</div>
                </div>

                <div className="user-box">
                  <input
                    type="text"
                    name="lastName"
                    required
                    value={lastName}
                    onChange={this.handleChange}
                  />
                  <label>LastName</label>
                  <div className="errors">{lnameErrorMsg}</div>
                </div>

                <div className="user-box">
                  <input
                    type="number"
                    name="age"
                    required
                    value={age}
                    onChange={this.handleChange}
                  />
                  <label>Age</label>
                  <div className="errors">{ageErrorMsg}</div>
                </div>

                <div className="user-box">
                  <textarea
                    name="address"
                    required
                    value={address}
                    onChange={this.handleChange}
                  ></textarea>
                  <label>Address</label>
                  <div className="errors">{addressErrorMsg}</div>
                </div>

                <div className="user-box">
                  <br />
                  <br />
                  <input
                    type="file"
                    name="photo"
                    required
                    ref={this.inputFile}
                    onChange={this.handleChange}
                  />
                  <label>Upload Picture</label>

                  <div className="errors">{this.state.errors.inputFile}</div>
                </div>
                <div className="submit">
                  <input type="submit" className="button" value="Register" />
                </div>
              </form>
            </div>
          </div>
        ) : (
          <View_Data field={this.state.fields}></View_Data>
        )}
      </div>
    );
  }
}

export default RegisterForm;
