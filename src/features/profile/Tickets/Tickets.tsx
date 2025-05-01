import styles from "./Tickets.module.scss"
import {Sidebar, ClientProfileTop, Button} from '../imports/components'
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
                    <ClientProfileTop>
                        Support - Tickets
                    </ClientProfileTop>

                    <div className={styles['tickets__counters']}>
                        {counters.map(({ id, icon, count, label, bgColor }) => (
                            <CounterCard key={id} {...{ icon, count, label, bgColor }} />
                        ))}
                    </div>


                    <div className={styles["tickets__tableContainer"]}>
                        <div className={styles["tickets__tableContainer-top"]}>
                            <Button withIcon>Create new</Button>

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


