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

          <View style={styles.row}>
            <Image
              source={{uri: 'https://www.classpro.in/team/faraz.jpg'}}
              style={styles.image}
            />
            <View style={styles.text}>
              <Text style={styles.title}>
                Faraz Damad
              </Text>
              <Text style={styles.subtitle}>
                8286012930
              </Text>
            </View>
          </View>

          <View style={styles.row}>
            <Image
              source={{uri: 'https://www.classpro.in/team/sameer-shaikh.jpg'}}
              style={styles.image}
            />
            <View style={styles.text}>
              <Text style={styles.title}>
                Sameer Shaikh
              </Text>
              <Text style={styles.subtitle}>
                8286012930
              </Text>
            </View>
          </View>

          <View style={styles.row}>
            <Image
              source={{uri: 'https://www.classpro.in/team/priti-phatak.jpg'}}
              style={styles.image}
            />
            <View style={styles.text}>
              <Text style={styles.title}>
                Priti Phatak
              </Text>
              <Text style={styles.subtitle}>
                8286012930
              </Text>
            </View>
          </View>

          <View style={styles.row}>
            <Image
              source={{uri: 'https://www.classpro.in/team/prakriti-sharma.jpg'}}
              style={styles.image}
            />
            <View style={styles.text}>
              <Text style={styles.title}>
                Prakriti Sharma
              </Text>
              <Text style={styles.subtitle}>
                8286012930
              </Text>
            </View>
          </View>

          <View style={styles.row}>
            <Image
              source={{uri: 'https://www.classpro.in/team/prakriti-sharma.jpg'}}
              style={styles.image}
            />
            <View style={styles.text}>
              <Text style={styles.title}>
                Prakriti Sharma
              </Text>
              <Text style={styles.subtitle}>
                8286012930
              </Text>
            </View>
          </View>

          <View style={styles.row}>
            <Image
              source={{uri: 'https://www.classpro.in/team/prakriti-sharma.jpg'}}
              style={styles.image}
            />
            <View style={styles.text}>
              <Text style={styles.title}>
                Prakriti Sharma
              </Text>
              <Text style={styles.subtitle}>
                8286012930
              </Text>
            </View>
          </View>

          <View style={styles.row}>
            <Image
              source={{uri: 'https://www.classpro.in/team/prakriti-sharma.jpg'}}
              style={styles.image}
            />
            <View style={styles.text}>
              <Text style={styles.title}>
                Prakriti Sharma
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