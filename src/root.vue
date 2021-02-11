<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
export default {
  name: 'Root',
  components: {
  },
  computed: {
    layout() {
      const routeLayoutType = this.$route.meta.layout || 'topbar';
      return `${routeLayoutType}-layout`;
    },
  },
};
</script>
