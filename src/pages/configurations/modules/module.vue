<template>
  <f7-page>
    <f7-navbar>
      <f7-nav-left back-link="true">
      </f7-nav-left>

      <f7-nav-title>Configurações</f7-nav-title>

      <f7-nav-right>
        <f7-link icon-material="menu" href="/"></f7-link>
      </f7-nav-right>
    </f7-navbar>

    <f7-block-title>Modulo</f7-block-title>
    <f7-list>
      <f7-list-item>
        <div class="list-title">{{ module.name }} <span class="disconnected" v-if="!module.connected"></span></div>
        <small>{{ module.type }}</small> <small>{{ module.version }}</small>
      </f7-list-item>
      <f7-list-item title="Ativo"><f7-toggle :checked="!!module.status"></f7-toggle></f7-list-item>
    </f7-list>

    <f7-block-title>Driver</f7-block-title>
    <f7-list>
      <f7-list-item v-if="module.driver.name">
        <div class="list-title">{{ module.driver.name }} <span class="install" v-if="!module.driver.installed"><f7-icon material="cloud_download"></f7-icon></span></div>
        <small>{{ module.driver.type }}</small> <small>{{ module.driver.version }}</small>
      </f7-list-item>
      <f7-list-item :link="`configurations/modules/${module.id}/driver/`" :title="module.driver.name ? 'Alterar' : 'Selecione'"></f7-list-item>
    </f7-list>

    <f7-block-title>Interface</f7-block-title>
    <f7-list>
      <f7-list-item v-if="module.ui.name">
        <div class="list-title">{{ module.ui.name }} <span class="install" v-if="!module.ui.installed"><f7-icon material="cloud_download"></f7-icon></span></div>
        <small>{{ module.ui.type }}</small> <small>{{ module.ui.version }}</small>
      </f7-list-item>
      <f7-list-item :link="`configurations/modules/${module.id}/ui/`" :title="module.ui.name ? 'Alterar' : 'Selecione'"></f7-list-item>
    </f7-list>
  </f7-page>
</template>
<script>
export default {
  computed: {
    module() {
      return this.$store.getters['modules/module'](this.$f7route.params.id);
    },
  },
};
</script>

<style scoped>
  .disconnected {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: red;
  }

  .install {

  }

  .item-inner {
    flex-wrap: wrap;
  }

  .list-title {
    flex-basis: 100%;
  }
</style>
