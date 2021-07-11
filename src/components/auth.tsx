import {useHistory} from 'react-router-dom';
import {auth} from '../firebase';

// list for auth state changes
auth.onAuthStateChanged((user) => {
    if (user) {
      console.log("signin");
      useHistory().push('/home');
      /*fs.collection("posts")
        .get()
        .then((snapshot) => {
          setupPosts(snapshot.docs);
          loginCheck(user);
        });*/
    } else {
      console.log("signout");
      useHistory().push('/');
      /*setupPosts([]);
      loginCheck(user);*/
    }
});