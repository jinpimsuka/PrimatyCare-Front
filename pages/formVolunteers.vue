<template>
  <div class="text-center">
    <br />
    <h1>แบบฟอร์มสำหรับกรอกข้อมูล</h1>

    <v-card flat>
      <v-form ref="form" @submit.prevent="submit">
        <v-container fluid>
          <v-row>
            <!-- CID -->
            <v-col cols="12" sm="12">
              <v-text-field
                label="เลขบัตรประจำตัวประชาชน"
                required
              ></v-text-field>
            </v-col>

            <!-- Title / Prename -->
            <v-col cols="3" sm="2">
              <v-combobox
                :items="['เด็กชาย', 'เด็กหญิง', 'นาย', 'นาง', 'นางสาว']"
                label="คำนำหน้าชื่อ"
              ></v-combobox>
            </v-col>

            <!-- First Name -->
            <v-col cols="4" sm="5">
              <v-text-field
                color="purple darken-2"
                label="ชื่อจริง"
              ></v-text-field>
            </v-col>

            <!-- Last Name -->
            <v-col cols="4" sm="5">
              <v-text-field
                color="purple darken-2"
                label="นามสกุล"
              ></v-text-field>
            </v-col>

            <!-- Address -->
            <v-col cols="2" sm="1">
              <v-text-field
                color="purple darken-2"
                label="บ้านเลขที่"
              ></v-text-field>
            </v-col>

            <!-- Moo -->
            <v-col cols="2" sm="1">
              <v-combobox
                :items="[1, 2, 3, 4, 5, 6, 7]"
                label="หมู่"
              ></v-combobox>
            </v-col>

            <!-- Village -->
            <v-col cols="3" sm="2">
              <v-combobox
                :items="[
                  'ธารน้ำกรณ์',
                  'แม่กรณ์',
                  'ดอยพระบาท',
                  'รอยพระพุทธบาท',
                  'ดอยเขาควาย',
                  'หนองเหียง',
                  'วัดใหม่หน้าค่าย',
                ]"
                label="ชื่อหมู่บ้าน"
              ></v-combobox>
            </v-col>

            <!-- PCC -->
            <v-col cols="3" sm="2">
              <v-combobox
                :items="[1, 2, 3, 4]"
                label="เขตรับผิดชอบ (PCC)"
              ></v-combobox>
            </v-col>

            <!-- Amphur -->
            <v-col cols="4" sm="4">
              <v-combobox
                :items="[
                  'เมืองเชียงราย',
                  'เวียง',
                  'รอบเวียง',
                  'บ้านดู่',
                  'นางแล',
                  'แม่ข้าวต้ม',
                  'แม่ยาว',
                ]"
                label="อำเภอ"
              ></v-combobox>
            </v-col>

            <!-- Tel -->
            <v-col cols="3" sm="3">
              <v-text-field label="เบอร์โทรศัพท์"></v-text-field>
            </v-col>

            <!-- birhtdate -->
            <v-col cols="3" sm="3">
              <v-menu
                ref="birthdate"
                v-model="birthdate"
                :close-on-content-click="false"
                :return-value.sync="b_date"
                transition="scale-transition"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    v-model="b_date"
                    label="วันที่เกิด"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="b_date" no-title scrollable>
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="birthdate = false">
                    Cancel
                  </v-btn>
                  <v-btn
                    text
                    color="primary"
                    @click="$refs.birthdate.save(b_date)"
                  >
                    OK
                  </v-btn>
                </v-date-picker>
              </v-menu>
            </v-col>

            <!-- status -->
            <v-col cols="3" sm="3">
              <v-combobox
                :items="['เสียชีวิต', 'ยังมีชีวิตอยู่']"
                label="สถานะการมีอยู่"
              ></v-combobox>
            </v-col>

            <!-- dead date -->
            <v-col cols="3" sm="3">
              <v-menu
                ref="deaddate"
                v-model="deaddate"
                :close-on-content-click="false"
                :return-value.sync="d_date"
                transition="scale-transition"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="d_date"
                    label="วันที่เสียชีวิต"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="d_date" no-title scrollable>
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="deaddate = false">
                    Cancel
                  </v-btn>
                  <v-btn
                    text
                    color="primary"
                    @click="$refs.deaddate.save(d_date)"
                  >
                    OK
                  </v-btn>
                </v-date-picker>
              </v-menu>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-card>

    <v-btn elevation="3" plain color="blue darken-5" @click="snackbar = true">
      บันทึกข้อมูล
      <v-snackbar v-model="snackbar" :timeout="timeout" color="success" text outlined top right dense>
      <strong>{{ text }}</strong>
    </v-snackbar>
    </v-btn>
    
  </div>
</template>

<script>
export default {
  data: () => ({
    b_date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),

    d_date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),

    d_date: null,
    b_date: null,
    birthdate: false,
    deaddate: false,

    snackbar: false,
    text: 'บันทึกข้อมูลเรียบร้อย',
    timeout: 1000,
  }),
};
</script>