// 동영상 강의에 나온 코드를 그대로 실습하세요
// TODO : DOM으로부터 필요한 엘리먼트를 불러오세요.
const inputUserName = document.querySelector("#username");
const successMessage = document.querySelector(".success-message");
const failureMessage = document.querySelector(".failure-message");
const idEmptyMessage = document.querySelector(".id-empty-message");
const pwEmptyMessage = document.querySelector(".pw-empty-message");
const pwrtEmptyMessage = document.querySelector(".pwrt-empty-message");
const nameEmptyMessage = document.querySelector(".name-empty-message");
const phoneEmptyMessage = document.querySelector(".phone-empty-message");
const verifyEmptyMessage = document.querySelector(".verify-empty-message");

const inputPassword = document.querySelector("#password");
const inputPasswordRetype = document.querySelector("#password-retype");
const mismatchMessage = document.querySelector(".mismatch-message");
const matchMessage = document.querySelector(".match-message");

const inputName = document.querySelector("#name");
const inputPhone = document.querySelector("#phone");
const inputVerification = document.querySelector("#verification");

const signUpButton = document.querySelector("button");
const fieldset = document.querySelectorAll("fieldset");

const h1 = document.querySelector("h1");
const img = document.querySelector("img");

function isMoreThan4Length(value) {
  // TODO : 동영상 강의를 보고 이 함수를 완성하세요.
  return value.length >= 4;
}

function isMatch(password1, password2) {
  // TODO : 동영상 강의를 보고 이 함수를 완성하세요.
  return password1 === password2;
}

function isEmpty() {
  if (
    inputUserName.value === "" ||
    inputPassword.value === "" ||
    inputPasswordRetype.value === "" ||
    inputName.value === "" ||
    inputPhone.value === "" ||
    inputVerification.value === ""
  ) {
    return true;
  } else {
    return false;
  }
}

inputUserName.onkeyup = function () {
  let empty = true;
  if (isMoreThan4Length(inputUserName.value)) {
    successMessage.classList.remove("hide");
    failureMessage.classList.add("hide");
  } else {
    successMessage.classList.add("hide");
    failureMessage.classList.remove("hide");
  }

  if (inputUserName.value !== "") {
    idEmptyMessage.classList.add("hide");
  } else {
    idEmptyMessage.classList.remove("hide");
  }
};

inputPassword.onkeyup = function () {
  if (inputPassword.value !== "") {
    pwEmptyMessage.classList.add("hide");
  } else {
    pwEmptyMessage.classList.remove("hide");
  }
};

inputPasswordRetype.onkeyup = function () {
  if (isMatch(inputPassword.value, inputPasswordRetype.value)) {
    mismatchMessage.classList.add("hide");
    matchMessage.classList.remove("hide");
  } else {
    mismatchMessage.classList.remove("hide");
    matchMessage.classList.add("hide");
  }

  if (inputPassword.value !== "") {
    pwrtEmptyMessage.classList.add("hide");
  } else {
    pwrtEmptyMessage.classList.remove("hide");
  }
};

inputName.onkeyup = function () {
  if (inputName.value !== "") {
    nameEmptyMessage.classList.add("hide");
  } else {
    nameEmptyMessage.classList.remove("hide");
  }
};

inputPhone.onkeyup = function () {
  if (inputPhone.value !== "") {
    phoneEmptyMessage.classList.add("hide");
  } else {
    phoneEmptyMessage.classList.remove("hide");
  }
};

inputVerification.onkeyup = function () {
  if (inputVerification.value !== "") {
    verifyEmptyMessage.classList.add("hide");
  } else {
    verifyEmptyMessage.classList.remove("hide");
  }
};

signUpButton.onclick = function () {
  if (inputUserName.value === "") {
    idEmptyMessage.classList.remove("hide");
  } else {
    idEmptyMessage.classList.add("hide");
  }

  if (inputPassword.value === "") {
    pwEmptyMessage.classList.remove("hide");
  } else {
    pwEmptyMessage.classList.add("hide");
  }

  if (inputPasswordRetype.value === "") {
    pwrtEmptyMessage.classList.remove("hide");
  } else {
    pwrtEmptyMessage.classList.add("hide");
  }

  if (inputName.value === "") {
    nameEmptyMessage.classList.remove("hide");
  } else {
    nameEmptyMessage.classList.add("hide");
  }

  if (inputPhone.value === "") {
    phoneEmptyMessage.classList.remove("hide");
  } else {
    phoneEmptyMessage.classList.add("hide");
  }

  if (inputVerification.value === "") {
    verifyEmptyMessage.classList.remove("hide");
  } else {
    verifyEmptyMessage.classList.add("hide");
  }

  if (
    !isEmpty() &&
    isMoreThan4Length(inputUserName.value) &&
    isMatch(inputPassword.value, inputPasswordRetype.value)
  ) {
    fieldset.forEach.call(fieldset, function (node) {
      node.parentNode.removeChild(node);
    });
    h1.textContent = inputUserName.value + "님 회원가입을 축하드립니다.";
    img.setAttribute("src", "./img/keila-hotzel-2VyyvZns3qQ-unsplash.jpg");
  }
};
