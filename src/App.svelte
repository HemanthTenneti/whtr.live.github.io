<script>
  import { NinjaKeys } from "ninja-keys";
  import { onMount } from "svelte";

  onMount(async () => {
    let ninja = document.querySelector("ninja-keys");
    ninja.data = hotkeys;
  });
  let hotkeys = [
    {
      id: "Units",
      title: "Change system of units...",
      children: ["Metric Units", "Imperial Units"],
      // icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#fff" viewBox="0 0 256 256"><path d="M152,138V48a32,32,0,0,0-64,0v90a56,56,0,1,0,64,0Zm-32,70a24,24,0,1,1,24-24A24,24,0,0,1,120,208Z" opacity="0.2"></path><path d="M212,56a28,28,0,1,0,28,28A28,28,0,0,0,212,56Zm0,40a12,12,0,1,1,12-12A12,12,0,0,1,212,96Zm-84,57V88a8,8,0,0,0-16,0v65a32,32,0,1,0,16,0Zm-8,47a16,16,0,1,1,16-16A16,16,0,0,1,120,200Zm40-66V48a40,40,0,0,0-80,0v86a64,64,0,1,0,80,0Zm-40,98a48,48,0,0,1-27.42-87.4A8,8,0,0,0,96,138V48a24,24,0,0,1,48,0v90a8,8,0,0,0,3.42,6.56A48,48,0,0,1,120,232Z"></path></svg>',
    },
    {
      id: "Metric Units",
      title: "Change units to Metric system",
      hotkey: "ctrl+M",
      keywords: "metric",
      parent: "Units",
      handler: () => {
        console.log("haha let's gooo not america");
        let ninja = document.querySelector("ninja-keys");
        ninja.close();
      },
    },
    {
      id: "Imperial Units",
      title: "Change units to Imperial system",
      hotkey: "ctrl+i",
      keywords: "imperial",
      parent: "Units",
      handler: () => {
        console.log("ew kirinj, imagine america");
        let ninja = document.querySelector("ninja-keys");
        ninja.close();
      },
    },
    {
      id: "Performance Mode",
      title: "Start/Stop Live Wallpapers...",
      // icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#fff" viewBox="0 0 256 256"><path d="M132.37,134.59,44.18,190.74A7.91,7.91,0,0,1,32,184.15V71.85a7.91,7.91,0,0,1,12.18-6.59l88.19,56.15A7.8,7.8,0,0,1,132.37,134.59Z" opacity="0.2"></path><path d="M184,64V192a8,8,0,0,1-16,0V64a8,8,0,0,1,16,0Zm40-8a8,8,0,0,0-8,8V192a8,8,0,0,0,16,0V64A8,8,0,0,0,224,56Zm-80,72a15.76,15.76,0,0,1-7.33,13.34L48.48,197.49A15.91,15.91,0,0,1,24,184.15V71.85A15.91,15.91,0,0,1,48.48,58.51l88.19,56.15A15.76,15.76,0,0,1,144,128Zm-16.18,0L40,72.08V183.93Z"></path></svg>',
      children: ["Start Live Wallpapers", "Stop Live Wallpapers"],
    },
    {
      id: "Stop Live Wallpapers",
      title: "Stop live wallpaper",
      hotkey: "ctrl+p",
      parent: "Performance Mode",
      handler: () => {
        console.log("FURRFORMANCEEEEEEEEE");
        let ninja = document.querySelector("ninja-keys");
        ninja.close();
      },
    },
    {
      id: "Start Live Wallpapers",
      title: "Start live wallpaper",
      hotkey: "ctrl+o",
      parent: "Performance Mode",
      handler: () => {
        console.log("NO FURRFORMANCEEEEEEEEE");
        let ninja = document.querySelector("ninja-keys");
        ninja.close();
      },
    },
  ];
</script>

<!-- TODO
  ? ------------ Development Ideas
  TODO - Live wallpapers for every weather
  !    - DO THIS TODAY ^ fine.
  TODO - Integrate weather API properly 
  TODO - Design the mobile version simultaneously
  TODO - try wishing them good morning or something.
  TODO - Try showing tomorrow’s weather
  TODO - Use pre-downloaded music for Lofi Songs
  TODO - Make settings work properly
  TODO - somehow learn cookie storing to store all the settings.
TODO -->

<main class="bg-black h-screen w-screen">
  <video
    src="/backgrounds/rain-night.mp4"
    autoplay
    muted
    class=" h-screen w-screen object-cover opacity-40 absolute z-0"
    ><track kind="captions" /></video
  >
  <div class="absolute w-screen h-screen content z-10 p-20 py-10">
    <nav class="flex justify-between items-center">
      <img src="/logo.svg" alt="whtr.live logo" class="animate-fadeRight" />
      <div class="flex items-center gap-3">
        <button
          class="text-[#8a8a8a] flex gap-28 py-2 px-4 items-center border background-[#F9F9F90D] backdrop-blur-[5.5px] animate-fadeDown border-[#AAA] rounded-lg"
          on:click={() => {
            let ninja = document.querySelector("ninja-keys");
            ninja.open();
          }}
        >
          <div class="flex gap-3 items-center text-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="white"
            >
              <path
                d="M19.5306 18.4694L14.8375 13.7763C16.2004 12.1417 16.8807 10.0445 16.7368 7.92116C16.5928 5.79777 15.6358 3.81162 14.0648 2.37589C12.4937 0.940156 10.4296 0.165394 8.30189 0.212776C6.17416 0.260158 4.1466 1.12604 2.64103 2.63028C1.13546 4.13452 0.267789 6.16131 0.218527 8.289C0.169264 10.4167 0.942202 12.4815 2.37654 14.0538C3.81088 15.6261 5.79619 16.5849 7.91945 16.7307C10.0427 16.8765 12.1404 16.1981 13.7762 14.8366L18.4694 19.5307C18.5391 19.6003 18.6218 19.6556 18.7128 19.6933C18.8039 19.731 18.9015 19.7504 19 19.7504C19.0985 19.7504 19.1961 19.731 19.2872 19.6933C19.3782 19.6556 19.4609 19.6003 19.5306 19.5307C19.6003 19.461 19.6556 19.3782 19.6933 19.2872C19.731 19.1962 19.7504 19.0986 19.7504 19C19.7504 18.9015 19.731 18.8039 19.6933 18.7129C19.6556 18.6218 19.6003 18.5391 19.5306 18.4694ZM1.75 8.50003C1.75 7.165 2.14588 5.85996 2.88758 4.74993C3.62928 3.6399 4.68348 2.77473 5.91688 2.26384C7.15029 1.75295 8.50749 1.61928 9.81686 1.87973C11.1262 2.14018 12.329 2.78305 13.273 3.72706C14.217 4.67106 14.8598 5.8738 15.1203 7.18317C15.3807 8.49254 15.2471 9.84974 14.7362 11.0831C14.2253 12.3165 13.3601 13.3707 12.2501 14.1124C11.1401 14.8541 9.83502 15.25 8.5 15.25C6.7104 15.248 4.99466 14.5362 3.72922 13.2708C2.46378 12.0054 1.75198 10.2896 1.75 8.50003Z"
                fill="#CACACA"
              />
            </svg>Search
          </div>
          <span class="bg-[#2f2f2f] p-1 px-2 rounded-md">Ctrl + K</span></button
        >
        <button class="animate-fadeLeft"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            fill="#fff"
            viewBox="0 0 256 256"
            ><path
              d="M207.86,123.18l16.78-21a99.14,99.14,0,0,0-10.07-24.29l-26.7-3a81,81,0,0,0-6.81-6.81l-3-26.71a99.43,99.43,0,0,0-24.3-10l-21,16.77a81.59,81.59,0,0,0-9.64,0l-21-16.78A99.14,99.14,0,0,0,77.91,41.43l-3,26.7a81,81,0,0,0-6.81,6.81l-26.71,3a99.43,99.43,0,0,0-10,24.3l16.77,21a81.59,81.59,0,0,0,0,9.64l-16.78,21a99.14,99.14,0,0,0,10.07,24.29l26.7,3a81,81,0,0,0,6.81,6.81l3,26.71a99.43,99.43,0,0,0,24.3,10l21-16.77a81.59,81.59,0,0,0,9.64,0l21,16.78a99.14,99.14,0,0,0,24.29-10.07l3-26.7a81,81,0,0,0,6.81-6.81l26.71-3a99.43,99.43,0,0,0,10-24.3l-16.77-21A81.59,81.59,0,0,0,207.86,123.18ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z"
              opacity="0.2"
            /><path
              d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm88-29.84q.06-2.16,0-4.32l14.92-18.64a8,8,0,0,0,1.48-7.06,107.6,107.6,0,0,0-10.88-26.25,8,8,0,0,0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186,40.54a8,8,0,0,0-3.94-6,107.29,107.29,0,0,0-26.25-10.86,8,8,0,0,0-7.06,1.48L130.16,40Q128,40,125.84,40L107.2,25.11a8,8,0,0,0-7.06-1.48A107.6,107.6,0,0,0,73.89,34.51a8,8,0,0,0-3.93,6L67.32,64.27q-1.56,1.49-3,3L40.54,70a8,8,0,0,0-6,3.94,107.71,107.71,0,0,0-10.87,26.25,8,8,0,0,0,1.49,7.06L40,125.84Q40,128,40,130.16L25.11,148.8a8,8,0,0,0-1.48,7.06,107.6,107.6,0,0,0,10.88,26.25,8,8,0,0,0,6,3.93l23.72,2.64q1.49,1.56,3,3L70,215.46a8,8,0,0,0,3.94,6,107.71,107.71,0,0,0,26.25,10.87,8,8,0,0,0,7.06-1.49L125.84,216q2.16.06,4.32,0l18.64,14.92a8,8,0,0,0,7.06,1.48,107.21,107.21,0,0,0,26.25-10.88,8,8,0,0,0,3.93-6l2.64-23.72q1.56-1.48,3-3L215.46,186a8,8,0,0,0,6-3.94,107.71,107.71,0,0,0,10.87-26.25,8,8,0,0,0-1.49-7.06Zm-16.1-6.5a73.93,73.93,0,0,1,0,8.68,8,8,0,0,0,1.74,5.48l14.19,17.73a91.57,91.57,0,0,1-6.23,15L187,173.11a8,8,0,0,0-5.1,2.64,74.11,74.11,0,0,1-6.14,6.14,8,8,0,0,0-2.64,5.1l-2.51,22.58a91.32,91.32,0,0,1-15,6.23l-17.74-14.19a8,8,0,0,0-5-1.75h-.48a73.93,73.93,0,0,1-8.68,0,8.06,8.06,0,0,0-5.48,1.74L100.45,215.8a91.57,91.57,0,0,1-15-6.23L82.89,187a8,8,0,0,0-2.64-5.1,74.11,74.11,0,0,1-6.14-6.14,8,8,0,0,0-5.1-2.64L46.43,170.6a91.32,91.32,0,0,1-6.23-15l14.19-17.74a8,8,0,0,0,1.74-5.48,73.93,73.93,0,0,1,0-8.68,8,8,0,0,0-1.74-5.48L40.2,100.45a91.57,91.57,0,0,1,6.23-15L69,82.89a8,8,0,0,0,5.1-2.64,74.11,74.11,0,0,1,6.14-6.14A8,8,0,0,0,82.89,69L85.4,46.43a91.32,91.32,0,0,1,15-6.23l17.74,14.19a8,8,0,0,0,5.48,1.74,73.93,73.93,0,0,1,8.68,0,8.06,8.06,0,0,0,5.48-1.74L155.55,40.2a91.57,91.57,0,0,1,15,6.23L173.11,69a8,8,0,0,0,2.64,5.1,74.11,74.11,0,0,1,6.14,6.14,8,8,0,0,0,5.1,2.64l22.58,2.51a91.32,91.32,0,0,1,6.23,15l-14.19,17.74A8,8,0,0,0,199.87,123.66Z"
            /></svg
          ></button
        >
      </div>
    </nav>
    <div class="grid grid-cols-12 items-center h-[85%]">
      <div class="col-span-6 animate-fadeRight">
        <h1
          class="text-white text-[200px] font-extrabold font-['Inter',sans-serif]"
        >
          32°C
        </h1>
        <h2 class="text-white text-6xl font-bold mt-[-60px] mb-2">Hyderabad</h2>
        <h4 class="text-white text-5xl">14 October | 06:09</h4>
      </div>
      <div
        class="animate-fadeLeft col-span-6 h-[85%] border border-[#AAA] rounded-lg backdrop-blur-[6.5px] background-[#f9f9f90d]"
      >
        <h1 class="text-white">Hi</h1>
      </div>
    </div>
    <footer class="flex items-center justify-between">
      <div class="flex text-white items-center">
        <p class="text-2xl border-r px-5">&copy;</p>
        <a
          href="https://www.github.com/HemanthTenneti/whtr.live"
          target="_blank"
          class="text-md px-5 border-r py-1">GitHub</a
        >
        <button class="text-md px-5 py-1">Credits</button>
      </div>
      <div class="flex items-center gap-5">
        <p class="text-white">Epicly LoFi Moosik To Soothe Your Ears :)</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="#fff"
          viewBox="0 0 256 256"
          ><path d="M208,96v64H48V96Z" opacity="0.2" /><path
            d="M56,96v64a8,8,0,0,1-16,0V96a8,8,0,0,1,16,0ZM88,24a8,8,0,0,0-8,8V224a8,8,0,0,0,16,0V32A8,8,0,0,0,88,24Zm40,32a8,8,0,0,0-8,8V192a8,8,0,0,0,16,0V64A8,8,0,0,0,128,56Zm40,32a8,8,0,0,0-8,8v64a8,8,0,0,0,16,0V96A8,8,0,0,0,168,88Zm40-16a8,8,0,0,0-8,8v96a8,8,0,0,0,16,0V80A8,8,0,0,0,208,72Z"
          /></svg
        >
      </div>
    </footer>
    <ninja-keys placeholder="Search" class="dark" noAutoLoadMdIcons />
  </div>
</main>
