import React from 'react';
import classes from "../styles/Illustration.module.css"

const Illustration = ({ image }) => {
    return (
        <div>
            <div className={classes.illustration}>
                <img src={image} alt="" />
            </div>
        </div>
    );
};

export default Illustration;