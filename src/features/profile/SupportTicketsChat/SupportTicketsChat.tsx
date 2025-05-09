import styles from "./SupportTicketsChat.module.scss"
import {Sidebar, ClientProfileTop, Button} from '../imports/components'
import downloadIconSrc from './assets/download.svg'
import folderIconSrc from "./assets/folder.svg"
import {ChangeEvent, useState} from "react";
import FolderPlusIconSrc from "./assets/Folder_plus.svg"
import {CommentItem} from "@/features/profile/SupportTicketsChat/CommentItem/CommentItem.tsx";
import {comments} from "@/features/profile/constants.ts";
import {PriorityBadge, StatusBadge, StatusSelect} from "../imports/components";

export default function SupportTicketsChat() {
    const [commentText, setCommentText] = useState("")

    const handleCommentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setCommentText(e.target.value)
    }

    return (
        <div style={{display: "flex", justifyContent: "center"}}>
            <Sidebar/>
            <div className={styles.wrapper}>
                <section>
                    <ClientProfileTop>
                        Support - Tickets - Chat
                    </ClientProfileTop>

                    <div className={styles.top}>
                        <div>
                            <h3>#51973 - Your application received</h3>
                            <div className={styles.top__details}>
                                <span>
                                    <span className={styles["top__details_grey"]}>
                                Create date: {" "}
                                    </span>
                                03 Dec, 2025
                                </span>

                                <span>
                                    <span className={styles["top__details_grey"]}>
                                Due to date: {" "}
                                    </span>
                                08 Dec, 2025
                                </span>
                            </div>
                        </div>

                        <div className={styles.top__details}>
                            <PriorityBadge level={"medium"}/>

                            <StatusBadge status={"open"}/>
                        </div>
                    </div>

                    <main className={styles.main}>
                        <div className={styles.description}>
                            <h3>Ticked description</h3>
                            <div className={styles.description__text}>
                                Ticked description Ticked description Ticked description Ticked description Ticked
                                description Ticked description Ticked description
                                Ticked description Ticked description Ticked description Ticked description Ticked
                                description Ticked description Ticked description
                                Ticked description Ticked
                            </div>

                            <div className={styles.description__files}>
                                <div>
                                    <div>
                                        <img src={folderIconSrc} alt="folder-icon"/>
                                    </div>

                                    <div>
                                        <span>File nam123123e</span> <br/>
                                        <span className={styles.description__files_grey}>1.2 MB</span>
                                    </div>

                                    <img src={downloadIconSrc} alt="download-icon"/>
                                </div>

                                <div>
                                    <div>
                                        <img src={folderIconSrc} alt="folder-icon"/>
                                    </div>

                                    <div>
                                        <span>File nam123123e</span> <br/>
                                        <span className={styles.description__files_grey}>1.2 MB</span>
                                    </div>

                                    <img src={downloadIconSrc} alt="download-icon"/>
                                </div>
                            </div>
                        </div>

                        <div className={styles.details}>
                            <h3>Ticked details</h3>
                            <div className={styles.details__inner}>
                                <div>
                                    <span>Ticket:</span> <span>#51973</span>
                                </div>

                                <div>
                                    <span>Status:</span> <StatusSelect/>
                                </div>

                                <div>
                                    <span>Priority:</span> <span
                                    style={{color: '#EDCE54', fontWeight: 700}}>Medium</span>
                                </div>

                                <div>
                                    <span>Create date:</span> <span>12.03.2025 </span>
                                </div>

                                <div>
                                    <span>Due to date:</span> <span>12.08.2025 </span>
                                </div>
                            </div>
                        </div>

                        <div className={styles.comments}>
                            <h3>Comments</h3>

                            <div>
                                {comments.map((c) => (
                                    <CommentItem key={c.datetime + c.author} {...c} />
                                ))}

                                <div style={{marginLeft: 12}}>
                                    Leave comments
                                </div>

                                <div className={styles.comments__leave}>
                                    <textarea
                                        className={styles.comments__input}
                                        placeholder="Type here..."
                                        value={commentText}
                                        onChange={handleCommentChange}
                                    />
                                </div>
                            </div>

                            <div className={styles.comments__bottom}>
                                <div>
                                    <img src={FolderPlusIconSrc} alt="Folder-icon"/>
                                </div>

                                <Button>Post comment</Button>
                            </div>
                        </div>
                    </main>
                </section>
            </div>
        </div>
    )
};


