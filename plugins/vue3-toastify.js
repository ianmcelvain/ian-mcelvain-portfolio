import { toast, updateGlobalOptions } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.config.globalProperties.Vue3Toastify = {
    install: () => {
      updateGlobalOptions({
        autoClose: 1000,
      });
    },
  };

  return {
    provide: {
      toast,
    },
  };
});
