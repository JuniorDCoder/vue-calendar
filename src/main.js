import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import VueTextareaAutosize from "vue-textarea-autosize";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { loadFonts } from "./plugins/webfontloader";

loadFonts();
const firebaseConfig = {
  apiKey: "AIzaSyCTH6TS6kQowO_VSAOrYqkOBaOhq6gVuc0",
  authDomain: "vue-calendar-2a625.firebaseapp.com",
  projectId: "vue-calendar-2a625",
  storageBucket: "vue-calendar-2a625.appspot.com",
  messagingSenderId: "891944312563",
  appId: "1:891944312563:web:8e0e6df5e4229755cd2186",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

createApp(App).use(router).use(vuetify).use(VueTextareaAutosize).mount("#app");
