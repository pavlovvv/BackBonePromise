import {FormControl, MenuItem, Select, SelectChangeEvent, SelectProps} from "@mui/material";
import {useState} from "react";
import {styled} from "@mui/system";
import {PRIORITY_OPTIONS} from "@components/common/select/constants.ts";
import {DropdownIcon} from "@components/common/select/DropDownIcon.tsx";


const StatusSelectComponent = styled(Select)<SelectProps<"High" | "Medium" | "Low">>(
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


export default function PrioritySelect() {
    const [status, setStatus] = useState<"High" | "Medium" | "Low">('High');

    const handleStatusChange: SelectProps['onChange'] = (
        event: SelectChangeEvent<unknown>
    ) => {
        setStatus(event.target.value as "High" | "Medium" | "Low");
    };


    return (
        <FormControl size="small" sx={{ml: 1}}>
            <StatusSelectComponent
                value={status}
                onChange={handleStatusChange}
                IconComponent={DropdownIcon}
            >
                {PRIORITY_OPTIONS.map(({value, label, color}) => (
                    <MenuItem key={value} value={value}>
                        <span style={{color}}>{label}</span>
                    </MenuItem>
                ))}
            </StatusSelectComponent>
        </FormControl>
    )
}