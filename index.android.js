'use strict';

var React = require('react-native');

var {
  View,
  Text,
  DrawerLayoutAndroid,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  Image,
  ListView,
  AppRegistry
} = React;

var Schedule = require('./Schedule');



var First = React.createClass({
  openDrawer:function() {
    this.refs['DRAWER'].openDrawer()
  },

  render: function() {
    var navigationView = (
        <View style={styles.nav_view}>

          <View style={styles.row}>
            <Image
              source={{uri: 'https://www.classpro.in/team/vijay.jpg'}}
              style={styles.image}
            />
            <View style={styles.text}>
              <Text style={styles.title}>
                Vijay Suryanwanshi
              </Text>
              <Text style={styles.subtitle}>
                8286012930
              </Text>
            </View>
          </View>

          <Text style={styles.nav_text}>Schedule</Text>
          <Text style={styles.nav_text}>Performance</Text>
          <Text style={styles.nav_text}>Attendance</Text>
          <Text style={styles.nav_text}>Profile</Text>

        </View>
    );
    return (
      <DrawerLayoutAndroid
        drawerWidth={300}
        ref={'DRAWER'}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => navigationView}>
        
        <View style={styles.toolbar}>
          <TouchableHighlight onPress={this.openDrawer}>
            <Image
              source={ require('./menu.png') }
              style={styles.toolbar_image}
            />
          </TouchableHighlight>
          <Text style={styles.toolbar_text}>
            Schedule
          </Text>
        </View>
        
        <Schedule />
      </DrawerLayoutAndroid>
    );
  }
});

var styles = StyleSheet.create({
  nav_view: {
    flex: 1,
    backgroundColor: '#fff',
  },
  nav_text: {
    margin: 10,
    fontSize: 15,
    textAlign: 'left',
    marginLeft: 20
  },
  container: {
    flex: 1,
    alignItems: 'center'
  },
  container_text: {
    margin: 10,
    fontSize: 15,
    textAlign: 'right'
  },
  row: { flexDirection: 'row', marginLeft: 20, marginRight: 20, marginTop: 20 },
  image: { width: 48, height: 48, marginRight: 10 },
  text: { flex: 1, justifyContent: 'center'},
  title: { fontSize: 16, fontWeight: 'bold' },
  subtitle: { fontSize: 14 },
  toolbar: {
    top: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#009788',
  },
  toolbar_text: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold'
  },
  toolbar_image: {
    marginRight: 10,
    width: 20, 
    height: 20
  }
});


AppRegistry.registerComponent('First', () => First);