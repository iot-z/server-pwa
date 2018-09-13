<template>
  <f7-page>
    <div class="container-flex">
      <f7-navbar :title="module.name" back-link="Back"></f7-navbar>
      <iframe ref="iframe" :class="{ offline: !module.connected }" :src="`ui/${module.id}/`" @load="onLoad" frameborder="0"></iframe>
    </div>
  </f7-page>
</template>

<script>

let subscribe;

export default {
  computed: {
    module() {
      return this.$store.getters['modules/module'](this.$f7route.params.id);
    },
  },
  methods: {
    onLoad() {
      const iframe = this.$refs.iframe.contentWindow;
      const module = this.module;

      iframe.postMessage({
        type: 'create',
        moduleId: module.id,
        state: module.state,
        actions: module.actions,
      }, '*');
    },

    onPostMessage(e) {
      const module = this.module;
      const data = e.data;

      if (data.moduleId === this.module.id) {
        if (data.type === 'state') {
          module.state.set(data.prop, data.val);
        }

        if (data.type === 'actions') {
          module.actions[data.action](data.params);
        }
      }
    },
  },

  created() {
    subscribe = this.$store.subscribe((mutation) => {
      const iframe = this.$refs.iframe.contentWindow;
      const module = this.module;

      if (mutation.type === 'modules/state' && mutation.payload.moduleId === module.id) {
        const payload = mutation.payload;

        iframe.postMessage({
          type: 'state',
          prop: payload.prop,
          val: payload.val,
        }, '*');
      }
    });

    window.addEventListener('message', this.onPostMessage);
  },

  destroyed() {
    subscribe();

    window.removeEventListener('message', this.onPostMessage);
  },
};
</script>

<style scoped>
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

  .offline {
    opacity: .3;
    filter: grayscale(100);
    pointer-events: none;
  }
</style>
