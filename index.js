

var letters = document.getElementsByClassName("letters")
var fields = document.getElementsByClassName("forms")
var radioBox = document.getElementsByClassName("button")
var radioField = document.getElementById("radioField")
var requiredLength = document.getElementsByClassName("max-min")
var max8 = document.getElementsByClassName("max8")
var email = document.getElementsByClassName("email")

$('#body').on("submit",function(e){
    requiredField(fields,e)
     maxMin(requiredLength,e)
     maxEight(max8,e)
    radioReq(radioField,radioBox,e)
    emailValid(email,e)
    lettersOnly(letters,e)
})

function radioReq (radioField,radioBox,event){
    for(i=0;i<radioBox.length;i++){
        if (radioBox[i].value === "1" && radioBox[i].checked === true && radioField.value === '') {
            radioField.style.background = "red"
            event.preventDefault()
        }
    }
}

function maxEight(name, event) {
    for (i = 0; i < name.length; i++) {
        if(name[i].value.length > 8) {
            name[i].style.background = "red"
            event.preventDefault()
        }
    }
}

function maxMin (name,event) {
    for (i = 0; i < name.length; i++) {
        if(name[i].name === 'required' && name[i].value.length < 10 || name[i].value.length > 25) {
            name[i].style.background = "red"
            event.preventDefault()
        } else if (name[i].name === 'notRequired' && name[i].value.length > 0 && name[i].value.length < 10) {
                name[i].style.background = "red"
                event.preventDefault()
            }
        }
}

function requiredField (name, event) {
    for (i = 0; i < name.length; i++) {
        if (name[i].value === "") {
            name[i].style.background = "red"
            event.preventDefault()
        }
    }
}

function lettersOnly (field,event) {
    var regexLetters = /^[A-Za-z]+$/
    for(i=0;i<field.length;i++) {
        if (field[i].value === '') {
        }
        else if (!field[i].value.match(regexLetters)) {
            field[i].style.background = "red"
            event.preventDefault()
        }
    }
}

function emailValid(field,event) {
    var emailReg =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    for(i=0;i<field.length;i++) {
        if (field[i].value === '') {
        }
        else if (field[i].name === "email" && !field[i].value.match(emailReg)) {
            field[i].style.background = "red"
            event.preventDefault()
        }
    }
}