<script>
    import { appConfig } from '../config';
    import { goto } from '$app/navigation';
    const { appName } = appConfig;

    let isDarkMode = false;

    // Check if the user has set a dark mode preference
    if (typeof window !== 'undefined') {
        isDarkMode = localStorage.getItem('darkMode') === 'true';

        if (isDarkMode) {
            document.documentElement.classList.add('dark'); 
        }
    }

    function toggleDarkMode() {
        isDarkMode = !isDarkMode;
        
        if (typeof window !== 'undefined') {
          localStorage.setItem('darkMode', isDarkMode ? 'true' : 'false');
          document.documentElement.classList.toggle('dark', isDarkMode);
        }
    }
  </script>
  
  <nav>
    <h1 on:click={() => goto('/')}>{appName}</h1>
    <button on:click={toggleDarkMode}>
      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
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

    button {
      padding: 8px 16px;
      border: none;
      border-radius: var(--radius);
      cursor: pointer;
      transition: background-color 0.3s, color 0.3s, box-shadow 0.3s;
      background-color: var(--primary);
      color: var(--primary-foreground);
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    button:hover {
      background-color: var(--secondary);
      color: var(--secondary-foreground);
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    }

    button:focus {
      outline: 2px solid var(--ring);
      outline-offset: 2px;
    }
  </style>