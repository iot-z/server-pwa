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

    <f7-list>
      <f7-list-item>
        <div class="list-title">{{ module.name }}</div>
        <small>{{ module.type }}</small> <small>{{ module.version }}</small>
      </f7-list-item>
      <f7-list-item title="Conectado">{{ module.connected ? 'Sim' : 'Não' }}</f7-list-item>
      <f7-list-item :link="`configurations/modules/${module.id}/driver/`" title="Driver"> Selecionar Driver</f7-list-item>
      <f7-list-item :link="`configurations/modules/${module.id}/ui/`" title="Interface"> Selecionar Interface</f7-list-item>
      <f7-list-item title="Ativo"><f7-toggle :checked="module.status"></f7-toggle></f7-list-item>
    </f7-list>
  </f7-page>
</template>
<script>

export default {
  data() {
    return {
      module: this.$store.getters['modules/module'](this.$f7route.params.id),
    };
  },
};
</script>

<style>
  .item-inner {
    flex-wrap: wrap;
  }

  .list-title {
    flex-basis: 100%;
  }
</style>
