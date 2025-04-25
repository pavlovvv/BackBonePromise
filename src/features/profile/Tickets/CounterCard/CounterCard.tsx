import {FC} from 'react'
import styles from "../Tickets.module.scss"

interface CounterProps {
    icon: string;
    count: number;
    label: string;
    bgColor: string;
}

export const CounterCard: FC<CounterProps> = ({ icon, count, label, bgColor }) => (
    <div className={styles['tickets__counter']}>
        <div className={styles['tickets__counter-icon']} style={{ background: bgColor }}>
            <img src={icon} alt={`${label.toLowerCase()} icon`} />
        </div>
        <div className={styles['tickets__counter-info']}>
            <h4>{count}</h4>
            <span>{label}</span>
        </div>
    </div>
);