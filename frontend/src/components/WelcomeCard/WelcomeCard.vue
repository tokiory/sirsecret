<template>
  <div class="welcome-card">
    <Icon width="82px" icon="ph:eye-closed-bold" />
    <UIText center muted> Sir, this is your first time here. </UIText>
    <UIText center muted>
      "Sir, Secrets" is a simple application for storing secrets as SSH keys,
      Env Files, etc.<br />
      You can use buttons below to get started.
    </UIText>
    <div class="welcome-card__control">
      <UIButton class="welcome-card__button">
        Create Env File
        <UIKey braced meta symbol="N" />
      </UIButton>
      <UIButton>View SSH Keys</UIButton>
      <UIButton class="welcome-card__button"
        >Go To The Settings <UIKey braced meta symbol=","
      /></UIButton>
    </div>
  </div>
</template>
<script setup lang="ts">
import { UIButton, UIKey, UIText } from "@/components/UI";
import { Icon } from "@iconify/vue";
</script>

<style lang="scss" scoped>
.welcome-card {
  width: 100%;
  color: hsl(var(--color-muted-foreground));
  padding: 24px 32px;
  display: flex;
  gap: 12px;
  flex-direction: column;
  align-items: center;

  &__control {
    margin-top: 24px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 24px;
  }

  &__button {
    display: flex;
    gap: 4px;
    align-items: center;
    justify-content: center;
  }
}
</style>
