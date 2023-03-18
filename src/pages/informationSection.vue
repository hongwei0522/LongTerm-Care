<template>
    <div class="information-contain">
        <div class="information-contain-prev">
            <router-link to="loginSection">
                <img class="information-contain-prev_arrow" src="../assets/prevArrow.png" alt="prev arrow">
            </router-link>
                <img class="information-contain_register" src="../assets/registerStep1.png" alt="register Step1">
        </div>
        <div class="information-contain-inputBox">
            <label class="information-contain-inputBox_label" for="userEmail">電子郵件</label><br>
            <input class="information-contain-inputBox_input" id="userEmail" type="email" placeholder="abc@gmail.com" />
        </div>
        <div class="information-contain-inputBox nameContain">
            <label class="information-contain-inputBox_label" for="userName">姓名</label><br>
            <div class="information-contain-inputBox-Name">
                <input class="information-contain-inputBox-Name_userFirstName" id="userFirstName" type="text" placeholder="姓氏" />
                <input class="information-contain-inputBox-Name_userLastName" id="userLastName" type="text" placeholder="名字" />
            </div>
        </div>
        <div class="information-contain-inputBox phoneContain">
            <label class="information-contain-inputBox_label" for="phoneNumber">手機號碼</label><br>
            <input class="information-contain-inputBox_input" id="phoneNumber" type="text" placeholder="0900123456" />
        </div>
        <div class="information-contain-informationContain">
            <router-link to="passwordSection">
                <button class="information-contain-informationContain_button">下一步</button>
            </router-link>
        </div>
        <div class="information-containLogo">
            <img class="information-contain_logo" src="../assets/registerLogo.png" alt="registerLogo">
        </div>

    </div>
</template>
<style>
.information-contain{
  height: 100vh;
  width: 100%;
  padding: 0px 24px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
}
.information-contain-prev{
  position: relative;
  margin-top: 16px;
}
.information-contain-prev_arrow{
  position: absolute;
  width: 18px;
  height: 30px;
}
.information-contain_register{
  width: 343px;
  margin-top: 62px;
  margin-bottom: 45px;
}
.information-contain-title{
  width: 100%;
  margin-left: 24px;
  display: flex;
  justify-content: start;
}
.information-contain-inputBox{
  width: 343px;
}
.nameContain{
  margin-top: 12px;
}
.phoneContain{
  margin-top: 12px;
}
.information-contain-inputBox_label{
  margin-left: 12px;
}
.information-contain-inputBox_input{
  width: 322px;
  margin-top: 4px;
}
.information-contain-inputBox-Name{
  margin-top: 4px;
  display: flex;
  justify-content: space-between;
}
.information-contain-inputBox-Name_userFirstName{
  width: 84px;
}
.information-contain-inputBox-Name_userLastName{
  width: 205px;
}
input[type=email]{
  border-radius:24px;
  border-color: #6A7D48;
  padding:11px 0px 11px 20px;
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
.information-contain-forgetPassword{
  width: 100%;
  margin: 13px 24px 0px 24px ;
}
.information-contain-informationContain{
  margin: 32px 24px 0px 24px;
  display: flex;
  justify-content: center;
}
.information-contain-informationContain_button{
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
.information-containLogo{
  margin-top: 45px;
  margin-bottom: 21px;
}
.information-contain_logo{
  width: 320px;
  height: 220px;
}
</style>