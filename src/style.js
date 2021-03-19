import { makeStyles } from "@material-ui/styles";

const centeredStyleObj = {
  container: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

export default makeStyles({
  cardContainer: {
    height: "100vh",
    flexDirection: "column",
    ...centeredStyleObj,
  },
  cardContainer: {
    flexDirection: "column",
    width: 400,
    height: 200,
    padding: "2rem",
    ...centeredStyleObj,
  },
  title: {
    fontSize: "4rem",
  },
  titleGridContainer: {
    ...centeredStyleObj,
  },
  textFieldSearch: {
    width: "90%",
  },
  searchButton: {
    marginLeft: ".5rem",
  },
  buttonsContainer: {
    marginTop: ".5rem",
  },
  appIcon: {
    fontSize: "4rem",
  },
  header: {
    backgroundColor: "#e3e0e0",
  },
  text: {
    fontSize: "2rem",
  },
  avatar: {
    fontSize: "4rem",
  },
  right: {
    marginRight: "45rem",
    fontSize: "3rem",
  },
  rightIc: {
    marginRight: "45rem",
  },
  body: {
    width: "10rem",
    marginLeft: "45rem",
  },
  box1: {
    fontSize: "15rem",
    padding: "1rem",
  },
  buttons: {
    padding: "2rem",
  },
  buttonSpin: {
    fontSize: "3rem",
    padding: "1rem",
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    marginLeft: '6rem'
  },
  buttonDebug: {
    fontSize: "3rem",
    padding: "1rem",
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    marginLeft: '6rem'
  },
  buttonExit: {
    fontSize: "3rem",
    padding: "1rem",
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    marginLeft: '6rem'
  },
  buttonLogin: {
      border: '2rem',
      backgroundColor: 'grey',
      marginTop: '-2rem',
      width: '0.5rem',
      marginLeft: '1rem'
  }, 
  gridList: {
      marginLeft: '55rem',
      width: '5rem',
      textAlign: 'center',
      alignContent: 'center'
  },
  item: {
      fontSize: '2rem'
  },
  footer: {
      backgroundColor: 'grey', textAlign: "center"
  }
});
