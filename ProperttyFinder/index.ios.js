/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
var React = require('react-native');
var SearchPage = require('./SearchPage');

var styles = React.StyleSheet.create({
  container: {
    flex: 1
  }
});

class PropertyFinderApp extends React.Component {
  render() {
    console.log('SearchPage.render');
    
    return (
      <React.NavigatorIOS
        style={ styles.container }
        initialRoute= {{
          title: 'Property Finder',
          component: SearchPage,
        }}
      />
    );
  }
}

React.AppRegistry.registerComponent('ProperttyFinder', function(){return PropertyFinderApp});
