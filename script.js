const svg = document.getElementById("mapa");
const NS = "http://www.w3.org/2000/svg";

const selectEstante = document.getElementById("estante");
const btnSalvar = document.getElementById("btnSalvar");
const btnBuscar = document.getElementById("btnBuscar");

let estanteSelecionada = null;

/* PREENCHE SELECT */

for(let i = 1; i <= 51; i++){

  const option = document.createElement("option");

  option.value = i;
  option.textContent =
  `Estante ${String(i).padStart(2,"0")}`;

  selectEstante.appendChild(option);
}

/* MAPA */

const estantes = [

  {n:1,x:10,y:610,w:55,h:90,c:"#efd98d"},
  {n:2,x:10,y:510,w:55,h:90,c:"#efd98d"},
  {n:3,x:10,y:410,w:55,h:90,c:"#efd98d"},
  {n:4,x:10,y:310,w:55,h:90,c:"#efd98d"},
  {n:5,x:10,y:210,w:55,h:90,c:"#efd98d"},
  {n:6,x:10,y:110,w:55,h:90,c:"#efd98d"},

  {n:7,x:90,y:30,w:150,h:40,c:"#f4dfb6"},
  {n:8,x:250,y:30,w:150,h:40,c:"#f4dfb6"},
  {n:9,x:560,y:30,w:150,h:40,c:"#f4dfb6"},
  {n:10,x:720,y:30,w:150,h:40,c:"#f4dfb6"},
  {n:11,x:880,y:30,w:150,h:40,c:"#f4dfb6"},
  {n:12,x:1040,y:30,w:150,h:40,c:"#f4dfb6"},

  {n:13,x:1140,y:80,w:50,h:140,c:"#dbe8ff"},
  {n:14,x:1140,y:250,w:50,h:140,c:"#dbe8ff"},
  {n:15,x:1140,y:420,w:50,h:140,c:"#dbe8ff"},
  {n:16,x:1140,y:590,w:50,h:140,c:"#dbe8ff"},

  {n:17,x:800,y:690,w:170,h:45,c:"#dff0d3"},
  {n:18,x:630,y:690,w:170,h:45,c:"#dff0d3"},
  {n:19,x:460,y:690,w:170,h:45,c:"#dff0d3"},
  {n:20,x:290,y:690,w:170,h:45,c:"#dff0d3"},
  {n:21,x:120,y:690,w:170,h:45,c:"#dff0d3"},

  {n:22,x:320,y:520,w:140,h:45,c:"#f8d6d6"},
  {n:23,x:460,y:520,w:140,h:45,c:"#f8d6d6"},
  {n:24,x:600,y:520,w:140,h:45,c:"#f8d6d6"},
  {n:25,x:740,y:520,w:140,h:45,c:"#f8d6d6"},
  {n:26,x:880,y:520,w:140,h:45,c:"#f8d6d6"},

  {n:27,x:320,y:475,w:140,h:45,c:"#f8d6d6"},
  {n:28,x:460,y:475,w:140,h:45,c:"#f8d6d6"},
  {n:29,x:600,y:475,w:140,h:45,c:"#f8d6d6"},
  {n:30,x:740,y:475,w:140,h:45,c:"#f8d6d6"},
  {n:31,x:880,y:475,w:140,h:45,c:"#f8d6d6"},

  {n:32,x:320,y:365,w:140,h:45,c:"#dbe8ff"},
  {n:33,x:460,y:365,w:140,h:45,c:"#dbe8ff"},
  {n:34,x:600,y:365,w:140,h:45,c:"#dbe8ff"},
  {n:35,x:740,y:365,w:140,h:45,c:"#dbe8ff"},
  {n:36,x:880,y:365,w:140,h:45,c:"#dbe8ff"},

  {n:37,x:260,y:320,w:60,h:100,c:"#dbe8ff"},

  {n:38,x:320,y:320,w:140,h:45,c:"#dbe8ff"},
  {n:39,x:460,y:320,w:140,h:45,c:"#dbe8ff"},
  {n:40,x:600,y:320,w:140,h:45,c:"#dbe8ff"},
  {n:41,x:740,y:320,w:140,h:45,c:"#dbe8ff"},
  {n:42,x:880,y:320,w:140,h:45,c:"#dbe8ff"},

  {n:43,x:780,y:180,w:140,h:45,c:"#e4ddff"},
  {n:44,x:640,y:180,w:140,h:45,c:"#e4ddff"},
  {n:45,x:500,y:180,w:140,h:45,c:"#e4ddff"},
  {n:46,x:360,y:180,w:140,h:45,c:"#e4ddff"},

  {n:47,x:360,y:135,w:140,h:45,c:"#e4ddff"},
  {n:48,x:500,y:135,w:140,h:45,c:"#e4ddff"},
  {n:49,x:640,y:135,w:140,h:45,c:"#e4ddff"},
  {n:50,x:780,y:135,w:140,h:45,c:"#e4ddff"},

  {n:51,x:920,y:170,w:55,h:100,c:"#e4ddff"}
];

/* DESENHA */

estantes.forEach(estante => {

  const rect = document.createElementNS(NS,"rect");

  rect.setAttribute("x",estante.x);
  rect.setAttribute("y",estante.y);
  rect.setAttribute("width",estante.w);
  rect.setAttribute("height",estante.h);
  rect.setAttribute("rx",5);
  rect.setAttribute("fill",estante.c);

  rect.classList.add("estante");
  rect.dataset.estante = estante.n;

  rect.addEventListener("click",()=>{

    document
      .querySelectorAll(".estante")
      .forEach(e=>e.classList.remove("selecionada"));

    rect.classList.add("selecionada");

    estanteSelecionada = estante.n;

    selectEstante.value = estante.n;
  });

  svg.appendChild(rect);

  const texto = document.createElementNS(NS,"text");

  texto.setAttribute(
    "x",
    estante.x + estante.w/2
  );

  texto.setAttribute(
    "y",
    estante.y + estante.h/2
  );

  texto.setAttribute("class","numero");
  texto.textContent = estante.n;

  svg.appendChild(texto);
});

/* SALVAR */

btnSalvar.addEventListener("click",()=>{

  const codigo =
    document.getElementById("codigo").value;

  const descricao =
    document.getElementById("descricao").value;

  const quantidade =
    document.getElementById("quantidade").value;

  const estante =
    document.getElementById("estante").value;

  const nivel =
    document.getElementById("nivel").value;

  if(!codigo || !descricao){

    alert("Preencha os campos.");
    return;
  }

  const produto = {
    codigo,
    descricao,
    quantidade,
    estante,
    nivel
  };

  const produtos =
    JSON.parse(
      localStorage.getItem("produtos")
    ) || [];

  produtos.push(produto);

  localStorage.setItem(
    "produtos",
    JSON.stringify(produtos)
  );

  alert("Produto salvo!");
});

/* BUSCA */

btnBuscar.addEventListener("click",()=>{

  const codigo =
    document.getElementById("buscarCodigo").value;

  const produtos =
    JSON.parse(
      localStorage.getItem("produtos")
    ) || [];

  const produto =
    produtos.find(
      p => p.codigo === codigo
    );

  const resultado =
    document.getElementById("resultadoBusca");

  if(!produto){

    resultado.innerHTML =
      "Produto não encontrado.";

    return;
  }

  resultado.innerHTML = `
    <strong>${produto.descricao}</strong><br>
    Código: ${produto.codigo}<br>
    Quantidade: ${produto.quantidade}<br>
    Estante: ${produto.estante}<br>
    Nível: ${produto.nivel}
  `;
});