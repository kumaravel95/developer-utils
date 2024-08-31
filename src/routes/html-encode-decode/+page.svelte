<script lang="ts">
    import { Button } from "$lib/components/ui/button";
    import { Textarea } from "$lib/components/ui/textarea";

    let text = "";

    function encode() {
      text = encodeURIComponent(text)
    }

    function decode() {
      text = decodeURIComponent(text)
    }

</script>

<svelte:head>
    <title>HTML Encode / Decode</title> 
</svelte:head>

<h1>HTML Encode / Decode</h1>

<br/>
<Textarea rows="15" bind:value={text}/>
<br/>
<Button on:click={encode}>Encode</Button>
<Button on:click={decode}>Decode</Button>
<style>
  h2 {
    margin-top: 0;
  }
</style>

