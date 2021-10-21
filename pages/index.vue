<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <br />
      <div align="center">
        <logoAnime />
        <v-spacer />
        <h2>คลินิกหมอครอบครัว</h2>
      </div>
      <br />

      <v-row>
        <v-col cols="12">
          <v-text-field label="ชื่อผู้ใช้*" type="user" required></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field label="รหัสผ่าน*" type="password" required
          ></v-text-field>
        </v-col>
      </v-row>

      <v-card-actions>
        <v-btn elevation="3" plain  color="blue darken-5" to="/form">
          เข้าสู่ระบบ
        </v-btn>
      </v-card-actions>
      <div class="text-xs">
        <em><small>&mdash; หากลืมชื่อผู้ใช้หรือรหัสผ่านกรุณาติดต่อทางผู้ดูแลโดยตรง </small></em>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  
};
</script>
