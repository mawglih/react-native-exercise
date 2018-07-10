import React from 'react';
import { Modal, View, Image, Text, Button, StyleSheet } from 'react-native';

const PlaceDetail = props => (
  <Modal 
    visible={props.selectedPlace != null} 
    animationType="slide"
    onRequestClose={props.onModalClosed}
  >
    <View>
      <Image source={props.selectedPlace ? props.selectedPlace.image : null} style={styles.placeImage}/>
      <Text>{props.selectedPlace ? props.selectedPlace.name : null }</Text>
      <View>
        <Button title="Delete" color="red" onPress={props.onItemDeleted}/>
        <Button title="Close" onPress={props.onModalClosed}/>
      </View>
    </View>
  </Modal>
);
const styles = StyleSheet.create({
  placeImage: {
    width: "100%",
    height: 200,
  }
})
export default PlaceDetail;