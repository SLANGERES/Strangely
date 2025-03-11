import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Formik } from 'formik'
import { object, string } from 'yup'

const userLogin = object({
    email: string().email("Invalid email format").required("Email is required"),
    password: string().min(6, "Password must be at least 6 characters").required("Password is required"),
})

const Login = () => {
    const [data, setData] = useState({})

    return (
        <View style={styles.container}>
            <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={userLogin}
                onSubmit={(values) => {
                    setData(values)
                    console.log("Form Data:", values)  // Correct logging
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                }) => (
                    <View>
                        <View style={styles.inputContainer}>
                            <TextInput
                                placeholder="Enter Email"
                                value={values.email}
                                onChangeText={handleChange('email')}
                                keyboardType="email-address"
                                onBlur={handleBlur('email')}
                                style={styles.input}
                            />
                            {touched.email && errors.email && <Text style={styles.error}>{errors.email}</Text>}
                        </View>

                        <View style={styles.inputContainer}>
                            <TextInput
                                placeholder="Enter Password"
                                value={values.password}
                                onBlur={handleBlur('password')}
                                onChangeText={handleChange('password')}
                                keyboardType="default"
                                secureTextEntry
                                style={styles.input}
                            />
                            {touched.password && errors.password && <Text style={styles.error}>{errors.password}</Text>}
                        </View>

                        <TouchableOpacity onPress={handleSubmit} disabled={isSubmitting} style={styles.button}>
                            <Text style={styles.buttonText}>Log In</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </Formik>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 20,
    },
    inputContainer: {
        marginBottom: 12,
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 10,
        borderRadius: 8,
    },
    error: {
        color: "red",
        fontSize: 12,
    },
    button: {
        backgroundColor: "#007bff",
        padding: 12,
        borderRadius: 8,
        alignItems: "center",
    },
    buttonText: {
        color: "white",
        fontSize: 16,
    },
})
