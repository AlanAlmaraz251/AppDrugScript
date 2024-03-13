import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function App() {
  return (
    <View style={styles.container}>
          <Image
          source={require('./assets/user_image.png')} // Ruta de tu imagen
          style={styles.userIcon}
          />
          <Image
            source={require('./assets/bus.png')} // Ruta de tu imagen
            style={styles.image}
          />
        <View style={styles.inputContainer}>
            <TextInput
              placeholder="Digita el CUA "
              style={styles.input}
            />
            <Icon name="check" size={15} color="black" style={styles.icon} />
        </View>
  </View>
);
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#fa5961',
  alignItems: 'center',
  justifyContent: 'center',
},
inputContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: 10,
},
input: {
  width: '55%',
  height: 34,
  backgroundColor: '#ffffff', 
  borderRadius: 29, 
  paddingHorizontal: 15,
  borderWidth: 0.5,
  borderColor: 'rgb(0, 0, 0)', 
  shadowColor: '#fff', 
  shadowOpacity: 0.8,
  shadowRadius: 4,
  shadowOffset: {
    width: 0,
    height: 2,
  },
  elevation: 5, // FFFFFUCKYOUUU
},
image: {
  width: 170, 
  height: 170, 
  resizeMode: 'contain', 
  marginBottom: 5,
},
icon: {
  position: 'absolute',
  right: 25,
  top: 10,
},
userIcon: {
  width: 50, 
  height: 50, 
  resizeMode: 'contain', 
  marginBottom: 10,
  shadowColor: '#ffffff',
  shadowOpacity: 0.8,
  shadowRadius: 4,
  position: 'absolute',
  right: 20,
  top: 60,
  shadowOffset: {
    width: 0,
    height: 2,
  },
},
});
