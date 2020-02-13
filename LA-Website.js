// Used to filter data/ Usado filtrar e relacionar dados.
// L.A WEBSITE: https://www.portfoliodolucas.com/

import wixData from 'wix-data';

$w.onReady (function () {
});

export function input1_keyPress(event) {
let searchValue = $w("#input1").value;
$w("#dataset1").setFilter(wixData.filter().contains('title', searchValue).
or(wixData.filter().contains('tag', searchValue)).
or(wixData.filter().contains('cliente', searchValue)));
}

export function dropdown2_change(event) {
let dropdownValue = $w("#dropdown2").value;
$w("#dataset1").setFilter(wixData.filter().contains('cliente', dropdownValue));
$w("#dropdown2").selectedIndex = 0;
}

export function button1_click(event) {
let clienteValue = $w("#dropdown2").value;
$w("#dataset1").setFilter(wixData.filter());
}
