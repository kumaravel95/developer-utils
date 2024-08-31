<script lang="ts">
    import Calculator from "lucide-svelte/icons/calculator";
    import Calendar from "lucide-svelte/icons/calendar";
    import CreditCard from "lucide-svelte/icons/credit-card";
    import Settings from "lucide-svelte/icons/settings";
    import Smile from "lucide-svelte/icons/smile";
    import User from "lucide-svelte/icons/user";
    import * as Command from "$lib/components/ui/command/index.js";
    import { goto } from '$app/navigation';
   </script>
    
   <Command.Root class="max-w-[450px] rounded-lg border shadow-md">
    <Command.Input placeholder="Type a command or search..." />
    <Command.List>
     <Command.Empty>No results found.</Command.Empty>
     <Command.Group heading="Suggestions">
      <Command.Item onSelect={() => goto('/html-encode-decode')}>
       <Calendar class="mr-2 h-4 w-4" />
       <span>HTML Encode / Decode</span>
      </Command.Item>
      <Command.Item onSelect={() => goto('/url-encode-decode')}>
        <Smile class="mr-2 h-4 w-4" />
        <span>URL Encode / Decode</span>
       </Command.Item>
      <Command.Item onSelect={() => goto('/uppercase-lowercase')}>
       <Smile class="mr-2 h-4 w-4" />
       <span>Uppercase / Lowercase</span>
      </Command.Item>
     </Command.Group>
     <Command.Separator />
     <Command.Group heading="Settings">
      <Command.Item>
       <User class="mr-2 h-4 w-4" />
       <span>Profile</span>
       <Command.Shortcut>⌘P</Command.Shortcut>
      </Command.Item>
      <Command.Item>
       <CreditCard class="mr-2 h-4 w-4" />
       <span>Billing</span>
       <Command.Shortcut>⌘B</Command.Shortcut>
      </Command.Item>
      <Command.Item>
       <Settings class="mr-2 h-4 w-4" />
       <span>Settings</span>
       <Command.Shortcut>⌘S</Command.Shortcut>
      </Command.Item>
     </Command.Group>
    </Command.List>
   </Command.Root>