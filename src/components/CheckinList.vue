<script setup lang="ts">
import type { FrontendSocket } from "$/socket"

import { inject } from "vue"

const mockData = [
  {
    databaseId: 1218433750,
    optlock: null,
    customerId: 250,
    customerOrganizationUnitId: 2,
    customerFacilityName: "Fitness Studio Colosseum GmbH",
    lockerKey: "082",
    checkinTime: "2021-07-30T15:35:17.320Z",
    previousCheckinTime: "2021-07-29T13:39:45.207Z",
    lastCheckoutTime: "2021-07-29T16:27:42.199Z",
    firstname: "JÖRG",
    lastname: "HARTFIEL",
    customerNumber: "1-07243",
    gender: 0,
    dateOfBirth: "1963-03-04",
    imageUrl: null,
    customerCodes: [
      {
        databaseId: 37,
        optlock: 0,
        facilityInfo: null,
        name: "Colosseum Partner",
        description: null,
        colorHex: "#7866c0",
        active: true,
      },
    ],
    contractNames: ["Tarif Rot (STUDIO1)"],
    moduleNames: ["Berechtigungskarte (STUDIO1)", "Servicepauschale (STUDIO1)"],
    badges: [],
    isAnonymized: false,
  },
  {
    databaseId: 1218433381,
    optlock: null,
    customerId: 622,
    customerOrganizationUnitId: 2,
    customerFacilityName: "Fitness Studio Colosseum GmbH",
    lockerKey: null,
    checkinTime: "2021-07-30T15:27:20.070Z",
    previousCheckinTime: "2021-07-27T15:25:22.470Z",
    lastCheckoutTime: "2021-07-27T17:06:40.358Z",
    firstname: "HEIKE",
    lastname: "LUKASSEN",
    customerNumber: "1-07065",
    gender: 1,
    dateOfBirth: "1962-01-05",
    imageUrl: null,
    customerCodes: [
      {
        databaseId: 24,
        optlock: 2,
        facilityInfo: null,
        name: "FirmenFitness GLG",
        description: "Firmenfitness GLG",
        colorHex: "#7866C0",
        active: true,
      },
      {
        databaseId: 12,
        optlock: 4,
        facilityInfo: null,
        name: "Unterstützer während Corona!!!",
        description: "freiwillig keine RZ",
        colorHex: "#DC3451",
        active: true,
      },
    ],
    contractNames: ["Tarif Rot (STUDIO5)"],
    moduleNames: ["Servicepauschale (STUDIO5)", "Berechtigungskarte (STUDIO5)"],
    badges: [
      {
        badge: "IMPORTANT_NOTE",
        label: "1 important note",
      },
    ],
    isAnonymized: false,
  },
  {
    databaseId: 1218432292,
    optlock: null,
    customerId: 1216315420,
    customerOrganizationUnitId: 2,
    customerFacilityName: "Fitness Studio Colosseum GmbH",
    lockerKey: "100",
    checkinTime: "2021-07-30T15:11:14.510Z",
    previousCheckinTime: "2021-07-29T16:11:33.151Z",
    lastCheckoutTime: "2021-07-29T17:59:48.621Z",
    firstname: "MARIKA",
    lastname: "KASPRZAK",
    customerNumber: "1-100622",
    gender: 1,
    dateOfBirth: "2005-05-18",
    imageUrl: null,
    customerCodes: [
      {
        databaseId: 23,
        optlock: 1,
        facilityInfo: null,
        name: "Colosseum Schüler/Studenten",
        description: "Schüler/Studenten",
        colorHex: "#7866c0",
        active: true,
      },
    ],
    contractNames: ["Colosseum Schüler/Studenten"],
    moduleNames: [],
    badges: [],
    isAnonymized: false,
  },
  {
    databaseId: 1218433380,
    optlock: null,
    customerId: 633,
    customerOrganizationUnitId: 2,
    customerFacilityName: "Fitness Studio Colosseum GmbH",
    lockerKey: "096",
    checkinTime: "2021-07-30T15:07:57.330Z",
    previousCheckinTime: "2021-07-28T12:24:59.700Z",
    lastCheckoutTime: "2021-07-28T13:18:52.516Z",
    firstname: "ANDREA",
    lastname: "WIELAND-SCHULZ",
    customerNumber: "1-07411",
    gender: 1,
    dateOfBirth: "1965-04-25",
    imageUrl: null,
    customerCodes: [
      {
        databaseId: 35,
        optlock: 0,
        facilityInfo: null,
        name: "Colosseum Figurvertrag",
        description: null,
        colorHex: "#7866c0",
        active: true,
      },
    ],
    contractNames: ["ColosseumFigur"],
    moduleNames: [],
    badges: [
      {
        badge: "APPOINTMENT",
        label: "Appointment 17:15",
      },
    ],
    isAnonymized: false,
  },
  {
    databaseId: 1218433050,
    optlock: null,
    customerId: 1213901840,
    customerOrganizationUnitId: 2,
    customerFacilityName: "Fitness Studio Colosseum GmbH",
    lockerKey: "084",
    checkinTime: "2021-07-30T15:00:42.381Z",
    previousCheckinTime: "2021-07-28T09:52:22.921Z",
    lastCheckoutTime: "2021-07-28T11:00:53.653Z",
    firstname: "TIM-NIKLAS",
    lastname: "HÖHN",
    customerNumber: "1-100429",
    gender: 0,
    dateOfBirth: "2004-05-26",
    imageUrl: null,
    customerCodes: [
      {
        databaseId: 23,
        optlock: 1,
        facilityInfo: null,
        name: "Colosseum Schüler/Studenten",
        description: "Schüler/Studenten",
        colorHex: "#7866c0",
        active: true,
      },
    ],
    contractNames: ["Colosseum Schüler/Studenten"],
    moduleNames: [],
    badges: [
      {
        badge: "CONTRACT_CANCELLATION",
        label: "Cancellation",
      },
      {
        badge: "NO_TRAINING_SCHEDULE",
        label: "No active training plan",
      },
    ],
    isAnonymized: false,
  },
  {
    databaseId: 1218433040,
    optlock: null,
    customerId: 1211195081,
    customerOrganizationUnitId: 2,
    customerFacilityName: "Fitness Studio Colosseum GmbH",
    lockerKey: "090",
    checkinTime: "2021-07-30T14:58:54.062Z",
    previousCheckinTime: "2021-07-29T14:38:34.798Z",
    lastCheckoutTime: "2021-07-29T16:36:24.863Z",
    firstname: "NGUYET",
    lastname: "SCHRAMM",
    customerNumber: "1-99933",
    gender: 1,
    dateOfBirth: "1963-04-17",
    imageUrl: null,
    customerCodes: [
      {
        databaseId: 36,
        optlock: 0,
        facilityInfo: null,
        name: "Colosseum Normal",
        description: null,
        colorHex: "#7866c0",
        active: true,
      },
    ],
    contractNames: ["Colosseum normal"],
    moduleNames: [],
    badges: [
      {
        badge: "NOTE",
        label: "1 Note",
      },
    ],
    isAnonymized: false,
  },
  {
    databaseId: 1218432291,
    optlock: null,
    customerId: 1211180750,
    customerOrganizationUnitId: 2,
    customerFacilityName: "Fitness Studio Colosseum GmbH",
    lockerKey: "092",
    checkinTime: "2021-07-30T14:41:37.161Z",
    previousCheckinTime: "2021-07-28T14:02:42.806Z",
    lastCheckoutTime: "2021-07-28T16:30:38.466Z",
    firstname: "THI THOM",
    lastname: "HOANG",
    customerNumber: "1-99921",
    gender: 1,
    dateOfBirth: "1982-03-11",
    imageUrl: null,
    customerCodes: [
      {
        databaseId: 36,
        optlock: 0,
        facilityInfo: null,
        name: "Colosseum Normal",
        description: null,
        colorHex: "#7866c0",
        active: true,
      },
    ],
    contractNames: ["Colosseum normal"],
    moduleNames: [],
    badges: [],
    isAnonymized: false,
  },
  {
    databaseId: 1218432710,
    optlock: null,
    customerId: 1211152001,
    customerOrganizationUnitId: 2,
    customerFacilityName: "Fitness Studio Colosseum GmbH",
    lockerKey: "094",
    checkinTime: "2021-07-30T14:37:03.518Z",
    previousCheckinTime: "2021-07-29T14:38:01.805Z",
    lastCheckoutTime: "2021-07-29T16:36:31.265Z",
    firstname: "NGAN",
    lastname: "VU THI",
    customerNumber: "1-99909",
    gender: 1,
    dateOfBirth: "1969-05-12",
    imageUrl: null,
    customerCodes: [
      {
        databaseId: 36,
        optlock: 0,
        facilityInfo: null,
        name: "Colosseum Normal",
        description: null,
        colorHex: "#7866c0",
        active: true,
      },
    ],
    contractNames: ["Colosseum normal"],
    moduleNames: [],
    badges: [],
    isAnonymized: false,
  },
  {
    databaseId: 1218432290,
    optlock: null,
    customerId: 1210263778,
    customerOrganizationUnitId: 2,
    customerFacilityName: "Fitness Studio Colosseum GmbH",
    lockerKey: "090",
    checkinTime: "2021-07-30T14:23:59.095Z",
    previousCheckinTime: "2021-07-28T14:26:18.251Z",
    lastCheckoutTime: "2021-07-28T17:46:55.141Z",
    firstname: "THOMAS",
    lastname: "STOLL",
    customerNumber: "1-99347",
    gender: 0,
    dateOfBirth: "1963-12-23",
    imageUrl: null,
    customerCodes: [
      {
        databaseId: 50,
        optlock: 0,
        facilityInfo: null,
        name: "Reha 1x",
        description: "Reha 1x/Woche",
        colorHex: "#00d263",
        active: true,
      },
      {
        databaseId: 30,
        optlock: 3,
        facilityInfo: null,
        name: "Reha Colosseum mit Vertrag",
        description: "RehaColosseum mit Vertrag",
        colorHex: "#00d263",
        active: true,
      },
    ],
    contractNames: ["Colosseum Reha VERTRAG"],
    moduleNames: [],
    badges: [
      {
        badge: "CONTRACT_CANCELLATION",
        label: "Cancellation",
      },
    ],
    isAnonymized: false,
  },
  {
    databaseId: 1218431950,
    optlock: null,
    customerId: 1213286700,
    customerOrganizationUnitId: 2,
    customerFacilityName: "Fitness Studio Colosseum GmbH",
    lockerKey: null,
    checkinTime: "2021-07-30T14:00:52.550Z",
    previousCheckinTime: "2021-07-29T15:33:44.935Z",
    lastCheckoutTime: "2021-07-29T18:34:48.101Z",
    firstname: "KASPER",
    lastname: "STEPANIUK",
    customerNumber: "1-100334",
    gender: 0,
    dateOfBirth: "2002-08-23",
    imageUrl: null,
    customerCodes: [
      {
        databaseId: 23,
        optlock: 1,
        facilityInfo: null,
        name: "Colosseum Schüler/Studenten",
        description: "Schüler/Studenten",
        colorHex: "#7866c0",
        active: true,
      },
    ],
    contractNames: ["Colosseum Schüler/Studenten"],
    moduleNames: [],
    badges: [
      {
        badge: "LATER_SALE",
        label: "Later €4.20",
      },
      {
        badge: "OPEN_DEBT_CLAIMS",
        label: "Open: €4.20",
      },
    ],
    isAnonymized: false,
  },
  {
    databaseId: 1218426126,
    optlock: null,
    customerId: 165,
    customerOrganizationUnitId: 2,
    customerFacilityName: "Fitness Studio Colosseum GmbH",
    lockerKey: "092",
    checkinTime: "2021-07-30T12:59:43.923Z",
    previousCheckinTime: "2021-07-07T06:07:51.101Z",
    lastCheckoutTime: "2021-07-07T07:24:48.055Z",
    firstname: "KATHRIN",
    lastname: "SYLVESTER",
    customerNumber: "1-07109",
    gender: 1,
    dateOfBirth: "1965-01-30",
    imageUrl: null,
    customerCodes: [
      {
        databaseId: 36,
        optlock: 0,
        facilityInfo: null,
        name: "Colosseum Normal",
        description: null,
        colorHex: "#7866c0",
        active: true,
      },
    ],
    contractNames: ["Tarif Rot (STUDIO1)"],
    moduleNames: ["Servicepauschale (STUDIO1)", "Berechtigungskarte (STUDIO1)"],
    badges: [],
    isAnonymized: false,
  },
]

const socket = inject<FrontendSocket>("socket")
if (!socket) throw new Error("socket injection failed")

// socket.emit("checkin.list", {}, console.log)

const listRender = mockData
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
