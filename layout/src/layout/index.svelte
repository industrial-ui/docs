<svelte:head>
  <meta name="color-scheme" content="dark light">

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
  <Header bind:lang bind:open={open} />
</header>

<nav class="nav" class:open={open}>
  <Nav bind:lang on:close={() => open = false} />
</nav>

<script lang="ts">
  import {onMount} from 'svelte';
  import Header from '../components/layout/header.svelte';
  import Nav from '../components/layout/nav.svelte';
  import languages from 'common/languages';

  let open: boolean = false;
  let lang: string|null = null;

  onMount(() => {
    const {pathname} = location;
    lang = languages.find((lan) => pathname.includes(`/${lan}`)) || '';
    window.addEventListener('iui-language', (e: CustomEvent) => {
      const newLang = (e.detail as unknown as {lang: string}).lang;
      if (newLang !== lang) lang = newLang;
    });
  });
</script>
