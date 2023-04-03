let kineticenergy = 100; // Replace 100 with whatever value you want
let momentum = 50; // Replace 50 with whatever value you want

function calculateVelocityAndMass(ke, p) {
  let velocity = 2 * ke / p;
  let mass = 2 * ke / (velocity ** 2);

  console.log("Velocity: " + velocity);
  console.log("Mass: " + mass);
}

calculateVelocityAndMass(kineticenergy, momentum);
// thanks chatgpt for writing this quickly while i was doing work
