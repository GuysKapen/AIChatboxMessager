<template>
    <div class="flex h-full border-t">
        <div class="w-3/12 flex-shrink-0 border-r"></div>
        <Chatbox />
        <div class="w-3/12 flex-shrink-0 border-l">
        </div>
    </div>
</template>

<script>
import Chatbox from "@/components/Chatbox.vue"

export default {
    components: { Chatbox },
}


</script>