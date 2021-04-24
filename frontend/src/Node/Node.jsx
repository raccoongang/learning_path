import React from 'react';


const Node = ({url, title, description, type}) => {
    console.log(url, title, description);
    return <div className="LearningItem LearningItem_checked">
        <div className="LearningItemContent">
            <span className="LearningIconWrapper">
                <svg className="LearningIcon">
                    <use xmlns="http://www.w3.org/1999/xlink" xlinkHref={'#icon-' + type}/>
                </svg>
            </span>
            <a href={url} className="LearningItemTitle">{title}</a>
            <div>{description}</div>
            <button className="Btn Btn_ready">Mark as ready</button>
        </div>

    </div>
};

const PathwayNode = ({url, title, description, type, children}) => {
    return <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <div>
            <span>Share Link</span>: <a href={url} >{url}</a>
        </div>
        {children.map((item, idx) => <Node key={idx} {...item}/>)}
    </div>;
};

export {PathwayNode};
