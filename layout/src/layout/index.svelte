<svelte:head>
  <link type="text/css" rel="stylesheet" href="/style/fonts.css" />
  <link type="text/css" rel="stylesheet" href="/style/layout.css" />
  <link type="text/css" rel="stylesheet" href="/style/layout-header.css" />
  <link type="text/css" rel="stylesheet" href="/style/layout-navigation.css" />
</svelte:head>

<header class="header">
  <Header bind:open={open} />
</header>

<nav class="nav" class:open={open}>
  <Nav on:close={() => open = false} />
</nav>

<script lang="ts">
  import Header from './_components/header.svelte';
  import Nav from './_components/nav.svelte';

  let open: boolean = false;
</script>
