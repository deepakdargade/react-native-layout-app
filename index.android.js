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
  AppRegistry
} = React;


var First = React.createClass({
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
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => navigationView}>
        <ScrollView>
          <View style={styles.row}>
            <Image
              source={{uri: 'https://www.classpro.in/team/deepak-dargade.jpg'}}
              style={styles.image}
            />
            <View style={styles.text}>
              <Text style={styles.title}>
                Deepak Dargade
              </Text>
              <Text style={styles.subtitle}>
                9619306161
              </Text>
            </View>
          </View>

          <View style={styles.row}>
            <Image
              source={{uri: 'https://www.classpro.in/team/jayesh-gopalan.png'}}
              style={styles.image}
            />
            <View style={styles.text}>
              <Text style={styles.title}>
                Jayesh Gopalan
              </Text>
              <Text style={styles.subtitle}>
                9768002930
              </Text>
            </View>
          </View>

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

        </ScrollView>
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
});


AppRegistry.registerComponent('First', () => First);