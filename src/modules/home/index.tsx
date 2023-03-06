import { Button, Stack } from '@mui/material';
import { Container } from '@mui/system';

export default function Home() {
  return (
    <Container>
      <Stack
        height="100vh"
        direction="row"
        spacing={2}
        alignItems="center"
        justifyContent="center"
      >
        <Button color="primary">button</Button>
        <Button color="secondary">button</Button>
        <Button color="info">button</Button>
        <Button color="success">button</Button>
        <Button color="warning">button</Button>
        <Button color="error">button</Button>
      </Stack>
    </Container>
  );
}
