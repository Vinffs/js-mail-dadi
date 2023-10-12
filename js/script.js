const checkBtn = document.querySelector('.checkButton');

checkBtn.addEventListener('click', function () {
  const emailValidator = document.getElementById('userEmail').value;
  const emailList = [
    'a@gmail.com',
    'b@gmail.com',
    'c@gmail.com',
    'd@gmail.com',
    'e@gmail.com',
    'f@gmail.com',
  ]

  for (let i = 0; i <= emailList.length - 1; i++) {
    let email = document.createElement('div');

    if (emailList[i].includes(emailValidator)) {
      email.innerText = `Email Valida`
    } else {
      email.innerText = `Email Non valida, Si prega di Verificare`
    }

    document.querySelector('.commentContainer').appendChild(email);


  }
}
)
