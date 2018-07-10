import React from 'react';
import { StyleSheet, View } from 'react-native';

import InputComponent from './src/components/InputComponent';
import PlaceList from './src/components/PlaceList';
import PlaceDetail from './src/components/PlaceDetail';
// import placeImage from './src/assets/1.jpg';

export default class App extends React.Component {
  state = {
    places: [],
    selectedPlace: null,
  };

  placeAddedHandler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          key: Math.random(), 
          name: placeName,
          image: {
            uri: "https://lh3.googleusercontent.com/pVeZMB4f__289BG2L7cU98UI1uoGxxZVekqkD7SwJSKZC1hQu1fVOEzRIJ6jajBB-grY=s128"
          }
        })
      };
    });
  };

  placeDeletedHandler = () => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place => {
          return place.key !== prevState.selectedPlace.key;
        }),
        selectedPlace: null
      };
    });
  }
  modalClosedHandler = () => {
    this.setState({
      selectedPlace: null
    })
  };
  placeSelectedHandler = key => {
    this.setState(prevState => {
      return {
        selectedPlace: prevState.places.find(place => {
          return place.key === key;
        })
      };
    });
  };

  render() {
    
    return (
      <View style={styles.container}>
        <PlaceDetail
         selectedPlace={this.state.selectedPlace}
         onItemDeleted={this.placeDeletedHandler}
         onModalClosed={this.modalClosedHandler}
      />
        <InputComponent onPlaceAdded={this.placeAddedHandler}  />
        <PlaceList places={this.state.places} onItemSelected={this.placeSelectedHandler}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
