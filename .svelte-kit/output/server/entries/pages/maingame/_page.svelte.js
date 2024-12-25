import { c as create_ssr_component, e as escape, d as each } from "../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let board = [];
  let points = 0;
  let clicksLeft = 0;
  let Objective = 0;
  let bet = 1;
  return `<body class="bg-[#3c1414] w-full h-full"><div class="text-black flex flex-wrap w-[98vw] items-center pl-[4px] gap-1 ss:mt-[2vw] sl:ml-[4vw] md:ml-[10px] md:flex-nowrap md:gap-3 lg:ml-[7vw] lg:w-[230vh] xl:ml-[35vw]"><div class="font-bold border-2 bg-slate-50 text-[15px] md:text-[25px] lg:text-[25px] rounded-lg px-4">Current Money: ${escape(points)} $</div> <div class="font-bold border-2 bg-slate-50 text-[15px] md:text-[25px] lg:text-[25px] rounded-lg px-4">Clicks Left: ${escape(clicksLeft)}</div> <div class="font-bold border-2 bg-slate-50 text-[15px] md:text-[25px] lg:text-[25px] rounded-lg px-8">Objective: ${escape(Objective)} $</div> <div class="font-bold border-2 bg-slate-50 text-[15px] md:text-[25px] lg:text-[25px] rounded-lg px-4">Multiply: x ${escape(bet)}</div> <button class="bg-red-500 hover:bg-red-800 text-black text-[10px] md:text-[25px] font-bold rounded w-[70px] h-[25px] px-4 md:px-5 md:w-[80px] md:h-[70px] lg:w-[150px] lg:h-[40px]" data-svelte-h="svelte-t0c9lu">New Game</button></div>  <div class=""><div class="flex justify-center w-full text-[15px] mt-[50vh] ss:mr-[1px] ss:mt-[55vh] ss:p-0 sl:ml-[3vw] sl:mt-[64vh] sm:ml-[3vw] md:text-[30px] md:mt-[90vh] lg:ml-[20vw] lg:mt-[25vh] sxl:w-[100vh] sxl:ml-[120vh] "><button class="w-[150px] h-[100px] md:w-[200px] md:h-[150px] m-2 p-2 border-2 rounded bg-green-400 hover:bg-green-600 font-bold text-black hover:text-white\` ss:p-1 ss:w-[125px] md:w-[170px] lg:w-[130px] lg:h-[120px] " data-svelte-h="svelte-5q9pf3">Medium</button> <button class="w-[150px] h-[100px] md:w-[200px] md:h-[150px] m-2 p-2 border-2 rounded bg-yellow-400 hover:bg-yellow-600 font-bold text-black hover:text-white ss:p-1 ss:w-[125px] md:w-[170px] lg:w-[130px] lg:h-[120px]" data-svelte-h="svelte-1ozzzay">Hard</button> <button class="w-[150px] h-[100px] md:w-[200px] md:h-[150px] m-2 p-2 border-2 rounded bg-red-400 hover:bg-red-600 font-bold text-black hover:text-white ss:p-1 ss:w-[125px] md:w-[170px] lg:w-[130px] lg:h-[120px]" data-svelte-h="svelte-10vith2">Expert</button></div> <div class="flex justify-center ml-[27vw] mt-[1vh] w-[150px] h-[40px] sl:ml-[40vw] md:w-[160px] h-[60px] lg:ml-[62vw] lg:h-[70px] lg:w-[170px] xl:ml-[84vw]"><button class="items-center justify-center bg-green-500 hover:bg-green-700 text-black text-[20px] font-bold rounded h-[40px] p-[3px] md:text-[30px] lg:h-[50px] lg:w-[170px] " data-svelte-h="svelte-1br75w8">Spin For 200$ !</button></div></div> <div class="flex flex-wrap items-center justify-center w-[230px] ml-[45px] -mt-[400px] sss:ml-[20vw] ss:ml-[22vw] ss:-mt-[420px] ss:w-[250px] sl:ml-[30vw] sl:-mt-[450px] md:w-[450px] md:ml-[22vw] md:-mt-[130vh] lg:ml-[4vw] lg:-mt-[62vh] sxl:ml-[15vw] sxl:-mt-[58vh] xl:ml-[30vw]">${each(board, (row, rowIndex) => {
    return `${each(row, (cell, colIndex) => {
      return `<button class="${[
        "cell w-[40px] h-[40px] ss:w-[50px] ss:h-[50px] md:w-[80px] md:h-[80px] border-2 bg-red-700 p-3 gap-0 cursor-pointer flex",
        cell.isClicked ? "bg-gray-300" : ""
      ].join(" ").trim()}" type="button">${cell.isClicked && !cell.isBomb ? `<img src="coin5.png" alt="" class="w-full h-full object-cover">` : ``} ${cell.isClicked && cell.isBomb ? `<img src="bomb.png" alt="Bomb" class="w-full h-full object-cover">` : ``} </button>`;
    })}`;
  })}</div> ${``} ${``} ${``} ${``} ${``} ${``} <style data-svelte-h="svelte-1rpo73z">.cell {
      align-items: center;
    }

    .bg-gray-300 {
      background-color: gray;
    }</style></body>`;
});
export {
  Page as default
};
