<script setup lang="ts">
const listRender: any[] = []
</script>

<template>
  <ol class="checkin-list">
    <li v-for="checkin in listRender" :key="checkin.databaseId">
      <button class="checkout">🚪</button>
      <input type="text" placeholder="keine" v-model="checkin.lockerKey" />
      <div class="name-time">
        <h3 class="name">{{ checkin.firstname }} {{ checkin.lastname }}</h3>
        <div class="time">{{ checkin.checkinTime }}</div>
      </div>
      <div class="contract">
        {{ checkin.contractNames[0] }}
      </div>
    </li>
  </ol>
</template>

<style scoped lang="scss">
ol.checkin-list {
  padding: 0.5rem 0;
  font-size: 0.9rem;

  li {
    --height: 3.25rem;

    display: flex;
    align-items: center;
    justify-content: center;
    height: var(--height);
    width: 100%;
    padding: 0 0.5rem;

    &:nth-child(even) {
      background-color: hsla(0, 0%, 0%, 0.02);
    }

    button.checkout {
      height: var(--height);
      width: var(--height);
    }

    input {
      height: var(--height);
      background: transparent;
      text-align: center;
      width: 10ch;
    }

    .name-time {
      flex: 1;
      margin-left: 1rem;

      .time {
        font-size: 0.8em;
        opacity: 0.75;
      }
    }

    .contract {
      flex: 1;
      font-size: 0.8em;
      opacity: 0.75;
    }
  }
}
</style>
