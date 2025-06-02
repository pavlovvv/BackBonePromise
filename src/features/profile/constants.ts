import styles from "./Tickets/Tickets.module.scss";
import {DataEntry, Priority, Status, Ticket, RevenueData, Product, Comment} from "./types";
import ChatIconSrc from "./Tickets/assets/chat.svg";
import ClockIconSrc from "./Tickets/assets/clock.svg";
import CheckIconSrc from "./Tickets/assets/check.svg";
import DeleteIconSrc from "./Tickets/assets/delete-2.svg";
import JamesSrc from "@/features/profile/SupportTicketsChat/assets/James.svg";
import EbigailSrc from "@/features/profile/SupportTicketsChat/assets/Ebigail.svg";

import clothes1 from "@/features/profile/D-Client-Dashboard-Google-reviews/assets/clothes1.svg";
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

export const revenueData: RevenueData = {
    total: 120000,
    segments: [
        {
            label: 'Subscription revenue',
            value: 60000,
            percent: 50,
            color: '#a2c0e8',
            children: [
                { label: 'The debut', value: 30000, percent: 25, color: '#6ca0dd' },
                { label: 'The atelier', value: 15000, percent: 12.5, color: '#c3d7f1' },
                { label: 'The runway', value: 15000, percent: 12.5, color: '#dee7f5' },
            ],
        },
        { label: 'Income from clothing sales', value: 20000, percent: 16.7, color: '#67c679' },
        { label: 'Expected income', value: 20000, percent: 16.7, color: '#e6c84a' },
    ],
};

export const donutChartData: DataEntry[] = [
    { name: 'The debut', value: 27, color: '#6CAFC6' },
    { name: 'The atelier', value: 49, color: '#EDCE54' },
    { name: 'The runway', value: 24, color: '#EF4D56' },
];

export const donutChartDataOrders: DataEntry[] = [
    { name: 'The debut', value: 27, color: '#49AB3A' },
    { name: 'The atelier', value: 49, color: '#EDCE54' },
    { name: 'The runway', value: 24, color: '#EF4D56' },
];


export const uData: number[] = [30000, 35000, 45000, 42000, 50000, 55000, 85000, 120000];
export const pData: number[] = [20000, 25000, 32000, 36000, 30000, 38000, 60000, 85000];
export const xLabels: string[] = ['01', '05', '10', '12', '15', '20', '25', '30'];

export const products: Product[] = [
    { id: '#51973', name: 'In a better word T-Shirt', price: 54, oldPrice: 60, discount: '-10%', availability: 'In stock', sell: 450, image: 'https://via.placeholder.com/40x40?text=1' },
    { id: '#51974', name: 'In a better word T-Shirt', price: 57, availability: 'In stock', sell: 200, image: 'https://via.placeholder.com/40x40?text=2' },
    { id: '#51975', name: 'In a better word T-Shirt', price: 54, oldPrice: 60, discount: '-10%', availability: 'In stock', sell: 450, image: 'https://via.placeholder.com/40x40?text=1' },
    { id: '#51976', name: 'In a better word T-Shirt', price: 57, availability: 'In stock', sell: 200, image: 'https://via.placeholder.com/40x40?text=2' },
    { id: '#51977', name: 'In a better word T-Shirt', price: 54, oldPrice: 60, discount: '-10%', availability: 'In stock', sell: 450, image: 'https://via.placeholder.com/40x40?text=1' },
    { id: '#51978', name: 'In a better word T-Shirt', price: 57, availability: 'In stock', sell: 200, image: 'https://via.placeholder.com/40x40?text=2' },
    { id: '#51979', name: 'In a better word T-Shirt', price: 54, oldPrice: 60, discount: '-10%', availability: 'In stock', sell: 450, image: 'https://via.placeholder.com/40x40?text=1' },
    { id: '#51980', name: 'In a better word T-Shirt', price: 57, availability: 'In stock', sell: 200, image: 'https://via.placeholder.com/40x40?text=2' },
    { id: '#51981', name: 'In a better word T-Shirt', price: 54, availability: 'Out of stock', sell: 120, image: 'https://via.placeholder.com/40x40?text=3' },
    { id: '#51982', name: 'In a better word T-Shirt', price: 54, availability: 'In stock', sell: 80, image: 'https://via.placeholder.com/40x40?text=4' },
    { id: '#51983', name: 'In a better word T-Shirt', price: 54, availability: 'In stock', sell: 80, image: 'https://via.placeholder.com/40x40?text=5' },
];

export const comments: Comment[] = [
    {
        imgg: clothes1,
        avatar: JamesSrc,
        author: "James Clarke",
        datetime: "10 weeks ago",
        content:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    },
    {
        avatar: EbigailSrc,
        author: "E. Barrett",
        datetime: "10 weeks ago",
        content:
            "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
    },
    {
        imgg: clothes1,
        avatar: JamesSrc,
        author: "James Clarke",
        datetime: "10 weeks ago",
        content:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    },
    {
        avatar: EbigailSrc,
        author: "E. Barrett",
        datetime: "10 weeks ago",
        content:
            "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
    },
    {
        avatar: JamesSrc,
        author: "James Clarke",
        datetime: "10 weeks ago",
        content:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    },
    {
        imgg: clothes1,
        avatar: EbigailSrc,
        author: "E. Barrett",
        datetime: "10 weeks ago",
        content:
            "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
    },
    {
        avatar: JamesSrc,
        author: "James Clarke",
        datetime: "10 weeks ago",
        content:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    },
    {
        imgg: clothes1,
        avatar: EbigailSrc,
        author: "E. Barrett",
        datetime: "10 weeks ago",
        content:
            "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
    },
    
]