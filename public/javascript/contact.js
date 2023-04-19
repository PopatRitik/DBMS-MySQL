function clearForm() {
    document.getElementById("myForm").reset();
}
  
document.getElementById("submitButton").addEventListener("click", clearForm);