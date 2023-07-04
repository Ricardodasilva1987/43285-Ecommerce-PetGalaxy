import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Margin } from "@mui/icons-material";
import { height } from "@mui/system";
import CounterContainer from "../../../common/counter/CounterContainer";
import "./itemListContainer.css";

const ItemList = ({ items }) => {
  console.log("llego el presentacional: ", items);

  return (
    <div>
      <div className="titulo">
        <h1>Productos disponibles</h1>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-start",
          flexWrap: "wrap",
        }}
      >
        {items.map((item) => {
          return (
            <Card key={item.id} sx={{ width: 300, height: 390, margin: 2 }}>
              <CardMedia
                sx={{ height: 190 }}
                image={item.img}
                title={item.tittle}
              />
              <CardContent>
                <Typography gutterBottom variant="body1" component="div">
                  {item.tittle}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">VER DETALLE</Button>
                <CounterContainer stock={item.stock} />
              </CardActions>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default ItemList;
