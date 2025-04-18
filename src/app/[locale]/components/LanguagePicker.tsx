import { FormControl, MenuItem, Select, Typography } from '@mui/material';
import Flag from 'react-world-flags';

export default function LanguagePicker({
  locale,
  onChange,
}: {
  locale: string;
  onChange: (newLocale: string) => void;
}) {
  return (
    <FormControl variant="standard" sx={{ ml: 'auto', minWidth: 120 }}>
      <Select
        value={locale}
        onChange={(e) => onChange(e.target.value)}
        disableUnderline
        sx={{
          '& .MuiSelect-select': {
            display: 'flex',
            alignItems: 'center',
            gap: 1,
          },
        }}
      >
        <MenuItem value="en">
          <Flag code="GB" style={{ width: 24, height: 16 }} />
          <Typography ml={1}>EN</Typography>
        </MenuItem>
        <MenuItem value="mk">
          <Flag code="MK" style={{ width: 24, height: 16 }} />
          <Typography ml={1}>MK</Typography>
        </MenuItem>
      </Select>
    </FormControl>
  );
}