import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import {DatePicker, DatePickerSlots, DatePickerSlotProps} from "@mui/x-date-pickers/DatePicker";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import calendarIconSrc from "@/features/profile/SupportCreateTicket/assets/calendar.svg";
import {useState} from "react";

const CustomCalendarIcon: React.FC = (props) => (
    <img
        {...props}
        src={calendarIconSrc}
        alt="calendar"
        style={{ width: 20, height: 20 }}
    />
);

const datePickerSlots: Partial<DatePickerSlots> = {
    openPickerIcon: CustomCalendarIcon,
};

const datePickerSlotProps: Partial<DatePickerSlotProps<true>> = {
    textField: {
        size: "small",
        variant: "outlined",
        sx: {
            width: 232,
            "& .MuiPickersInputBase-root": { height: 44 },
            "& .MuiPickersOutlinedInput-notchedOutline": {
                border: "1px solid #C6D4DB !important",
            },
        },
    },
};

export default function Calendar() {
    const [dueDate, setDueDate] = useState<Date | null>(null);

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
                value={dueDate}
                onChange={setDueDate}
                slots={datePickerSlots}
                slotProps={datePickerSlotProps}
            />
        </LocalizationProvider>
    )
}