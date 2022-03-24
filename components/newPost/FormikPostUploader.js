import { View, Text, TextInput, Image } from 'react-native'
import { useState } from 'react'
import * as Yup from 'yup'
import { Formik, Field } from 'formik'
import { Button, Divider } from 'react-native-elements';

const PLACEHOLDER_IMG = 'https://wtwp.com/wp-content/uploads/2015/06/placeholder-image.png';

const uploaderPostSchema = Yup.object().shape({
    imageUrl: Yup.string().url().required("A URL is required"),
    caption: Yup.string().max(220, 'Caption has reached the character')
})

const FormikPostUploader = () => {
    const [thumbnailUrl, setThumbnailUrl] = useState(PLACEHOLDER_IMG)
    return (
        <Formik
            initialValues={{ caption: '', imageUrl: '' }}
            onSubmit={(values) => console.log(values)}
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
                        <Image style={{ width: 100, height: 100 }}
                            source={{ uri: thumbnailUrl ? thumbnailUrl : PLACEHOLDER_IMG }}
                        />
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
                        </View>
                    </View>
                    <Divider width={0.2} orientation='vertical' />
                    <TextInput
                        onChange={e => setThumbnailUrl(e.nativeEvent.text)}
                        style={{ color: 'white', fontSize: 18 }}
                        placeholder='Enter Image Url'
                        placeholderTextColor='gray'
                        onChangeText={handleChange('imageUrl')}
                        onBlur={handleBlur('imageUrl')}
                        value={values.imageUrl}
                    />
                    {errors.imageUrl && (
                        <Text style={{ fontSize: 10, color: 'red' }}>
                            {errors.imageUrl}
                        </Text>
                    )}
                    <Button onPress={handleSubmit} title='Share' disabled={!isValid} />
                </>
            )}
        </Formik>
    )
}

export default FormikPostUploader