import { StyleSheet, Text, View, TextInput, Pressable, TouchableOpacity } from 'react-native'
import { Formik } from 'formik';
import * as Yup from 'yup';
import Validator from 'email-validator';

const SignUpForm = () => {
    const LoginFormSchema = Yup.object().shape({
        userName: Yup.string().required('User name is required').min(4, 'User name must be at least 4 characters'),
        email: Yup.string().email().required('Email is required'),
        password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters')
    })
    return (
        <View style={styles.wrapper}>
            <Formik
                initialValues={{ email: '', userName: '', password: '' }}
                onSubmit={(values) => console.log(values)}
                validationSchema={LoginFormSchema}
                validateOnMount={true}
            >
                {({ handleChange, handleBlur, values, errors, isValid, handleSubmit, touched }) => (
                    <>
                        <View style={[styles.inputField,
                        {
                            borderColor:
                                1 > values.userName.length || values.userName.length >= 4
                                    ? '#ccc'
                                    : 'red'
                        }
                        ]}>
                            <TextInput
                                placeholderTextColor='#444'
                                placeholder='Username'
                                autoCapitalize='none'
                                textContentType='username'
                                autoFocus={true}
                                onChangeText={handleChange('userName')}
                                onBlur={handleBlur('userName')}
                                value={values.userName}
                            />

                        </View>
                        {touched.userName && errors.userName ? <Text style={{ color: "red", marginLeft: 5, marginBottom: 5 }}>{errors.userName}</Text> : null}
                        <View style={[styles.inputField,
                        {
                            borderColor:
                                values.email.length < 1 || Validator.validate(values.email)
                                    ? '#ccc'
                                    : 'red'
                        }
                        ]}>
                            <TextInput
                                placeholderTextColor='#444'
                                placeholder='Phone number, username or email'
                                autoCapitalize='none'
                                keyboardType='email-address'
                                textContentType='emailAddress'
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                            />

                        </View>
                        {touched.email && errors.email ? <Text style={{ color: "red", marginLeft: 5, marginBottom: 5 }}>{errors.email}</Text> : null}
                        <View style={[styles.inputField,
                        {
                            borderColor:
                                1 > values.password.length || values.password.length >= 6
                                    ? '#ccc'
                                    : 'red'
                        }
                        ]}>
                            <TextInput
                                placeholderTextColor='#444'
                                placeholder='Password'
                                autoCapitalize='none'
                                secureTextEntry={true}
                                textContentType='password'
                                autoCorrect={false}
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                            />

                        </View>
                        {touched.password && errors.password ? <Text style={{ color: "red", marginLeft: 5, marginBottom: 5 }}>{errors.password}</Text> : null}
                        <View style={{ alignItems: 'flex-end', marginBottom: 30 }}>
                            <Text style={{ color: "#6BB0F5" }}>Forgot password?</Text>
                        </View>
                        <Pressable
                            titleSize={20}
                            style={styles.button(isValid)}
                            onPress={handleSubmit}
                            disabled={!isValid}
                        >
                            <Text style={styles.buttonText}>Log In</Text>
                        </Pressable>

                        <View style={styles.signupContainer}>
                            <Text style={styles.signupText}>Don't have an account?</Text>
                            <TouchableOpacity>
                                <Text style={{ color: '#6BB0F5' }}>Sign up</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                )}
            </Formik>
        </View>
    )
}

export { SignUpForm }

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 80,
    },
    inputField: {
        borderRadius: 4,
        padding: 12,
        backgroundColor: '#FAFAFA',
        marginBottom: 10,
        borderWidth: 1,

    },
    button: (isValid) => ({
        backgroundColor: isValid ? '#0096F6' : '#9ACAF7',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 42,
        borderRadius: 4,
    }),
    buttonText: {
        color: 'white',
        fontWeight: '600',
        fontSize: 20,
    },
    signupContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        marginTop: 50,
    }
})