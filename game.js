function getComputerChoice(){
  const array = ["rock","paper","scissors"];
  randomNumber = Math.floor(Math.random() * 3); 
  console.log(array[randomNumber])
  return array[randomNumber];
}