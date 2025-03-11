import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, SafeAreaView, KeyboardAvoidingView, Platform, ScrollView, StatusBar } from 'react-native';
import React, { useState } from 'react';
import { object, string, date, ref } from 'yup';
import { Formik } from 'formik';
import Logo from './Assests/Logo.png';

const userSchema = object({
  name: string().required('Name is required'),
  email: string().email('Invalid email').required('Email is required'),
  password: string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  rePassword: string()
    .oneOf([ref('password')], 'Passwords must match')
    .required('Confirm Password is required'),
  createdOn: date().default(() => new Date()),
});

const SignUp = () => {
  const [data, setData] = useState({});

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoidView}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.content}>
            <View style={styles.topSpace} />
            
            <View style={styles.logoContainer}>
              <Text style={styles.headingText}>SIGN</Text>
              <Text style={styles.headingText}>UP</Text>
            </View>
            
            <Formik
              initialValues={{ name: '', email: '', password: '', rePassword: '' }}
              validationSchema={userSchema}
              onSubmit={(values) => {
                setData(values);
                console.log(values);
              }}
            >
              {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isValid }) => (
                <View style={styles.formContainer}>
                  <View style={styles.inputGroup}>
                    <Text style={styles.label}>Username</Text>
                    <TextInput
                      value={values.name}
                      onChangeText={handleChange('name')}
                      onBlur={handleBlur('name')}
                      placeholder="Enter your username"
                      placeholderTextColor="#777"
                      keyboardType="default"
                      style={styles.input}
                    />
                    {touched.name && errors.name && <Text style={styles.errorText}>{errors.name}</Text>}
                  </View>

                  <View style={styles.inputGroup}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput
                      value={values.email}
                      onChangeText={handleChange('email')}
                      onBlur={handleBlur('email')}
                      placeholder="Enter your email"
                      placeholderTextColor="#777"
                      keyboardType="email-address"
                      style={styles.input}
                      autoCapitalize="none"
                    />
                    {touched.email && errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
                  </View>

                  <View style={styles.inputGroup}>
                    <Text style={styles.label}>Password</Text>
                    <TextInput
                      value={values.password}
                      onChangeText={handleChange('password')}
                      onBlur={handleBlur('password')}
                      placeholder="Create a password"
                      placeholderTextColor="#777"
                      secureTextEntry
                      style={styles.input}
                    />
                    {touched.password && errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
                  </View>

                  <View style={styles.inputGroup}>
                    <Text style={styles.label}>Confirm Password</Text>
                    <TextInput
                      value={values.rePassword}
                      onChangeText={handleChange('rePassword')}
                      onBlur={handleBlur('rePassword')}
                      placeholder="Confirm your password"
                      placeholderTextColor="#777"
                      secureTextEntry
                      style={styles.input}
                    />
                    {touched.rePassword && errors.rePassword && <Text style={styles.errorText}>{errors.rePassword}</Text>}
                  </View>

                  <TouchableOpacity 
                    onPress={handleSubmit} 
                    style={[styles.button, !isValid && styles.buttonDisabled]}
                    disabled={!isValid}
                  >
                    <Text style={styles.buttonText}>Sign Up</Text>
                  </TouchableOpacity>
                  
                  <View style={styles.loginContainer}>
                    <Text style={styles.loginText}>Already have an account? </Text>
                    <TouchableOpacity>
                      <Text style={styles.loginLink}>Log In</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            </Formik>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  keyboardAvoidView: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  topSpace: {
    height: 0, // Additional space at the top
  },
  logoContainer: {
    marginBottom: 20,
  },
  logo: {
    height: 190, // Increased from 120
    width: 300, // Increased from 220
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 24,
    textAlign: 'center',
  },
  formContainer: {
    gap: 16,
  },
  inputGroup: {
    marginBottom: 3,
  },
  label: {
    color: '#e0e0e0',
    fontSize: 16,
    marginBottom: 8,
    fontWeight: '500',
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    borderWidth: 1,
    borderColor: '#333',
    padding:16,
    borderRadius: 20,
    color: 'white',
    fontSize: 12,
    height: 45,
  },
  errorText: {
    color: '#ff6b6b',
    fontSize: 14,
    marginTop: 6,
  },
  button: {
    backgroundColor: '#6c5ce7',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 24,
    height: 55,
  },
  buttonDisabled: {
    backgroundColor: '#45387a',
    opacity: 0.7,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  loginText: {
    color: '#e0e0e0',
    fontSize: 16,
  },
  loginLink: {
    color: '#6c5ce7',
    fontSize: 16,
    fontWeight: 'bold',
  },
  headingText:{
    color:"white",
    fontWeight:"300",
    fontSize:65
  }
});