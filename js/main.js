function adicionarUsuario() {
  // cria referência aos campos de entrada
  var inNome = document.getElementById("inNome");
  var inEmail = document.getElementById("inEmail");
  var inVaga = document.getElementById("inVaga");
  var inNiver = document.getElementById("inNiver");

  var nome = inNome.value;    // obtém conteúdo dos campos
  var email = inEmail.value;
  var vaga = inVaga.value;
  var niver = inNiver.value;


  // valida preenchimento
  if (nome == "" || email == "" || vaga == "" || niver == "") {
    alert("Preencha os dados faltantes");
    inNome.focus();
    return;
  }

  // cria referência ao elemento tbDados
  var tbDados = document.getElementById("tbDados");

  // chama function que irá inserir usuario na tabela
  inserirLinha(tbDados, nome, email, vaga, niver);

  // chama function que irá gravar dados em localStorage
  gravarUsuario(nome, email, vaga, niver);

  inNome.value = "";    // limpa campos de entrada
  inEmail.value = "";
  inVaga.value = "";  
  inNiver.value = "";
  inNome.focus();       // posiciona o cursor em inNome
}

var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarUsuario);

function inserirLinha(tabela, nome, email, vaga, niver) {

  var linha = tabela.insertRow(-1);     // adiciona uma linha na tabela

  var col1 = linha.insertCell(0);       // cria colunas na linha inserida
  var col2 = linha.insertCell(1);
  var col3 = linha.insertCell(2);
  var col4 = linha.insertCell(3);
  var col5 = linha.insertCell(4);
  

  col1.textContent = nome;            // joga um conteúdo em cada célula
  col2.textContent = email;
  col3.textContent = vaga;           
  col4.textContent = niver;
}  

function gravarDado(nome, email, vaga, niver) {

  // se há filmes salvos em localStorare ...
  if (localStorage.getItem("dadoNome")) {
    // ... obtém os dados e acrescenta ";" dados
    var dadoNome = localStorage.getItem("dadoNome") + ";" + nome;
    var dadoEmail = localStorage.getItem("dadoEmail") + ";" + email;
    var dadoVaga = localStorage.getItem("dadoVaga") + ";" + vaga;
    var dadoNiver = localStorage.getItem("dadoNiver") + ";" + niver;

    localStorage.setItem("dadoNome", dadoNome);   // grava dados 
    localStorage.setItem("dadoEmail", dadoEmail);   // em localStorage 
    localStorage.setItem("dadoVaga", dadoVaga);
    localStorage.setItem("dadoNiver", dadoNiver); 

  } else {
    // senão, é a primeira inclusão (salva sem delimitador)
    localStorage.setItem("dadoNome", nome);
    localStorage.setItem("dadoEmail", email);
    localStorage.setItem("dadoVaga", vaga);
    localStorage.setItem("dadoNiver", niver);
  }
}

function recuperarDado() {

  // se houver dados salvos em localStorage
  if (localStorage.getItem("dadoNome")) {
    // obtém conteúdo e converte em elementos de vetor (na ocorrência ";")
    var nome  = localStorage.getItem("dadoNome").split(";");
    var email = localStorage.getItem("dadoEmail").split(";");
    var vaga  = localStorage.getItem("dadoVaga").split(";");
    var niver = localStorage.getItem("dadoNiver").split(";");

    // cria referência ao elemento tbDados
    var tbDados = document.getElementById("tbDados");

    // percorre elementos do vetor e os insere na tabela
    for (var i = 0; i < nome.length; i++) {
      inserirLinha(tbDados, nome[i], email[i], vaga[i], niver[i]);
    }
  }
}
recuperarDado();
