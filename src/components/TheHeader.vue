<script setup lang="ts"></script>

<template>
  <header class="flex h-[76px] justify-between border-b-2 border-gray-200 px-3">
    <img alt="Vue logo" class="w-20" src="@/assets/logo.png" width="125" height="125" />

    <nav class="flex grow items-center justify-center gap-3 text-gray-400">
      <RouterLink to="/">Форма</RouterLink>
      <RouterLink to="/preview">Превью</RouterLink>
    </nav>
  </header>
</template>
