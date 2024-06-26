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
    apiKey: process.env.VUE_APP_API_KEY,
    authDomain: process.env.VUE_APP_AUTH_DOMAIN,
    projectId: process.env.VUE_APP_PROJECT_ID,
    storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
    appId: process.env.VUE_APP_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

createApp(App).use(router).use(vuetify).use(VueTextareaAutosize).mount("#app");
