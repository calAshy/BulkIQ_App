import { auth  } from "./firebaseInit";
import { signInWithEmailAndPassword } from "@react-native-firebase/auth";

signInWithEmailAndPassword(auth, email, password)
.then(userCredential => {
    alert('User Logged in: ', userCredential.user);
})

.catch(error => {
    alert('Login Error', error);
})