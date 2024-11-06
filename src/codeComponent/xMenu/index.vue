
<template>
  <div class="card flex justify-center">
    <div v-focustrap class="w-full sm:w-80 flex flex-col gap-6">
      <IconField>
        <InputIcon>
          <i class="pi pi-user" />
        </InputIcon>
        <InputText id="input" v-model="name" type="text" placeholder="Name" autofocus fluid />
      </IconField>

      <IconField>
        <InputIcon>
          <i class="pi pi-envelope" />
        </InputIcon>
        <InputText id="email" v-model="email" type="email" placeholder="Email" fluid />
      </IconField>

      <div class="flex items-center gap-2">
        <Checkbox id="accept"  name="accept" value="Accept" />
        <label for="accept">I agree to the terms and conditions.</label>
      </div>

      <Button type="submit" label="Submit" class="mt-2" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
onMounted(()=>{

  const name = ref('123');
  const email = ref('123');
  const accept = ref(false);
})
</script>
