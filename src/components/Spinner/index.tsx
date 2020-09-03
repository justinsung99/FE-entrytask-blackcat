import React from 'react';
import Loader from 'react-loader-spinner';
import './spinnerStyle.scss';

const Spinner: React.FC = () => (
    <div className="loader-wrap">
        <Loader type="TailSpin" color="#00BFFF" height={100} width={100} />
    </div>
);

export default Spinner;
