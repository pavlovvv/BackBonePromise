export type Priority = 'High' | 'Medium' | 'Low';
export type Status = 'In progress' | 'Open' | 'Closed';

export interface Ticket {
    id: string;
    subject: string;
    priority: Priority;
    status: Status;
    createDate: string;
    dueDate?: string;
}