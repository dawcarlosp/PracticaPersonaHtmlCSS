function agregaImagen(){
    alert("Me estas llamando?");
    let url = document.getElementById("imagenURL").value;
    let pie = document.getElementById("pieFoto").value;
    let galeria = document.getElementById("galeria");
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.src = url;
    img.width=300;
    img.height=250;
    let p = document.createElement("p");
    p.textContent = pie;
    alert("SI?")
    div.appendChild(img);
    div.appendChild(p);
    galeria.appendChild(div);
}