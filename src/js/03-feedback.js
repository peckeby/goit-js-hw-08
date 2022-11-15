import throttle from 'lodash.throttle';


const form = document.querySelector(".feedback-form");
const emailS = document.querySelector("input");
const messageS = document.querySelector("textarea");


const updateStorageInfo = () => localStorage.setItem("feedback-form-state", JSON.stringify({email:`${emailS.value}`, message:`${messageS.value}`}));

form.addEventListener("input", throttle(updateStorageInfo, 500));

const storageInfo = JSON.parse(localStorage.getItem("feedback-form-state"));

const autoFill = ({email, message}) => {
  if (email || message){
    emailS.value = email;
    messageS.value = message;
  }
};

autoFill(storageInfo);

const submitFunc = (event) => {
  event.preventDefault();

  if (!emailS.value || !messageS.value) {
    return alert("Please fill in all the fields!");
  }
  console.log(storageInfo);
  localStorage.clear();
  emailS.value = "";
  messageS.value = "";
}

form.addEventListener("submit", submitFunc);

