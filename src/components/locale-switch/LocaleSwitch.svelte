<script lang="ts">
  import { LocaleEnum, DEFAULT_LOCALE } from '../../i18n'
  import { i18n } from '../../store/i18n'

  let selected = DEFAULT_LOCALE
  let onChange = (event) => {
    i18n.changeLocale(event.target.value)
  }

  let languages: { label: string; value: LocaleEnum }[] = [
    { label: 'Portugues', value: LocaleEnum.PT },
    { label: 'English', value: LocaleEnum.EN },
  ]
</script>

<select class="locale-switch" bind:value={selected} on:change={onChange}>
  {#each languages as { label, value }}
    <option {value}>{label}</option>
  {/each}
</select>

<style>
</style>
