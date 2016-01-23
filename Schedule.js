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
  ProgressBarAndroid,
  Component
} = React;


var REQUEST_URL = "https://raw.githubusercontent.com/deepakdargade/react-native-layout-app/1eae2ddc2c5070b45bbc598e200aca1b763cd03e/classpro-team.json";


class Schedule extends Component{

  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false
    };
  } /* end of constructor */


  componentDidMount() {
    this.fetchData();
  } /* end of componentDidMount */


  fetchData() {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData.employees),
          loaded: true
        });
      })
      .done();
  } /* end of fetchdata */


  renderLoadingView() {
    return (
      <View style={styles.row}>
        <View style={styles.loading}>
          <ProgressBarAndroid />
        </View>
      </View>
    );
  } /* end of loading */


  renderEmployee(employee){
    return (
      <View style={styles.row}>
        <Image
          source={{uri: employee.posters.thumbnail}}
          style={styles.image}
        />
        <View style={styles.text}>
          <Text style={styles.title}>
            {employee.name}
          </Text>
          <Text style={styles.subtitle}>
            {employee.mobile}
          </Text>
        </View>
      </View>
    ); 
  } /* end of render employee */


  render() {
    if (!this.state.loaded){
      return this.renderLoadingView();
    }
    
    // var employee = EMPLOYEE_DATA[0];
    // return this.renderEmployee(employee);

    return (
      <ScrollView>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderEmployee}
          style={styles.listView} />
        <Text style={styles.bottomText}></Text>
      </ScrollView>
    );

  } /* end of render */

} /* end of class */



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
  },
  bottomText: {
    marginBottom: 10,
  },
  loading: {
    flex: 1,
    justifyContent: 'center'
  }
});


module.exports = Schedule;