import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { useState, useEffect } from 'react'
import * as Yup from 'yup'
import { Formik, useFormikContext, Field } from 'formik'
import { Button, Divider } from 'react-native-elements';
import validUrl from 'valid-url'
import * as ImagePicker from 'expo-image-picker';

const PLACEHOLDER_IMG = 'https://wtwp.com/wp-content/uploads/2015/06/placeholder-image.png';

const uploaderPostSchema = Yup.object().shape({

    caption: Yup.string().max(10, 'Caption is too long!')
})

const FormikPostUploader = ({ navigation }) => {
    const [thumbnailUrl, setThumbnailUrl] = useState(null)
    let [selectedImage, setSelectedImage] = useState(null);

    let openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false) {
            alert('Permission to access camera roll is required!');
            return;
        }

        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        if (pickerResult.cancelled === true) {
            return;
        }
        setThumbnailUrl(pickerResult.uri);
    };


    return (
        <Formik
            initialValues={{ caption: '' }}
            onSubmit={(values) => {
                console.log(values)
                navigation.navigate('HomeScreen')
            }}
            validationSchema={uploaderPostSchema}
            validateOnMount={true}
        >
            {({
                handleBlur,
                handleChange,
                handleSubmit,
                values,
                errors,
                isValid
            }) => (
                <>

                    <View
                        style={{
                            margin: 20,
                            justifyContent: 'space-between',
                            flexDirection: 'row'
                        }}
                    >
                        <TouchableOpacity onPress={openImagePickerAsync}>

                            <Image style={{ width: 50, height: 50, position: 'absolute', zIndex: 12, left: 25, top: 25 }} source={require('../../assets/plus_logo.png')} />
                            <Image style={{ width: 100, height: 100 }}
                                source={{ uri: validUrl.isUri(thumbnailUrl) ? thumbnailUrl : PLACEHOLDER_IMG }}
                            />

                        </TouchableOpacity>
                        <View style={{ flex: 1, marginLeft: 12 }}>

                            <TextInput
                                style={{ color: 'white', fontSize: 20 }}
                                placeholder='Write a caption ...'
                                placeholderTextColor='gray'
                                multiline={true}
                                onChangeText={handleChange('caption')}
                                onBlur={handleBlur('caption')}
                                value={values.caption}
                            />
                            {
                                errors.caption && <Text style={{ color: 'red' }}>{errors.caption}</Text>
                            }
                        </View>
                    </View>
                    <Divider width={0.2} orientation='vertical' />

                    <Button onPress={handleSubmit} title='Share' disabled={!isValid || thumbnailUrl == null} />
                </>
            )}
        </Formik>
    )
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: 'blue',
        padding: 20,
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 20,
        color: '#fff',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    thumbnail: {
        width: 300,
        height: 300,
        resizeMode: 'contain',
    }
})

export default FormikPostUploader