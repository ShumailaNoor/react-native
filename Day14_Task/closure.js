//-----------------------Example 1------------------------------
function createCounter(){
    let count = 1;
    return function(){
        console.log("Count:", count++);
    }
}
const counter = createCounter();
counter(); 
counter(); 
counter(); 


//-----------------------Example 2------------------------------
function createSecret(initialSecret = "default secret") {
  let secret = initialSecret; 

  return {
    get: function() {
      return secret;
    },
    set: function(newSecret) {
      secret = newSecret;
    }
  };
}

const secret = createSecret("secret 1");

console.log(secret.get());
secret.set("new secret");
console.log(secret.get()); 