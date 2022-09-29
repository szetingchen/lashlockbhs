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

const isFlobbyBird=(b1, b2)=>{
  return b1 && b2;
}

const isBloggyBird=(b1, b2)=>{
  return b1 && !b2;
}

const isFlibbleBird=(b1, b2)=>{
  return !b1 && b2;
}

const isGlobbyBird=(b1, b2)=>{
  return !b1 && !b2;
}

const eatsWorms=(b1, b2)=>{
  return !isGlobbyBird(b1, b2);
}

const eatsNuts=(b1, b2)=>{
  return !isFlibbleBird(b1, b2);
}

const eatsFish=(b1, b2)=>{
  return !isBloggyBird(b1, b2);
}

const eatsMice=(b1, b2)=>{
  return !isFlobbyBird(b1, b2);
}

const isRed=(s1)=>{
  return s1 === 'Flobby' || s1 === 'Bloggy';
}

const isSpotted=(s1)=>{
  return s1 === 'Flobby' || s1 === 'Flibble';
}

const isNotRed=(s1)=>{
  return s1 === 'Globby' || s1 === 'Flibble';
  
}

const isNotSpotted=(s1)=>{
  return s1 === 'Globby' || s1 === 'Bloggy';
  
}