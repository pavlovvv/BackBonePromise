import styles from "./Tickets.module.scss"
import {Sidebar} from '../imports/components'
import NotificationIconSrc from './assets/notifications.svg'
import GlobusIconSrc from './assets/Small globe.svg'
import ArrowDownSrc from './assets/Small arrow_Down.svg'
import AddIconSrc from './assets/plus.svg'
import FilterIconSrc from './assets/filter-list.svg'
import {counters, tickets} from "../constants";
import {CounterCard} from "./CounterCard/CounterCard";
import {TicketRow} from "./TicketRow/TicketRow";


export default function Tickets() {

    return (
        <div style={{display: "flex", justifyContent: "center"}}>
            <Sidebar/>
            <div className={styles.wrapper}>
                <section className={styles["tickets"]}>
                    <div className={styles["tickets__top"]}>
                        <h1><span className={styles["tickets__top_grey"]}>Support -</span> Tickets</h1>
                        <div>
                            <div><img src={NotificationIconSrc} alt="notification-icon"/></div>

                            <div>
                                <img src={GlobusIconSrc} alt=""/>
                                <span>EN</span>
                                <img src={ArrowDownSrc} alt=""/>
                            </div>
                        </div>
                    </div>

                    <div className={styles['tickets__counters']}>
                        {counters.map(({ id, icon, count, label, bgColor }) => (
                            <CounterCard key={id} {...{ icon, count, label, bgColor }} />
                        ))}
                    </div>


                    <div className={styles["tickets__tableContainer"]}>
                        <div className={styles["tickets__tableContainer-top"]}>
                            <button className={styles["main-button"]} onClick={(e) => e.preventDefault()}>
                                <img src={AddIconSrc} alt="+"/>
                                <span>Create new</span>
                            </button>

                            <div>
                                <img src={FilterIconSrc} alt="filter"/>
                            </div>
                        </div>

                        <div className={styles['ticket-table__container']}>
                            <table className={styles['ticket-table__table']}>
                                <thead>
                                <tr className={styles['ticket-table__row']}>
                                    <th className={styles['ticket-table__header']}>ID</th>
                                    <th className={styles['ticket-table__header']}>Subject</th>
                                    <th className={styles['ticket-table__header']} style={{paddingLeft: '38px'}}>Priority</th>
                                    <th className={styles['ticket-table__header']} style={{paddingLeft: '38px'}}>Status</th>
                                    <th className={styles['ticket-table__header']}>Create date</th>
                                    <th className={styles['ticket-table__header']}>Due date</th>
                                    <th className={styles['ticket-table__header']}>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                {tickets.map(ticket => <TicketRow key={ticket.id} ticket={ticket} />)}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
};


