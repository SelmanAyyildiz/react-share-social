import firebase from "firebase/app";
import "firebase/auth";

const devConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

const prodConfig = {};

const config = process.env.NODE_ENV === "development" ? devConfig : prodConfig;

class Firebase {
    constructor() {
        firebase.initializeApp(config);
        this.firebaseAuth = firebase.auth();
    }
    async register( displayName, email, password) {
         

        try {
            await this.firebaseAuth.createUserWithEmailAndPassword(email, password);
            this.firebaseAuth.currentUser.updateProfile({
            displayName,
        });
            
        }catch (error) {
                console.log("Register Eror", error);
            }

       
    }
    signInWithGoogle() {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        console.log("🚀 ~ file: firebase.utils.js ~ line 29 ~ Firebase ~ signInWithGoogle ~ googleProvider", googleProvider)
        googleProvider.setCustomParameters({
            prompt: "select_account"
        });
        this.firebaseAuth.signInWithPopup(googleProvider);
    }

    signIn(email, password) {
    this.firebaseAuth.signInWithEmailAndPassword(email, password);
    }


    signOut() {
        this.firebaseAuth.signOut();
    }
    
 

}
export default new Firebase();

// firebase.initializeApp(consfig)