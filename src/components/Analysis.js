import React from 'react';
import Questions from './Questions';

const Analysis = () => {
    return (
        <div class="analysis">
            <h1>Question Analysis</h1>
            <h4>You answerd 5 out of 10 questions correctly</h4>
            <Questions></Questions>
        </div>
    );
};

export default Analysis;