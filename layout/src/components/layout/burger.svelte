<script lang="ts">
  export let open: boolean;
</script>

<label>
  <input
    type="checkbox"
    name="menu-opener"
    id="menu-opener"
    bind:checked={open}
  >
  <i />
</label>

<style>
  i {
    transform: scale(1);
    transition: all .3s;
  }

  i,
  i::after,
  i::before {
    box-sizing: border-box;
    position: relative;
    display: block;
    width: 20px;
    height: 2px;
    border-radius: 3px;
    transition: all .3s;
    background: black;
  }

  i::after,
  i::before {
    content: "";
    position: absolute;
    top: -6px;
    transition: all .3s;
  }

  i::after {
    top: 6px;
    transition: all .3s;
  }

  i {
    margin-right: 2px;
  }

  label, input {
    display: none;
  }

  @media screen and (max-width: 768px) {
    label {
      display: block;
      margin-right: 1rem;
    }

    input:checked + i {
      transition: background 0s, height .3s;
      width: 22px;
      height: 2px;
      margin-right: 0;
      background: transparent;
      border-radius: 40px;
    }

    input:checked + i::after,
    input:checked + i::before {
      content: "";
      display: block;
      box-sizing: border-box;
      position: absolute;
      width: 16px;
      height: 2px;
      transform: rotate(45deg);
      top: 0;
      left: 1px;
      transition: all .3s;
    }

    input:checked + i::after {
      transform: rotate(-45deg);
      transition: all .3s;
    }
  }
</style>
