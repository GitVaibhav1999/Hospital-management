import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import DoctorsTab from './Tabs/DoctorsTab';
import PatientsTab from './Tabs/PatientsTab';
import {getDoctorsData} from './API'

function TabPanel(props) {  
  const { children, value, index, ...other } = props;


  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}


function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    display:'block',
    backgroundColor: theme.palette.background.paper,
    height:"100%",
    width: '80vw',
    borderRight:'1px solid  #213267',
  },
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <div position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor= {value==0 ? "primary" : "secondary"}
          textColor= {value==0 ? "primary" : "secondary"}
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Doctors" {...a11yProps(0)} />
          <Tab label="Patients" {...a11yProps(1)} />

        </Tabs>
      </div>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <DoctorsTab />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <PatientsTab />
        </TabPanel>
       
      </SwipeableViews>
    </div>
  );
}