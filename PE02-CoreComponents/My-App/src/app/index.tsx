
import { View, Text, ScrollView, Image, TextInput, StyleSheet} from 'react-native';

export default function App() {
  return (
    <ScrollView contentContainerStyle = {styles.container}>
      <View>
        <Image
          source={require('../../assets/images/icon.png')}
          style={[styles.Image, { alignSelf: 'center' }]}
        />
      </View>
      <View>
          <Text style = {styles.Text}> What is your favorite class?</Text>
        <TextInput
          style ={{
            height: 40,
            borderWidth: 1,
            alignItems: 'center'
          }}
          defaultValue= 'Type Here'
        >
      
        </TextInput>
      </View>
      <View>
        <HeadingBox heading="Core Requirements (24 Credits)"/>
        <ListBox course= "CS504 - Software Eningeering"/>
        <ListBox course="CS506 - Programming for Computing"/>
        <ListBox course="CS519 - Cloud Computing Overview"/>
        <ListBox course="CS547 - Secure Systems and Programs"/>
        <ListBox course="CS622 - Discrete Math and Algorithms for Computing"/>
        <ListBox course="AI520 - Natural Language Processing for Artificial Intelligence"/>
        <ListBox course="AI510 - Artificial Intelligence in Cloud Computing"/>
        <ListBox course="DS620 - Machine Learning & Deep Learning"/>
      </View>
      <View>
        <HeadingBox heading="Depth of Study (6 Credits)"/>
        <ListBox course= "CS624 - Full-Stack Development - Mobile App"/>
        <ListBox course="CS628 - Full-Stack Development - Web App"/>
      </View>
    </ScrollView>
  );
}

type headingProp = { 
  heading: string; 
};

type listProp = { 
  course: string; 
};

const HeadingBox = (props: headingProp ) => {
  return(
    <View>
      <Text style = {styles.Title}>
        {props.heading}</Text>
    </View>
  );
}

const ListBox = (props: listProp ) => {
  return(
    <View>
      <Text style = {{backgroundColor: 'white'}}>
        {props.course}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flexGrow: 1,
    backgroundColor: '#ADD8E6',
    justifyContent: 'space-evenly',
    alignItems: 'stretch',
  },
  Image:{
    width: 200,
    height:200

  },
  Text:{
    backgroundColor: '#ADD8E6',
    justifyContent: 'center',
    alignItems: 'center'
  },
  Title:{
    backgroundColor: 'gray',
    fontSize: 32,
    flex: 1,
    justifyContent: 'space-evenly'

  }
})