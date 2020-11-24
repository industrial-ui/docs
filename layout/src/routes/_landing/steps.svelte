<script>
  import ChevronIcon from './icons/chevron.svelte';
  import CirclesIcon from './icons/steps-circles.svelte';
</script>

<section class="steps">
  <CirclesIcon />

  <div class="step">
    <div class="step-head">
      <h2>Step 1</h2>
      <ChevronIcon />
    </div>
    <p>
      Easy to get started. Just run:
    </p>
    <code>
      <pre>
        $ npm install industrial-ui-vue
      </pre>
    </code>
    <p>
      And install the iui-plugin
    </p>
    <code>
      <pre>
import Vue from 'vue';
import &#123; iui &#125; from 'industrial-ui-vue';
import config from './config';

Vue.use(iui, config);
      </pre>
    </code>
  </div>
  <ChevronIcon />

  <div class="step second">
    <div class="step-head">
      <h2>Step 2</h2>
      <ChevronIcon />
    </div>
    <p>Configure for your styles:</p>

    <code>
      <pre>
const config = &#123;
  components: &#123;
    button: &#123;
      class: 'iui-button',
    &#125;,
  &#125;,
&#125;;
      </pre>
    </code>
    <p class="help">
      * For more information about configuration, read
      <a href="https://vue.industrial-ui.com/eng/configuration">documentation</a>
    </p>
  </div>
  <ChevronIcon />

  <div class="step">
    <div class="step-head">
      <h2>Step 3</h2>
    </div>
    <p>
      And then, use in Vue:
    </p>
    <code>
      <pre>
&lt;template&gt;
  &lt;IuiDropdown&gt;
    &lt;template #trigger&gt;
      &lt;IuiButton&gt;Click on me&lt;/IuiButton&gt;
    &lt;/template&gt;
    Hello, world!
  &lt;/IuiDropdown&gt;
&lt;/template&gt;

&lt;script&gt;
  import &#123;IuiButton, IuiDropdown&#125;
    from 'industrial-ui-vue';
  export default &#123;
    components: &#123; IuiDropdown, IuiButton &#125;,
  &#125;;
&lt;/script&gt;
      </pre>
    </code>
    <!--<p class="help">
      * For usage with another libraries, see
      <a href="/docs/installation">installation guide</a>
    </p>-->
  </div>
</section>

<style>
  section {
    padding: 40px 0;
    background: #6C6EE5;
    position: relative;
    overflow-x: hidden;
    overflow-y: hidden;
  }

  .step {
    width: 90%;
    margin: 0 auto;
    border-radius: 10px;
    padding: 15px;
    background: white;
    position: relative;
    z-index: 3;
  }

  .step-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .step h2 {
    font-size: 22px;
    color: #6C6EE5;
    text-transform: uppercase;
  }

  .step p {
    font-size: 13px;
    color: #1E1F72
  }

  .step code {
    width: 100%;
    color: #F168B4;
  }

  .step code pre {
    overflow-x: auto;
    overflow-y: hidden;
  }

  .step a {
    color: #6C6EE5;
  }

  :global(.step .chevron-icon) {
    display: none;
  }

  @media screen and (min-width: 480px) and (max-width: 1023px) {
    .step {
      width: 60%;
    }
  }

  @media screen and (min-width: 1024px) {
    :global(.chevron-icon) {
      display: none;
    }

    :global(.step .chevron-icon) {
      display: block;
      transform: rotate(-90deg);
      width: 26px;
      height: 26px;
    }

    section {
      display: flex;
      justify-content: center;
      padding: 130px 0;
    }

    .step {
      width: 400px;
      margin: 0;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      padding: 30px;
    }

    .step code {
      flex-grow: 1;
      font-size: 12px;
    }

    .step.second {
      margin: 0 30px !important;
    }

    .step h2 {
      font-size: 36px;
    }

    .step p {
      font-size: 16px;
    }
  }

  @media screen and (min-width: 1024px) and (max-width: 1179px) {
    .step {
      width: 300px;
    }
  }

  @media screen and (min-width: 1180px) and (max-width: 1279px) {
    .step {
      width: 350px;
    }
  }
</style>
