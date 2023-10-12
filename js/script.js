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

  let match = false;
  let i;

  for (i = 0; i <= emailList.length - 1; i++) {
    if (emailValidator.includes(emailList[i])) {
      match = true;
    } else { }
  }

  let email = document.createElement('div');

  if (match == true) {
    email.innerText = `Accesso Consentito`
  } else {
    email.innerText = `Accesso Negato, Si prega di Verificare`
  }

  document.querySelector('.commentContainer').appendChild(email);
}
)
