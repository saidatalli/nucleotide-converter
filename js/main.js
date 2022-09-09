document.querySelector("#complementDna").addEventListener('click', getComplementDna)
document.querySelector("#reverseDna").addEventListener('click', getReverseComplementDna)
document.querySelector("#mRna").addEventListener('click', getMrna)
document.querySelector("#gC").addEventListener('click', getGc)

const dictionary = {A: "T", T: "A", G: "C", C: "G", a: "t", t: "a", g: "c", c: "g"};
const dnaCheck = {B: "B", b: "b", D: "D", d: "d", E: "E", e: "e", F: "F", f: "f", H: "H", h: "h", I: "I", i: "i", J: "J", j: "j", K: "K", k: "k", L: "L", l: "l", M: "M", m: "m", N: "N", n: "n", O: "O", o: "o", P: "P", p: "p", Q: "Q", q: "q", R: "R", r: "r", S: "S", s: "s", U: "U", u: "u", V: "V", v: "v", W: "W", w: "w", X: "X", x: "x", Y: "Y", y: "y", Z: "Z", z: "z"}

function getComplementDna () {
    let dna = document.querySelector("#dna1").value
    dna = dna.split("")
    if (dna.length < 1) {
        document.querySelector(".complementDnaContainer").textContent = `DNA strand is too short` 
    }  
    else if (dna.some(elem => dnaCheck[elem])) {
        document.querySelector(".complementDnaContainer").textContent = `Please enter a valid DNA sequence`
    }
    else if ( dna.every(elem => dictionary[elem])) {
        let complementDna = dna.map( el => dictionary[el]).join("")
        document.querySelector(".complementDnaContainer").textContent = `Converted DNA = ${complementDna}`  
    }   
}

function getReverseComplementDna () {
    let dna = document.querySelector("#dna2").value
    dna = dna.split("")
    if (dna.length < 1) {
        document.querySelector(".reverseDnaContainer").textContent = `DNA strand is too short`
    }  
    else if (dna.some(elem => dnaCheck[elem])) {
        document.querySelector(".reverseDnaContainer").textContent = `Please enter a valid DNA sequence`
    }
    else if ( dna.every(elem => dictionary[elem])) {
        let reverseComplementDna = dna.map( el => dictionary[el])
                                .reverse()
                                .join("")
        document.querySelector(".reverseDnaContainer").textContent = `Converted DNA = ${reverseComplementDna}`    
    }   
}

function getMrna () {
    let dna = document.querySelector("#dna3").value
    dna = dna.split("")
    if (dna.length < 1) {
        document.querySelector(".mRnaContainer").textContent = `DNA strand is too short`
    }  
    else if (dna.some(elem => dnaCheck[elem])) {
        document.querySelector(".mRnaContainer").textContent = `Please enter a valid DNA sequence`
    }
    else if ( dna.every(elem => dictionary[elem])) {
        let mrnaStrand = dna.map( el => {
            if(el === "A") {
                return "U"
            } else if (el === "a") {
                return "u"
            }
            else {
                return dictionary[el]
            } 
        }).join("")
        document.querySelector(".mRnaContainer").textContent = `Converted mRNA = ${mrnaStrand}`    
    }   
}

function getGc () {
    let dna = document.querySelector("#dna4").value
    dna = dna.split("")
    const dnaCheck = {B: "B", b: "b", D: "D", d: "d", E: "E", e: "e", F: "F", f: "f", H: "H", h: "h", I: "I", i: "i", J: "J", j: "j", K: "K", k: "k", L: "L", l: "l", M: "M", m: "m", N: "N", n: "n", O: "O", o: "o", P: "P", p: "p", Q: "Q", q: "q", R: "R", r: "r", S: "S", s: "s", V: "V", v: "v", W: "W", w: "w", X: "X", x: "x", Y: "Y", y: "y", Z: "Z", z: "z"}   
    if ( !dna.includes("G") && !dna.includes("C") && !dna.includes("g") && !dna.includes("c") ) {
        document.querySelector(".gcContainer").textContent = `Nucleotide does not contain G or C`
    } 
    else if (dna.some(elem => dnaCheck[elem])) {
        document.querySelector(".gcContainer").textContent = `Please enter a valid nucleotide sequence`
    }
    else {
        const count = dna.filter(el => el === 'G' || el === 'C' || el === "g" || el === "c").length;
        let result = ((count / dna.length) * 100).toFixed(2) 
        document.querySelector(".gcContainer").textContent = `GC Content = ${result}%`
    }
}