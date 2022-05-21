// Import stylesheets
import './style.css';

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hola Programador!'
  }
})

var app2 = new Vue({
  el: '#app2',
  data: {
    message: 'Puto el que lee,AAAAHH TE CAGUE HIJO DE PUTA SAPEEE!!!!! ' + new Date().toLocaleDateString()
  }
})

var app3 = new Vue({
  el: '#app3',
  data: {
    seen: true
  }
})

let app4 = new Vue ({
  el:'#app4',
  data:{
    todos:[
      {text:'oleme el dedo'},
      {text:'chupala justin'},
      {text:'el peluca sapee'}
      
    ]
  }
})

