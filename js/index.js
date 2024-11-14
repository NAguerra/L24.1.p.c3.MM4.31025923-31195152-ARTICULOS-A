let ArtSinExist = (articulos, dep) =>{
    let contartsin = 0;
    for (let i = 0; i < articulos.length; i++) {
        if (articulos[i].dep == dep & articulos[i].existencia == 0) {
            contartsin++;
        }
    }
    return contartsin;
}

let articulos =  [
    {dep: 1, nombre: "Camiseta", precio: 25, existencia: 0},
    {dep: 1, nombre: "Zapatos", precio: 15, existencia: 3},
    {dep: 2, nombre: "Pijama", precio: 20, existencia: 2},
    {dep: 2, nombre: "Pantalón", precio: 10, existencia: 0},
    {dep: 3, nombre: "Camisa", precio: 20, existencia: 5},
    {dep: 3, nombre: "Sandalias", precio: 15, existencia: 0},
    {dep: 4, nombre: "Suéter", precio: 25, existencia: 0}
]

let salida = document.getElementById("salida");
salida.innerHTML = "Artículos sin existencia en el departamento 1: " + ArtSinExist(articulos, 1);
salida.innerHTML += "<br><br> Artículos sin existencia en el departamento 2: " + ArtSinExist(articulos, 2);
salida.innerHTML += "<br><br> Artículos sin existencia en el departamento 3: " + ArtSinExist(articulos, 3);
salida.innerHTML += "<br><br> Artículos sin existencia en el departamento 4: " + ArtSinExist(articulos, 4);
