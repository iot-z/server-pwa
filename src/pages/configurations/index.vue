<template>
  <f7-page>
    <f7-navbar>
      <f7-nav-title>IOTZ</f7-nav-title>
      <f7-nav-right>
        <f7-link icon-if-ios="f7:menu" icon-if-md="material:menu" panel-open="right"></f7-link>
      </f7-nav-right>
    </f7-navbar>

    <f7-block-title>Configurações</f7-block-title>
    <f7-list>
      <f7-list-item link="schedules" title="Agendamento"></f7-list-item>
      <f7-list-item link="scenes" title="Cenas"></f7-list-item>
      <f7-list-item link="events" title="Eventos"></f7-list-item>
      <f7-list-item link="modules" title="Modulos"></f7-list-item>
      <f7-list-item link="store" title="Loja"></f7-list-item>
    </f7-list>
  </f7-page>
</template>
<script>
export default {
  data() {
    return {
      modules: [],
    };
  },
};
</script>
