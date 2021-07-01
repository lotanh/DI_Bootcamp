const getRobots = () => {
  fetch('http://localhost:3000/robots')
  .then(res => res.json())
  .then(data=>{
    console.log(data)
  })
  .catch(err=>{
    console.log(err);
  })
}
