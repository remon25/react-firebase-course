import React, { Component, useEffect, useState } from "react";
import "./App.css";
import Auth from "./components/auth";
import { db, auth, storage } from "./config/firebase";
import {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import { ref,uploadBytes } from "firebase/storage";

function App() {
  const [movieList, setMovieList] = useState([]);

  const [movieName, setMovieName] = useState("");
  const [movieDate, setMovieDate] = useState(0);
  const [getOscar, setGetOscar] = useState(false);

  const [updatedState, setUpdatedState] = useState("");

  const [fileUpload, setFileUpload] = useState(null);

  const moviesCollectionRef = collection(db, "movies");

  const onSubmit = async () => {
    try {
      await addDoc(moviesCollectionRef, {
        title: movieName,
        date: movieDate,
        oscar: getOscar,
        userId: auth?.currentUser.uid,
      });
    } catch (err) {
      console.log(err);
    }
  };
  const deleteMovie = async (id) => {
    const movieDoc = doc(db, "movies", id);

    await deleteDoc(movieDoc);
  };
  const updateMovieTitle = async (id) => {
    const movieDoc = doc(db, "movies", id);

    await updateDoc(movieDoc, { title: updatedState });
  };

  useEffect(() => {
    const getMovieList = async () => {
      //read the data

      //set the movie
      try {
        const data = await getDocs(moviesCollectionRef);
        const filterdata = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        setMovieList(filterdata);
      } catch (err) {
        console.log(err);
      }
    };

    getMovieList();
  }, [onSubmit]);

  const uploadFile  = async () =>{
    if(!fileUpload) return;

    const filesFolderRef = ref(storage,`projectFiles/${fileUpload.name}`);

    try{
      await uploadBytes(filesFolderRef,fileUpload);

    }
    catch(err){
      console.log(err)
    }



  }

  return (
    <div className="App">
      <Auth />

      <div>
        <input
          placeholder="movie name"
          onChange={(e) => setMovieName(e.target.value)}
        />
        <input
          placeholder="movie date"
          type="number"
          onChange={(e) => setMovieDate(e.target.value)}
        />
        <input
          type="checkbox"
          checked={getOscar}
          onChange={(e) => setGetOscar(e.target.checked)}
        />
        <label>recieve oscar</label>
        <button type="submit" onClick={onSubmit}>
          submit
        </button>
      </div>

      <div>
        {movieList.map((movie) => (
          <div>
            <h1 style={{ color: movie.oscar ? "green" : "red" }}>
              {movie.title}
            </h1>
            <p>{movie.date}</p>
            <button onClick={() => deleteMovie(movie.id)}>delete</button>
            <input
              placeholder="newtitle...."
              onChange={(e) => setUpdatedState(e.target.value)}
            />
            <button onClick={() => updateMovieTitle(movie.id)}>update</button>
          </div>
        ))}
      </div>

      <div>
        <input type="file" onChange={(e)=>setFileUpload(e.target.files[0])} />
        <button onClick={uploadFile}>Upload File</button>
      </div>
    </div>
  );
}

export default App;
