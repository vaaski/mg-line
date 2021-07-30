<script setup lang="ts">
import CheckinList from "@/components/CheckinList.vue"
import RetailArea from "@/components/RetailArea.vue"
import CustomerSelection from "@/components/CustomerSelection.vue"
</script>

<template>
  <div id="dash">
    <div class="upper">
      <CustomerSelection />
    </div>
    <div class="lower">
      <div class="left">
        <CheckinList />
      </div>
      <div class="right">
        <RetailArea />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
#dash {
  height: 100%;
  width: 100%;

  --dash-upper-height: 27.5%;

  .upper {
    width: 100%;
    height: var(--dash-upper-height);
  }

  .lower {
    position: relative;
    display: flex;
    height: calc(100% - var(--dash-upper-height));
    width: 100%;

    .left,
    .right {
      position: relative;
      width: 50%;
      height: 100%;
    }
  }
}
</style>
