<template>
  <div>
    <div>Count: {{ state.count }}</div>
    <div>
      <button @click="state.increment()">
        Increment
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useCounterState} from '@/composable/useCounterState';

const state = useCounterState();
</script>
