import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';

const Tags = ({color, raza}) => {
  return (
    <>
    <Stack direction="horizontal" gap={2}>
      <Badge bg={color}>{raza}</Badge>
    </Stack>

    </>
  );
}

export default Tags;