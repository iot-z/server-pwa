<template>
  <f7-page>
    <f7-navbar>
      <f7-nav-title>IOTZ</f7-nav-title>
      <f7-nav-right>
        <f7-link icon-if-ios="f7:settings" icon-if-md="material:settings" href="/config/"></f7-link>
      </f7-nav-right>
    </f7-navbar>

    <f7-block-title>Connected {{ connected }}</f7-block-title>
    <f7-block-title>Cenas</f7-block-title>
    <f7-block v-if="!scenes.length">
      Nenhuma cena cadastrada
    </f7-block>
    <f7-list v-if="scenes.length">
      <f7-list-item v-for="scenes in scenes" :key="scenes.id" :link="`scenes/${scenes.id}/`" :title="scenes.name"></f7-list-item>
    </f7-list>

    <div v-if="aliases.length">
      <f7-block-title>Atalhos</f7-block-title>
      <f7-list>
        <f7-list-item v-for="alias in aliases" :key="alias.id" :link="'aliases/'+alias.id" :title="alias.name"></f7-list-item>
      </f7-list>
    </div>

    <f7-block-title>Módulos</f7-block-title>
    <f7-block v-if="!modules.length">
      Nenhum módulo conectado no momento
    </f7-block>
    <f7-list>
      <f7-list-item v-for="module in modules" :key="module.id" :link="module.connected ? `modules/ui/${module.id}/` : false" :title="module.name" :class="{ disconnected: !module.connected}"></f7-list-item>
    </f7-list>
  </f7-page>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      aliases: 'modules/aliases',
      modules: 'modules/modulesActives',
      scenes: 'modules/scenes',
      connected: 'connected',
    }),
  },
};
</script>

<style>
  .list li {
    transition: opacity .2s linear;
  }

  .disconnected .item-content .item-inner {
    opacity: .55;
  }
</style>
