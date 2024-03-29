<template>
  <div class="key">
    {{ combination }}
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";

interface KeyProps {
  squared?: boolean;
  shift?: boolean;
  ctrl?: boolean;
  alt?: boolean;
  meta?: boolean;
  braced?: boolean;
  symbol: string;
}

const props = defineProps<KeyProps>();

const combination = computed(() => {
  const keys = [];
  switch (true) {
    case props.shift:
      keys.push("⇧");
      break;
    case props.ctrl:
      keys.push("⌃");
      break;
    case props.alt:
      keys.push("⌥");
      break;
    case props.meta:
      keys.push("⌘");
      break;
  }

  keys.push(props.symbol);

  let result = keys.join("+");

  if (props.squared) {
    result = `[${result}]`;
  }

  if (props.braced) {
    result = `(${result})`;
  }
  return result;
});
</script>
<style lang="scss" scoped>
.key {
  display: flex;
  font-size: 13px;
  color: hsl(var(--color-muted) / 0.8);
}
</style>
