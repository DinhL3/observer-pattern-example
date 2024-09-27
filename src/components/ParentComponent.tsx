import { useContext } from 'react';
import ChildComponent from './ChildComponent';
import { Button, Container, Stack, Typography } from '@mui/material';
import { CounterContext } from '../store/counter-context';

export default function ParentComponent() {
  const counterCtx = useContext(CounterContext);

  return (
    <Container
      maxWidth="md"
      sx={{
        mt: 5,
        p: 5,
        border: '2px solid red',
        position: 'relative',
        display: 'flex',
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '300px',
      }}
    >
      <Typography
        variant="caption"
        sx={{ display: 'block', position: 'absolute', top: 0, left: 0 }}
      >
        Parent component
      </Typography>
      <Stack direction="row" alignItems="flex-start" spacing={2}>
        <Button
          id="increment-button"
          variant="contained"
          color="primary"
          onClick={counterCtx.incrementCount}
        >
          Increment count using Context
        </Button>
        <Typography variant="h6">Count from Context: {counterCtx.count}</Typography>
      </Stack>
      <ChildComponent/>
    </Container>
  );
}
