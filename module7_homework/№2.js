const user = {
    name: "Дмитрий",
    age: 19
  }
  
  let str = "name";
  
  function checkingObjectProperties(str, user) {
    for (let key in user) {
      if (key === str) {
        return true;
      }
    }
    return false;
  }
  
  console.log(checkingObjectProperties(str, user));