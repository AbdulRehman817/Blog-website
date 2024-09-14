import {
  createUserWithEmailAndPassword,
  auth,
  ref,
  db,
  storage,
  uploadBytes,
  uploadBytesResumable,
  getDownloadURL,
  updateProfile,
  collection,
  addDoc,
} from "../FirebaseConfigFiles/firebaseconfig.js";
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const image = document.querySelector("#file");
const signupBtn = document.querySelector("#signupBtn");
let userUid;
let getImage;
signupBtn.addEventListener("click", () => {
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      userUid = user.uid;
      console.log(user);
      console.log(user.uid);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      // ..
    });

  let uploadImage = () => {
    const profilePic = image.files[0];
    // console.log(profilePic);
    const imageRef = ref(storage, `usersImage/${profilePic.name}`);
    const uploadTask = uploadBytesResumable(imageRef, profilePic);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        const imageUrl = getDownloadURL(uploadTask.snapshot.ref).then(
          (downloadURL) => {
            getImage = downloadURL;
            console.log(downloadURL);
          }
        );
      }
    );
  };
  uploadImage();

  updateProfile(auth.currentUser, {
    displayName: `${firstName}${lastName}`,
    photoURL: getImage,
  })
    .then(() => {
      // Profile updated!
      // ...
    })
    .catch((error) => {
      // An error occurred
      // ...
    });

  let userData = {
    email,
    password,
    firstName,
    lastName,
    getImage,
    userUid,
  };

  let addData = async () => {
    const docRef = await addDoc(collection(db, "userData"), {
      email: email.value,
      password: password.value,
      image: getImage,
      firstName: firstName.value,
      lastName: lastName.value,
      id: userUid,
    });
    console.log("Document written with ID: ", docRef.id);
    console.log(docRef);
    window.location.replace("../Profile/profile.html");
  };
  addData();
});
