// Code your solution in this file!
function calculateVertical(start, end){
  let feetInBlock = 264;

  let blocksTraveled = Math.abs((end - start));

  return blocksTraveled *feetInBlock
}