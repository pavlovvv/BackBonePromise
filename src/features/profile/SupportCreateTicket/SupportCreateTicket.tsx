import styles from "./SupportCreateTicket.module.scss"
import {Sidebar, ClientProfileTop, Button} from '../imports/components'
import {ChangeEvent, useCallback, useState} from "react";
import classnames from "classnames";
import {SecondaryButton, StatusSelect, PrioritySelect} from "../imports/components";
import Calendar from './calendar/Calendar.tsx'

interface FormData {
    subject: string;
    description: string;
}

export default function SupportCreateTicket() {
    const [formData, setFormData] = useState<FormData>({
        subject: "",
        description: "",
    });

    const handleFormChange = useCallback(
        (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            const { name, value } = e.target;
            setFormData((prev) => ({ ...prev, [name]: value }));
        },
        []
    );

    return (
        <div style={{display: "flex", justifyContent: "center"}}>
            <Sidebar/>
            <div className={styles.wrapper}>
                <section>
                    <ClientProfileTop>
                        Support - Tickets - Create ticket
                    </ClientProfileTop>

                    <main className={styles.main}>
                        <div className={styles.create}>
                            <h3>Create new ticket</h3>

                            <div className={styles.create__item}>
                                <label htmlFor="subject">Subject</label>
                                <input
                                    name="subject"
                                    className={classnames(styles.create__input, styles.create__input_small)}
                                    placeholder="Type here..."
                                    value={formData.subject}
                                    onChange={handleFormChange}
                                />
                            </div>

                            <div className={styles.create__item}>
                                <label htmlFor="description">Ticket description</label>
                                    <textarea
                                        name="description"
                                        className={classnames(styles.create__input, styles.create__input_big)}
                                        placeholder="Type here..."
                                        value={formData.description}
                                        onChange={handleFormChange}
                                    />
                            </div>

                            <div className={styles.create__bottom}>
                                <div>
                                    <SecondaryButton withIcon>Add file</SecondaryButton>
                                </div>

                                <div>
                                    <Button>Create ticket</Button>
                                </div>
                            </div>
                        </div>

                        <div className={styles.details}>
                            <h3>Ticked details</h3>
                            <div className={styles.details__inner}>
                                <div>
                                    <span>Status:</span> <StatusSelect/>
                                </div>

                                <div>
                                    <span>Priority:</span> <PrioritySelect/>
                                </div>

                                <div>
                                    <span>Due to date:</span>
                                    <Calendar />
                                </div>
                            </div>
                        </div>
                    </main>
                </section>
            </div>
        </div>
    )
};


