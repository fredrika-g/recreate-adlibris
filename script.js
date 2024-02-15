const bookData = [
  {
    picture:
      "https://s1.adlibris.com/images/68338711/vad-vi-ater-om-ultraprocessad-mat-vad-den-gor-med-oss-och-varfor-vi-inte-kan-sluta-ata-den.jpg",
    bookname:
      "Vad vi äter : om ultraprocessad mat, vad den gör med oss och varför vi inte kan sluta äta den",
    author: "Chris van Tulleken",
    bookpublisher: "Kartonnage, 2024, Svenska, ISBN 9789100804633",
    bookinfo:
      "Vi har trätt in i en ny era där större delen av vår kost kommer från en helt ny uppsättning ämnen som kallas ultraprocessade – alltså livsmedel som hårdbearbetats industriellt. Men …",
    startprice: "Från 150 kr",
    price: { kartonnage: "249kr", "E-bok": "150kr", ljudbok: "94kr" },
    date: "2024",
    category: "familyAndHealth",
  },
  {
    picture:
      "https://s2.adlibris.com/images/65364021/doda-kvinnor-forlater-inte.jpg",
    bookname: "Döda kvinnor förlåter inte",
    author: "Katarina Wennstam",
    bookpublisher: "Inbunden, 2023, Svenska, ISBN 9789189750081",
    bookinfo:
      "Första delen av SekelskiftesmordenFyra kvinnor ur olika samhällsklasser bor alla i samma fastighet på Södermalm. De förs samman av ett fruktansvärt dödsfall på den gemensamma …",
    startprice: "Från 94 kr",
    price: { kartonnage: "95kr", "E-bok": "94kr", ljudbok: "94kr" },
    date: "2023",
    category: "fiction",
  },
  {
    picture: "https://s1.adlibris.com/images/63163507/nordiska-djur-pekbok.jpg",
    bookname: "Nordiska djur : pekbok",
    author: "Emma Jansson",
    bookpublisher: "0-3 år Inbunden, 2022, Svenska, ISBN 9789189083516",
    bookinfo:
      "Nu kommer äntligen den populära boken Mina första nordiska djur i en pekboksversion. Lär dig känna igen älgen, järven, vildsvinet, bävern, Rödräven och skogsmusen för att nämna …",
    startprice: "",
    price: { kartonnage: "59kr", "E-bok": "", ljudbok: "" },
    date: "2022",
    category: "kids",
  },
  {
    picture:
      "https://s1.adlibris.com/images/68338711/vad-vi-ater-om-ultraprocessad-mat-vad-den-gor-med-oss-och-varfor-vi-inte-kan-sluta-ata-den.jpg",
    bookname:
      "Vad vi äter : om ultraprocessad mat, vad den gör med oss och varför vi inte kan sluta äta den",
    author: "Chris van Tulleken",
    bookpublisher: "Kartonnage, 2024, Svenska, ISBN 9789100804633",
    bookinfo:
      "Vi har trätt in i en ny era där större delen av vår kost kommer från en helt ny uppsättning ämnen som kallas ultraprocessade – alltså livsmedel som hårdbearbetats industriellt. Men …",
    startprice: "Från 150 kr",
    price: { kartonnage: "249kr", "E-bok": "150kr", ljudbok: "94kr" },
    date: "2024",
    category: "familyAndHealth",
  },
  {
    picture:
      "https://s2.adlibris.com/images/65364021/doda-kvinnor-forlater-inte.jpg",
    bookname: "Döda kvinnor förlåter inte",
    author: "Katarina Wennstam",
    bookpublisher: "Inbunden, 2023, Svenska, ISBN 9789189750081",
    bookinfo:
      "Första delen av SekelskiftesmordenFyra kvinnor ur olika samhällsklasser bor alla i samma fastighet på Södermalm. De förs samman av ett fruktansvärt dödsfall på den gemensamma …",
    startprice: "Från 94 kr",
    price: { kartonnage: "95kr", "E-bok": "94kr", ljudbok: "94kr" },
    date: "2023",
    category: "fiction",
  },
  {
    picture: "https://s1.adlibris.com/images/63163507/nordiska-djur-pekbok.jpg",
    bookname: "Nordiska djur : pekbok",
    author: "Emma Jansson",
    bookpublisher: "0-3 år Inbunden, 2022, Svenska, ISBN 9789189083516",
    bookinfo:
      "Nu kommer äntligen den populära boken Mina första nordiska djur i en pekboksversion. Lär dig känna igen älgen, järven, vildsvinet, bävern, Rödräven och skogsmusen för att nämna …",
    startprice: "",
    price: { kartonnage: "59kr", "E-bok": "", ljudbok: "" },
    date: "2022",
    category: "kids",
  },
];

// 获取要更新的元素
const wrap= document.querySelector("#wrap");

// 循环遍历书籍数据

bookData.forEach(book => {
    // 创建新的书籍元素
    const bookElement = document.createElement("div");
    bookElement.classList.add("section-container");

    // 创建书籍图片元素
    const imgElement = document.createElement("img");
    imgElement.classList.add("bookpicture");
    imgElement.src = book.picture;
    imgElement.alt = "Book Cover";
    bookElement.appendChild(imgElement);

    // 创建书籍详情元素
    const detailElement = document.createElement("div");
    detailElement.classList.add("section-bookdetail");

    // 添加书籍标题
    const titleElement = document.createElement("h3");
    titleElement.classList.add("section-title");
    titleElement.textContent = book.bookname;
    detailElement.appendChild(titleElement);

    // 添加作者
    const authorElement = document.createElement("p");
    authorElement.classList.add("section-author");
    authorElement.textContent = "Author: " + book.author;
    detailElement.appendChild(authorElement);

    // 添加出版商
    const publisherElement = document.createElement("p");
    publisherElement.classList.add("section-publisher");
    publisherElement.textContent = "Publisher: " + book.bookpublisher;
    detailElement.appendChild(publisherElement);

    // 添加书籍信息
    const bookinfoElement = document.createElement("p");
    bookinfoElement.classList.add("section-bookinfo");
    bookinfoElement.textContent = book.bookinfo;
    detailElement.appendChild(bookinfoElement);

    // 添加起始价格
    const startpriceElement = document.createElement("p");
    startpriceElement.classList.add("price");
    startpriceElement.textContent = book.startprice;
    detailElement.appendChild(startpriceElement);

    bookElement.appendChild(detailElement);

    // 添加不同格式的价格和按钮
    const priceElement = document.createElement("div");

    Object.keys(book.price).forEach(format => {
        const priceItemElement = document.createElement("div");
        const priceValueElement = document.createElement("p");
        priceValueElement.textContent = format + ": " + book.price[format];
        priceItemElement.appendChild(priceValueElement);
        
        const buttonElement = document.createElement("button");
        buttonElement.textContent = "Buy " + format;
        buttonElement.id = format + "Btn";
        priceItemElement.appendChild(buttonElement);

        priceElement.appendChild(priceItemElement);
    });

    bookElement.appendChild(priceElement);

    // 将书籍元素添加到页面中
    wrap.appendChild(bookElement);
});







// filtering section

const accordionTriggers = document.querySelectorAll(".accordion-trigger");

accordionTriggers.forEach((button) =>
  button.addEventListener("click", function () {
    const buttonControls = button.getAttribute("aria-controls");

    const clickedPanel = document.getElementById(buttonControls);

    const visibility = button.getAttribute("aria-expanded");

    if (visibility === "false") {
      button.setAttribute("aria-expanded", true);
      clickedPanel.setAttribute("aria-expanded", true);
      clickedPanel.setAttribute("aria-hidden", false);
    } else if (visibility === "true") {
      button.setAttribute("aria-expanded", false);
      clickedPanel.setAttribute("aria-expanded", false);
      clickedPanel.setAttribute("aria-hidden", true);
    }
  })
);

let filterCheckboxes = document.querySelectorAll(
  ".filter-inputs input[type='checkbox']"
);

console.log(typeof filterCheckboxes);

for (let i = 0; i < filterCheckboxes.length; i++) {
  filterCheckboxes[0].addEventListener("change", () => {
    console.log("change now!");
  });
}
