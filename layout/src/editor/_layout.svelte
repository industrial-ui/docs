<svelte:head>
  <meta name="color-scheme" content="dark light">

  <meta name="keywords" content="industrial-ui, iui, ui-kit, ui-components, library, design, logic, javascript, svelte, front-end, npm">
  <meta name="author" content="VanishMax">

  <meta property="og:type" content="website">
  <meta property="og:url" content="https://industrial-ui.com/">
  <meta property="og:image" content="https://industrial-ui.com/logo-192.png">

  <link type="text/css" rel="stylesheet" href="/style/variables.css" />
  <link type="text/css" rel="stylesheet" href="/style/fonts.css" />
  <link type="text/css" rel="stylesheet" href="/style/layout.css" />
  <link type="text/css" rel="stylesheet" href="/style/layout-header.css" />
  <link type="text/css" rel="stylesheet" href="/style/editor.css" />
  <title>Docs Editor | Industrial-ui</title>
</svelte:head>

<header class="header">
  <Header hasNav={false} hasLang={false} />
</header>

<slot />

<script lang="ts">
  // import {onMount} from 'svelte';
  import Header from '../components/layout/header.svelte';
</script>
