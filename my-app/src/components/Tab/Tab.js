import React, {useEffect} from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import CakeIcon from "@material-ui/icons/CakeOutlined";
import InfoIcon from "@material-ui/icons/InfoOutlined";
import ShopIcon from "@material-ui/icons/ShoppingCartOutlined";
import Events from "../Events/Events";
import Overview from "../Overview/Overview";
import Shopping from "../Shopping/Shopping"
import EventosData from "../../data/data"


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 500
  },
  label: {
    padding: ".6em 0em .3em 0em"
  }
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // estado del "evento" a evento me refiero al tipo de fiesta e.g "carne asada", "hamburguesas" etc

  const [evento, setEvento] = React.useState("Carne Asada")

  // handle change del evento, en esta lineas de codigo voy a manejar la eleccion del evento 

  function handleClick(evento, value) {
    setEvento(evento)
    setValue(value);
  }

  //data de los eventos

  const [eventosData, setEventosData] = React.useState([])

  // estado para agarrar la data de los eventos

  useEffect(()=> {
    setEventosData(EventosData)
  }, [])

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Typography variant="h6" align="center" className={classes.label}>
          Sevaser
        </Typography>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab icon={<CakeIcon />} aria-label="phone" {...a11yProps(0)} />
          <Tab icon={<InfoIcon />} aria-label="favorite" {...a11yProps(1)} />
          <Tab icon={<ShopIcon />} aria-label="person" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Events data={eventosData} handleClick={handleClick} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Overview evento={evento} handleClick={handleClick}/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Shopping/>
      </TabPanel>
    </div>
  );
}
