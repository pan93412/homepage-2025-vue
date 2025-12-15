<template>
    <a v-if="emailAddress" :href="`mailto:${emailAddress}`">
        {{ emailAddress }}
    </a>
    <span v-else>
        Loading...
    </span>
</template>

<script setup lang="ts">
    const emailAddress = ref<string | null>(null);
    const REVDT0RFX1RISVNfVEVYVF9BTkRfRklORF9NRV9UT19HRVRfQV9XVEZfOik_ = "bVFvc2NTLmgzQTltbmdhV3BxQGNlZm1p";

    onMounted(() => {
        setTimeout(() => {
            // decrypt the email address
            const decrypted = atob(REVDT0RFX1RISVNfVEVYVF9BTkRfRklORF9NRV9UT19HRVRfQV9XVEZfOik_);

            let decryptedEmailAddress = '';
            for (let i = decrypted.length - 1; i >= 0; i -= 2) {
                decryptedEmailAddress += decrypted[i - 1];
            }

            emailAddress.value = decryptedEmailAddress;
        }, 1000 + 50 * Math.random());
    });
</script>
