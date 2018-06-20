<template>
  <f7-page>
    <f7-navbar>
      <f7-nav-title>Configurações</f7-nav-title>
      <f7-nav-right>
        <f7-link icon-if-ios="f7:menu" icon-if-md="material:menu" panel-open="right"></f7-link>
      </f7-nav-right>
    </f7-navbar>

    <f7-list>
      <f7-list-item>
        <a href="modules/AAAAA-AAAAA-AAAAA-AAAAA/" class="item-link">
          <div class="list-title">Module Name</div>
          <small>Module Type</small> <small>999.999.999</small>
        </a>
      </f7-list-item>
      <f7-list-item title="Conectado">Sim</f7-list-item>
      <f7-list-item :link="`configurations/modules/${module.id}/driver`" title="Driver"> Selecionar Driver</f7-list-item>
      <f7-list-item :link="`configurations/modules/${module.id}/ui`" title="Interface"> Selecionar Interface</f7-list-item>
      <f7-list-item title="Ativo"><f7-toggle checked></f7-toggle></f7-list-item>
    </f7-list>
  </f7-page>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
        module: {},
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
