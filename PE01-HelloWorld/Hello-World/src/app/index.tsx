import {Text, View} from 'react-native';

const HelloWorld = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffff00'
      }}>
      <Text> Robby Porovich</Text>
      <Text>MSCS</Text>
      <Text>City University of Seattle</Text>
    </View>
  );
};

export default HelloWorld;