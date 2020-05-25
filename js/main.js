class char {
  constructor(nameD,bornD,emailD,vgD,){
    this.nameUsr = nameD,
    this.bornUsr = bornD,
    this.emailUsr = emailD,
    this.vgUsr = vgD
  }

  okDados(){
    for(let i in this){
      if(this[i] == undefined || this[i] == '' || this[i] == null){
        return false
      } 
    }
    return true
  }  
}


function addUsr(){
  let nameD = document.getElementById('name')
  let bornD = document.getElementById('born')
  let emailD = document.getElementById('email')
  let vgD = document.getElementById('vg') 
  
  let a = new char(
    nameD.value,
    bornD.value,
    emailD.value,
    vgD.value,
    )

  if(a.okDados()){
    Dados.rec(a)

    document.getElementById('modalTitle').innerHTML = 'Adiciondo Usuario'
    document.getElementById('modalColor').className = 'modal-header text-success'
    document.getElementById('modalBody').innerHTML = 'Foi cadastrado com sucesso.'
    document.getElementById('modalBtn').innerHTML = 'Voltar'
    document.getElementById('modalBtn').className = 'btn btn-success'

    $('#modalBase').modal('show')
  } else {
    document.getElementById('modalTitle').innerHTML = 'Falta preenchimento de campo'
    document.getElementById('modalColor').className = 'modal-header text-danger'
    document.getElementById('modalBody').innerHTML = 'Existem campos obrigatorios que não foram preenchidos.'
    document.getElementById('modalBtn').innerHTML = 'Voltar para corrigir'
    document.getElementById('modalBtn').className = 'btn btn-danger'

    $('#modalBase').modal('show')
  }
}

class Bd {
  constructor(){
    let id = localStorage.getItem('id')
      
    if (id === null){
        localStorage.setItem('id', 0)
    } 
  }
  
  getNextId(){
    let nextId = localStorage.getItem('id')
    return parseInt(nextId) + 1
  }
  
  rec (localS){
    let mais = this.getNextId()
    localStorage.setItem(mais, JSON.stringify(localS))
    localStorage.setItem('id', mais)
  }
  
  //recuperar todos as despesas no localStorage
  loadList() {
    let tbItem = Array()
       
    let lst = localStorage.getItem('id')

    for(let i = 1; i <= lst; i++){
        let itemLs  = JSON.parse(localStorage.getItem(i))
          
        if(itemLs === null){
            continue
        }
        itemLs.id = i //gera o id
        tbItem.push(itemLs)
    }  
    return tbItem
  }
}

let Dados = new Bd()

function listExpense() {
  let tb = []
  tb = Dados.loadList()

  //selecionado a tabela
  //let itemTb = document.getElementById('tbHTML')

  //tabela dinamica
  tb.forEach(function(d){
    //criar linhas
    let row = tbHTML.insertRow()
    //criar colunas
    row.insertCell(0).innerHTML = d.id //se conseguisse retronar este valor 
    row.insertCell(1).innerHTML = d.nameUsr
    row.insertCell(2).innerHTML = d.bornUsr
    row.insertCell(3).innerHTML = d.emailUsr
    row.insertCell(4).innerHTML = d.vgUsr
    
    //botão link
    let btn = document.createElement('button')
    btn.className = "btn btn-success"
    btn.innerHTML = '<a class="far fa-address-card" onclick = a1()></a>' // se puxar id para cá
    btn.id = d.id // gera o id para botão
    row.insertCell(5).append(btn)

    //outro botão como tag a
    /* let btn = document.createElement('a')
    btn.className = "btn btn-success far fa-address-card"
    btn.onclick = a1() 
    btn.href = "id.html"
    btn.id = d.id 
    row.insertCell(5).append(btn) */
  })
}


function a1(){
  //mudar página -----------------
  //window.location.href='id.html'

  //pegando o Id? --------------------
  /* tb.forEach(function(d){
    let getId = d.id
    console.log(getId)
    
  } */

/*   let test = 
  console.log(test) */

  let tb = []
  tb = Dados.loadList()
  localStorage.setItem(JSON.stringify())

  // teste ----------------------

  /* let test = tb.filter(d => d.id == getId)
  console.log(test) */
  
  let getId = localStorage.getItem(key)
  console.log(getId) // retronar numeros de id

  //teste do id -----------------------
  /*let test = tb.filter(d => d.id == getId)
  console.log(test) */

  
  //Array com id a cada objeto ---------------
  /* let tb = []
  tb = Dados.loadList() 
  console.log(td) */
  
}


/* //criar tabela certa ---- -----------

let tb = []
tb = Dados.loadList()

tb.forEach(function(d){ 
  //criar linhas
  let row = tbIdHTML.insertRow()
  //criar colunas 
  row.insertCell(0).innerHTML = d.nameUsr
  row.insertCell(1).innerHTML = d.bornUsr
  row.insertCell(2).innerHTML = d.emailUsr
  row.insertCell(3).innerHTML = d.vgUsr
}) */

