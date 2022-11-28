// Title of the Webpage

const titleDiv = document.createElement("div");
titleDiv.className = "titleClass";

document.body.append(titleDiv);

// Buttons

btnDiv = document.createElement("div");
btnDiv.className = "divClass";

const searchBtn = document.createElement("button");
searchBtn.innerText = "Click for a Word";

btnDiv.append(searchBtn);
document.body.append(btnDiv);

// Body of the webpage to show the content

const bodyDiv = document.createElement("div");
bodyDiv.className = "bodyDivClass";
document.body.append(bodyDiv);

var data = [];

const showData = (event) => {
  event.preventDefault();

  bodyDiv.innerText = "";

  const getData = async () => {
    try {
      url = "https://random-words-api.vercel.app/word";

      const response = await fetch(url);

      const dictionary = await response.json();

      data = dictionary;

      data.forEach((item) => {
        const word = ["word"].map((values) => item[values]);

        const wordDiv = document.createElement("div");
        wordDiv.className = "worddivClass";
        wordDiv.innerText = word;

        const definition = ["definition"].map((values) => item[values]);

        const definitionDiv = document.createElement("div");
        definitionDiv.innerText = `Definition:		${definition}`;
        definitionDiv.className = "defineClass";

        const pronunciation = ["pronunciation"].map((values) => item[values]);

        const pronunciationDiv = document.createElement("div");
        pronunciationDiv.innerText = `Pronunciation:		${pronunciation}`;
        pronunciationDiv.className = "pronunceClass";

        bodyDiv.append(wordDiv, definitionDiv, pronunciationDiv);
      });
    } catch (error) {
      console.log(error);
    }
  };
  getData();
};

searchBtn.addEventListener("click", showData);
