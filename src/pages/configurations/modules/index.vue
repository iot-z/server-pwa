<template>
  <f7-page>
    <f7-navbar>
      <f7-nav-title>Configurações</f7-nav-title>
      <f7-nav-right>
        <f7-link icon-if-ios="f7:menu" icon-if-md="material:menu" panel-open="right"></f7-link>
      </f7-nav-right>
    </f7-navbar>

    <f7-block-title>Módulos</f7-block-title>
    <f7-block v-if="!modules.length">
      Nenhum módulo encontrado
    </f7-block>
    <f7-list v-if="modules.length">
      <f7-list-item v-for="module in modules" :key="module.id" :link="`modules/${module.id}/`" :title="module.name">Connected: {{ module.connected }}</f7-list-item>
    </f7-list>
  </f7-page>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {};
  },

  computed: {
    ...mapGetters({
      modules: 'modules/modules',
    }),
  }
};
</script>
