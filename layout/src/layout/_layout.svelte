<svelte:head>
  <link type="text/css" rel="stylesheet" href="/style/fonts.css" />
  <link type="text/css" rel="stylesheet" href="/style/layout.css" />
  <link type="text/css" rel="stylesheet" href="/style/layout-header.css" />
</svelte:head>

<header class="header">
  <Header bind:open={open} />
</header>

<nav class="nav" class:open={open}>
  <Nav on:close={() => open = false} />
</nav>

<section class="section">
  <slot />
</section>

<script lang="ts">
  import Header from './_components/header.svelte';
  import Nav from './_components/nav.svelte';

  export let segment: string;
  let open: boolean = false;
</script>
