import styles from "./Tickets/Tickets.module.scss";
import {Priority, Status, Ticket} from "./types";
import ChatIconSrc from "./Tickets/assets/chat.svg";
import ClockIconSrc from "./Tickets/assets/clock.svg";
import CheckIconSrc from "./Tickets/assets/check.svg";
import DeleteIconSrc from "./Tickets/assets/delete-2.svg";

export const priorityMod: Record<Priority, string> = {
    High: styles['ticket-table__badge--high'],
    Medium: styles['ticket-table__badge--medium'],
    Low: styles['ticket-table__badge--low'],
};

export const statusMod: Record<Status, string> = {
    'In progress': styles['ticket-table__badge--in-progress'],
    Open: styles['ticket-table__badge--open'],
    Closed: styles['ticket-table__badge--closed'],
};

export const tickets: Ticket[] = [
    {id: '#51973', subject: 'Your application received', priority: 'High', status: 'In progress', createDate: '03.02.2025', dueDate: '03.04.2025'},
    {id: '#51974', subject: 'Your application received', priority: 'Medium', status: 'Open', createDate: '03.02.2025', dueDate: '03.04.2025'},
    {id: '#51975', subject: 'Full name of the subject in pop-up ..............................max...', priority: 'Low', status: 'Open', createDate: '03.02.2025', dueDate: '03.04.2025'},
    {id: '#51976', subject: 'Your application received', priority: 'Medium', status: 'Open', createDate: '03.02.2025'},
    {id: '#51977', subject: 'Change email option process', priority: 'Medium', status: 'Open', createDate: '03.02.2025', dueDate: '03.04.2025'},
    {id: '#51978', subject: 'Your application received', priority: 'Low', status: 'Open', createDate: '03.02.2025'},
    {id: '#51979', subject: 'Full name of the subject in pop-up...', priority: 'Medium', status: 'Open', createDate: '03.02.2025'},
    {id: '#51980', subject: 'Your application received', priority: 'Low', status: 'Closed', createDate: '03.02.2025'},
    {id: '#51981', subject: 'Your application received', priority: 'Low', status: 'Open', createDate: '03.02.2025'},
];

export const counters = [
    { id: 'total', icon: ChatIconSrc, count: 1658, label: 'Total tickets', bgColor: '#D4E4EB' },
    { id: 'pending', icon: ClockIconSrc, count: 2451, label: 'Pending tickets', bgColor: 'rgba(237,206,84,0.2)' },
    { id: 'closed', icon: CheckIconSrc, count: 1328, label: 'Closed tickets', bgColor: 'rgba(73,171,58,0.2)' },
    { id: 'deleted', icon: DeleteIconSrc, count: 846, label: 'Deleted tickets', bgColor: 'rgba(239,77,86,0.2)' },
];
