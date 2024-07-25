import React from 'react';
import {articles} from "./data";

export function Articles(props) {
        return <div className="row new-section">
                <h3 className="col-12 text-center">Read interesting articles about upcoming fasts, festivals, and everything
                        around Sanatan Dharma.</h3>
                <p className="feature-description">Read interesting articles about upcoming fasts, festivals, and everything
                        around Sanatan Dharma.</p>
                <button className="btn btn-light">Read All</button>
                {articles.map(props.callbackfn)}
        </div>;
}

const ArticleItem = ({src, message, title, description}) => (
    <div className="col-md-3 col-sm-6 feature-item">
        <img src={src} alt={title} className="img-fluid"/>
        <p className="feature-description text-center">{message}</p>
        <h4 className="col-12 text-center">{title}</h4>
        <p className="feature-description">{description}</p>
        <button className="btn btn-primary col-12">Read</button>
    </div>
);

export default ArticleItem;