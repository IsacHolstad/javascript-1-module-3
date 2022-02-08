const messageContainer = document.querySelector(".message-container");
const messageInfo = document.querySelector(".message-info");
const messageWarning = document.querySelector(".message-warning");
const messageSucces = document.querySelector(".message-succes");
const messageError = document.querySelector(".message-error");

messageContainer.innerHTML =  createToaster ("container", "file is uploaded"); 
messageInfo.innerHTML =  createToaster ("info", "info about files");
messageWarning.innerHTML =  createToaster ("warning", "file is uploaded");
messageSucces.innerHTML =  createToaster ("succes", "file is uploaded");
messageError.innerHTML =  createToaster ("error", "file is uploaded");

