/*
 * Important facts about the birds of Booleana.
 *
 * Coloration and markings:
 *
 *   - Flobby Birds and Bloggy Birds are red.
 *   - Flibble Birds and Globby Birds are not red.
 *   - Flobby Birds and Flibble Birds are spotted.
 *   - Bloggy Birds and Globby Birds are not spotted.
 *
 * Diet:
 *
 *   - Flobby Birds eat fish, nuts, and worms.
 *   - Bloggy Birds eat mice, nuts, and worms.
 *   - Flibble Birds eat fish, mice, and worms.
 *   - Globby Birds eat fish, mice, and nuts.
 *
 */

function isFlobbyBird(b1, b2){
  return b1 && b2
}

function isBloggyBird(b1, b2){
  return b1 && !b2
}

function isFlibbleBird(b1, b2){
  return !b1 && b2
}

function isGlobbyBird(b1, b2){
  return !b1 && !b2
}

function eatsWorms(b1, b2){
  return !isGlobbyBird(b1, b2)
}

function eatsNuts(b1, b2){
  return !isFlibbleBird(b1, b2)
}

function eatsFish(b1, b2){
  return !isBloggyBird(b1, b2)
}

function eatsMice(b1, b2){
  return !isFlobbyBird(b1, b2)
}

function isRed(s1){
  if (s1 === 'Flobby' || s1 === 'Bloggy'){
    return true
  }
  else{
    return false
  }
}

function isSpotted(s1){
  if (s1 === 'Flobby' || s1 === 'Flibble'){  
    return true
  }
  else{
    return false
  }
}

function isNotRed(s1){
  return s1 === 'Globby' || s1 === 'Flibble'
  
}

function isNotSpotted(s1){
  return s1 === 'Globby' || s1 === 'Bloggy'
  
}