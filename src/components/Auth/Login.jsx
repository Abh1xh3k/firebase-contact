import React from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, browserSessionPersistence, setPersistence } from "firebase/auth";
import { app, auth, provider } from "../../config/firebase";

function Login({ user, setuser }) {
  async function handleSubmit() {

    setPersistence(auth, browserSessionPersistence)
  .then(() => {
  
    return signInWithPopup(auth, provider)
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
  });


    // signInWithPopup(auth, provider)
    //   .then((result) => {
    //     // This gives you a Google Access Token. You can use it to access the Google API.
    //     const credential = GoogleAuthProvider.credentialFromResult(result);
    //     const token = credential.accessToken;
    //     // The signed-in user info.
    //     const user = result.user;
    //     // IdP data available using getAdditionalUserInfo(result)
    //     console.log(user);
    //     setuser(user);
    //     // ...
    //   })
    //   .catch((error) => {
    //     // Handle Errors here.
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     // The email of the user's account used.
    //     const email = error.customData.email;
    //     // The AuthCredential type that was used.
    //     console.log(errorMessage);

    //     const credential = GoogleAuthProvider.credentialFromError(error);
    //     // ...
    //   });
  }

  return (
    <div>
      <button
        onClick={() => {
          handleSubmit();
        }}
        className="bg-black p-2 text-white font-semibold"
      >
        Login With Google
      </button>
    </div>
  );
}

export default Login;
