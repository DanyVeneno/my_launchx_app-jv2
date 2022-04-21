const Spiderman = require('./../app/spiderman')

describe("Unit test for spiderman class", () =>{


	test('1)Create an spiderman object', () => {
// Aqui escribimos el código que queremos usar tal cuál
// Quiero poder instanciar un objeto spiderman con esta fromació
const andrewGarfield= new spiderman("spiderman sony",31,"andrew garfield",2,"sony")

//Aqui validamos los parametros de funconalidad 
		expect(andrewGarfield.name).toBe("Spiderman Sony");
		expect(andrewGarfiel.age).toBe(31)
		expect(andrewGarfield.actor).toBe("Andrew Garfield")
		expect(andrewGarfiel.movies).tobe(31)
		expect(andrewGarfield.studio).toBe("sony")
   });

})
