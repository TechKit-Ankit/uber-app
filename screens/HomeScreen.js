import React from 'react';
import { Text, View, SafeAreaView, Image } from 'react-native';
import tw from 'twrnc';
import NavOptions from '../Components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_API_KEY } from '@env';
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice';

const HomeScreen = () => {
    const dispatch = useDispatch();
    // console.log(GOOGLE_MAPS_API_KEY);
    return (
        // Added the SafeAreaView for android to the HomeScreen component
        <SafeAreaView style={tw`android:pt-10 h-full bg-white dark:bg-black`}>
            <View style={tw`p-5 `}>
                <Image source={{
                    uri: 'https://links.papareact.com/gzs',
                }} style={{
                    width: 100, height: 100, resizeMode: 'contain'
                }} />
                <GooglePlacesAutocomplete
                    debounce={400}
                    placeholder='Where From?'
                    styles={{
                        container: {
                            flex: 0,
                        },
                        textInput: {
                            fontSize: 18,
                        },
                    }}
                    query={{
                        key: GOOGLE_MAPS_API_KEY,
                        language: 'en',
                    }}
                    fetchDetails={true}
                    returnKeyType={'search'}
                    enablePoweredByContainer={false}
                    nearbyPlacesAPI='GooglePlacesSearch'
                    onPress={(data, details = null) => {
                        // console.log(data, details);
                        dispatch(setOrigin({
                            location: details?.geometry?.location,
                            description: data.description,
                        }));
                        dispatch(setDestination(null));
                        // why is this dispatching null?
                    }
                    }
                />
                <NavOptions />
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;
