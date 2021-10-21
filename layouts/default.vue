<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" :clipped="clipped" fixed app>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon color="teal darken-3">{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <a class="navbar-brand">
        <v-img src="/LOGO_header.png" height="60px"></v-img>
      </a>
      <v-spacer />
      <v-avatar>
        <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
      </v-avatar>
    </v-app-bar>

    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

    <!-- footer -->
    <v-footer padless color="green darken-1">
      <v-card-text class="py-2 white--text text-center">
        <v-btn v-for="icon in icons" :key="icon" class="mx-2 white--text" icon>
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
        <h3>Tel. 053-910600</h3>
        <h3>E-mail: staff@fmcrh.org</h3>
      </v-card-text>
      <v-spacer />

      <!-- contact -->
      <v-spacer />
      <v-card-text class="py-2 white--text text-center">
        <h2>กลุ่มงานเวชกรรมสังคม โรงพยาบาลเชียงรายประชานุเคราะห์</h2>
        <h3>ตำบลเวียง อำเภอเมือง จังหวัดเชียงราย 57000</h3>
      </v-card-text>

      <!-- Copyright -->
      <v-divider></v-divider>
      <v-card-text class="py-2 white--text text-center">
        <strong>Copyright</strong> © {{ new Date().getFullYear() }}
      </v-card-text>
    </v-footer>
  </v-app>
</template>


<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,

      items: [
        {
          icon: "mdi-account-group-outline ",
          title: "เข้าสู่ระบบ",
          to: "/",
        },
        {
          icon: "mdi-clipboard-edit-outline",
          title: "ข้อมูล",
          to: "/data",
        },
        {
          icon: "mdi-chart-bar",
          title: "Dashboard",
          to: "/Dashboard",
        },
      ],

      icons: ["mdi-phone-in-talk", "mdi-gmail" ],
      title: "คลินิกหมอครอบครัว",
    };
  },
};
</script>
