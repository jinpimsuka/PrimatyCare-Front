<template>
  <img
    class="VuetifyLogo"
    alt="Vuetify Logo"
    src="/LOGO_login.png"
  >
</template>

<style>
.VuetifyLogo {
  height: 150px;
  width: 180px;
  transform: rotateY(560deg);
  animation: turn 4s ease-out forwards 1s;
}

@keyframes turn {
  100% {
    transform: rotateY(0deg);
  }
}
</style>

