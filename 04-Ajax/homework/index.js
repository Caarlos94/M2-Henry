$("#boton").click(function(){
  $("#lista").empty();
  $.get("http://localhost:5000/amigos", function(amigos){
    amigos.forEach(element => {
      $("#lista").append(`<li>${element.name}</li>`);
    });
  })
})

$("#search").click(function(){
  let valorInput = $("#input")[0].value
  $.get(`http://localhost:5000/amigos/${valorInput}`, function(amigo){
    $("#amigo").text(amigo.name);
  })
})

$("#delete").click(function () {
  let valorInput = $("#inputDelete")[0].value;
  $.ajax({
    url: `http://localhost:5000/amigos/${valorInput}`,
    type: "DELETE",
    success: function (result) {
      $("#lista").empty();
      result.forEach(element => {
        $("#lista").append(`<li>${element.name}</li>`);
      });
      $("#success").text("Tu amigo ha sido eliminado")
    },
  });
});
































// $("#boton").click(function(){
//   $("#lista").empty();
//   $.get("http://localhost:5000/amigos", function(amigos){
//     amigos.forEach(el => $("#lista").append(`<li>${el.name}</li>`))
//   })
// })

// $("#search").click(function(){
//   let input = $("#input").val();
//   $.get(`http://localhost:5000/amigos/${input}`, function(amigo){
//     $("#amigo").text(`${amigo.name}`)
//     $("#input").val("");
//   })
// })