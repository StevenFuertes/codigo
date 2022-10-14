/*
* Reto #7
* CONTANDO PALABRAS
* Dificultad: MEDIA
*
* Enunciado: Crea un programa que cuente cuantas veces se repite cada
*  palabra y que muestre el recuento final de todas ellas.
* - Los signos de puntuación no forman parte de la palabra.
* - Una palabra es la misma aunque aparezca en mayúsculas y minúsculas.
*/

//* "Hola, mi nombre es Linder. Mi nombre completo es linder linder (linder3hs)."

function countWords(text){
    const result = []

    text.toLowerCase().split(" ").forEach(function(word){
        // (/\W/g,"") esto quita los signos de puntuacion
        const cleanWord = word.replaceAll(/\W/g,"")
        console.log(cleanWord)

        const search = result.find((res)=> res.word === cleanWord)

        if(search === undefined) {
            result.push({
                word: cleanWord,
                count: 1
            })
        } else {
            search.count++
        }
    })
    console.log(result)
}

countWords("Hola, mi nombre es Linder. Mi nombre completo es linder linder (linder3hs).")

// con npm init creamos el archivo de configuracion package.json