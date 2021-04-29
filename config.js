 export const firebaseConfig = {
    apiKey: "AIzaSyCRZtd9cqgsw8fP9R2nMgbDaTz1tkk2e-8",
    authDomain: "electrolog-f3de2.firebaseapp.com",
    projectId: "electrolog-f3de2",
    storageBucket: "electrolog-f3de2.appspot.com",
    messagingSenderId: "247850035011",
    appId: "1:247850035011:web:fd519117c6b332486ff1f6"
  };

  firebase.initializeApp(firebaseConfig);


  // get elements

  const txtEmail=document.getElementById('email');
  const txtPassword=document.getElementById('password');
  const btnLogin=document.getElementById('btnLogin');
  const btnSignUp=document.getElementById('btnSignUp');

  // add Login event

  btnLogin.addEventListener('click', e =>{
    // get email and password

    const email = txtEmail.nodeValue;
    const password=txtPassword.nodeValue;
    const auth = firebase.auth();
    //sign in
    const promise = auth.signInWithEmailAndPassword(email,password);
    promise.catch (e => console.log(e.message));
  });


  //add sign up event

  btnSignUp.addEventListener('click',e =>{
      // get email and password

      const email = txtEmail.nodeValue;
      const password=txtPassword.nodeValue;
      const auth = firebase.auth();

      const promise = auth.createUserWithEmailAndPassword(email,password);
  })

