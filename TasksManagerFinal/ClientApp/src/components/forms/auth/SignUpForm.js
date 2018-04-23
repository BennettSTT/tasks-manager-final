import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import emailValidator       from 'email-validator';
import AuthField            from '../field/AuthField';
import { Button }           from "react-bootstrap";

class SignUpForm extends Component {
    static propTypes = {};

    render() {
        const { handleSubmit } = this.props;
        return (
            <div>
                <h2>Login</h2>
                <form onSubmit = { handleSubmit }>
                    <div>
                        <label>Login or Email</label>
                        <Field name = 'login' component = {AuthField} type = 'login' />
                    </div>
                    <div>
                        <label>Password</label>
                        <Field name = 'password' component = {AuthField} type = 'password' />
                    </div>
                    <div>
                        <Button type = 'submit'>Submit</Button>
                    </div>
                </form>
            </div>
        );
    }
}

const validate = ({ login, email, password }) => {
    const errors = {};

    if (!login) {
        errors.email = 'email is required';
    } /*else if (/<[a-z][a-z0-9]*>/i.test(login)) {
        alert('123');
    }*/

    else if (!emailValidator.validate(email)) errors.email = 'invalid email';

    if (!password) {
        errors.password = 'password is required';
    } else if (password.length < 5) errors.password = 'to short';

    return errors;
};


export default reduxForm({
    form: 'auth',
    validate
})(SignUpForm)