<script setup lang="tsx">
  import Icon from "./Icon";

  const options = [
    {
      id: 1,
      icon: () => <span>Icon 1</span>
    },
    {
      id: 2,
      icon: () => <span>Icon 2</span>
    }
  ]
</script>

<template>
  <div>
    Demo:
    <br />
    <div v-for="it in options" :key="it.id">
      <Icon :icon="it.icon"></Icon>
    </div>
  </div>
</template>
