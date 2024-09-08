<script lang="ts">
    import { Button } from "$lib/components/ui/button";
    import { Textarea } from "$lib/components/ui/textarea";

    let text = "";

    function encode() {
      text = encodeURI(text)
    }

    function decode() {
      text = decodeURI(text)
    }

</script>


<svelte:head>
    <title>URL Encode / Decode</title> 
</svelte:head>

<h1>URL Encode / Decode</h1>

<br/>
<Textarea rows="15" bind:value={text}/>
<br/>
<Button on:click={encode}>Encode</Button>
<Button on:click={decode}>Decode</Button>
<style>
  h1 {
		margin-top: 0;
		font-size: 1.5em;
		margin-bottom: 20px;
	}
  h2 {
    margin-top: 0;
  }
</style>

