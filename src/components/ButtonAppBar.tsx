import { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { CounterContext } from '../store/counter-context';

export default function ButtonAppBar() {
  const counterCtx = useContext(CounterContext);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Independent nav bar
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Count from context: {counterCtx.count}
          </Typography>
          <Button
            id="increment-button"
            variant="contained"
            color="secondary"
            onClick={counterCtx.incrementCount}
          >
            Increment count using Context
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
