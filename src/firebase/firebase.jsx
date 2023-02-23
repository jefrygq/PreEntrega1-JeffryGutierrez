// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, addDoc, getDoc, getDocs, updateDoc } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbh-leEn_ASJRkYMLC2VO8eK1-qHJFjOw",
  authDomain: "coderhouse-react-project-9c212.firebaseapp.com",
  projectId: "coderhouse-react-project-9c212",
  storageBucket: "coderhouse-react-project-9c212.appspot.com",
  messagingSenderId: "689984489304",
  appId: "1:689984489304:web:ed950a9e4b267e1adfc72d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// function to use on app loading to load the products in the firebase db
// needs to be executed only once so run first and then comment
export const loadDB = async () => {
    const promise = await fetch('/json/products.json');
    const productos = await promise.json();
    productos.forEach( async (prod) => {
        await addDoc(collection(db, "products"), {
            nombre: prod.nombre,
            marca: prod.marca,
            modelo: prod.modelo,
            idCategoria: prod.idCategoria,
            stock: prod.stock,
            precio: prod.precio,
            img: prod.img
        });
    });
}

export const getProducts = async () => {
    const responseProds = await getDocs(collection(db, "products"));
    const products = responseProds.docs.map((prod) => {
        return {...prod.data(), id: prod.id}
    });

    return products;
}

export const getProduct = async (id) => {
    const responseProd = await getDoc(doc(db, "products", id));

    return {...responseProd.data(), id: responseProd.id};
}

export const updateProduct = async (id, data) => {
    return await updateDoc(doc(db, "products", id), data);
}