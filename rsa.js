// input
const p = 11;
const q = 3;

// calculate parameters
const n = p * q;
const z = (p - 1) * (q - 1);
const d = findNumberWithNoCommonFactors(z);
const e = moduloInverse(d, z);

function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
  }

  return true;
}

function findNumberWithNoCommonFactors(number) {
  let candidate = 2;
  while (true) {
    if (isPrime(candidate) && number % candidate !== 0) {
      return candidate;
    }
    candidate++;
  }
}

function moduloInverse(d, z) {
  d = ((d % z) + z) % z; // Ensure d is a positive integer
  for (let e = 1; e < z; e++) {
    if ((e * d) % z === 1) {
      return e; // Found the modular multiplicative inverse
    }
  }
  return null; // Modular inverse doesn't exist
}

function alphabetPosition(text) {
  var chari,
    arr = [],
    alphabet = "abcdefghijklmnopqrstuvwxyz",
    i;

  for (var i = 0; i < text.length; i++) {
    chari = text[i].toLowerCase();
    if (alphabet.indexOf(chari) !== -1) {
      arr.push(alphabet.indexOf(chari));
    }
  }
  return arr;
}

function getCipherNumberGivenAPlainTextCharacter(ascPlainCharacterValue) {
  console.log("p", p);
  console.log("q", q);
  console.log("n", n);
  console.log("z", z);
  console.log("d", d);
  console.log("e", e);

  const numericValue = alphabetPosition(ascPlainCharacterValue)[0] + 1;
  console.log("numericValue ", numericValue);

  const plaintTextToE = numericValue ** e;
  console.log("plaintTextToE ", plaintTextToE);

  const cipher = plaintTextToE % n;
  console.log("cipher ", cipher);

  const cipherToD = cipher ** d;
  console.log("cipherToD ", cipherToD);

  const decrypted = cipherToD % n;
  console.log("decrypted ", decrypted);

  return decrypted;
}

getCipherNumberGivenAPlainTextCharacter("S");
