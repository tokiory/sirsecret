<template>
  <div class="input-wrapper" @click.self="onWrapperClick">
    <slot name="before" :clear="clear" />
    <input
      ref="inputRef"
      v-model="inputValue"
      class="input-wrapper__input"
      :disabled="disabled"
      :type="type"
      :placeholder="placeholder"
    />
    <slot name="after" :clear="clear" />
    <div
      v-if="$slots.placeholder"
      class="input-wrapper__placeholder"
      @click="onWrapperClick"
    >
      <slot name="placeholder" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { shallowRef, toRefs } from "vue";

interface InputProps {
  type?: "text" | "number";
  disabled?: boolean;
  placeholder?: string;
}

const props = withDefaults(defineProps<InputProps>(), {
  type: "text",
  disabled: false,
  placeholder: "",
});

const inputRef = shallowRef<HTMLInputElement | null>(null);
const { type, disabled, placeholder } = toRefs(props);
const inputValue = defineModel<string>();

const clear = () => {
  inputValue.value = "";
  inputRef.value?.focus();
};

const onWrapperClick = () => {
  inputRef.value?.focus();
};
</script>

<style lang="scss" scoped>
$color-placeholder: hsl(var(--color-muted-foreground));
$color-border: hsl(var(--color-foreground) / 0.1);
$color-border-focus: hsl(var(--color-foreground) / 0.15);

.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  border: 1px solid $color-border;
  background-color: hsl(var(--color-input));
  border-radius: 4px;
  padding: 6px 10px;

  &__placeholder {
    position: absolute;
    background-color: inherit;
    inset-inline: 0;
    color: $color-placeholder;
  }

  &__input {
    all: unset;
    width: 100%;
    height: 100%;

    &::placeholder,
    &:disabled {
      color: $color-placeholder;
    }
  }

  &:has(input:focus) {
    border-color: $color-border-focus;

    .input-wrapper__placeholder {
      display: none;
    }
  }

  &:has(input:disabled) {
    cursor: not-allowed;
    background-color: hsl(var(--color-muted));
    border: 1px solid hsl(var(--color-border));
  }
}
</style>
