import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import FormField from "../../ui/formFields";
import { validate } from "../../ui/misc";

class Enroll extends Component {
  state = {
    formError: false,
    formSuccess: "",
    formData: {
      email: {
        element: "input",
        value: "",
        config: {
          name: "email_input",
          type: "email",
          placeholder: "Enter your email"
        },
        validation: {
          required: true,
          email: true
        },
        valid: false,
        validationMessage: ""
      }
    }
  };

  updateForm = element => {
    const newFormData = { ...this.state.formData };
    const newElement = { ...newFormData[element.id] };

    newElement.value = element.event.target.value;

    let validateData = validate(newElement);
    newElement.valid = validateData[0];
    newElement.validateMessage = validateData[1];

    newFormData[element.id] = newElement;

    console.log(newFormData);

    this.setState({
      formData: newFormData
    });
  };

  submitForm = () => {
    console.log("submit");
  };

  render() {
    return (
      <Fade>
        <div className='enroll_wrapper'>
          <form onSubmit={event => this.submitForm(event)}>
            <div className='enroll_title'>Enter your email</div>
            <div className='enroll_input'>
              <FormField
                id={"email"}
                formData={this.state.formData.email}
                change={element => this.updateForm(element)}
              />
            </div>
          </form>
        </div>
      </Fade>
    );
  }
}

export default Enroll;
