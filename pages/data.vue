<template>
  <v-data-table :headers="headers" :items="data" :search="search">
    <template v-slot:top>
      <v-toolbar flat>

        <v-toolbar-title> ข้อมูลที่รวบรวม </v-toolbar-title>
        <v-spacer></v-spacer>

        <!-- search button -->
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>

        <!-- UPDATE button-->
        <v-dialog v-model="dialog" max-width="500px">
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>

                  <!-- table details -->
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.Cid"
                      label="เลขบัตรประชาชน"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.Name"
                      label="ชื่อ - สกุล"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.Tambon"
                      label="ตำบล"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.Amphur"
                      label="อำเภอ"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.Birthdate"
                      label="ว/ด/ป เกิด"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.TEL"
                      label="เบอร์ติดต่อ"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.TY_Area"
                      label="Type Area"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close"> Cancel </v-btn>
              <v-btn color="blue darken-1" text @click="save"> Save </v-btn>
            </v-card-actions>

          </v-card>
        </v-dialog>

        <!-- Delete button -->
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5"
              >Are you sure you want to delete this item?</v-card-title
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete"
                >Cancel</v-btn
              >
              <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                >OK</v-btn
              >
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>

      </v-toolbar>
    </template>

    <!-- mdi-pencil/delete -->
    <template v-slot:item.actions="{ item }">
      <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
      <v-icon small color="deep-orange darken-1" @click="deleteItem(item)">
        mdi-delete
      </v-icon>
    </template>
  </v-data-table> 
  
</template>

<script>
const url = "/MOCK_DATA.json";
export default {
  data: () => ({
    dialog: false,
    dialogDelete: false,

    data: null,
    search: "",

    headers: [
      { text: "เลขบัตรประชาชน", value: "Cid" },
      { text: "ชื่อ - สกุล", value: "Name" },
      { text: "ตำบล", value: "Tambon" },
      { text: "อำเภอ", value: "Amphur" },
      { text: "ว/ด/ป เกิด", value: "Birthdate" },
      { text: "เบอร์ติดต่อ", value: "TEL" },
      { text: "Type Area", value: "TY_Area" },
      { text: "แก้ไข/ลบ", value: "actions", sortable: false },
    ],

    data: [], //desserts
    editedIndex: -1,
    editedItem: {
      Cid: 0,
      Name: 0,
      Tambon: 0,
      Amphur: 0,
      Birthdate: 0,
      TEL: 0,
      TY_Area: 0,
    },
    defaultItem: {
      Cid: 0,
      Name: "",
      Tambon: "",
      Amphur: "",
      Birthdate: 0,
      TEL: 0,
      TY_Area: 0,
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "" : "แก้ไขข้อมูล";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.data = [];
    },

    editItem(item) {
      this.editedIndex = this.data.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.data.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.data.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.data[this.editedIndex], this.editedItem);
      } else {
        this.data.push(this.editedItem);
      }
      this.close();
    },
  },

  async mounted() {
    /* เมื่อทำการนอกเหนือการควบคุม จะใส่ try{----} catch{}*/
    try {
      /* ทุกครั้งที่ดึงข้อมูลมาจาก APIs จะใช้ await(ทำก่อน), async เสมอ */
      const res = await this.$axios.get(url); // respond ที่ได้มาจาก APIs
      console.log(res.data);
      this.data = res.data;
    } catch (e) {
      //e = error
      console.error(e);
    }
  },
};
</script>