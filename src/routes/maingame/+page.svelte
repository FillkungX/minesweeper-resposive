<script>
  let board = [];
  let points = 0;
  let clicksLeft = 0;
  let Objective = 0;
  let bombchange;
  let bomb = 3;
  let bet = 1;
  let bombAlert = false;
  let noMovesAlert = false;
  let goalReachedAlert = false;
  let noMoneyAlert = false;
  let spinAlert = false;
  let spinResult = "";
  let showSpinResult = false;

  const initializeBoard = () => {
    board = Array(5)
      .fill()
      .map(() =>
        Array(5).fill({
          isBomb: false,
          isClicked: false,
        }),
      );
    bomb = 5;
    placeBombs();
    points = 100;
    clicksLeft = 10;
    Objective = 1000;
    bet = 1;
    console.log(bomb);
    bombAlert = false;
  };

  const initializeBoard2 = () => {
    board = Array(5)
      .fill()
      .map(() =>
        Array(5).fill({
          isBomb: false,
          isClicked: false,
        }),
      );
    placeBombs2();
  };

  const placeBombs = () => {
    for (let i = 0; i < bomb; i++) {
      let row = Math.floor(Math.random() * 5);
      let col = Math.floor(Math.random() * 5);
      board[row][col] = {
        isBomb: true,
        isClicked: false,
      };
    }
  };

  const placeBombs2 = () => {
    for (let i = 0; i < bombchange; i++) {
      let row = Math.floor(Math.random() * 5);
      let col = Math.floor(Math.random() * 5);

      board[row][col] = {
        isBomb: true,
        isClicked: false,
      };
    }
  };

  const handleClick = (row, col) => {
    board[row][col] = {
      ...board[row][col],
      isClicked: true,
    };
    clicksLeft--;
    if (board[row][col].isBomb) {
      points = points - 100 * bet;
      bombAlert = true;
    } else {
      points = points + 100 * bet;
    }

    if (clicksLeft < 0) {
      noMovesAlert = true;
    }
    if (points >= Objective) {
      goalReachedAlert = true;
    }
    if (points < 0) {
      noMoneyAlert = true;
    }
  };
  const spinWheel = () => {
    if (points >= 200) {
      points -= 200;
      const buffs = ["+1 Move", "x2 Points", "-2 Move", "-2 Points"];
      const randomBuff = buffs[Math.floor(Math.random() * buffs.length)];
      if (randomBuff === "+1 Move") {
        clicksLeft++;
        spinResult = "You gained +1 Move!";
      } else if (randomBuff === "x2 Points") {
        points *= 2;
        spinResult = "You doubled your points!";
        if (points >= Objective) {
          goalReachedAlert = true;
        }
      } else if (randomBuff === "-2 Move") {
        clicksLeft -= 2;
        spinResult = "You lost 2 moves!";
      } else if (randomBuff === "-2 Points") {
        if (points >= 2) {
          points -= 2;
          spinResult = "You lost 2 points!";
        } else {
          noMoneyAlert = true;
        }
      }
      showSpinResult = true;
    } else {
      spinAlert = true;
    }
  };


</script>

<body class="bg-[#3c1414] w-full  h-full">
  <div class="text-black flex flex-wrap w-[98vw] items-center pl-[4px] gap-1  ss:mt-[2vw] sl:ml-[4vw] md:ml-[10px] md:flex-nowrap md:gap-3 lg:ml-[7vw] lg:w-[230vh] xl:ml-[35vw]">
    <div class="font-bold border-2 bg-slate-50 text-[15px] md:text-[25px] lg:text-[25px] rounded-lg px-4">
       Current Money: {points} $ 
    </div>
    <div class="font-bold border-2 bg-slate-50 text-[15px] md:text-[25px] lg:text-[25px] rounded-lg px-4">
      Clicks Left: {clicksLeft}
    </div>
    <div class="font-bold border-2 bg-slate-50 text-[15px] md:text-[25px] lg:text-[25px] rounded-lg px-8">
      Objective: {Objective} $
    </div>
    <div class="font-bold border-2 bg-slate-50 text-[15px] md:text-[25px] lg:text-[25px] rounded-lg px-4">
      Multiply: x {bet}
    </div>
    <button class="bg-red-500 hover:bg-red-800 text-black text-[10px] md:text-[25px] font-bold rounded w-[70px] h-[25px]  px-4 md:px-5 md:w-[80px] md:h-[70px] lg:w-[150px] lg:h-[40px]" on:click={initializeBoard}> New Game</button>
  </div>
  <!-- medium-->
  <div class="">
    <div class = "flex justify-center w-full text-[15px]  mt-[50vh] ss:mr-[1px] ss:mt-[55vh] ss:p-0 sl:ml-[3vw] sl:mt-[64vh] sm:ml-[3vw] md:text-[30px] md:mt-[90vh] lg:ml-[20vw] lg:mt-[25vh] sxl:w-[100vh] sxl:ml-[120vh] ">
      <button
      class="w-[150px] h-[100px] md:w-[200px] md:h-[150px] m-2 p-2 border-2 rounded bg-green-400 hover:bg-green-600 font-bold text-black hover:text-white` ss:p-1 ss:w-[125px] md:w-[170px] lg:w-[130px] lg:h-[120px] "
      on:click={() => {
        bombchange = bomb *= 1.5;
        initializeBoard2();
        bet = 1.5;
        console.log(bomb);
      }}>Medium</button
    >
    <button
      class="w-[150px] h-[100px] md:w-[200px] md:h-[150px] m-2 p-2 border-2 rounded bg-yellow-400 hover:bg-yellow-600 font-bold text-black hover:text-white ss:p-1 ss:w-[125px] md:w-[170px] lg:w-[130px] lg:h-[120px]"
      on:click={() => {
        bombchange = bomb *= 2;
        bet = 2;
        initializeBoard2();
      }}>Hard</button
    >
    <button
      class="w-[150px] h-[100px] md:w-[200px] md:h-[150px] m-2 p-2 border-2 rounded bg-red-400 hover:bg-red-600 font-bold text-black hover:text-white ss:p-1 ss:w-[125px] md:w-[170px] lg:w-[130px] lg:h-[120px]"
      on:click={() => {
        bombchange = bomb *= 8;
        bet = 5;
        initializeBoard2();
      }}>Expert</button
    >
  </div>
    <div class="flex justify-center ml-[27vw] mt-[1vh] w-[150px] h-[40px] sl:ml-[40vw] md:w-[160px] h-[60px] lg:ml-[62vw] lg:h-[70px] lg:w-[170px] xl:ml-[84vw]">
    <button class=" items-center justify-center bg-green-500 hover:bg-green-700 text-black text-[20px] font-bold rounded h-[40px] p-[3px] md:text-[30px] lg:h-[50px] lg:w-[170px] " on:click={spinWheel}> Spin For 200$ !</button>
  </div>
  </div>
  <div class="flex flex-wrap items-center justify-center w-[230px] ml-[45px] -mt-[400px] sss:ml-[20vw] ss:ml-[22vw] ss:-mt-[420px] ss:w-[250px] sl:ml-[30vw] sl:-mt-[450px] md:w-[450px] md:ml-[22vw] md:-mt-[130vh]  lg:ml-[14vw] lg:-mt-[55vh] sxl:ml-[15vw] sxl:-mt-[58vh] xl:ml-[30vw]">
    {#each board as row, rowIndex}
      {#each row as cell, colIndex}
        <button
          class="cell w-[40px] h-[40px] ss:w-[50px] ss:h-[50px] md:w-[80px] md:h-[80px] border-2 bg-red-700 p-3 gap-0 cursor-pointer flex"
          on:click={() => {
            if (board[rowIndex][colIndex].isClicked) {
              return;
            } else {
              handleClick(rowIndex, colIndex);
            }
          }}
          class:bg-gray-300={cell.isClicked}
          type="button"
        >
          {#if cell.isClicked && !cell.isBomb}
            <img src="coin5.png" alt="" class="w-full h-full object-cover" />
          {/if}
          {#if cell.isClicked && cell.isBomb}
            <img src="bomb.png" alt="Bomb" class="w-full h-full object-cover" />
          {/if}
        </button>
      {/each}
    {/each}
  </div>

  {#if spinAlert}
    <div class="fixed inset-0 flex items-center justify-center">
      <div class="bg-gray-900 bg-opacity-75 absolute inset-0"></div>
      <div class="bg-white p-8 rounded-lg z-10">
        <h2 class="text-xl font-bold mb-4">Oops!</h2>
        <p class="text-lg">You Not have Enough Money !</p>
        <button
          class="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
          on:click={() => {
            spinAlert = false;
          }}>Close</button
        >
      </div>
    </div>
  {/if}
  {#if showSpinResult}
    <div class="fixed inset-0 flex items-center justify-center">
      <div class="bg-gray-900 bg-opacity-75 absolute inset-0"></div>
      <div class="bg-white p-8 rounded-lg z-10">
        <h2 class="text-xl font-bold mb-4">Congratulations!</h2>
        <p class="text-lg">You Got {spinResult} !</p>
        <button
          class="mt-4 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
          on:click={() => {
            showSpinResult = false;
          }}>Close</button
        >
      </div>
    </div>
  {/if}
  {#if bombAlert}
    <div class="fixed inset-0 flex items-center justify-center">
      <div class="bg-gray-900 bg-opacity-75 absolute inset-0"></div>
      <div class="bg-white p-8 rounded-lg z-10">
        <h2 class="text-xl font-bold mb-4">You hit a bomb!</h2>
        <p class="text-lg">You lose {100 * bet} $</p>
        <button
          class="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
          on:click={() => (bombAlert = false)}>Close</button
        >
      </div>
    </div>
  {/if}

  {#if noMovesAlert}
    <div class="fixed inset-0 flex items-center justify-center">
      <div class="bg-gray-900 bg-opacity-75 absolute inset-0"></div>
      <div class="bg-white p-8 rounded-lg z-10">
        <h2 class="text-xl font-bold mb-4">You have no moves left!</h2>
        <button
          class="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
          on:click={() => {
            noMovesAlert = false;
            {
              initializeBoard();
            }
          }}>Restart</button
        >
      </div>
    </div>
  {/if}

  {#if goalReachedAlert}
    <div class="fixed inset-0 flex items-center justify-center">
      <div class="bg-gray-900 bg-opacity-75 absolute inset-0"></div>
      <div class="bg-white p-8 rounded-lg z-10">
        <h2 class="text-xl font-bold mb-4">Congratulations!</h2>
        <p class="text-lg">You reached the Goal !</p>
        <button
          class="mt-4 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
          on:click={() => {
            goalReachedAlert = false;
            initializeBoard();
          }}>Restart</button
        >
      </div>
    </div>
  {/if}

  {#if noMoneyAlert}
    <div class="fixed inset-0 flex items-center justify-center">
      <div class="bg-gray-900 bg-opacity-75 absolute inset-0"></div>
      <div class="bg-white p-8 rounded-lg z-10">
        <h2 class="text-xl font-bold mb-4">Oops!</h2>
        <p class="text-lg">You have no money left!</p>
        <button
          class="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
          on:click={() => {
            noMoneyAlert = false;
            initializeBoard();
          }}>Restart</button
        >
      </div>
    </div>
  {/if}

  <style>
    .cell {
      align-items: center;
    }

    .bg-gray-300 {
      background-color: gray;
    }
  </style>
</body>
