const firebaseConfig = {
  apiKey: "AIzaSyBeKBKVKtA_30i6TPW0XNg9WNBL0aGjh78",
  authDomain: "cadastros-cb4d5.firebaseapp.com",
  databaseURL: "https://cadastros-cb4d5-default-rtdb.firebaseio.com",
  projectId: "cadastros-cb4d5",
  storageBucket: "cadastros-cb4d5.appspot.com",
  messagingSenderId: "62090479299",
  appId: "1:62090479299:web:6326e9c8aaf38064e9c476",
  measurementId: "G-N9PCN0L2PK"
};

firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();


async function Cadastrar()
  {
    alert("cadastro concluído");
   var nome = document.getElementById("username");
   var email = document.getElementById("email");
   var senha = document.getElementById("password");
   var ssenha = document.getElementById("s-password");

    var aux_nome = nome.value;
    var aux_Email = email.value;
    var aux_senha = senha.value;
    var aux_ssenha = ssenha.value;

       const novoRegistro = await db.collection('pessoas').add({
        email: aux_Email,
        nome: aux_nome,
        senha: aux_senha,
        ssenha: aux_ssenha
    })

  }