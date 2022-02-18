function listLinkada() {

let no = null
let tamanho = 0


const novoNo = (valor)=> {

  tamanho++

  return {
    valor, 
    proximoNo: null
  }

}


const adicionaNo = (valor) => {
  if(!no){
    no = novoNo(valor)
    return
  }
  
  let noAtual = no

  console.log(noAtual)
}




  return {
    tamanho: ()=> tamanho,
    adicionaNo: (valor)=> adicionaNo(valor),
    proximo: ()=> no.proximoNo,
    print: function(){ console.log(no) }
  }
}




var minhaLista = listLinkada()

minhaLista.adicionaNo(11)
minhaLista.adicionaNo(22)
minhaLista.adicionaNo(33)
minhaLista.adicionaNo(44)
minhaLista.adicionaNo(55)


let atual = minhaLista

atual.print()

// while( atual.proximo() ){
//   atual.print
//   .atual = atual.proximo()
// }

