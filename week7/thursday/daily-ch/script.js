const anagram = (a , b) => {
    newA = a.replace(/\s/g, '').split("").sort();
    newB = b.replace(/\s/g, '').split("").sort();
    console.log(newB === newA ? a + " and " + b + " are anagrams!" : : a + " and " + b + " are not anagrams.")
}
anagram('Astronomer', 'Moon starrer')
anagram('School master', 'The classroom')
anagram('The Morse Code', 'Here come dots')