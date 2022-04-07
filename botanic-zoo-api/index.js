import animal from 'botanic-zoo-api'
animal.getAnimal('lion')
  .then(response => console.log(response))
  .catch(err => console.error(err))

  animal.getAnimal('Cat')
  .then(response => console.log(response))
  .catch(err => console.error(err))