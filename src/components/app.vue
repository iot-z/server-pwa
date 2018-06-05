<template>

  <!-- App -->
  <div id="app">
    <iotz-splash ref="splash"></iotz-splash>

    <!-- Statusbar -->
    <f7-statusbar></f7-statusbar>

    <!-- Main View -->
    <f7-view id="main-view" url="/" main></f7-view>
  </div>
</template>

<script>

export default {
  mounted() {
    this.$refs.splash.show();

    setTimeout(() => this.$refs.splash.hide(), 2000);
  },
};
</script>
