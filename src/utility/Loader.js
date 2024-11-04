import React from 'react';
import './loader.scss';
import {Spinner} from 'reactstrap';

const Loader = () => (
    <div className="fallback-spinner">
        <div className="loading">
            <Spinner color="info"/>
        </div>
    </div>
);
export default Loader;
