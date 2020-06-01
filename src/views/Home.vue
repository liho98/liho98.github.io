<template>
  <main class="main flex justify-center items-center h-screen w-full text-center text-gray-600">
    <section class="h-full w-full flex justify-center items-center">
      <div
        class="neumorphism-inset-transition flex flex-col items-center w-full max-w-screen-lg h-auto rounded-lg p-10"
      >
        <b class="text-lg md:text-xl">Profile</b>

        <div class="neumorphism-transition w-16 h-16 rounded-full my-5">
          <img
            alt="Avatar"
            src="https://avatars1.githubusercontent.com/u/44250267?s=400&u=1ffdc02d538b6394c54f2b554fd6da55c2c23481&v=4"
            class="h-full w-full rounded-full"
          />
        </div>

        <b class="leading-normal text-2xl md:text-3xl">Li Ho Tan</b>
        <p class="text-sm md:text-base m-1 p-1">Klang, Selangor</p>
        <div class="neumorphism-transition w-full h-auto rounded-lg p-5 my-5">
          <p class="text-sm md:text-base m-1 p-1">
            <b>Front-end Developer - APAC Venture Sdn. Bhd.</b>
          </p>
          <p class="text-sm md:text-base m-1 p-1">Tunku Abdul Rahman University College</p>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "Home",
  components: {}
};
</script>

<style lang="scss">
.main {
  .neumorphism {
    // border: 1px solid #fff;
    background: rgb(241, 243, 246);
    box-shadow: inset 0 0 15px rgba(55, 84, 170, 0),
      inset 0 0 20px rgba(255, 255, 255, 0),
      7px 7px 15px rgba(55, 84, 170, 0.15),
      -7px -7px 20px rgba(255, 255, 255, 1),
      inset 0px 0px 4px rgba(255, 255, 255, 0.2);
  }
  .neumorphism-transition {
    border: 1px solid #fff;
    background: rgb(241, 243, 246);
    box-shadow: inset 0 0 15px rgba(55, 84, 170, 0),
      inset 0 0 20px rgba(255, 255, 255, 0),
      7px 7px 15px rgba(55, 84, 170, 0.15),
      -7px -7px 20px rgba(255, 255, 255, 1),
      inset 0px 0px 4px rgba(255, 255, 255, 0.2);
    &:hover {
      box-shadow: inset 7px 7px 15px rgba(55, 84, 170, 0.15),
        inset -7px -7px 20px rgba(255, 255, 255, 1),
        0px 0px 4px rgba(255, 255, 255, 0.2);
    }
    transition: box-shadow 0.3s ease-in-out;
  }
  .neumorphism-inset {
    // border: 1px solid #fff;
    background: rgb(241, 243, 246);
    box-shadow: inset 7px 7px 15px rgba(55, 84, 170, 0.15),
      inset -7px -7px 20px rgba(255, 255, 255, 1),
      0px 0px 4px rgba(255, 255, 255, 0.2);
  }
  .neumorphism-inset-transition {
    border: 1px solid #fff;
    background: rgb(241, 243, 246);
    box-shadow: inset 7px 7px 15px rgba(55, 84, 170, 0.15),
      inset -7px -7px 20px rgba(255, 255, 255, 1),
      0px 0px 4px rgba(255, 255, 255, 0.2);

    &:hover {
      box-shadow: inset 0 0 15px rgba(55, 84, 170, 0),
        inset 0 0 20px rgba(255, 255, 255, 0),
        7px 7px 15px rgba(55, 84, 170, 0.15),
        -7px -7px 20px rgba(255, 255, 255, 1),
        inset 0px 0px 4px rgba(255, 255, 255, 0.2);
    }
    transition: box-shadow 0.3s ease-in-out;
  }
}
</style>