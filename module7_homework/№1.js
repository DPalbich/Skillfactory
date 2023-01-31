const user = {
  name: "Дмитрий",
  age: 19,
}

function getKeyAndValue(user) {
  for (let key in user) {
    if (user.hasOwnProperty(key)) {
      console.log(key + ": " + user[key]);
    }
  }
}

getKeyAndValue(user);