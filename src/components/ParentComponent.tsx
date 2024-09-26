import { useState } from 'react';
import ChildComponent from './ChildComponent';
import { Button, Container, Stack, Typography } from '@mui/material';

export default function ParentComponent() {
  const [count, setCount] = useState<number>(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

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
          onClick={incrementCount}
        >
          Increment count
        </Button>
        <Typography variant="h6">Count: {count}</Typography>
      </Stack>
      <ChildComponent count={count} />
    </Container>
  );
}
