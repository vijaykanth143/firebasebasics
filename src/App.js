import "./App.css";
import { app, database } from "./firebaseConfig";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { useState } from "react";
function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const collectinref = collection(database, "users");
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  const onsubmitHandler = () => {
    addDoc(collectinref, {
      email: email,
      password: password,
    })
      .then(() => {
        alert("Data Added");
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  const getdata = () => {
    getDocs(collectinref).then((response) => {
      console.log(
        response.docs.map((item) => {
          return { ...item.data(), id: item.id };
        })
      );
    });
  };
  const updateDoct = () => {
    const doctoupdate = doc(database, "users", "q8VG432epf3nh9aUXmEp");
    updateDoc(doctoupdate, {
      email: "Abcd",
      password: "123456",
    })
      .then(() => {
        alert("successfully updated");
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  const DeleteDoct = () => {
    const doctoupdate = doc(database, "users", "q8VG432epf3nh9aUXmEp");
    deleteDoc(doctoupdate)
      .then(() => {
        alert("successfully deleted");
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <div className="App">
      <div>
        <input
          type="email"
          placeholder="enter your Email"
          value={email}
          onChange={emailHandler}
        />
        <input
          type="password"
          placeholder="enter your Password"
          value={password}
          onChange={passwordHandler}
        />
      </div>
      <input type="submit" onClick={DeleteDoct} />
    </div>
  );
}

export default App;
