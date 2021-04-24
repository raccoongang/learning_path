import React, { useState } from 'react';
import ReactTooltip from 'react-tooltip';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

import { Rating } from '../Rating';
import './Node.scss';

const createNotification = (type, message) => {
    NotificationManager[type](message, null, 3000, () => {
        console.log('Notification');
    });
};

const ChildNode = ({url, title, type}) => {
    return <div className='LearningAdditionalItem'>
        <a href={url} className='LearningAdditionalLink' data-tip={title}>
            <span className='LearningAdditionalIconWrapper'>
                <svg className='LearningAdditionalIcon'>
                    <use xmlns='http://www.w3.org/1999/xlink' xlinkHref={'#icon-' + type}/>
                </svg>
            </span>
        </a>
        <ReactTooltip place='bottom' type='dark' effect='solid' />
    </div>;
};

const Node = ({url, title, description, type, children}) => {
    const [isMarked, toggleMarked] = useState(false);
    const [feedback, toggleUnitFeedback] = useState(null);
    const unitFeedbackHandler = (type) => {
        if (type === feedback) {
            createNotification('info',`You removed ${type} feedback from "${title}" unit.`);
            toggleUnitFeedback(null);
        } else if (type === 'like') {
            toggleUnitFeedback('like');
            createNotification('info',`You liked "${title}" unit.`);
        } else {
            toggleUnitFeedback('dislike');
            createNotification('info',`You disliked "${title}" unit.`);
        }

        return feedback;
    };

    return <div className='LearningItem'>
        <div className={`LearningItemContent ${isMarked ? 'LearningItemContent_marked' : ''}`}>
            <span className='LearningIconWrapper'>
                <svg className='LearningIcon'>
                    <use xmlns='http://www.w3.org/1999/xlink' xlinkHref={'#icon-' + type}/>
                </svg>
            </span>
            <div className='LearningItemContentWrapper'>
                <a href={url} className='LearningItemTitle'>{title}</a>
                <div className='LearningItemDescription'>{description}</div>
            </div>
            <button className='Btn Btn_ready'
                    onClick={() => {
                        toggleMarked(!isMarked);
                        isMarked
                        ? createNotification('warning',`You unmarked that unit ${title} as finished. Notification will be send to the responsible person.`)
                        : createNotification('success',`You marked that unit ${title} was finished. Notification will be send to the responsible person.`)
                    }}>
                {isMarked ? 'Marked as ready' : 'Mark as ready'}
            </button>
        </div>
        <div className='LearningBottomWrapper'>
            <div className="LearningAdditionalList">
                {children.map((item, idx) => <ChildNode key={idx} {...item} /> )}
            </div>
            <Rating
              checkedType={feedback}
              likeHandler={() => { unitFeedbackHandler('like') }}
              dislikeHandler={() => { unitFeedbackHandler('dislike') }}
            />
        </div>
    </div>
};

const PathwayNode = ({url, title, description, children}) => {
    return <div>
        <h2 className='LearningTitle'>{title}</h2>
        <p className='LearningDescription'>{description}</p>
        <div className='LearningShare'>
            Share Link: <a href={url} className='LearningShareLink'>{url}</a>
        </div>
        {children.map((item, idx) => <Node key={idx} {...item}/>)}
        <NotificationContainer/>
    </div>;
};

export {PathwayNode};
