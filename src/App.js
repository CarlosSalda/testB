import React, { useState } from "react";
import {
  Container,
  Button,
  Box,
  ListItem,
  ListItemText, Grid
} from "@material-ui/core";
import styles from "./style";
import { useHistory } from "react-router";
import { sizing } from "@material-ui/system";
import AppIcon from "./icon/appIcon";
import AvatarIcon from "./icon/avatarIcon";

const App = () => {
  const history = useHistory();
  const [balance, setBalance] = useState("00.00");
  const [prev, setPrev] = useState([]);
  const classes = styles();

  const decideBalance = (randomNumbers) => {
    let set = new Set(randomNumbers);
    if (set.size == 3) {
    } else if (set.size == 2) {
      let nbal = parseFloat(balance) + 0.5;
      setBalance(nbal.toString());
    } else if (set.size == 1 && !set.has(7)) {
      let nbal = parseFloat(balance) + 5;
      setBalance(nbal.toString());
    } else if (set.size == 1 && set.has(7)) {
      let nbal = parseFloat(balance) + 10;
      setBalance(nbal.toString());
    }
  };

  const getRandom = () => {
    return Math.floor(Math.random() * 9 + 1);
  };

  const getRandomsAndNewBalance = () => {
    if (balance >= 1) {
      setBalance(balance - 1);

      let box1 = document.getElementById("box1");
      let box2 = document.getElementById("box2");
      let box3 = document.getElementById("box3");

      box1.textContent = getRandom();
      box2.textContent = getRandom();
      box3.textContent = getRandom();

      let arrayRandoms = new Array(
        box1.textContent,
        box2.textContent,
        box3.textContent
      );

      let nAr = new Array(arrayRandoms);

      setPrev(prev.concat(nAr));
      decideBalance(arrayRandoms);
    } else {
      window.alert("No balance left!");
    }
  };

  const noSpin = () => {
    let box1 = document.getElementById("box1");
    let box2 = document.getElementById("box2");
    let box3 = document.getElementById("box3");

    box1.textContent = 7;
    box2.textContent = 7;
    box3.textContent = 7;
    let arrayRandoms = new Array(7, 7, 7);
    let nAr = new Array(arrayRandoms);

    setPrev(prev.concat(nAr));

    decideBalance(arrayRandoms);
  };

  const exit = () => {
    window.close();
  };

  function ListItemLink(props) {
    return (
      <>
        <ListItem className={classes.item} button component="a" {...props} /> <br />
      </>
    );
  }

  return (
    <>
      <Container className={classes.header}>
        <Box component="div" display="inline">
          <AppIcon className={classes.appIcon} />
        </Box>
        <Box className={classes.text} component="div" display="inline">
          Casino App!
        </Box>
        <Box className={classes.rightIc} component="div" display="inline"></Box>
        <Box className={classes.right} component="div" display="inline">
          ${balance}
          <Button className={classes.buttonLogin}>
            <AvatarIcon className={classes.avatar} />
          </Button>
        </Box>
      </Container>
      <br />
      <br />
      <Container className={classes.body}></Container>
      <Container className={classes.body}>
        <Box
          className={classes.box1}
          width="75%"
          border={2}
          component="div"
          display="inline"
          id="box1"
        >
          0
        </Box>
        <Box
          className={classes.box1}
          width="75%"
          border={2}
          component="div"
          display="inline"
          id="box2"
        >
          0
        </Box>
        <Box
          className={classes.box1}
          width="75%"
          border={2}
          component="div"
          display="inline"
          id="box3"
        >
          0
        </Box>
      </Container>
      <Container className={classes.Buttons}>
        <Box className={classes.box1} component="div" display="inline">
          <Button
            className={classes.buttonSpin}
            onClick={getRandomsAndNewBalance}
          >
            Spin!
          </Button>
        </Box>
        <Box className={classes.box1} component="div" display="inline">
          <Button className={classes.buttonDebug} onClick={noSpin}>
            Debug!
          </Button>
        </Box>
        <Box className={classes.box1} component="div" display="inline">
          <Button className={classes.buttonExit} onClick={exit}>
            exit!
          </Button>
        </Box>
      </Container>
      <Grid className={classes.gridList}>
      {prev.map((e) => (
        <ListItemLink href="#simple-list">
          <ListItemText className={classes.item} primary={e} />
        </ListItemLink>
      ))}
      </Grid>
      <Container className= {classes.footer}>
          Copyright
      </Container>
    </>
  );
};

export default App;
