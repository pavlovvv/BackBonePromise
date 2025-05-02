import {FC, useState} from 'react';
import {
    Box,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    SelectChangeEvent,
} from '@mui/material';
import { Language } from '@/features/profile/types'

const LanguageSelector: FC = () => {
    const [language, setLanguage] = useState<Language>('EN');

    const handleChange = (event: SelectChangeEvent<Language>) => {
        setLanguage(event.target.value as Language);
    };

    return (
        <Box sx={{borderRadius: 2, px: 1}}>
            <FormControl fullWidth size="small">
                <InputLabel id="language-select-label">Language</InputLabel>
                <Select
                    labelId="language-select-label"
                    id="language-select"
                    value={language}
                    label="Language"
                    onChange={handleChange}
                >
                    <MenuItem value="EN">EN</MenuItem>
                    <MenuItem value="UA">UA</MenuItem>
                    <MenuItem value="DE">DE</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
};

export default LanguageSelector;