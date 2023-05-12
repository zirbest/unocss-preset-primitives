<script setup lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
</script>

<template>
  <div class="m-a w-56 text-right">
    <Menu as="div" class="relative inline-block text-left">
      <div>
        <MenuButton
          class="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Options
          <span
            class="i-radix-icons-chevron-down ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
            aria-hidden="true"
          />
        </MenuButton>
      </div>

      <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <MenuItems
          class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <div class="px-1 py-1">
            <MenuItem v-slot="{ active }">
              <button
                class="group flex w-full items-center rounded-md px-2 py-2 text-sm"
                :class="[active ? 'bg-violet-500 text-white' : 'text-gray-900']"
              >
                <span
                  class="i-radix-icons-drawing-pin-filled mr-2 h-5 w-5 text-violet-400"
                  aria-hidden="true"
                />
                js api
              </button>
            </MenuItem>

            <MenuItem>
              <button
                ui-active="bg-violet-500 text-white" ui-not-active="text-gray-900"
                class="group flex w-full items-center rounded-md px-2 py-2 text-sm"
              >
                <span
                  class="i-radix-icons-drawing-pin-filled mr-2 h-5 w-5 text-violet-400"
                  aria-hidden="true"
                />
                presetAttributify
              </button>
            </MenuItem>

            <MenuItem>
              <button
                class="ui-active:(bg-violet-500 text-white) ui-not-active:(text-gray-900) group flex w-full items-center rounded-md px-2 py-2 text-sm"
              >
                <span
                  class="i-radix-icons-drawing-pin-filled mr-2 h-5 w-5 text-violet-400"
                  aria-hidden="true"
                />
                transformerVariantGroup
              </button>
            </MenuItem>

            <MenuItem>
              <button
                class="ui-active:bg-violet-5 ui-active:text-white ui-not-active:text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-sm"
              >
                <span
                  class="i-radix-icons-drawing-pin-filled mr-2 h-5 w-5 text-violet-400"
                  aria-hidden="true"
                />
                presetUno
              </button>
            </MenuItem>
          </div>
        </MenuItems>
      </transition>
    </Menu>
  </div>
</template>
