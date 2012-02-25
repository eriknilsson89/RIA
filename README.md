# Todo
“Skapa lista över dina saker som behövs göras. Sätt prioritet och taggar på dina inlägg för att lätt kunna sortera dem. Denna app är byggd av Erik Nilsson. Detta är version 1.0.0.”

Använda bibliotek
“ToDo använder sig av Backebone.js och Require.js som grund. Även Underscore.js, jQuery, Order.js  och Backebone-Localstorage används på flera ställen.”

## Navigera i koden
“Main.js - Laddar in alla filer och startar igång appen.”
“App.js - Startar igång Router.js.”
“Router.js - Router för appen som laddar in appview.”
“Boilerplate.js - En mall som används som grund för varje ny .js-fil.”

“Models/post.js - Modell för post. Sätter default-värden.”
“Models/tag.js - Modell för tag. Sätter default-värden.”

“Collections/posts.js - Collection för post. Skapar en localStorage för att spara data.”
Collections/tags.js - Collection för tag. Skapar en localStorage för att spara data.”

“Views/appView.js - Grund-vy som skapar upp de andra “under-vyerna”.”
“Views/todo.js - Skapar delen där alla poster hanteras. Innehåller tre templates, en ul-lista, en som innehåler en input, en select för att sätta prioritet och en submitknapp och en template som innehåller spans som används som knappar till sortering.”
“Views/TodoListViewEntry.js - Skapar ett nytt li-element som läggs i ul-listan som skapades i todo.js. Innehåller texten för posten, satt prioritet, tagg och när den är skapad. Även knappar för att ta bort detta element och för att redigera text och prioritet. “
“Views/tagList.js - Skapar delen som hanterar taggar. Innehåller två templates, ett formulär som ska innehålla inputs med alla taggar som finns och en template som har ett input-fält och en submit.”
“Views/TagListViewEntry.js - Skapar en ny input med typen radio button och en span som anger namn på taggen. Läggs i formuläret som finns i tagList.js.”
“Views/baseView.js - En basvy som appView.js bygger på.”

## Installation:
“Ladda bara ner koden och kör index.html. “