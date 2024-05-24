export const emailValidation = (email="", exceptDomainList="")=>{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let domain = email.split('@')[1]
    if(emailRegex.test(email) && !exceptDomainList.includes(domain)){
        return true
    } else {
        return false
    }
}