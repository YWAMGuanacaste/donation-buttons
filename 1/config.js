////// do not change: ///////
window.C = {};
C.translations = {};

////// can be changed: ///////
C.projectEnabled = true; //true or false, if false the page just shows a notice that the project is not enabled
C.projectId = 'ywam-guanacaste-project-1'; //important: change this ID when copying/forking this project
C.lowerLimit = 1; //the lowest amount that is possible to spend
C.upperLimit = 200; //the highest amount that is possible to spend
C.doneAmounts = []; //amounts that are verified to be already done (donation already received)
C.elementsByRow = 20; //number of buttons in one row
C.backgroundImage = 'Background.JPG'; //path to the background image
C.currency = '$'; //symbol for currency to show (use '' for no currency)
C.fontSize = '13px'; //font size of the amounts in the buttons
C.redirectAfterClick = true; //if true user is redirected to an url after clicking on a donation button (see "translations --> redirectURL" below)
C.redirectDelayMs = 1000; //delay in milliseconds, before the redirect is done (so that the user can see the change of the button to semi-transparent)

C.translations['confirmDonate'] = {
    'en' : "Do you want to donate the amount of {1}{0}? Clicking on 'OK' will mark this amount as done and redirect you to a page where you should use code number G8650 in the field 'Person/Project/Account:' as payment information.",
    'de' : 'Möchtest du wirklich den Betrag von {0}{1} spenden? Ein Klick auf "OK" wird den Betrag als "gespendet" markieren und dich zu einer Seite, auf der Sie unsere Codenummer G8650 in das Feld "Person/Project/Account:" wie Zahlungsinformationen weiterleiten.',
    'fi' : 'Haluatko lahjoittaa summan {0}{1}? Painamalla ”OK” summa tulee valituksi ja sinut ohjataan sivulle, jossa sinun tulisi kirjoittaa koodi G8650 kenttään "Person/Project/Account:"',
    'sv' : 'Vill du donera summan {0}{1}? när du klickar på "OK" så kommer du att sändas vidare till en sida där du bör använda nummer G8650 i fältet "Person/Project/Account:" som donations info.'
};
C.translations['confirmUndo'] = {
    'en' : "Do you really want to unmark the amount {0}{1}? Please only do this if you clicked on this button before and you now decided to not spend the money.",
    'de' : 'Möchtest du wirklich die Markierung des Betrags von {0}{1} rückgängig machen? Bitte führe diesen Schritt nur aus, wenn du zuvor auf den Button geklickt hast und nun entschieden hast den Betrag doch nicht zu spenden.',
    'fi' : 'Oletko varma, että haluat poistaa valinnan summasta {0}{1} Tee näin ainoastaan, jos painoit nappulaa aiemmin ja päätitkin olla lahjoittamatta summaa.',
    'sv' : 'Är du säker på att du vill avbryta donationen för summan {0}{1}, gör det endast om det var du som reserverade den.'
};
C.translations['redirectURL'] = {
    'en' : 'https://meigiving.com/Sites/YWAM_Guanacaste.php',
    'de' : 'https://meigiving.com/Sites/YWAM_Guanacaste.php',
    'fi' : 'https://meigiving.com/Sites/YWAM_Guanacaste.php',
    'sv' : 'https://meigiving.com/Sites/YWAM_Guanacaste.php'
};
/////////////////////////////
