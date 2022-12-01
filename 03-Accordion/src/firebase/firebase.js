
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyBo7qjTcN4Ebo0BvHs3d7gvd6RosrrIocc',
	authDomain: 'reactjs-2568e.firebaseapp.com',
	databaseURL: 'https://reactjs-2568e-default-rtdb.firebaseio.com',
	projectId: 'reactjs-2568e',
	storageBucket: 'reactjs-2568e.appspot.com',
	messagingSenderId: '514138627179',
	appId: '1:514138627179:web:6bdb71026efe7cb53c652e',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);