export function capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
}

export const reverseString=(string)=>{
    return string.split('').reverse().join('')
}

export const calculator = {
    add(a,b){
        return a + b
    },

    subtract(a,b){
        return a - b
    },

    multiply(a,b){
        return a * b
    },

    divide(a,b){
        return a / b
    }
}

export function ceaserCipher(string, shift){
        return string
          .split("")
          .map(char => {
            let code = char.charCodeAt(0);
      
            // Uppercase letters
            if (code >= 65 && code <= 90) {
              return String.fromCharCode(((code - 65 + shift) % 26) + 65);
            }
      
            // Lowercase letters
            if (code >= 97 && code <= 122) {
              return String.fromCharCode(((code - 97 + shift) % 26) + 97);
            }
      
            // Non-alphabetical characters remain unchanged
            return char;
          })
          .join("");
      }
      

  export function analyzeArray(array){
      const object = {
        average : array.reduce((sum,num) => sum + num, 0)/array.length,
        min: Math.min(...array),
        max: Math.max(...array),
        length: array.length
      }

    return object;
  }    
