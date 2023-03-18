<template>
    <div class="password-contain">
        <div class="password-contain-prev">
            <router-link to="loginSection">
                <img class="password-contain-prev_arrow" src="../assets/prevArrow.png" alt="prev arrow">
            </router-link>
                <img class="password-contain_register" src="../assets/registerStep2.png" alt="register Step2">
        </div>
        <div class="password-contain-inputBox passwordContain">
            <label class="password-contain-inputBox_label" for="userPassword">設定密碼</label><br>
            <input class="password-contain-inputBox_input" id="userPassword" type="password" />
        </div>
        <div class="password-contain-checkBox">
            <label class="password-contain-checkBox_label">
                <input type="checkbox" value="include" />
                <span>需包含英文及數字</span>
            </label>
            <label class="password-contain-checkBox_label">
                <input type="checkbox" value="least" />
                <span>至少 8 碼</span>
            </label>
        </div>
        <div class="password-contain-inputBox checkContain">
            <label class="password-contain-inputBox_label" for="userPassword">確認密碼</label><br>
            <input class="password-contain-inputBox_input" id="userPassword" type="password" />
        </div>
        <div class="password-contain-passwordContain">
            <button class="password-contain-passwordContain_button">確認</button>
        </div>
        <div class="password-containLogo">
            <img class="password-contain_logo" src="../assets/registerLogo.png" alt="registerLogo">
        </div>

    </div>
</template>
<style>
.password-contain{
  height: 100vh;
  width: 100%;
  padding: 0px 24px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
}
.password-contain-prev{
  position: relative;
  margin-top: 16px;
}
.password-contain-prev_arrow{
  position: absolute;
  width: 18px;
  height: 30px;
}
.password-contain_register{
  width: 343px;
  margin-top: 62px;
  margin-bottom: 45px;
}
.password-contain-inputBox{
  width: 343px;
}
.passwordContain{
  margin-top: 12px;
}
.checkContain{
  margin-top: 17px;
}
.password-contain-inputBox_label{
  margin-left: 12px;
}
.password-contain-inputBox_input{
  width: 322px;
  margin-top: 4px;
}
.password-contain-inputBox-Name{
  margin-top: 4px;
  display: flex;
  justify-content: space-between;
}
input[type=text]{
  border-radius:24px;
  border-color: #6A7D48;
  padding:11px 0px 11px 20px; 
}
::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  font-size: 16px;
  font-family: SF Pro Text;
  color: #6A7D488A;
  opacity: 1; /* Firefox */
}
:-ms-input-placeholder { /* Internet Explorer 10-11 */
  color: #6A7D488A;
}

::-ms-input-placeholder { /* Microsoft Edge */
  color: #6A7D488A;
}
.password-contain-forgetPassword{
  width: 100%;
  margin: 13px 24px 0px 24px ;
}
.password-contain-passwordContain{
  margin: 32px 24px 0px 24px;
  display: flex;
  justify-content: center;
}
.password-contain-checkBox{
  width: 324px;
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  align-items: start;
}
.password-contain-checkBox_label{
  display: flex;
  align-items: center;
}
input[type=checkbox]{
  height: 20px;
  width: 20px;
  margin-right: 8px;
  user-select: none;
}
/* input[type=checkbox]:checked {
    background-color: red;
} */
.password-contain-passwordContain_button{
  width: 342px;
  padding: 8px;
  color: #FFFFFF;
  font-size: 14px;
  font-weight: 600;
  font-family: Hiragino Sans CNS;
  line-height: 21px;
  letter-spacing: 8px;
  background: #6A7D48;
  border-radius: 24px;
}
.password-containLogo{
  margin-top: 45px;
  margin-bottom: 21px;
}
.password-contain_logo{
  width: 320px;
  height: 220px;
}
</style>