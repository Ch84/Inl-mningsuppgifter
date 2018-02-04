/*Skapa en JavaScript-funktion som visar multiplikationstabellen enligt bilden nedan.
Placera funktionen i en separat JS-fil. Testa funktionen i ett HTML-dokument.*/

//Skapar min funktion enligt nedan

function multiplikationstabellen() {

    var color_td; //Variabel för att bestämma färg på tabell
    document.write("<table border = '1px'>"); // Skapa själva tabellen

    for(var k=1; k<11; k++) { // Bygger for loop för att iterera från 1 - 10

        document.write("<tr style = 'height:30px;'>"); // Bygger höjden på min tabell

        for(var i=1; i<11; i++) { // Ytterligare en for loop för att iterera från 1 - 10

            if(k == 1 || i == 1) { // En if och else sats för att kunna jämföra värderna mellan mina räknare

                color_td = "#ccc"; // Bestämmer färgen på min tabell

            } else {

                color_td = "#fff"; // Bestämmer ytterligare färg på min tabell

            }
            /* Bestämmer nedan längden på min tabell samt vilken bakgrunds färg och multiplicerar 
               mina for loopar med varandra för att kunna utföra beräkning av multiplikations tabell
               från 1 - 10 */

            document.write("<td style = 'width:30px; background-color:" + color_td + "'>" + k * i + "</td>");

        }

        document.write("</tr>"); // Stänger taggen för tabell rader

    }

    document.write("</table>"); // Stänger taggen för hela tabellen

}

multiplikationstabellen(); // Anropar min funktion här
