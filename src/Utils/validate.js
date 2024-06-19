export const chechValidData = (email, password, inputName) =>{
    const isEmailValid = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(password);
    // const isNameValid = /^[A-Za-z]+(?: [A-Za-z]+)*(?:-[A-Za-z]+)*$/.test(inputName);


     

    if(!isEmailValid) return "Email Id is not valid";
    if(!isPasswordValid) return "Password is not valid";
    // if(!isNameValid) return "Name is not Valid";
    return null;
}