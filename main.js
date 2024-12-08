document.addEventListener("DOMContentLoaded", () => {
  const contents = document.querySelectorAll(".transition");
  contents.forEach((content) => {
    setTimeout(() => {
      content.style.opacity = "1";
      content.style.transform = "translateY(0)";
    }, 0);
  });
});

function toggleAudio() {
  const audio = document.getElementById("audio");
  const iconContainer = document.getElementById("audio-icon");

  if (audio.paused) {
    audio.play();
    iconContainer.classList.add("playing");
  } else {
    audio.pause();
    iconContainer.classList.remove("playing");
  }
}

function createMiniBox() {
  const miniBox = document.createElement("div");
  miniBox.classList.add("mini-box");

  const header = document.createElement("div");
  header.classList.add("box-header");
  const title = document.createElement("p");
  title.textContent = "Happy Birthday";
  const closeButton = document.createElement("a");
  closeButton.textContent = "-";
  closeButton.href = "#";
  closeButton.onclick = () => miniBox.remove();

  header.appendChild(title);
  header.appendChild(closeButton);
  miniBox.appendChild(header);

  const content = document.createElement("div");
  content.classList.add("box-content");
  const img = document.createElement("img");

  let list = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
  ];

  let randomIndex = Math.floor(Math.random() * list.length);
  let randomValue = list[randomIndex];

  img.src = `./img/${randomValue}.jpg`;
  img.alt = "Image";
  content.appendChild(img);
  miniBox.appendChild(content);

  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  const randomX = Math.random() * (screenWidth - 200);
  const randomY = Math.random() * (screenHeight - 200);

  miniBox.style.left = `${randomX}px`;
  miniBox.style.top = `${randomY}px`;

  document.body.appendChild(miniBox);

  miniBox.style.opacity = 1;
}

runBeforeMiniBox = function () {
  const audio = document.getElementById("audio");
  audio.volume = 0.2;

  if (audio.paused) {
    audio.play();
  }

  let intervalId = null;

  const checkTime = () => {
    if (audio.currentTime >= 15) {
      audio.removeEventListener("timeupdate", checkTime);
      console.log("Audio đã phát đủ 15 giây, bắt đầu tạo MiniBox.");

      intervalId = setInterval(createMiniBox, 100);

      audio.addEventListener("ended", () => {
        clearInterval(intervalId);
      });
    }
  };

  audio.addEventListener("timeupdate", checkTime);
};

document.querySelector(".exeed button").addEventListener("click", function () {
  toggleAudio();
  runBeforeMiniBox();
});
