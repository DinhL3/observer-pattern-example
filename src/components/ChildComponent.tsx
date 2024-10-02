import { useContext } from 'react';
import { CounterContext } from '../store/counter-context';
import { Box, Typography } from '@mui/material';

export default function ChildComponent() {
  const counterCtx = useContext(CounterContext);

  return (
    <Box sx={{ p: 3, border: '2px solid blue', position: 'absolute', bottom: 1, right: 1 }}>
        <Typography
        variant="caption"
        sx={{ display: 'block', position: 'absolute', top: 0, left: 0 }}
      >
        Child component
      </Typography>
      <Typography variant="h6">Count from Context: {counterCtx.count}</Typography>
    </Box>
  );
}
