let arr = [1, 2, 1];

let sameArr = true;
for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length; j++) {
        if (arr[i] !== arr[j])
            sameArr = false;
    }
}

if (sameArr)
    console.log("true");
else
    console.log("false");