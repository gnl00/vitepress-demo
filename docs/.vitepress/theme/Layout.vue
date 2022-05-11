<script setup>
import DefaultTheme  from "vitepress/theme";
const { Layout } = DefaultTheme

// Layout 只会加载一次

console.log('theme layout')
</script>

<template>
  <Layout>
    <template #page-bottom>
      <div style="width: auto; height: auto; background-color: lightcoral; padding: 5px; margin: 5px; border-radius: 5px;">
        text of layout, slot page-bottom
      </div>
    </template>
  </Layout>
</template>
