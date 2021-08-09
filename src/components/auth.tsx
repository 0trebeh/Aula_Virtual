import {auth} from '../firebase';

// list for auth state changes
export const Session = () => {
  auth.onAuthStateChanged((user) => {
    if (user) {
      console.log("signin");
      localStorage.setItem("session", "true");
      /*fs.collection("posts")
        .get()
        .then((snapshot) => {
          setupPosts(snapshot.docs);
          loginCheck(user);
        });*/
    } else {
      console.log("signout");
      localStorage.setItem("session", "false");
      localStorage.removeItem("data");
      localStorage.removeItem("userData");
      /*setupPosts([]);
      loginCheck(user);*/
    }
  });
} 