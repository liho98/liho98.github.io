<template>
  <main class="flex justify-center items-center h-screen w-full">
    <section class="fixed block h-full w-full">
      <div
        class="absolute top-0 w-full h-full bg-center bg-cover"
        style="background-image: url('https://images.unsplash.com/photo-1576557522608-ab3341cc329f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80');"
      ></div>
    </section>
    <section class="relative py-16 w-10/12">
      <div class="container mx-auto px-4">
        <div
          class="relative flex flex-col min-w-0 break-words bg-white w-full shadow-xl rounded-lg"
          style="-webkit-backdrop-filter: blur(10px);backdrop-filter: blur(10px);background-color: rgba(255, 255, 255, 0.5); "
        >
          <div class="px-6">
            <div class="flex flex-wrap justify-center">
              <div class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                <div class="relative">
                  <img
                    alt="..."
                    src="https://avatars1.githubusercontent.com/u/44250267?s=400&u=1ffdc02d538b6394c54f2b554fd6da55c2c23481&v=4"
                    class="shadow-xl rounded-full h-auto align-middle border-none -m-16"
                    style="max-width: 150px;"
                  />
                </div>
              </div>
            </div>
            <div class="text-center mt-24">
              <h3 class="text-4xl font-black leading-normal mb-2 text-white mb-2">Li Ho</h3>
              <div
                class="text-sm leading-normal mt-0 mb-2 text-white font-bold uppercase"
              >Klang, Selangor</div>
              <div class="mb-2 text-white mt-10 font-semibold">Front-end Developer - APAC Venture Sdn. Bhd.</div>
              <div class="mb-2 text-white font-semibold">Tunku Abdul Rahman University College</div>
            </div>
            <div class="mt-10 py-10 border-t border-gray-300 text-center">
              <div class="flex flex-wrap justify-center">
                <div class="w-full lg:w-9/12 px-4">
                  <p class="mb-4 text-lg leading-relaxed text-white font-semibold">Beginner</p>
                </div>
              </div>
            </div>
          </div>
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