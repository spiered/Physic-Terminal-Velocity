function calculateTV(){
  let mass = document.getElementById("mass_object").value;
  let drag_coefficient = 0.294;
  let air_density = 1.225;
  let gravity = 9.80665;
  let area = document.getElementById("area").value;
  let result = Math.sqrt((2*mass*gravity)/(air_density*area*drag_coefficient));
  show(result);
}
function show(x){
  var answer = document.getElementById("answer");
  answer.innerHTML = "The terminal velocity of this object is " + x + " m/s ≈ " + Math.round(x) + " m/s";
}