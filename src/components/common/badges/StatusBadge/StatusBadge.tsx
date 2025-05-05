import { FC } from 'react';
import classnames from 'classnames';
import styles from './TicketBadge.module.scss';

export type TicketStatus = 'in-progress' | 'open' | 'close';

interface StatusBadgeProps {
    status: TicketStatus;
}

export const StatusBadge: FC<StatusBadgeProps> = ({ status }) => {
    const badgeClass = classnames(
        styles['ticket-status'],
        styles[`ticket-status_${status}`]
    );

    const label = status
        .split('-')
        .map(s => s.charAt(0).toUpperCase() + s.slice(1))
        .join(' ');

    return <div className={badgeClass}>{label}</div>;
};