let Nt = 0;

if (localStorage.Ntarefa) {
  let Nt = localStorage.getItem("Ntarefa");
  Nt = parseInt(Nt);

  for (let i = 0; i <= Nt; i++) {
    let tarefa = localStorage.getItem(i);

    if (tarefa !== null) {
      ul = document.getElementById("listaDeTarefas");
      let tagCriada = document.createElement("div");

      tagCriada.innerHTML = `
      <p>${tarefa}</p>
      <button nt="${i}" class="btn btn-dark mx-2 apagarTarefa"><i class="material-icons" style=" font-size: 30px;">
            check</i></button>`;

      tagCriada.classList.add("tarefa");
      tagCriada.id = `nt${i}`;
      ul.appendChild(tagCriada);
    }
  }
}

var apagarTarefa;

function carregarTarefas(Nt) {
  let tarefa = localStorage.getItem(Nt);

  ul = document.getElementById("listaDeTarefas");
  let tagCriada = document.createElement("div");

  tagCriada.innerHTML = `
  <p>${tarefa}</p>
  <button nt="${Nt}" class="btn btn-dark mx-2 apagarTarefa"><i class="material-icons" style=" font-size: 30px;">
        check</i></button>`;

  tagCriada.classList.add("tarefa");
  tagCriada.id = `nt${Nt}`;
  ul.appendChild(tagCriada);
  apagarTarefa();
}

//let btn = document.getElementsByTagName("nt");

form.addEventListener("keypress", function (e) {
  if (e.keyCode === 13) {
    carregado();
  }
});

function carregado() {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    var tarefa = $("#input-teste-1").val();

    if (tarefa == "") return;
    console.log(tarefa);

    if (localStorage.Ntarefa) {
      let Nt = localStorage.getItem("Ntarefa");
      Nt = parseInt(Nt);

      Nt = Nt + 1;
      console.log(Nt);

      localStorage.setItem(Nt, tarefa);
      localStorage.setItem("Ntarefa", Nt);
      carregarTarefas(Nt);
    } else {
      localStorage.setItem(Nt, tarefa);
      localStorage.setItem("Ntarefa", Nt);
      carregarTarefas(Nt);
    }

    tempTarefa = document.querySelector("#input-teste-1");
    tempTarefa.value = "";
    tempTarefa.focus();
  });
}

apagarTarefa = function () {
  $(".apagarTarefa").on("click", function (event) {
    // event.stopPropagation();
    // event.stopImmediatePropagation();

    console.log("oi");
    var nt = this.getAttribute("nt");
    localStorage.removeItem(nt);

    this.parentElement.remove();
  });
};
apagarTarefa();

window.addEventListener("load", carregado);
