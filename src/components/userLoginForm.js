import React, {useState} from "react";
import { useTranslation } from 'react-i18next';
import { MdOutlineMail } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import {languages} from '../constant'
import { emailValidation } from "../utils/validation"

const UserLoginForm = ()=>{
    const { t } = useTranslation()
    const { i18n } = useTranslation();
    const [showPassword, setShowPassword] = useState(false)
    const [isEmailValid, setIsEmailValid] = useState(true)
    const handlepasswordToggle = ()=>{
        setShowPassword(!showPassword)
    }

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    const handleValidation = (email)=>{
        let exceptEmailsList = ['gmail.com','yahoo.com','outlook.com','hotmail.com']
        setIsEmailValid(emailValidation(email, exceptEmailsList))
    }

    const {email, password, forgot_password, language, login} = t('formlabels')

    return(
        <div className="form_wrapper">
            <form>
                <div className="wrapper">
                    <div className="field_wrapper">
                        <label>{email}:</label>
                        <div className="field">
                            <span className="icon"><MdOutlineMail/>  </span>
                            <input onBlur={(e)=> handleValidation(e.target.value)} type="email" prefix="Enter your email"/>
                            {!isEmailValid && <p className="error">Enter valid email id</p>}
                            
                        </div>
                    </div>
                    <div className="field_wrapper">
                        <label>{password}:</label>
                        <div className="field">
                            <span className="icon"><CiLock/></span>
                            <input type={showPassword ? 'text': 'password'} prefix="Enter your password"/>
                            <span 
                                className="password_toggle"
                                onClick={handlepasswordToggle}
                            >
                                {showPassword ? <IoMdEyeOff/> : <IoMdEye/>}
                            </span>
                            
                            <a className="forgot_password" href="">{forgot_password}</a>
                        </div>
                    </div>
                    <div className="field_wrapper">
                        <label>{language}:</label>
                        <div className="field">
                            <select value={i18n.language} onChange={(e)=>changeLanguage(e.target.value)}>
                                {languages?.map((lang, ind)=>(
                                    <option key={ind} value={lang.code}>{lang.language}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
                <button className="login">{login}</button>
            </form>
        </div>
    )
}

export default UserLoginForm