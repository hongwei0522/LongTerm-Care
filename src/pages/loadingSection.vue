<script></script>
<template>
    <div class="loading-contain">
        <router-link to="loginSection">
            <img class="loading-contain_logo" src="../assets/loadingLogo.png" alt="loadingLogo">
            <p class="loading-contain_title">標語標語標語標語</p>
        </router-link>
    </div>
</template>
<style>
.loading-contain{
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.loading-contain_logo{
  width: 192px;
  height: 174px;
}
.loading-contain_title{
  font-size: 24px;
  line-height: 36px;
  font-weight: 600;
}
a{
  text-decoration: none;
  color: #000000;
}
</style>