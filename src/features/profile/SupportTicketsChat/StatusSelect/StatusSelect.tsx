import {FormControl, MenuItem, Select, SelectChangeEvent, SelectProps} from "@mui/material";
import {useState} from "react";
import ArrowIconSrc from "@/features/profile/SupportTicketsChat/assets/ArrowBottom.svg";
import {styled} from "@mui/system";

type TicketStatus = "Open" | "In Progress" | "Close"

const STATUS_OPTIONS: Array<{ value: TicketStatus; label: string; color: string }> = [
    {value: "Open", label: "Open", color: "#49AB3A"},
    {value: "In Progress", label: "In Progress", color: "#6CAFC6"},
    {value: "Close", label: "Close", color: "#EF4D56"},
]

const DropdownIcon = (props: { className?: string }) => (
    <img
        {...props}
        src={ArrowIconSrc}
        alt="arrow"
        style={{width: 24, height: 24, display: 'block', pointerEvents: 'none'}}
    />
);

const StatusSelectComponent = styled(Select)<SelectProps<'Open' | 'In Progress' | 'Close'>>(
    () => ({
        minWidth: 232,
        borderRadius: 6,
        height: 44,
        border: '1px solid #C6D4DB',
        paddingRight: 16,
        '& .MuiSelect-select': {
            padding: '4px 32px 4px 12px',
            fontWeight: 400,
        },
        '& .MuiSvgIcon-root': {
            display: 'none',
        },

        '& .MuiSelect-icon': {
            transition: 'transform 300ms ease',
            right: 16,
            top: 'calc(50% - 12px)',
            position: 'absolute',
            pointerEvents: 'none',
        },

        '& .MuiSelect-icon.MuiSelect-iconOpen': {
            transform: 'rotate(180deg)',
        },
    })
);


export default function StatusSelect() {
    const [status, setStatus] = useState<'Open' | 'In Progress' | 'Close'>('Open');

    const handleStatusChange: SelectProps['onChange'] = (
        event: SelectChangeEvent<unknown>
    ) => {
        setStatus(event.target.value as 'Open' | 'In Progress' | 'Close');
    };


    return (
        <FormControl size="small" sx={{ml: 1}}>
            <StatusSelectComponent
                value={status}
                onChange={handleStatusChange}
                IconComponent={DropdownIcon}
            >
                {STATUS_OPTIONS.map(({value, label, color}) => (
                    <MenuItem key={value} value={value}>
                        <span style={{color}}>{label}</span>
                    </MenuItem>
                ))}
            </StatusSelectComponent>
        </FormControl>
    )
}