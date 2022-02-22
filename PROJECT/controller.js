console.log("Cargo controlador");

function cleartable() {
  var range = document.createRange();
  range.selectNodeContents(document.getElementById("table"));
  range.deleteContents();
}

//Agregar elemento
function addItem(algo) {
  let element = {
    text: "",
    completed: false
  };

  if (algo != "") {
    cleartable();
    element.text = algo;
    items.push(element);
    document.getElementById("task").value = "";
    console.log("Se agrego correctamente");
    view();
  } else {
    alert("No has escrito nada, agrega un texto");
  }
}

//Eliminar todos los elementos
function clearItems() {
  items.splice(-100)
  return cleartable()
}