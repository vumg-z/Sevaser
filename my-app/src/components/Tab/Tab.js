import React from "react";
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
import Card from "../Card/Card";

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
        <Card texto={"Carne Asada"} tipo={"Fiesta"}></Card>
        <Card texto={"Hamburguesada"} tipo={"Fiesta"}></Card>
        <Card texto={"Fiesta de Cumpleaños"} tipo={"Fiesta"}></Card>
        <Card texto={"Fiesta Sorpresa"} tipo={"Fiesta"}></Card>
        <Card texto={"Posada"} tipo={"Fiesta"}></Card>
        <Card texto={"Despedida de Soltero"} tipo={"Fiesta"}></Card>
        <Card texto={"Peda Masiva"} tipo={"Fiesta"}></Card>
        <Card texto={"Reu con los compas"} tipo={"Fiesta"}></Card>
        <Card texto={"Algo tranqui"} tipo={"Fiesta"}></Card>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Card data={"16 Nov"} evento={"Carne Asada"}></Card>
        <Card data={"Gasto estimado"} evento={"$1125"}></Card>
        <Card data={"Personas"} evento={"25"}></Card>
        <Card data={"Costo por persona"} evento={"$45"}></Card>
        <Card data={"Comida principal"} evento={"Arrachera Asada"}></Card>
        <Card data={"Bebida principal"} evento={"Cerveza"}></Card>
        <Card data={"Botana principal"} evento={"Churros"}></Card>
        <Card data={"Desechables"} evento={"Baratos"}></Card>
        <Card evento={"Lista de compras"}></Card>
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </div>
  );
}
