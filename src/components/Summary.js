import React from 'react';
import classes from "../styles/Summary.module.css";
import images from "../asset/images/success.png";

const Summary = () => {
    return (
        <div className={classes.summary}>
            <div className={classes.point}>
                {/* <!-- progress bar will be placed here --> */}
                <p className={classes.score}>
                    Your score is <br />
                    5 out of 10
                </p>
            </div>

            <div className={classes.badge}>
                <img src={images} alt="Success" />
            </div>
        </div>
    );
};

export default Summary;