import React from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import DateRangePicker from '@mui/lab/DateRangePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import bgLocale from 'date-fns/locale/bg';

const localeMap = {
    bg: bgLocale
};

export default function SearchBar({ search, setSearchCriteria }) {

    const [ open, setOpen ] = React.useState(false);

    const [ dateValue, setDateValue ] = React.useState([ null, null ]);

    const [ locale ] = React.useState('bg');

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    return (

        <Box sx={{ '& > :not(style)': { m: 1, width: '35ch', display: 'inline-flex' } }}>
            <TextField
                label={<SearchOutlinedIcon />}
                variant="outlined"
                onChange={e => (search(e.target.value))}
            />
            <FormControl sx={{ m: 1 }}>
                <InputLabel> Опции: </InputLabel>
                <Select
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    defaultValue={'regNumber'}
                    label="Options"
                    onChange={(e) => (setSearchCriteria(e.target.value))}
                >
                    <MenuItem value={'regNumber'}>рег. номер</MenuItem>
                    <MenuItem value={'structure'}>структура</MenuItem>
                </Select>
            </FormControl>
            <LocalizationProvider dateAdapter={AdapterDateFns} locale={localeMap[ locale ]}>
                <DateRangePicker
                    startText="Начална дата:"
                    endText="Крайна дата:"
                    value={dateValue}
                    onChange={(newValue) => {
                        setDateValue(newValue);
                    }}
                    renderInput={(startProps, endProps) => (
                        <React.Fragment>
                            <TextField {...startProps} />
                            <Box sx={{ mx: 1 }}> до </Box>
                            <TextField {...endProps} />
                        </React.Fragment>
                    )}
                />
            </LocalizationProvider>
        </Box>
    );
}



