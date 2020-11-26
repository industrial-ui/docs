<svelte:head>
  <!--<meta name="color-scheme" content="dark light">-->

  <meta name="keywords" content="industrial-ui, iui, ui-kit, ui-components, library, design, logic, javascript, svelte, front-end, npm">
  <meta name="author" content="VanishMax">

  <meta property="og:type" content="website">
  <meta property="og:url" content="https://industrial-ui.com/">
  <meta property="og:image" content="https://industrial-ui.com/logo-192.png">

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
  import Header from '../components/layout/header.svelte';
  import Nav from '../components/layout/nav.svelte';

  let open: boolean = false;
</script>
