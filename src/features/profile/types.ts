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

export type Period = 'This month' | 'Last month';

export interface Segment {
    label: string;
    value: number;
    percent: number;
    color: string;
    children?: Omit<Segment, 'children'>[];
}

export interface RevenueData {
    total: number;
    segments: Segment[];
}

export interface DataEntry {
    name: string;
    value: number;
    color: string;
}

export type Language = 'EN' | 'UA' | 'DE';

export interface Product {
    id: string;
    name: string;
    price: number;
    oldPrice?: number;
    discount?: string;
    availability: 'In stock' | 'Out of stock';
    sell: number;
    image: string;
}