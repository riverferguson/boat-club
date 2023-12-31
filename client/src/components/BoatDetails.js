import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const BoatDetails = ({ deleteBoat, handleEdit, user}) => {
  const [newBoat, setNewBoat] = useState([]);
  const { id } = useParams();
  const history = useHistory();
  const [error, setError] = useState(null);
  const { make, model, description, image, price, location, owner} = newBoat;
  
  useEffect(() => {
    fetch(`/boats/${id}`)
      .then((resp) => resp.json())
      .then((boats) => {
      console.log(boats)
        setNewBoat(boats)
      });
  }, [id]);

  const handleDelete = (e) => {
    fetch(`/boats/${id}`, {
      method: "DELETE",
    })
      .then((resp) => {
        if (resp.ok) {
          deleteBoat(newBoat);
          history.push("/boats");
        } else {
          resp.json().then((error) => setError(error.message));
        }
      })
      .catch(console.error);
  };

  return (
    <Container maxWidth="sm">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          src={image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Make: {make}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Model: {model}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Description: {description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Price: ${price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            location: {location?.city}, {location?.state}, {location?.country}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Owner: {owner?.first_name}, {owner?.last_name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            email: {owner?.email}
          </Typography>
        </CardContent>
        <CardActions>
          {user ?
          <Button size="small" onClick={() => handleEdit(newBoat)}>
            Edit Listing
          </Button>
          : null}
          {user ?
          <Button size="small" onClick={handleDelete}>
            Remove Listing
          </Button>
          : null}
        </CardActions>
      </Card>
    </Container>
  );
};

export default BoatDetails;