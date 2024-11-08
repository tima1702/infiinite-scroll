<script setup lang="ts">
import { IUser } from "../types/IUser";
defineProps<{ user: IUser }>();
</script>

<template>
  <div class="user-card">
    <img
        :src="user.picture.large"
        :alt="`${user.name.first} ${user.name.last}`"
    />
    <h3>{{ user.name.first }} {{ user.name.last }}</h3>
    <p>{{ user.email }}</p>
  </div>
</template>

<style scoped>
.user-card {
  width: 300px;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  background-color: #fff;
}

.user-card img {
  border-radius: 50%;
  width: 60px;
  height: 60px;
  object-fit: cover;
  margin-bottom: 8px;
}

.user-card h3 {
  font-size: 1.2rem;
  margin: 8px 0;
  padding-top: 8px;
  color: #000;
  border-top: 2px solid #2b2a283a;
}

.user-card p {
  font-size: 1rem;
  color: #666;
  white-space: nowrap;
}
</style>