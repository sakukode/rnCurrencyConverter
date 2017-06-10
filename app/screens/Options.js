import React, { Component } from 'react';
import { ScrollView, StatusBar, Platform } from 'react-native';

import { ListItem, Separator } from '../components/List';

const ICON_COLOR = '#868686';
const ICON_SIZE = 23;
const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';

class Options extends Component {
  handlePressThemes = () => {
      console.log("press themes");
  }

  handlePressSite = () => {
      console.log("press site");
  }

  render() {
	  return (
		<ScrollView>
		  <StatusBar translucent={false} barStyle="default" />
          <ListItem 
            text="Themes"
            onPress={this.handlePressThemes}           
          />
          <Separator />
          <ListItem 
            text="Fixer.io"
            onPress={this.handlePressSite}           
          />
          <Separator />
	    </ScrollView>	
	  );
  }
}

export default Options;
