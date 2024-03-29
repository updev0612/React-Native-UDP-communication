/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
} from 'react-native';

const App = () => 
{
  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={listeningUDP}>
            <Text style={styles.button}>device 1</Text>
      </TouchableHighlight> 
    </View>
  );
  function listeningUDP(event)
  {
      // Require dgram module.
      var dgram = require('dgram');
      // Create udp server socket object.
      var server = dgram.createSocket("udp4");
      // Make udp server listen on port 8089.
      server.bind(4210);
      // When udp server receive message.
      server.on("message", function (message) {
      // Create output message.
      var output = "Udp server receive message : " + message + "\n";
      // Print received message in stdout, here is log console.
       alert(output);
      });
      // When udp server started and listening.
      server.on('listening', function () {
          // Get and print udp server listening ip address and port number in log console. 
        var address = server.address(); 
        console.log('UDP Server started and listening on ' + address.address + ":" + address.port);
      });
  }
}
const styles = StyleSheet.create({
  button: {
    width: 200,
    height: 60,
    borderStyle:'solid',
    color:'blue',
    top:20,
    textAlign:'center'
  },
  container: {
    top: 100,
    backgroundColor: '#AAAAAA',
  },
});

export default App;
