<template>
  <div class="mt-4 px-6 py-2 border-transparent border-2">
    <div class="m-0 flex flex-row-reverse items-center">
      <div class="css-463jce"></div>
      <div class="mx-2 flex justify-end max-w-[75%]">
        <div class="m-0 flex flex-col" aria-describedby="tooltip-2">
          <div data-qa="conversation-message-bubbles_div" class="
              m-0
              bg-blue-600
              text-white
              px-4
              py-2
              align-self-end
              text-sm
              rounded-tl-2xl rounded-bl-2xl rounded-br-2xl rounded-tr-md
            ">
            <div>
              <span data-qa="markdown-text" class="text-xs" style="font-family: Noto Sans">{{ message }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["message"],
};
</script>

<style lang="scss" scoped>

</style>