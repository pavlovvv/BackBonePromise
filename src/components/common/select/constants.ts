type TicketStatus = "Open" | "In Progress" | "Close"

export const STATUS_OPTIONS: Array<{ value: TicketStatus; label: string; color: string }> = [
    {value: "Open", label: "Open", color: "#49AB3A"},
    {value: "In Progress", label: "In Progress", color: "#6CAFC6"},
    {value: "Close", label: "Close", color: "#EF4D56"},
]

type PriorityStatus = "High" | "Medium" | "Low"

export const PRIORITY_OPTIONS: Array<{ value: PriorityStatus; label: string; color: string }> = [
    {value: "High", label: "High", color: "#EF4D56"},
    {value: "Medium", label: "Medium", color: "#EDCE54"},
    {value: "Low", label: "Low", color: "#49AB3A"},
]