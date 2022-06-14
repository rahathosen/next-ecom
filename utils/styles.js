import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  navbar: {
    backgroundColor: "#203040",
    "& a": {
      color: "#ffffff",
      marginLeft: 10,
    },
  },
  brand:{
    fontWeight:'bold',
    fontSize:'1.5rem'
  },
  grow:{
    flexGrow:1
  },

  main: {
    minHeight: "80vh",
       //product details font 
  },
  footer: {
    textAlign: "center",
    marginTop:'20px'
  },
  section:{
    marginTop:25,
    fontSize:'20px',
    fontWeight:'bold',
    marginBottom:10
  },
});
export default useStyles;
