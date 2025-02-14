const flight = {
  id: '145c01af48dd00002715248e_0',
  dTimeUTC: '01/26/2021 @ 1:25pm (UTC)',
  aTimeUTC: '01/26/2021 @ 3:45pm (UTC)',
  duration: {
    departure: 8400,
    return: 0,
    total: 8400,
  },
  fly_duration: '2h 20m',
  flyFrom: 'PRG',
  cityFrom: 'Prague',
  cityCodeFrom: 'PRG',
  countryFrom: {
    code: 'CZ',
    name: 'Czechia',
  },
  flyTo: 'BCN',
  cityTo: 'Barcelona',
  cityCodeTo: 'BCN',
  countryTo: {
    code: 'ES',
    name: 'Spain',
  },
  distance: 1359.54,
  airline: 'FR',
  pnr_count: 1,
  technical_stops: 0,
  price: 36,
  bags_price: {
    1: 34.95,
    2: 69.91,
  },
  baglimit: {
    hand_width: 20,
    hand_height: 40,
    hand_length: 55,
    hand_weight: 10,
    hold_width: 81,
    hold_height: 119,
    hold_length: 119,
    hold_dimensions_sum: 319,
    hold_weight: 20,
  },
  availability: {
    seats: 2,
  },
  conversion: {
    EUR: 36,
  },
  quality: 66.66659,
};

  //Proveďte následující:

//1. Vypište do stránky název startovní a cílové země.

document.body.innerHTML += 'Start v zemi: ' + '<b>' + flight.countryFrom.name + '</b>';
document.body.innerHTML += '<p>' + 'Cíl v zemi: ' + '<b>' + flight.countryTo.name +  '</b>' +'</p>';

//2.Uložte do separátní proměnné objekt udávající maximální rozměry zavazadel.

const maxBagLimit = {
  hand_width: 20,
  hand_height: 40,
  hand_length: 55,
  hand_weight: 10,
  hold_width: 81,
  hold_height: 119,
  hold_length: 119,
  hold_dimensions_sum: 319,
  hold_weight: 20,
    };

    /*
document.body.innerHTML += '<h3>' +'<p> Maximální rozměry zavazadel ' + '</p>' + '</h3>';
document.body.innerHTML += '<h4>'+'<p> Příruční zavazadlo: ' + '</p>' + '</h4>';
document.body.innerHTML += '<p> Maximální šířka: ' +  maxBagLimit.hand_width + ' cm' + '</p>';
document.body.innerHTML += '<p> Maximální výška: ' + maxBagLimit.hand_height + ' cm'+ '</p>';
document.body.innerHTML += '<p> Maximální délka : ' + maxBagLimit.hand_length + ' cm' + '</p>';
document.body.innerHTML += '<p> Maximální váha: ' + maxBagLimit.hand_weight + ' cm'+'</p>';
document.body.innerHTML += '<h4>'+'<p> Odbavené zavazadlo: ' + '</p>' + '</h4>';
document.body.innerHTML += '<p> Maximální šířka: ' +  maxBagLimit.hold_width + ' cm' + '</p>';
document.body.innerHTML += '<p> Maximální výška: ' + maxBagLimit.hold_height  + ' cm'+ '</p>';
document.body.innerHTML += '<p> Maximální délka : ' + maxBagLimit.hold_length + ' cm'+ '</p>';
document.body.innerHTML += '<p> Maximální součet rozměrů: ' + maxBagLimit.hold_dimensions_sum + ' cm'+ '</p>'
document.body.innerHTML += '<p> Maximální váha: ' + maxBagLimit.hold_weight + ' kg' +'</p>';
*/

//3.Z objektu s rozměry zavazadel vytáhněte maximální povolené rozměry příručního zavazadla a vypište tyto rozměry opět jeden po druhém vypište do stránky.
document.body.innerHTML += '<h4>'+'<p> Maximální rozměry příručního zavazadla: ' + '</p>' + '</h4>';
document.body.innerHTML += '<p> Maximální šířka: ' +  maxBagLimit.hand_width + ' cm' + '</p>';
document.body.innerHTML += '<p> Maximální výška: ' + maxBagLimit.hand_height + ' cm'+ '</p>';
document.body.innerHTML += '<p> Maximální délka : ' + maxBagLimit.hand_length + ' cm' + '</p>';
document.body.innerHTML += '<p> Maximální váha: ' + maxBagLimit.hand_weight + ' kg'+'</p>';


//4.Vypište do stránky, kolik cestující zaplatí za druhé zavazadlo v českých korunách zaokrouhleno nahoru na celé koruny.

const  cenaZavazadla =  {
  1: Number ('34.95'),
  2: Number ('69.91'),
}

const směnnýKurz =  Number ('36');

document.body.innerHTML += '<p> <b> Cena za druhé zavazadlo: </b>' + Math.ceil( cenaZavazadla[2] *  směnnýKurz) +  ' Kč' + '</p>';

//5.Pokud máte chuť, malinko stránku nastylujte, aby se uživatel v informacích vyznal.