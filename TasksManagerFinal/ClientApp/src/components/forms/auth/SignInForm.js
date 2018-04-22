import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import emailValidator       from 'email-validator';
import AuthField            from "../field/AuthField";
import { Button }           from "react-bootstrap";

class SignInForm extends Component {
    static propTypes = {};

    render() {
        const { handleSubmit } = this.props;
        return (
            <div>
                <h2>Register</h2>
                <form onSubmit = { handleSubmit }>
                    <div>
                        <label>Login</label>
                        <Field name = 'login' component={AuthField} type="login" />
                    </div>

                    <div>
                        <label>Email</label>
                        <Field name = 'email' component={AuthField} type="email" />
                    </div>
                    <div>
                        <label>Password</label>
                        <Field name = 'password' component={AuthField} type = 'password' />
                    </div>
                    <div>
                        <Button type = 'submit'>Submit</Button>
                    </div>
                </form>
            </div>
        );
    }
}

const validate = ({ email, password }) => {
    const errors = {};

    if (!email) {
        errors.email = 'email is required';
    } else if (!emailValidator.validate(email)) errors.email = 'invalid email';

    if (!password) {
        errors.password = 'password is required';
    } else if (password.length < 5) errors.password = 'to short';

    return errors;
};

export default reduxForm({
    form: 'auth',
    validate
})(SignInForm);