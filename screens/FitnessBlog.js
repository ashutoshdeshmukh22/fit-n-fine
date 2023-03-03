import React, { useEffect, useState } from 'react';

import {
  StatusBar,
  StyleSheet,
  View,
  Linking,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Card } from 'react-native-paper';

const FitnessBlog = () => {
  const navigation = useNavigation();
  const url =
    'https://newsapi.org/v2/everything?q=physical-health&apiKey=caa798a2e87d43e3a34cca4176e9dcf8';

  const [data, setData] = useState([]);
  //   console.log(data.articles[0].url);

  const getArticles = () => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <>
      {Object.keys(data).length > 0 && (
        <ScrollView>
          <View
            style={{
              flex: 1,
              justifyContent: 'space-around',
              alignItems: 'center',
              margin: 15,
              marginTop: 50,
            }}>
            {data.articles.map((article, index) => (
              <Card
                key={index}
                onPress={() => {
                  Linking.openURL(article.url);
                }}
                style={{ marginBottom: 20, padding: 10 }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    marginVertical: 10,
                    width: '90%',
                  }}>
                  <Text style={{ fontSize: 18, fontWeight: 'bold', flex: 1 }}>
                    {article.title}
                  </Text>
                  <TouchableOpacity>
                    <Image
                      //   source={require('../assets/blog.png')}
                      source={{ uri: article.urlToImage }}
                      style={{
                        width: 120,
                        height: 120,
                        borderRadius: 10,
                        left: 20,
                      }}
                    />
                  </TouchableOpacity>
                </View>
                <Text style={{ fontSize: 16 }}>{article.description}</Text>
                <Text>{article.publishedAt}</Text>
              </Card>
            ))}
          </View>
        </ScrollView>
      )}
    </>
  );
};

export default FitnessBlog;

const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    flex: 1,
  },
  card: {
    marginVertical: 15,
    width: '100%',
    borderRadius: 35,
    backgroundColor: 'black',
  },
  image: {
    marginLeft: 0,
    padding: 0,
    width: '100%',
    height: '100%',
    borderRadius: 30,
    position: 'relative',
    opacity: 0.65,
  },
  title: {
    position: 'absolute',
    marginTop: 65,
    marginBottom: 0,
    marginHorizontal: 20,
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
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
    left: 31,
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
});
