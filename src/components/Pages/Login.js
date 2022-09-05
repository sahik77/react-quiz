import React from 'react';
import Illustration from '../Illustration';
import loginImage from "../../asset/images/login.svg";
import Form from '../Form';
import classes from "../../styles/Login.module.css";
import TextInput from '../TextInput';
import Button from '../Button';

const Login = () => {
    return (
        <div>
            <h1>Login to your account</h1>
            <div className="column">
                <Illustration image={loginImage} />
                <Form className={`${classes.login} form`}>
                    <TextInput type="text" placeholder="Enter email" ></TextInput>
                    <TextInput type="password" placeholder="Enter password" ></TextInput>
                    <Button>
                        <span>Submit Now</span>
                    </Button>
                    <div className="info">Don't have an account? <a href="signup.html">Signup</a> instead.</div>
                </Form>
            </div>
        </div>
    );
};

export default Login;