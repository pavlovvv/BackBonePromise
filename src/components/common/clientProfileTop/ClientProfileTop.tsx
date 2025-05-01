import React from 'react';
import styles from './ClientProfileTop.module.scss';
import NotificationIconSrc from './assets/notifications.svg';
import GlobusIconSrc from './assets/Small globe.svg';
import ArrowDownSrc from './assets/Small arrow_Down.svg';

interface CustomTopProps {
    children: string;
}

const ClientProfileTop: React.FC<CustomTopProps> = ({ children }) => {
    const [prefix, title] = children.split(' - ');

    return (
        <div className={styles['core']}>
            <h1>
                <span className={styles['grey']}>{prefix} -</span> {title}
            </h1>
            <div>
                <div>
                    <img src={NotificationIconSrc} alt="notification-icon" />
                </div>
                <div>
                    <img src={GlobusIconSrc} alt="language-icon" />
                    <span>EN</span>
                    <img src={ArrowDownSrc} alt="dropdown-icon" />
                </div>
            </div>
        </div>
    );
};

export default ClientProfileTop;