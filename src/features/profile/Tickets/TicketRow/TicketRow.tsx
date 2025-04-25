import {Ticket} from "../../types";
import {FC} from 'react'
import styles from "../Tickets.module.scss"
import {priorityMod, statusMod} from "../../constants";
import MoreIconSrc from '../assets/more-horizontal.svg'

interface TicketRowProps {
    ticket: Ticket;
}

export const TicketRow: FC<TicketRowProps> = ({ ticket }) => (
    <tr className={styles['ticket-table__row']}>
        <td className={styles['ticket-table__cell']} style={{paddingLeft: '8px', width: '50px', paddingRight: '24px'}}>{ticket.id}</td>
        <td className={styles['ticket-table__cell']} style={{width: '376px', paddingRight: '39px'}}>{ticket.subject}</td>
        <td className={styles['ticket-table__cell']} style={{width: '112px', paddingRight: '40px'}}>
            <span className={`${styles['ticket-table__badge']} ${priorityMod[ticket.priority]}`}>{ticket.priority}</span>
        </td>
        <td className={styles['ticket-table__cell']} style={{width: '112px', paddingRight: '56px'}}>
            <span className={`${styles['ticket-table__badge']} ${statusMod[ticket.status]}`} style={{ fontWeight: 400 }}>{ticket.status}</span>
        </td>
        <td className={styles['ticket-table__cell']} style={{width: '72px', paddingRight: '46px'}}>{ticket.createDate}</td>
        <td className={styles['ticket-table__cell']} style={{width: '72px', paddingRight: '26px'}}>{ticket.dueDate || '-'}</td>
        <td className={styles['ticket-table__cell']}><img src={MoreIconSrc} alt="more" /></td>
    </tr>
);
