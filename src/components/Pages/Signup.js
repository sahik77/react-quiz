import React from 'react';
import Form from '../Form';
import Illustration from '../Illustration';
import classes from '../../styles/Signup.module.css'
import TextInput from '../TextInput';
import Checkbox from '../Checkbox';
import Button from '../Button';
import signupImage from "../../asset/images/signup.svg"

const Signup = () => {
    return (
        <div>
            <h1>Create an account</h1>
            <div className="column">
                <Illustration image={signupImage} />
                <Form className={`${classes.signup} form`} >
                    <TextInput type="text" placeholder="Enter Name" icon="person"></TextInput>
                    <TextInput type="text" placeholder="Enter Email" icon="alternate_email"></TextInput>
                    <TextInput type="password" placeholder="Enter Password" icon="lock"></TextInput>
                    <TextInput type="password" placeholder="Confirm password" icon="lock_clock"></TextInput>
                    <Checkbox text="I agree to the Terms &amp; Conditions" type="checkbox"></Checkbox>
                </Form>
                <Button>
                    <span>Submit Now</span>
                </Button>
                <div className="info">
                    Already have an account? <a href="login.html">Login</a> instead.
                </div>
            </div>
        </div >
    );
};

export default Signup;