<script lang="ts">
  import { i18n } from '../../store/i18n'
  import LocaleSwitch from '../locale-switch/LocaleSwitch.svelte'

  let i18n_value

  i18n.subscribe((value) => {
    i18n_value = value
  })

  $: menuItems = [
    { title: i18n_value.HEADER.HOME, link: '#' },
    { title: i18n_value.HEADER.SERVICE, link: '#' },
    { title: i18n_value.HEADER.WORK, link: '#' },
    { title: i18n_value.HEADER.CONTACT, link: '#' },
  ]
</script>

<header class="header">
  <ul class="header-navigation">
    {#each menuItems as { title, link }}
      <li>
        <a href={link}> {title} </a>
      </li>
    {/each}
  </ul>

  <LocaleSwitch />
</header>

<style>
</style>
