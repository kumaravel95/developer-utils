<script>
    import { appConfig } from '../config';
    import { goto } from '$app/navigation';
    const { appName } = appConfig;
  </script>
  
  <nav>
    <h1 on:click={() => goto('/')}>{appName}</h1>
  </nav>
  
  <style>
    nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  
    h1 {
      margin: 0;
      cursor: pointer;
    }
  </style>