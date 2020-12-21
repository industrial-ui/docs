<script lang="ts">
  import {onMount} from 'svelte';
  import {fade} from 'svelte/transition';

  const LSItemName = 'iui-editor-rules';
  export let overlay: boolean = false;

  onMount(async () => {
    const rulesRead = localStorage.getItem(LSItemName);
    overlay = !rulesRead;
  });

  const close = () => {
    overlay = false;
    localStorage.setItem(LSItemName, 'true');
  }
</script>

{#if overlay}
  <div class="overlay" transition:fade={{duration: 300}}>
    <button type="button" class="close" on:click={close}>✖</button>
    <section>
      <h1>Editor usage instructions</h1>

      <p>
        The editor allows you to write the articles of any type. It supports text highlighting,
        adding the headers, links, images, code blocks and code showcases.
      </p>

      <button type="button" class="finish" on:click={close}>I have read the instructions</button>
    </section>
  </div>
{/if}

<style>
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--bg-section);
    z-index: 10;
  }

  button.close {
    position: absolute;
    right: 0;
    padding: 1.5rem 2rem;
    background-color: transparent;
    border: none;
    font-size: 1.5em;
    cursor: pointer;
    color: var(--text-color-primary);
  }
  button:focus {
    outline: none;
  }

  section {
    width: 90%;
    margin: auto;
  }

  section h1 {
    text-align: center;
    margin-bottom: 2rem;
  }

  section p {
    text-align: justify;
  }

  section button {
    display: block;
    margin: 3rem auto 0;
    padding: 0.75rem 1.5rem;
    border-style: solid;
    border-width: 1px;
    border-radius: 0.5rem;
    background-color: transparent;
    border-color: var(--text-color-primary);
    color: var(--text-color-primary);
    text-transform: uppercase;
    transition: all .3s;
    cursor: pointer;
  }

  @media screen and (min-width: 1024px) {
    section {
      width: 50%;
    }
  }
</style>
