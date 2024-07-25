import React from 'react';
import PropTypes from 'prop-types';
import { articles } from './data';
import ArticleItem from './ArticleItem';

const Articles = ({ callbackfn }) => (
    <div className="row new-section">
        <h3 className="col-12 text-center">Read interesting articles about upcoming fasts, festivals, and everything around Sanatan Dharma.</h3>
        <p className="feature-description">Read interesting articles about upcoming fasts, festivals, and everything around Sanatan Dharma.</p>
        <button className="btn btn-light">Read All</button>
        {articles.map(callbackfn)}
    </div>
);

Articles.propTypes = { callbackfn: PropTypes.func };

export default Articles;