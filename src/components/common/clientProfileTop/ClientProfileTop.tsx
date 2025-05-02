import React, { FC } from 'react';
import styles from './ClientProfileTop.module.scss';
import NotificationIconSrc from './assets/notifications.svg';
import GlobusIconSrc from './assets/Small globe.svg';
import ArrowDownSrc from './assets/Small arrow_Down.svg';

interface ClientProfileTopProps {
    children: string;
}

const ClientProfileTop: FC<ClientProfileTopProps> = ({ children }) => {
    const segments = children.split(' - ');

    return (
        <div className={styles.core}>
            <h1>
                {segments.map((text, idx) => (
                    <React.Fragment key={idx}>
            <span className={idx < segments.length - 1 ? styles.grey : undefined}>
              {text}
            </span>
                        {idx < segments.length - 1 && <span className={styles.separator}> - </span>}
                    </React.Fragment>
                ))}
            </h1>

            <div className={styles.actions}>
                <div className={styles.notification}>
                    <img src={NotificationIconSrc} alt="notification-icon" />
                </div>
                <div className={styles.language}>
                    <img src={GlobusIconSrc} alt="language-icon" />
                    <span>EN</span>
                    <img src={ArrowDownSrc} alt="dropdown-icon" />
                </div>
            </div>
        </div>
    );
};

export default ClientProfileTop;