<template>
  <div
    class="navbar relative z-[999] flex items-center justify-between w-full px-[70px] pt-[20px]"
  >
    <div class="logo flex items-center">
      <img
        class="w-[41px] h-[41px]"
        src="../assets/logo.png"
        alt="chill club logo"
      />
      <div class="text-white ml-[15px]">
        <h1 class="uppercase text-[20px] font-bold">chill club</h1>
        <p class="text-[15px]">Best music streams hand picked for you</p>
      </div>
    </div>

    <div class="text-white flex items-center space-x-10">
      <li class="navbar_item">
        <a target="_blank" href="https://github.com/mediv0/chill-club"
          >Github</a
        >
      </li>

      <li class="navbar_item">
        <a
          target="_blank"
          href="https://twitter.com/intent/tweet?url=https://chill-club.vercel.app/&text=Check%20out%20chill-club.vercel.app%20%E2%9A%A1%EF%B8%8F%0A%0AThe%20best%20place%20to%20enjoy%20Hip%20hop%20beats%20to%20Relax%20or%20Study!%20%F0%9F%8E%A7%20%F0%9F%94%A5%0A%0A#lofi%20#anime%20#lofi_music"
          >Tweet about us</a
        >
      </li>
    </div>
  </div>
</template>


<style lang="scss" scoped>
@import "@/assets/query.scss";
.navbar {
  @include query(710px) {
    flex-direction: column;
    padding: 10px 20px;
  }
}

.logo {
  @include query(710px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
}


</style>