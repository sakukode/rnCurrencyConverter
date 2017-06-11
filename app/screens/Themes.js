import React, { Component} from 'react';
import { ScrollView, StatusBar } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { ListItem, Separator } from '../components/List';

const style = EStyleSheet.create({
  $blue: '$primaryBlue',
  $orange: '$primaryOrange',
  $green: '$primaryGreen',
  $purple: '$primaryPurple',
})

class Themes extends Component {
  handlePressTheme = (color) => {
    console.log("press theme", color);
  }

  render() {
    return (
     <ScrollView>
        <StatusBar translucent={false} barStyle="default" />
        <ListItem
          text="Blue"
          onPress={() => this.handlePressTheme(style.$blue)}
          selected
          checkmark={false}
          iconBackground={style.$blue}
        />
        <Separator />
        <ListItem
          text="Orange"
          onPress={() => this.handlePressTheme(style.$orange)}
          selected
          checkmark={false}
          iconBackground={style.$orange}
        />
        <Separator />
        <ListItem
          text="Green"
          onPress={() => this.handlePressTheme(style.$green)}
          selected
          checkmark={false}
          iconBackground={style.$green}
        />
        <Separator />
        <ListItem
          text="Purple"
          onPress={() => this.handlePressTheme(style.$purple)}
          selected
          checkmark={false}
          iconBackground={style.$purple}
        />
        <Separator />
     </ScrollView>
    );
  }
}

export default Themes;
