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
  
      // // Inicializar o Firebase
      firebase.initializeApp(firebaseConfig);
      var db = firebase.firestore();

      // Função para verificar as credenciais
      async function verificarCredenciais() {
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;

        // Consulta o Firestore para verificar as credenciais
        db.collection('pessoas')
          .where('nome', '==', username)
          .where('senha', '==', password)
          .get()
          .then((querySnapshot) => {
            if (querySnapshot.size > 0) {
              window.location.href = "home.html";
            } else {
              alert("Credenciais inválidas. Tente novamente.");
            }
          })
          .catch((error) => {
            console.error("Erro ao verificar credenciais:", error);
          });
      }