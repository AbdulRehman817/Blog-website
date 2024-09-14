import {
  auth,
  signOut,
  onAuthStateChanged,
  addDoc,
  collection,
  db,
  onSnapshot,
  serverTimestamp,
  query,
  orderBy,
  limit,
  doc,
  getDocs,
} from "../FirebaseConfigFiles/firebaseconfig.js";
const userEmail = document.querySelector("#email");

const userName = document.querySelector("#name");

const userImage = document.querySelector("#userImage");

let userUid;
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log(user);
    userUid = user.uid;
  }
  getData();
  if (!window.location.pathname === "../Profile/profile.html") {
    window.location = "../Profile/profile.html";
  } else {
    if (!window.location.pathname === "../Signin/sigin.html") {
      window.location = "../Signin/signin.html";
    }
  }
});
const users = [];
let getData = async () => {
  const res = await getDocs(collection(db, "userData"));
  res.forEach((doc) => {
    let { firstName, lastName } = doc.data();
    console.log(doc.data());
    if (userUid === doc.data().id) {
      console.log(doc.data());
      users.push(doc.data());
      userImage.src = doc.data().image;
      // `<p> ${doc.data().firstName + lastName}</p> `;
      userName.innerHTML = doc.data().firstName + lastName;
      userEmail.innerHTML = doc.data().email;
    }
  });
};

const logOut = document.querySelector("#logOut");
logOut.addEventListener("click", () => {
  signOut(auth)
    .then(() => {
      window.location = "../Signup/index.html";
    })
    .catch((error) => {
      // An error happened.
    });
});
