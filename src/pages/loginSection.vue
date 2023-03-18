<template>
    <div class="login-contain">
        <div class="login-contain-prev">
            <router-link to="/">
                <img class="login-contain-prev_arrow" src="../assets/prevArrow.png" alt="prev arrow">
            </router-link>
            <img class="login-contain_logo" src="../assets/registerLogo.png" alt="registerLogo">
        </div>
        <div class="login-contain-title">
            <h2 class="login-contain-title_text">哈囉，歡迎使用OOO</h2>
        </div>
        <div class="login-contain-inputBox">
            <label class="login-contain-inputBox_label" for="userEmail">電子郵件</label><br>
            <input class="login-contain-inputBox_input" id="userEmail" type="email" placeholder="abc@gmail.com" />
        </div>
        <div class="login-contain-inputBox passwordContain">
            <label class="login-contain-inputBox_label" for="userPassword">密碼</label><br>
            <input class="login-contain-inputBox_input" id="userPassword" type="password" />
        </div>
        <div class="login-contain-forgetPassword">
            <p class="login-contain-forgetPassword_text">忘記密碼？</p>
        </div>
        <div class="login-contain-loginContain">
            <button class="login-contain-loginContain_button">登入</button>
        </div>
        <div class="login-contain-registerContain">
            <router-link to="informationSection">
                <p class="login-contain-registerContain_text">我要註冊</p>
            </router-link>
        </div>

    </div>
</template>
<style>
.login-contain{
  height: 100vh;
  width: 100%;
  padding: 0px 24px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
}
.login-contain-prev{
  position: relative;
  margin-top: 16px;
}
.login-contain-prev_arrow{
  position: absolute;
  width: 18px;
  height: 30px;
}
.login-contain_logo{
  width: 320px;
  height: 220px;
}
.login-contain-title{
  width: 100%;
  margin-left: 24px;
  display: flex;
  justify-content: start;
}
.login-contain-title_text{
  text-align: left;
  font-size: 20px;
  line-height: 30px;
  font-weight: 300;
  letter-spacing: 8px;
  font-family: Hiragino Sans CNS;
}
/* .login-contain-inputBox{
  padding: 0px 24px;
} */
.passwordContain{
  margin-top: 12px;
}
.login-contain-inputBox_label{
  margin-left: 12px;
}
.login-contain-inputBox_input{
  width: 322px;
  margin-top: 4px;
  /* margin: 4px 24px 0px 24px ; */
}
input[type=email]{
  border-radius:24px;
  border-color: #6A7D48;
  padding:11px 0px 11px 20px;
}
input[type=password]{
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
.login-contain-forgetPassword{
  width: 100%;
  margin: 13px 24px 0px 24px ;
}
.login-contain-forgetPassword_text{
  color: #6A7D48;
  font-size: 12px;
  font-weight: 600;
  font-family: Hiragino Sans CNS;
  text-align: right;
}
.login-contain-loginContain{
  margin: 13px 24px 0px 24px;
  display: flex;
  justify-content: center;
}
.login-contain-loginContain_button{
  width: 342px;
  padding: 8px;
  color: #868686;
  font-size: 14px;
  letter-spacing: 8px;
  background: #E1DFDF;
  border-radius: 24px;
}
.login-contain-registerContain_text{
  cursor: pointer;
  margin-top: 16px;
  color: #6A7D48;
  font-size: 14px;
  font-weight: 600;
  font-family: Hiragino Sans CNS;
  line-height: 21px;
  letter-spacing: 8px;
}
</style>