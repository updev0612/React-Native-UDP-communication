/**
 * This project was created by Medine Kubra
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
      <TouchableHighlight onPress={broadcastcontent1}>
            <Text style={styles.button}>Start broadcast"1"</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={broadcastcontent2}>
            <Text style={styles.button}>Start broadcast"2"</Text>
      </TouchableHighlight> 
      <TouchableHighlight onPress={broadcastcontent3}>
            <Text style={styles.button}>Start broadcast"3"</Text>
      </TouchableHighlight>
    </View>
  );
  function ToByteArray(str){
    String.prototype.encodeHex = function () {
    var bytes = [];
    for (var i = 0; i < this.length; ++i) {
     bytes.push(this.charCodeAt(i));
    }
    return bytes;
    };
   
    var byteArray = str.encodeHex();
    return byteArray
    }
  function broadcastcontent1(event)
  {
     broadcastUDP("1");
  }
  function broadcastcontent2(event)
  {
    broadcastUDP("2");
  }
  function broadcastcontent3(event)
  {
    broadcastUDP("3");
  }
  function broadcastUDP(msgtxt) 
  {
      const dgram = require('dgram');
      var message=ToByteArray(msgtxt);
      var PORT = 4210;

  // 100 devices.....

      // for (var i = 140; i < 160; i++) 
      // {
      //     const client = dgram.createSocket('udp4');
      //     var HOST = '192.168.1.';               
      //     HOST = `${HOST}${i.toString()}`;
      //     console.log(PORT+':'+HOST);
      //     client.send(message, 0, message.length, PORT, HOST, function(err, bytes) {
      //       if (err) throw err;
      //      // console.log('UDP message sent to ' + HOST +':'+ PORT+'comand:'+message);
      //       client.close();
      //     });
      // }
      
      alert('sending finished!');
      
      //test in a device.
      
      const client = dgram.createSocket('udp4');
      client.send(message, 0, message.length, PORT,'192.168.1.151', function(err, bytes) {
        if (err) throw err;
        client.close();
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
