<template>
  <f7-page>
    <div class="container-flex">
      <f7-navbar :title="module.name" back-link="Back"></f7-navbar>
      <iframe ref="iframe" :src="`ui/${module.id}/`" @load="onLoad" frameborder="0"></iframe>
    </div>
  </f7-page>
</template>

<script>
export default {
  computed: {
    module() {
      return this.$store.getters['modules/module'](this.$f7route.params.id);
    },
  },
  methods: {
    onLoad() {
      /* eslint-disable no-console */
      console.log('load', this);

      const iframe = this.$refs.iframe.contentWindow;
      const module = this.module;

      iframe.postMessage({
        type: 'create',
        state: module.state,
        actions: module.actions,
      }, '*');
    },

    onPostMessage(e) {
      /* eslint-disable no-console */
      console.log(e);
    },
  },

  created() {
    window.addEventListener('message', this.onPostMessage);
  },

  destroyed() {
    window.removeEventListener('message', this.onPostMessage);
  },
};
</script>

<style>
  .container-flex {
    display: flex;
    align-items: stretch;
    flex-direction: column;
    height: 100%;
  }

  iframe {
    width: 100%;
    flex-grow: 1;
  }
</style>
