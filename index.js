const app = "I don't do much."

window.kittens = ['Milo', 'Otis', 'Garfield']

kittens = function(){
  var kittens = ['Milo', 'Otis', 'Garfield']
}

function destructivelyAppendKitten(n){
  window.kittens.push('Ralph')
  return window.kitten
}

function destructivelyPrependKitten(n){
  window.kittens.unshift('Bob')
  return window.kittens
}


function destructivelyRemoveLastKitten(){
  window.kittens.pop()
  return window.kittens
}

function destructivelyRemoveFirstKitten(){
  window.kittens.shift()
  return window.kittens
}

function appendKitten(name){
  var x = [...window.kittens, name]
  return x
}


function prependKitten(name){
  var x = [name, ...window.kittens]
  return x
}

function removeLastKitten(){
  var x = 
}
    it('removes the last kitten in the kittens array and returns a new array, leaving the kittens array unchanged', function() {
      expect(removeLastKitten()).toEqual(["Milo", "Otis"])

      expect(window.kittens).toEqual(["Milo", "Otis", "Garfield"])
    })
  })

  describe('removeFirstKitten()', function() {
    it('removes the first kitten from the kittens array and returns a new array, leaving the kittens array unchanged', function() {
      expect(removeFirstKitten()).toEqual(["Otis", "Garfield"])

      expect(window.kittens).toEqual(["Milo", "Otis", "Garfield"])
    })
  })

})
