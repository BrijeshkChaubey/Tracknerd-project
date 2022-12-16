import { initializeApp } from 'firebase/app';
const firebaseConfig = {
    apiKey: 'AIzaSyDahAZLP3Fe68j9C-7ZT9i0nAqiQWXhs_4',
    authDomain: 'tracknerd-staging.firebaseapp.com',
    databaseURL: 'https://tracknerd-staging-default-rtdb.firebaseio.com',
    projectId: 'tracknerd-staging',
    storageBucket: 'tracknerd-staging.appspot.com',
    messagingSenderId: '847967007196',
    appId: '1:847967007196:web:ae4df284f5560af4139f19',
};
const FirebaseConfig = initializeApp(firebaseConfig);
export default FirebaseConfig;