<script setup lang="ts">
import { ref } from 'vue'
import { Switch } from '@headlessui/vue'

const enabled = ref(false)
</script>

<template>
  <div class="py-16">
    <div class="grid grid-cols-2 gap-4 items-center">
      <label for="switch">JS</label>
      <Switch
        id="switch"
        v-model="enabled"
        :class="enabled ? 'bg-teal-900' : 'bg-teal-700'"
        class="zz relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
      >
        <span
          aria-hidden="true"
          :class="enabled ? 'translate-x-9' : 'translate-x-0'"
          class="pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"
        />
      </Switch>

      <label for="switch">UnoCSS</label>
      <Switch
        id="switch"
        v-model="enabled"
        class="ui-checked:bg-teal-900 ui-not-checked:bg-teal-700 relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
      >
        <span
          aria-hidden="true"
          :class="enabled ? 'translate-x-9' : 'translate-x-0'"
          class="pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"
        />
      </Switch>

      <label for="switch">UnoCSS VG</label>
      <Switch
        id="switch"
        v-model="enabled"
        class="ui-checked:(bg-teal-900) ui-not-checked:(bg-teal-700) relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
      >
        <span
          aria-hidden="true"
          :class="enabled ? 'translate-x-9' : 'translate-x-0'"
          class="pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"
        />
      </Switch>

      <label for="switch">UnoCSS Nested</label>
      <Switch
        id="switch"
        v-model="enabled"
        class="ui-checked:(bg-teal-900) ui-not-checked:(bg-teal-700) relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
      >
        <span
          aria-hidden="true"
          class="pointer-events-none ui-checked:(translate-x-9 bg-red-200) ui-not-checked:translate-x-0 inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"
        />
      </Switch>
    </div>
  </div>
</template>
