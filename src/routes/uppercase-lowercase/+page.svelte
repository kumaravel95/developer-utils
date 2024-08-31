<script lang="ts">
    import { Button } from "$lib/components/ui/button";
    import { Textarea } from "$lib/components/ui/textarea";

    let text = "";

    function uppercase() {
      text = text.toUpperCase()
    }

    function lowercase() {
      text = text.toLowerCase()
    }

</script>

<svelte:head>
    <title>Uppercase / Lowercase</title> 
</svelte:head>

<h1>Uppercase / Lowercase</h1>

<br/>
<Textarea rows="15" bind:value={text}/>
<br/>
<Button on:click={uppercase}>UPPERCASE</Button>
<Button on:click={lowercase}>lowercase</Button>
<style>
  h2 {
    margin-top: 0;
  }
</style>

