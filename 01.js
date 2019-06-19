const app = new Vue ({
  el: "#app",
  data:{
    titulo:"hola Mundo con Vue",
    parrafo:"lorem dsmndndnd",
    numero: 5,
    frutas:['manzana', 'pera', 'platano'],
    frutas2:[
      {nombre:'pera', cantidad: 10},
      {nombre:'manzana', cantidad:0},
      {nombre:'limon', cantidad:22}
    ]
  }
})