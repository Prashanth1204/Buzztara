import React from "react";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    heading : {
        maxWidth : 80,
    },
})
const Heading = ()=>{
    const classes = useStyles();
    return (
     <>
     <Typography
     variant="h3"
     className={classes.heading}
     >
     Create account
     </Typography>
     </>
    );
}

export default Heading;