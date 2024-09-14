import {
  signInWithEmailAndPassword,
  auth,
  signInWithPopup,
  GoogleAuthProvider,
  provider,
} from "../FirebaseConfigFiles/firebaseconfig.js";

const siginBtn = document.querySelector("#siginBtn");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const siginGoogleBtn = document.querySelector("#siginGoogleBtn");

siginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      window.location = "../Profile/profile.html";
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });

  // * Sigin with Google*
});
siginGoogleBtn.addEventListener("click", (e) => {
  e.preventDefault();
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // addUserToFirebase(user);
      console.log("user ==================>", user);
      window.location = "./profile.html";

      // IdP data available using getAdditionalUserInfo(result)
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage, "error ============>");

      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
});
