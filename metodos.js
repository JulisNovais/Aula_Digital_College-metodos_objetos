function replace(){
    var nome = 'José ângelo Stefânio Antônio      '
    console.log(`nome original: ${nome}`)

    //removendo espaços no final da linha
    console.log(`nome original: ${nome.trim}`)

    //conta a quantidade de caracteres
    console.log(`nome original: ${nome.length}`)

    //conta a quantidade de caracteres sem os epaços em branco
    console.log(`nome original: ${nome.trim().length}`)

    //retira os espaços em branco e converte en minusculo
    console.log(`nome original: ${nome.trim().toLowerCase()}`)

    //retira os espaços em branco e converte en maiusculo
    console.log(`nome original: ${nome.trim().toLocaleUpperCase()}`)

    //substitui a string a ser procurada por outra no primeiro caractere
    console.log(`nome original: ${nome.trim().replace('o','w')}`)

     //substitui a string a ser procurada por outra em todo o documento
     console.log(`nome original: ${nome.trim().replaceAll('o','w')}`)

     // retorna a posiçao indice do array da string
     console.log(nome.indexOf('elo'))

     
}


replace();