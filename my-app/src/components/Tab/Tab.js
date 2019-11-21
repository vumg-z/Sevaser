import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import CakeIcon from "@material-ui/icons/CakeOutlined";
import InfoIcon from "@material-ui/icons/InfoOutlined";
import ShopIcon from "@material-ui/icons/ShoppingCartOutlined";
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: 500,
  },
  label:{
    padding: ".6em 0em .3em 0em"
  }
});

export default function IconTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper square className={classes.root}>
      <Typography variant="h6" align="center" className={classes.label}>
        Sevaser
      </Typography>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="primary"
        textColor="primary"
        aria-label="icon tabs example"
      >
        <Tab icon={<CakeIcon />} aria-label="phone" />
        <Tab icon={<InfoIcon />} aria-label="favorite" />
        <Tab icon={<ShopIcon />} aria-label="person" />
      </Tabs>
    </Paper>
  );
}


