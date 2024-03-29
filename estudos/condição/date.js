var data = new Date() //Busca a data completa do computador/servidor [ano/mes/dia/hora]
var hora = data.getHours() //Busca as horas baseados no dado passado pelo Date()
console.log(`Agora são exatamente ${hora} horas.`)

if (hora <12) {
    console.log('Bom Dia!')
} else if (hora <= 18) {
    console.log('Boa Tarde!')
} else { 
    console.log('Boa Noite!')
}

console.log('Hora atual: ', data)