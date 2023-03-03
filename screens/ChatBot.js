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
  const apikey = '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';
  const apiUrl =
    'https://api.openai.com/v1/engines/text-davinci-002/completions';
  const [textInput, setTextInput] = useState('');

  const handleSend = async () => {
    const prompt = textInput;
    const response = await axios.post(
      apiUrl,
      {
        prompt: prompt,
        max_token: 1024,
        temperature: 0.5,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apikey}`,
        },
      }
    );
    const text = response.data.choices[0].text;
    setData([
      ...data,
      { type: 'user', text: textInput },
      { type: 'bot', text: text },
    ]);
    setTextInput('');
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
                {item.type === 'user' ? 'Ninza: ' : 'Bot: '}
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
    backgroundColor: '#fffcc9',
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
    borderRadius: 40,
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
    backgroundColor: '#fffcc9',
    width: '102%',
    margin: 10,
  },
  bot: {
    fontSize: 16,
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
    backgroundColor: 'yellow',
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
    color: 'blue',
  },
});
