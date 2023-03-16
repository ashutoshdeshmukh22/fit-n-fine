import * as React from 'react';
import { useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  FlatList,
  TextInput,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios, { isCancel, AxiosError } from 'axios';

const ChatBot = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [textInput, setTextInput] = useState('');

  const handleSend = async () => {
    const prompt = textInput;

    axios
      .get(`https://fit-n-fine-server.cyclic.app/message?prompt=${prompt}`)
      .then(function (response) {
        // handle success
        const reply = response.data.content;
        console.log(response.data.content);

        const text = reply;
        setData([
          ...data,
          { type: 'user', text: textInput },
          { type: 'bot', text: text },
        ]);
        setTextInput('');
      })
      .catch(function (error) {
        // handle error
        const reply = 'There is some problem, Try again';

        const text = reply;
        setData([
          ...data,
          { type: 'user', text: textInput },
          { type: 'bot', text: text },
        ]);
        setTextInput('');
      })
      .finally(function () {
        // always executed
      });
  };

  return (
    <SafeAreaView style={styles.dietPlanScreen}>
      <View style={styles.container}>
        <Text style={styles.title}>Ask Anything</Text>
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          style={styles.body}
          renderItem={({ item }) => (
            <View style={{ flexDirection: 'row', padding: 10 }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: item.type === 'user' ? 'green' : 'red',
                }}>
                {item.type === 'user' ? 'User: ' : 'Bot: '}
              </Text>
              <Text style={styles.bot}>{item.text}</Text>
            </View>
          )}
        />
        <TextInput
          style={styles.input}
          value={textInput}
          onChangeText={(text) => setTextInput(text)}
          placeholder='Ask Me Anything'
        />
        <TouchableOpacity style={styles.button} onPress={handleSend}>
          <Text style={styles.buttonText}>Let's Go</Text>
        </TouchableOpacity>
        <StatusBar style='auto' />
      </View>
    </SafeAreaView>
  );
};

export default ChatBot;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  dietPlan: {
    position: 'absolute',
    top: 4,
    left: 130,
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '700',
    fontFamily: 'Poppins',
    color: '#1d1617',
    textAlign: 'left',
  },
  header: {
    position: 'absolute',
    top: 40,
    left: 15,
    width: 350,
    height: 37,
  },
  dietPlanScreen: {
    position: 'relative',
    borderRadius: 0,
    backgroundColor: '#fff',
    flex: 1,
    width: '100%',
    height: 932,
    overflow: 'hidden',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 70,
  },
  body: {
    backgroundColor: '#fff',
    width: '102%',
    margin: 10,
  },
  bot: {
    fontSize: 16,
    paddingRight: 50,
    textAlign: 'justify',
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    width: '90%',
    height: 60,
    marginBottom: 10,
    borderRadius: 10,
  },
  button: {
    backgroundColor: 'rgba(149, 173, 254, 0.3)',
    width: '90%',
    height: 60,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
});
