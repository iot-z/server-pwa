<template>
  <f7-page>
    <div class="container-flex">
      <f7-navbar :title="module.name" back-link="Back"></f7-navbar>

      <iframe src="" frameborder="0"></iframe>
    </div>
  </f7-page>
</template>

<script>
export default {
  data() {
    return {
      module: {
        name: 'Teste',
        url: 'teste',
      },
    };
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
