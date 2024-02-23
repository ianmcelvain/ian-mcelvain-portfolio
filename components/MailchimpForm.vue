<template>
  <form @submit.prevent="submit">
    <input v-model="form.email" type="email" placeholder="Email Address" />
    <button class="button" type="submit">
      <span>Submit</span>
    </button>
  </form>
</template>

<script setup>
const { $toast } = useNuxtApp();
const { addToNewsletter, MailchimpStatus } = useMailchimp();

const toastDefaults = {
  autoClose: 3000,
  isLoading: false,
};

const form = reactive({
  email: '',
});

async function submit(e) {
  e.preventDefault();

  const responseToast = $toast.loading('Subscribing...');

  try {
    const response = await addToNewsletter(form.email);

    if (response.result === MailchimpStatus.SUCCESS) {
      $toast.update(responseToast, {
        type: 'success',
        render: response.msg,
        ...toastDefaults,
      });
    } else {
      $toast.update(responseToast, {
        type: 'error',
        render: response.msg,
        ...toastDefaults,
      });
    }
  } catch (e) {
    console.error(e);
    $toast.update(responseToast, {
      type: 'error',
      render: `There's a snake in my boot and I cannot process this request.`,
      ...toastDefaults,
    });
  }
}
</script>

<style scoped></style>
