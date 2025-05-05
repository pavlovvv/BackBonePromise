import { FC } from 'react';
import classnames from 'classnames';
import styles from "./PriorityBadge.module.scss"

export type PriorityLevel = 'high' | 'medium' | 'low';

interface PriorityBadgeProps {
    level: PriorityLevel;
}

export const PriorityBadge: FC<PriorityBadgeProps> = ({ level }) => {
    const badgeClass = classnames(
        styles['ticket-priority'],
        styles[`ticket-priority_${level}`]
    );

    const label = level.charAt(0).toUpperCase() + level.slice(1);

    return <div className={badgeClass}>{label}</div>;
};