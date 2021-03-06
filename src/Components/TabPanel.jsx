import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import BusList from './BusList'
import ContentContainer from "./ContentContainer"
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import TrainIcon from '@material-ui/icons/Train';

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
        <Box>
          <Typography component={"div"} >{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  colors: {
    backgroundColor: "#2e022e",
    color: "white",
  },
  capitalize: {
    textTransform: "capitalize",
  }
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
      <AppBar position="static">
        <Tabs
          id="menu"
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          className={classes.colors}
          variant="fullWidth"
        >
          <Tab className={classes.capitalize} label="Bussi" icon={<DirectionsBusIcon />} {...a11yProps(0)} />
          <Tab className={classes.capitalize} label="Py??r??" icon={<DirectionsBikeIcon />} {...a11yProps(1)} />
          <Tab className={classes.capitalize} label="Metro" icon={<TrainIcon />} {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <div>
          <ContentContainer title="Bussi" color="#007ac9">
            <BusList></BusList>
          </ContentContainer>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        <ContentContainer title="Py??r??" color="#756800">
            <p>yee</p>
          </ContentContainer>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
        <ContentContainer title="Metro" color="#8a3200">
            <p>yee</p>
          </ContentContainer>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
