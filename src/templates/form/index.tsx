'use client';
import { Container, TextField, Box, Typography, Button } from '@mui/material';

import { useFields, useValtioFields } from '../../globals/stores/fields';
import { useMutate } from '../../globals/hooks/useMutate';
import styles from './styles';

export default function Form() {
  const { fields, errors } = useFields();
  const { mutateAsync } = useMutate();

  const { changeFieldValue, validate } = useValtioFields();

  return (
    <Container sx={styles.container}>
      <Box
        sx={styles.content}
        component="form"
        onSubmit={async (e) => {
          e.preventDefault();

          await mutateAsync();
        }}
      >
        <Typography sx={styles.title}>Add Post</Typography>
        <TextField
          value={fields.title}
          label="Title"
          onChange={(e) => {
            changeFieldValue('title', e.target.value);
            validate('title');
          }}
        />
        {errors.title ? <Typography sx={{ color: 'red', fontWeight: '500' }}>{errors.title}</Typography> : null}
        <TextField
          value={fields.description}
          label="Description"
          onChange={(e) => {
            changeFieldValue('description', e.target.value);
            validate('description');
          }}
        />
        {errors.description ? (
          <Typography sx={{ color: 'red', fontWeight: '500' }}>{errors.description}</Typography>
        ) : null}
        <Button type="submit">Add</Button>
      </Box>
    </Container>
  );
}
