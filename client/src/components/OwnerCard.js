
import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const OwnerCard = ({owner}) => {
const {first_name, last_name, bio} = owner


  return (
    <Container maxWidth="sm">
    <Card sx={{ maxWidth: 345, margin: '20px' }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {first_name} {last_name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        About me: {bio}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
      </Button>
      </CardActions>
    </Card>
    </Container>
  )
}

export default OwnerCard