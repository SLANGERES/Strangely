import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  TouchableOpacity, 
  StatusBar, 
  Platform 
} from 'react-native';
import Logo from './Assests/Logo.png';

const StartScreen = () => {
  const handlePress = () => {
    // Handle button press
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      <View style={styles.imageContainer}>
        <Image
          source={Logo}
          style={styles.image}
          resizeMode="contain"
        />
        <View style={styles.glowEffect} />
      </View>
      
      <View style={styles.btnContainer}>
        <TouchableOpacity onPress={handlePress} style={styles.googleBtnContainer}>
          <View style={styles.googleBtn}>
            <Text style={styles.googleIcon}>G</Text>
            <Text style={styles.googleBtnText}>Sign in with Google</Text>
          </View>
        </TouchableOpacity>
        
        <View style={styles.dividerContainer}>
          <View style={styles.divider} />
          <Text style={styles.dividerText}>or</Text>
          <View style={styles.divider} />
        </View>
        
        <View style={styles.signBtnContainer}>
          <TouchableOpacity onPress={handlePress}>
            <View style={styles.btns}>
              <Text style={styles.btnText}>Login</Text>
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={handlePress}>
            <View style={styles.signUpBtn}>
              <Text style={styles.signUpText}>Sign Up</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      
      <Text style={styles.footerText}>By continuing, you agree to our Terms of Service & Privacy Policy</Text>
    </View>
  );
};

export default StartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  imageContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    position: 'relative',
  },
  image: {
    width: 350,
    height: 200,
  },
  glowEffect: {
   height:100,
  },
  btnContainer: {
    flex: 0.5,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 60,
  },
  googleBtnContainer: {
    width: '100%',
    marginBottom: 20,
  },
  googleBtn: {
    height: 56,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 28,
    flexDirection: 'row',
    backgroundColor: '#FF6FFF',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  googleIcon: {
    marginRight: 8,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  googleBtnText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginVertical: 20,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
  dividerText: {
    color: 'rgba(255, 255, 255, 0.6)',
    paddingHorizontal: 10,
    fontSize: 14,
  },
  signBtnContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  btns: {
    backgroundColor: '#FF6FFF',
    height: 56,
    width: 155,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 28,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  signUpBtn: {
    height: 56,
    width: 155,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 28,
    borderWidth: 2,
    borderColor: '#FF6FFF',
  },
  btnText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
  },
  signUpText: {
    color: '#FF6FFF',
    fontSize: 16,
    fontWeight: '600',
  },
  footerText: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: 12,
    position: 'absolute',
    bottom: 30,
    textAlign: 'center',
  },
});