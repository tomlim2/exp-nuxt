<template>
    <div class="profile">
        <div class="profile-img-frame">
            <!-- {{imgUrl}} -->
            <img v-if="imgUrl" class="profile-img" :src="imgUrl" alt="Profile">
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    imgUrl: {
        type: String,
    }
})
</script>

<style lang="scss">
.profile {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 34px;
    height: 34px;
    border-radius: 17px;
    background-color: #1ed760;

    .profile-img-frame {
        width: 24px;
        height: 24px;
        overflow: hidden;
        border-radius: 12px;

        .profile-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
}
</style>