// Use the value below whenever you need the value of Pi
const PI = 3.14159 ;


// sphere => radius => cube radius => multiply cube by 4/3 => multiply by pie 
const sphereVolume = function (radius) {
  return (4 / 3) * PI * radius ** 3
}

// console.log(sphereVolume(12))
console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);




// cone => w/ radius R => 1/3 area of the base * height
const coneVolume = function (radius, height) {
  return (PI * radius ** 2) * (height / 3)
}

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);




//prism => area of the base * height
const prismVolume = function (height, width, depth) {
  return height * width * depth
}

console.log(prismVolume(3, 4, 5) === 60);

const totalVolume = function (solids) {
  let total = 0

  //the parameters of the functions below are needed as shown above
  //solid.etc is called because we're interating through solid of solids
  for (const solid of solids){
    if (solid.type === 'sphere'){
      total +=  sphereVolume(solid.radius)
    } else if (solid.type === 'cone'){
      total += coneVolume(solid.radius, solid.height)
    } else {
      total += prismVolume (solid.height, solid.width, solid.depth)
    }
  }

  return total
}

const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

const duck = [
  largeSphere,
  smallSphere,
  cone
]

console.log(totalVolume(duck))
console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);