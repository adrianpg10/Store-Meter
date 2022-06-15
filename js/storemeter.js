var piezas = {
    "piezas": [
        {
            "name": "Cutter",
            "kind": "tool",
            "quantity": 1,
            "picture": ["cutter.png", "cutter2.png", "cutter3.png"],
            "price": 30,
            "website": "https://www.fullertool.com/product/5pc-pro-bolt-cutter-assortment/"
        },
        {
            "name": "Axe",
            "kind": "tool",
            "quantity": 1,
            "picture": ["axe.png", "axe2.png", "axe3.png"],
            "price": 10,
            "website": "https://www.fullertool.com/product/1-1-2-lb-graphite-core-axe/"
        },
        {
            "name": "Wrench",
            "kind": "tool",
            "quantity": 1,
            "picture": ["wrench.png", "wrench2.png", "wrench4.png"],
            "price": 5,
            "website": "https://www.fullertool.com/product/pro-metric-combination-wrenches/"
        },
        {
            "name": "pipe wrench",
            "kind": "tool",
            "quantity": 1,
            "picture": ["pipewrench.png", "pipewrench2.png", "pipewrenchmaxi.png"],
            "price": 10,
            "website": "https://www.fullertool.com/product/pro-adjustable-pipe-wrenches/"
        },
        {
            "name": "Hammer",
            "kind": "tool",
            "quantity": 1,
            "picture": ["hammer.png", "hammerchico.png", "hammerbig.png"],
            "price": 3,
            "website": ""
        },
        {
            "name": "Screwdriver",
            "kind": "tool",
            "quantity": 1,
            "picture": ["screwdriver.png", "screwdrivermaxi.png", "screwdrivermin.png"],
            "price": 1,
            "website": ""
        },
        {
            "name": "Ruler",
            "kind": "tool",
            "quantity": 1,
            "picture": ["ruler.png"],
            "price": 5,
            "website": "https://www.fullertool.com/product/slot-head-pro-screwdrivers/"
        },
        {
            "name": "motor",
            "kind": "part",
            "quantity": 1,
            "picture": ["motor.png"],
            "price": 30,
            "website": "https://torro.lv/tubular-motors/AM35MEL-RF-6-28-rf-radio-control"
        },
        {
            "name": "Platine",
            "kind": "part",
            "quantity": 4,
            "picture": ["Platine.png", "Platinebig.png"],
            "price": 55,
            "website": "https://www.torro-shop.de/24-GHz-Platine-Leopard"
        },
        {
            "name": "Wechselquarze",
            "kind": "part",
            "quantity": 1,
            "picture": ["Wechselquarze.png", "quarze.png"],
            "price": 25,
            "website": "https://www.torro-shop.de/wechselquarze-quarze-no-02-fuer-panzer-fernbedienung-der-heng-long-panzer"
        }
    ]
};

var tablero = document.querySelector("#tablero");
var myobjeto = JSON.parse(JSON.stringify(piezas));

function generargrid() {

    var grid = tablero.appendChild(document.createElement("div"));
    grid.setAttribute("class", "grid-container");
    var piezascontenido = grid.appendChild(document.createElement("div"));
    piezascontenido.setAttribute("class", "grid-item");
    var botongrid = piezascontenido.appendChild(document.createElement("button"));
    botongrid.setAttribute("class", "btn btn-info");
    botongrid.setAttribute("onclick", "mostrarlistado(" + i + ")");
    botongrid.innerHTML = myobjeto.piezas[i].name + "<br/>" + myobjeto.piezas[i].price + "€";

}

function generarlista() {

    var lista = tablero.appendChild(document.createElement("ul"));
    lista.setAttribute("class", "list-group");

    var li = lista.appendChild(document.createElement("li"));
    li.setAttribute("id", "piezas");

    var botonlista = li.appendChild(document.createElement("button"));
    botonlista.setAttribute("class", "btn btn-infolista");
    botonlista.setAttribute("onclick", "mostrarlistado(" + i + ")");

    var imagenboton = botonlista.appendChild(document.createElement("img"));
    imagenboton.setAttribute("src", 'img/' + myobjeto.piezas[i].picture[0]);
    var plista = botonlista.appendChild(document.createElement("p"));
    plista.innerHTML = myobjeto.piezas[i].name;

    var smalllista = botonlista.appendChild(document.createElement("small"));
    smalllista.innerHTML = myobjeto.piezas[i].price + " €";
}
/* Guardamos en una variable la altura maxima -10 para poder pasar el raton*/

var altomaximo = innerHeight - 10;

/* Filtramos los nombres */
var nombre = document.querySelector("#busqueda");

var eslistaNombre = false;
var esgridNombre = false;

var rangoNombre = 10;
var numeroiNombre = 0;

function filtrarNombre() {

    tablero.innerHTML = '';
    var texto = nombre.value.toLowerCase();

    for (i = 0; i < rangoNombre; i++) {
        
        let nombre = myobjeto.piezas[i].name.toLowerCase();
        if (nombre.indexOf(texto) !== -1 && texto != "") {

            generargrid();

            esgridNombre = true;

            /*Nos aparecerán de 10 en 10 cada vez que movamos el cursor hacia abajo*/
            window.addEventListener('mousemove', function (altura) {

                if (altura.y == altomaximo) {
                    
                if(rangoNombre< myobjeto.piezas.length){

                    numeroiNombre = rangoNombre;
                    rangoNombre= rangoNombre +10;
                   
                    for(i=numeroiNombre;i<rangoNombre;i++){

                        if (eslistaNombre == true) {       
                            generarlista();                      
                        } else {                        
                            generargrid();                            
                        }
                    }
                }
                }

            });
            /*Dependiendo de donde hagamos clic generará en formato lista o grid*/ 
            $(function () {
                $(document).on('click', 'button[type="button"]', function (event) {
                    let id = this.id;

                    if (id == "lista") {
                        tablero.innerHTML = '';
                        for (i = 0; i < rangoNombre; i++) {
                            let nombre = myobjeto.piezas[i].name.toLowerCase();
                            if (nombre.indexOf(texto) !== -1 && texto != "") {

                                generarlista();
                            }
                        }
                        eslistaNombre = true;
                        esgridNombre = false;

                    }

                    if (id == "grid") {
                        tablero.innerHTML = '';
                        for (i = 0; i < rangoNombre; i++) {
                            let nombre = myobjeto.piezas[i].name.toLowerCase();
                            if (nombre.indexOf(texto) !== -1 && texto != "") {

                                generargrid();
                            }
                        }

                        esgridNombre = true;
                        eslistaNombre = false;
                    }
                });
            });
        }
    }

    if (tablero.innerHTML === '' && texto != "") {
        document.getElementById("tablero").innerHTML += "<h3>Name not found</h3>";
    }

    ordenarNombre();
    rangomayorNombre.addEventListener('keyup', ordenarRangoNombre);

}

nombre.addEventListener('keyup', filtrarNombre);

/* Filtramos los tipos */
var tipo = document.querySelector("#tipo");

var eslistaTipo = false;
var esgridTipo = false;

var rangotipo = 10;
var numeroitipo = 0;

function filtrarTipo() {

    tablero.innerHTML = '';
    var texto = tipo.value.toLowerCase();

    for (i = 0; i < rangotipo; i++) {

        let tipo = myobjeto.piezas[i].kind.toLowerCase();

        if (tipo.indexOf(texto) !== -1 && texto != "") {

            generargrid();
            esgridTipo = true;

            window.addEventListener('mousemove', function (e) {

                if (e.y == altomaximo) {

                if(rangotipo< myobjeto.piezas.length){
                    numeroitipo = rangotipo;
                    rangotipo= rangotipo +10;

                    for(i=numeroitipo;i<rangotipo;i++){
                        if (eslistaTipo == true) {
                            generarlista();
                        } else {
                            generargrid();
                        }
                    } 
                }

                }

            });

            $(function () {
                $(document).on('click', 'button[type="button"]', function (event) {
                    let id = this.id;

                    if (id == "lista") {
                        tablero.innerHTML = '';
                        for (i = 0; i < rangotipo; i++) {
                            let tipo = myobjeto.piezas[i].kind.toLowerCase();
                            if (tipo.indexOf(texto) !== -1 && texto != "") {

                                generarlista();
                            }
                        }
                        eslistaTipo = true;
                        esgridTipo = false;
                    }

                    if (id == "grid") {
                        tablero.innerHTML = '';
                        for (i = 0; i < rangotipo; i++) {
                            let tipo = myobjeto.piezas[i].kind.toLowerCase();
                            if (tipo.indexOf(texto) !== -1 && texto != "") {

                                generargrid();

                            }
                        }
                        esgridTipo = true;
                        eslistaTipo = false;
                    }
                });
            });
        }
    }

    if (tablero.innerHTML === '' && texto != "") {
        document.getElementById("tablero").innerHTML += "<h3>Type no found</h3>";
    }

    ordenarTipo();
    rangomayor.addEventListener('keyup', ordenarRangoTipo);

}

tipo.addEventListener('keyup', filtrarTipo);

/* Funcion para mostrar el modal */
function mostrarlistado(indice) {

    $(function () {
        $('#listado').modal('show');
    })

    document.getElementById("nombre").innerHTML = myobjeto.piezas[indice].name;
    document.getElementById("tipos").innerHTML = "Type: " + myobjeto.piezas[indice].kind;
    document.getElementById("cantidad").innerHTML = "Number: " + myobjeto.piezas[indice].quantity;
    for (i = 0; i < myobjeto.piezas[indice].picture.length; i++) {

        document.getElementById("foto" + (i + 1)).innerHTML = "<img src='img/" + myobjeto.piezas[indice].picture[i] + "'/>";
    }

    document.getElementById("precio").innerHTML = "Price: " + myobjeto.piezas[indice].price + "€";
    document.getElementById("web-proveedor").innerHTML = "Provider website: " + myobjeto.piezas[indice].website;

}

/*Ordenar tipo dependiendo si eliges de mayor a menor o de menor a mayor */

function ordenarTipo() {

    var preciosTipo = document.getElementById("price");
    preciosTipo.addEventListener("change", function () {

        valorPrecio = preciosTipo.value;
        switch (valorPrecio) {

            case "cheaper":
                tablero.innerHTML = '';
                myobjeto.piezas.sort(((a, b) => a.price - b.price));
                var texto = tipo.value.toLowerCase();

                for (i = 0; i < myobjeto.piezas.length; i++) {
                    let tipo = myobjeto.piezas[i].kind.toLowerCase();
                    if (tipo.indexOf(texto) !== -1 && texto != "") {
                        if (eslistaTipo == true) {
                            generarlista();
                        } else {
                            generargrid();
                        }
                    }
                }

                break;
            case "expensive":

                tablero.innerHTML = '';
                myobjeto.piezas.sort(((a, b) => b.price - a.price));
                var texto = tipo.value.toLowerCase();

                for (i = 0; i < myobjeto.piezas.length; i++) {
                    let tipo = myobjeto.piezas[i].kind.toLowerCase();
                    if (tipo.indexOf(texto) !== -1 && texto != "") {
                        if (eslistaTipo == true) {
                            generarlista();
                        } else {
                            generargrid();
                        }
                    }
                }
                break;
        }
    });
}

/*Ordenar nombre */

function ordenarNombre() {

    var preciosNombre = document.getElementById("price");
    preciosNombre.addEventListener("change", function () {
        valorPrecioNombre = preciosNombre.value;
        switch (valorPrecioNombre) {

            case "cheaper":
                tablero.innerHTML = '';
                myobjeto.piezas.sort(((a, b) => a.price - b.price));

                var textoNombre = nombre.value.toLowerCase();
                for (i = 0; i < myobjeto.piezas.length; i++) {
                    let nombre = myobjeto.piezas[i].name.toLowerCase();
                    if (nombre.indexOf(textoNombre) !== -1 && textoNombre != "") {
                        if (eslistaNombre == true) {
                            generarlista();
                        } else {
                            generargrid();
                        }
                    }
                }
                break;

            case "expensive":
                tablero.innerHTML = '';
                myobjeto.piezas.sort(((a, b) => b.price - a.price));
                var textoNombre = nombre.value.toLowerCase();

                for (i = 0; i < myobjeto.piezas.length; i++) {
                    let nombre = myobjeto.piezas[i].name.toLowerCase();
                    if (nombre.indexOf(textoNombre) !== -1 && textoNombre != "") {
                        if (eslistaNombre == true) {
                            generarlista();
                        } else {
                            generargrid();
                        }
                    }
                }
                break;
        }
    });
}

var rangomenor = document.querySelector("#rangomenor");
var rangomayor = document.querySelector("#rangomayor");

/*Ordenamos en funcion del rango que eligamos previamente */
function ordenarRangoTipo() {

    tablero.innerHTML = '';
    var numeroMenor = rangomenor.value;
    var numeroMayor = rangomayor.value;
    var texto = tipo.value.toLowerCase();

    for (i = 0; i < rangotipo; i++) {
        let tipo = myobjeto.piezas[i].kind.toLowerCase();
        if (tipo.indexOf(texto) !== -1 && texto != "") {
            if (myobjeto.piezas[i].price >= numeroMenor && myobjeto.piezas[i].price <= numeroMayor) {
                if (eslistaTipo == true) {
                    generarlista();
                } else {
                    generargrid();

                }

                $(function () {
                    $(document).on('click', 'button[type="button"]', function (event) {
                        let id = this.id;
                        if (id == "lista") {
                            tablero.innerHTML = '';
                            for (i = 0; i < rangotipo; i++) {
                                let tipo = myobjeto.piezas[i].kind.toLowerCase();
                                if (tipo.indexOf(texto) !== -1 && texto != "") {
                                    if (myobjeto.piezas[i].price >= numeroMenor && myobjeto.piezas[i].price <= numeroMayor) {
                                        generarlista();

                                    }
                                }
                            }
                            eslistaTipo = true;
                            esgridTipo = false;

                        }
                        if (id == "grid") {
                            tablero.innerHTML = '';
                            for (i = 0; i < rangotipo; i++) {
                                let tipo = myobjeto.piezas[i].kind.toLowerCase();
                                if (tipo.indexOf(texto) !== -1 && texto != "") {
                                    if (myobjeto.piezas[i].price >= numeroMenor && myobjeto.piezas[i].price <= numeroMayor) {
                                        generargrid();

                                    }
                                }
                            }
                            esgridTipo = true;
                            eslistaTipo = false;
                        }
                    });
                });
            }
        }
    }
    ordenarRangoPrecioTipo();
}

var rangomenorNombre = document.querySelector("#rangomenor");
var rangomayorNombre = document.querySelector("#rangomayor");

function ordenarRangoNombre() {

    tablero.innerHTML = '';
    var numeroMenorNombre = rangomenorNombre.value;
    var numeroMayorNombre = rangomayorNombre.value;
    var texto = nombre.value.toLowerCase();

    for (i = 0; i < rangoNombre; i++) {
        let nombre = myobjeto.piezas[i].name.toLowerCase();
        if (nombre.indexOf(texto) !== -1 && texto != "") {
            if (myobjeto.piezas[i].price >= numeroMenorNombre && myobjeto.piezas[i].price <= numeroMayorNombre) {
                if (eslistaNombre == true) {
                    generarlista();
                } else {
                    generargrid();

                }

                $(function () {
                    $(document).on('click', 'button[type="button"]', function (event) {
                        let id = this.id;
                        if (id == "lista") {
                            tablero.innerHTML = '';
                            for (i = 0; i < rangoNombre; i++) {
                                let nombre = myobjeto.piezas[i].name.toLowerCase();
                                if (nombre.indexOf(texto) !== -1 && texto != "") {
                                    if (myobjeto.piezas[i].price >= numeroMenorNombre && myobjeto.piezas[i].price <= numeroMayorNombre) {
                                        generarlista();
                                    }
                                }
                            }
                            eslistaNombre = true;
                            esgridNombre = false;

                        }

                        if (id == "grid") {
                            tablero.innerHTML = '';
                            for (i = 0; i < rangoNombre; i++) {
                                let nombre = myobjeto.piezas[i].name.toLowerCase();
                                if (nombre.indexOf(texto) !== -1 && texto != "") {
                                    if (myobjeto.piezas[i].price >= numeroMenorNombre && myobjeto.piezas[i].price <= numeroMayorNombre) {

                                        generargrid();
                                    }
                                }
                            }
                            esgridNombre = true;
                            eslistaNombre = false;
                        }
                    });
                });
            }
        }
    }
    ordenarRangoPrecioNombre();
}
function ordenarRangoPrecioNombre() {

    var preciosNombre = document.getElementById("price");
    preciosNombre.addEventListener("change", function () {
        valorPrecioNombre = preciosNombre.value;
        var numeroMenorNombre = rangomenorNombre.value;
        var numeroMayorNombre = rangomayorNombre.value;
        switch (valorPrecioNombre) {
            case "cheaper":
                tablero.innerHTML = '';
                myobjeto.piezas.sort(((a, b) => a.price - b.price));

                var textoNombre = nombre.value.toLowerCase();
                for (i = 0; i < myobjeto.piezas.length; i++) {
                    let nombre = myobjeto.piezas[i].name.toLowerCase();
                    if (nombre.indexOf(textoNombre) !== -1 && textoNombre != "") {
                        if (myobjeto.piezas[i].price >= numeroMenorNombre && myobjeto.piezas[i].price <= numeroMayorNombre) {
                            if (eslistaNombre == true) {
                                generarlista();

                            } else {
                                generargrid();

                            }
                        }
                    }
                }
                break;
            case "expensive":
                tablero.innerHTML = '';
                myobjeto.piezas.sort(((a, b) => b.price - a.price));

                var textoNombre = nombre.value.toLowerCase();
                for (i = 0; i < myobjeto.piezas.length; i++) {
                    let nombre = myobjeto.piezas[i].name.toLowerCase();
                    if (nombre.indexOf(textoNombre) !== -1 && textoNombre != "") {
                        if (myobjeto.piezas[i].price >= numeroMenorNombre && myobjeto.piezas[i].price <= numeroMayorNombre) {
                            if (eslistaNombre == true) {
                                generarlista();

                            } else {
                                generargrid();

                            }

                        }
                    }
                }

                break;
        }
    });
}
function ordenarRangoPrecioTipo() {

    var preciosTipo = document.getElementById("price");
    preciosTipo.addEventListener("change", function () {

        valorPrecio = preciosTipo.value;
        var numeroMenor = rangomenor.value;
        var numeroMayor = rangomayor.value;
        switch (valorPrecio) {
            case "cheaper":
                tablero.innerHTML = '';
                myobjeto.piezas.sort(((a, b) => a.price - b.price));
                var texto = tipo.value.toLowerCase();
                for (i = 0; i < myobjeto.piezas.length; i++) {
                    let tipo = myobjeto.piezas[i].kind.toLowerCase();
                    if (tipo.indexOf(texto) !== -1 && texto != "") {
                        if (myobjeto.piezas[i].price >= numeroMenor && myobjeto.piezas[i].price <= numeroMayor) {
                            if (eslistaTipo == true) {
                                generarlista();
                            } else {
                                generargrid();

                            }
                        }
                    }
                }
                break;
            case "expensive":

                tablero.innerHTML = '';
                myobjeto.piezas.sort(((a, b) => b.price - a.price));
                var texto = tipo.value.toLowerCase();
                for (i = 0; i < myobjeto.piezas.length; i++) {
                    let tipo = myobjeto.piezas[i].kind.toLowerCase();
                    if (tipo.indexOf(texto) !== -1 && texto != "") {
                        if (myobjeto.piezas[i].price >= numeroMenor && myobjeto.piezas[i].price <= numeroMayor) {
                            if (eslistaTipo == true) {

                                generarlista();

                            } else {
                                generargrid();

                            }
                        }
                    }
                }

                break;
        }
    });
}
