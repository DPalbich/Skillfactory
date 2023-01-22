function outputNumbersInASecond(num1, num2) {

    let intervalId = setInterval(function () {
        if (num1 <= num2) {
          console.log(num1);
          num1++;
        }
        // else if (num1 >= num2) {    Про этот участок кода хотел бы спросить у Вас. Задачи состоит в том, чтобы пользователь вводил числа и они выводились по порядку начиная с первого числа. Но если пользователь введет сначала число большее а потом меньшее, то это условие необходимо, но у меня не получилось видимо из-за малого кол-ва практики.
        //   console.log(num1);
        //   num1--;
        // }
        else clearInterval(intervalId);
    }, 1000);
}

outputNumbersInASecond(1, 5);