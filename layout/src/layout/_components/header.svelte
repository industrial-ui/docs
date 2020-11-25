<script lang="ts">
  export let open: boolean;
</script>

<div class="left">
  <a href="/">
    <div class="logo">
      <h2>Industrial-ui</h2>
    </div>
  </a>
</div>

<div class="right">
  <a href="https://github.com/industrial-ui" target="_blank" rel="noreferrer noopener">
    <img src="/img/github.svg" alt="link to github repository" />
  </a>
  <label>
    <input
      type="checkbox"
      name="menu-opener"
      id="menu-opener"
      bind:checked={open}
    >
    <i class="burger" />
  </label>
</div>
