
$(".searchClear").click(function() {
     $('#nemlegend').css("display","none");
$('#valoslegend').css("display","none");
$('#nemzetiseglegend').css("display","none");
$('#foglalkozaslegend').css("display","none");
$('#korszaklegend').css("display","none");
$('#kormanylegend').css("display","none");
      $('#prop2').val("0");
     $('#prop4').val("0");
     $('#prop6').val("0");
     $('#prop8').val("0");
     $('#prop10').val("0");
     $('#prop12').val("0");
     $('#prop14').val("0");
    document.getElementById('one').value=0;
 document.getElementById('two').value=0;
  document.getElementById('four').value=0;
  document.getElementById('five').value=0;
 document.getElementById('six').value=0;
  document.getElementById('seven').value=0;
  document.getElementById('three').value=0;
  document.getElementById('eight').value=0;
  
     

      map.setPaintProperty('18kerfinal4-6t2ivv', 'line-color', 'hsla(0, 0%, 0%, 0.3)');
 map.setFilter('18kerfinal4-6t2ivv', [
  "all",
  [
    "match",
    ["get", "vannincs"],
    ["van"],
    true,
    false
  ]
]);

map.setFilter('bp18finaladattal-b1eqei', [
  "all",
  [
    "match",
    ["get", "vannincs"],
    ["nincs"],
    true,
    false
  ]
]);

    map.on('mousemove', '18kerfinal4-6t2ivv', function(e) {
  map.getCanvas().style.cursor = 'pointer';
  $('.infoegy').fadeOut("normal");
   {setTimeout(function() {
  $('.infoegy').css("z-index",-1);}, 250);}
  var features = map.queryRenderedFeatures(e.point, {
    layers: ['18kerfinal4-6t2ivv'] // replace this with the name of the layer
  });

 if (!features.length) {
    return;
  }

  var props = features[0].properties;

        var state = features[0].state;
  
  var feature = features[0];
            popup.setLngLat(e.lngLat)
                .setHTML('<span style="font-weight:bold; font-family:Montserrat">Utca neve: </span><span style="font-family:Montserrat">' + feature.properties.kozt_nev + '</span>')
                .addTo(map);

        });


        // Change it back to a pointer when it leaves.
map.on('mouseleave', '18kerfinal4-6t2ivv', function () {
map.getCanvas().style.cursor = 'default';
popup.remove();
}); 
     
    });



  var letrejovetelegyFilter=["all",
    ['==', ['string', ['get', 'letrejottevidotartam']], "1836-1909"]
 ]

var letrejovetelkettoFilter=["all",
    ['==', ['string', ['get', 'letrejottevidotartam']], "1910-1929"]
 ]

 var letrejovetelharomFilter=["all",
    ['==', ['string', ['get', 'letrejottevidotartam']], "1926-1949"]
 ]

 var letrejovetelnegyFilter=["all",
    ['==', ['string', ['get', 'letrejottevidotartam']], "1950-1974"]
 ]

 var letrejovetelotFilter=["all",
    ['==', ['string', ['get', 'letrejottevidotartam']], "1975-2021"]
 ]

 var kategoriaegyFilter=["all",
    ['==', ['string', ['get', 'tipus']], "Személy"]
 ]

 var kategoriakettoFilter=["all",
    ['==', ['string', ['get', 'tipus']], "Helynév/helységnév"]
 ]

 var kategoriaharomFilter=["all",
    ['==', ['string', ['get', 'tipus']], "Növény"]
 ]

 var kategorianegyFilter=["all",
    ['==', ['string', ['get', 'tipus']], "Ásvány"]
 ]


 var kategoriaotFilter=["all",["match",["get", "tipus"],["Személy","Helynév/helységnév","Növény","Ásvány"],false,true]]

 var nemegyFilter=["all",
    ['==', ['string', ['get', 'nem']], "férfi"]
 ]
 var nemkettoFilter=["all",
    ['==', ['string', ['get', 'nem']], "nő"]
 ]

var foglalkozasegyFilter=["all",
    ['==', ['string', ['get', 'foglalkozas']], "író/költő"]
 ]

 var foglalkozaskettoFilter=["all",
    ['==', ['string', ['get', 'foglalkozas']], "politikus/államférfi"]
 ]

 var foglalkozasharomFilter=["all",
    ['==', ['string', ['get', 'foglalkozas']], "hadvezér/katona"]
 ]

 var foglalkozasnegyFilter=["all",
    ['==', ['string', ['get', 'foglalkozas']], "művész"]
 ]

 var foglalkozasotFilter=["all",
    ['==', ['string', ['get', 'foglalkozas']], "uralkodó"]
 ]

 var foglalkozashatFilter=["all",
    ['==', ['string', ['get', 'foglalkozas']], "tudós"]
 ]

 var foglalkozashetFilter=["all",
    ['==', ['string', ['get', 'foglalkozas']], "egyházi"]
 ]

 var foglalkozasnyolcFilter=["all",
    ['==', ['string', ['get', 'foglalkozas']], "sportoló"]
 ]

 var foglalkozaskilencFilter=["all",
    ['==', ['string', ['get', 'foglalkozas']], "egyéb"]
 ]

 var korszakegyFilter=["all",
    ['==', ['string', ['get', 'mikoreltidotartam']], "ókor"]
 ]

 var korszakkettoFilter=["all",
    ['==', ['string', ['get', 'mikoreltidotartam']], "középkor"]
 ]

 var korszakharomFilter=["all",
    ['==', ['string', ['get', 'mikoreltidotartam']], "újkor"]
 ]

 var korszaknegyFilter=["all",
    ['==', ['string', ['get', 'mikoreltidotartam']], "18. század"]
 ]

 var korszakotFilter=["all",
    ['==', ['string', ['get', 'mikoreltidotartam']], "19. század"]
 ]

 var korszakhatFilter=["all",
    ['==', ['string', ['get', 'mikoreltidotartam']], "1900-1945"]
 ]

 var korszakhetFilter=["all",
    ['==', ['string', ['get', 'mikoreltidotartam']], "1945 után"]
 ]



items7 = {
1000000:letrejovetelegyFilter,
2000000:letrejovetelkettoFilter,
3000000:letrejovetelharomFilter,
4000000:letrejovetelnegyFilter,
5000000:letrejovetelotFilter,}
items8={
100000:kategoriaegyFilter,
200000:kategoriakettoFilter,
300000:kategoriaharomFilter,
400000:kategorianegyFilter,
500000:kategoriaotFilter,}
items9={
10000:nemegyFilter,
20000:nemkettoFilter,}
items10={
1000:foglalkozasegyFilter,
2000:foglalkozaskettoFilter,
3000:foglalkozasharomFilter,
4000:foglalkozasnegyFilter,
5000:foglalkozasotFilter,
6000:foglalkozashatFilter,
7000:foglalkozashetFilter,
8000:foglalkozasnyolcFilter,
9000:foglalkozaskilencFilter,}
items11={
100:korszakegyFilter,
200:korszakkettoFilter,
300:korszakharomFilter,
400:korszaknegyFilter,
500:korszakotFilter,
600:korszakhatFilter,
700:korszakhetFilter,}



$(document).ready(function() {
    $('.propclass').change(function(){
   
    var final = $('#three').val();
    var enter = $('#one').val();
    var enter2 = $('#two').val();
    var enter3 = $('#four').val();
    var enter4 = $('#five').val();
    var enter5 = $('#six').val();
    var enter6 = $('#seven').val();
    var szin = $('#eight').val();
if (szin == 0) {map.setPaintProperty('18kerfinal4-6t2ivv', 'line-color', 'hsla(0, 0%, 0%, 0.3)');
 map.setFilter('18kerfinal4-6t2ivv', [
  "all",
  [
    "match",
    ["get", "vannincs"],
    ["van"],
    true,
    false
  ]
]);

map.setFilter('bp18finaladattal-b1eqei', null);


$('#nemlegend').css("display","none");
$('#valoslegend').css("display","none");
$('#nemzetiseglegend').css("display","none");
$('#foglalkozaslegend').css("display","none");
$('#korszaklegend').css("display","none");
$('#kormanylegend').css("display","none");}
if (szin == 10000000) {map.setFilter('18kerfinal4-6t2ivv', [
  "all",
  [
    "match",
    ["get", "vannincs"],
    ["van"],
    true,
    false
  ]
]);

map.setFilter('bp18finaladattal-b1eqei', null);
map.setPaintProperty('bp18finaladattal-b1eqei','line-opacity',1);
                map.setPaintProperty('18kerfinal4-6t2ivv', 'line-color', [
  "match",
  [
    "get",
    "letrejottevidotartam"
  ],
  ["1836-1909"],
  "#ffb685",
  ["1910-1929"],
  "#80ebaa",
  ["1926-1949"],
  "#83bed7",
  ["1950-1974"],
  "#cc9bf4",
  ["1975-2021"],
  "#d98293",
  "hsla(0, 0%, 0%, 0.07)"
]);
        $('#nemlegend').css("display","block");
$('#valoslegend').css("display","none");
$('#nemzetiseglegend').css("display","none");
$('#foglalkozaslegend').css("display","none");
$('#korszaklegend').css("display","none");
$('#kormanylegend').css("display","none");}
        if (szin == 20000000) { map.setPaintProperty('18kerfinal4-6t2ivv', 'line-color', [
  "match",
  [
    "get",
    "tipus"
  ],
  ["Ásvány"],
  "#ffa061",
  ["Helynév/helységnév"],
  "#83a9e7",
  ["Növény"],
  "#80d19c",
  ["Személy"],
  "#ee87b0",
  "#d6d6d6"
]);
             map.setFilter('18kerfinal4-6t2ivv', [
  "all",
  [
    "match",
    ["get", "vannincs"],
    ["van"],
    true,
    false
  ]
]);

map.setFilter('bp18finaladattal-b1eqei', null);
      $('#nemlegend').css("display","none");
$('#valoslegend').css("display","block");
$('#nemzetiseglegend').css("display","none");
$('#foglalkozaslegend').css("display","none");
$('#korszaklegend').css("display","none");
$('#kormanylegend').css("display","none");}
if (szin == 30000000) {map.setFilter('18kerfinal4-6t2ivv', [
  "all",
  [
    "match",
    ["get", "nem"],
    ["férfi", "nő"],
    true,
    false
  ]
]);

map.setFilter('bp18finaladattal-b1eqei', null);
            map.setPaintProperty('18kerfinal4-6t2ivv', 'line-color', [
  "match",
  [
    "get",
    "nem"
  ],
  ["férfi"],
  "#93cbd2",
  ["nő"],
  "#ffbf75",
  "hsla(0, 0%, 0%, 0.07)"
]);
      $('#nemlegend').css("display","none");
$('#valoslegend').css("display","none");
$('#nemzetiseglegend').css("display","block");
$('#foglalkozaslegend').css("display","none");
$('#korszaklegend').css("display","none");
$('#kormanylegend').css("display","none");}
if (szin == 40000000) {map.setFilter('18kerfinal4-6t2ivv', [
  "all",
  [
    "match",
    ["get", "foglalkozas"],
    [
      "sportoló",
      "tudós",
      "hadvezér/katona",
      "egyéb",
      "uralkodó",
      "politikus/államférfi",
      "író/költő",
      "művész",
      "egyházi"
    ],
    true,
    false
  ]
]);

map.setFilter('bp18finaladattal-b1eqei', null);
map.setPaintProperty('18kerfinal4-6t2ivv', 'line-color', [
  "match",
  ["get", "foglalkozas"],
  ["író/költő"],
  "#eed65d",
  ["hadvezér/katona"],
  "#f79250",
  ["uralkodó"],
  "#ff85ce",
  ["politikus/államférfi"],
  "#5c9ef5",
  ["tudós"],
  "#b4f486",
  ["művész"],
  "#82f2f0",
  [
    
    "egyházi"
  ],
  "#cd8bf9",
  [
    
    "sportoló"
  ],
  "#9d6b9e",
  "#c7c7c7"
]);
    $('#nemlegend').css("display","none");
$('#valoslegend').css("display","none");
$('#nemzetiseglegend').css("display","none");
$('#foglalkozaslegend').css("display","block");
$('#korszaklegend').css("display","none");
$('#kormanylegend').css("display","none");}
if (szin == 50000000) {map.setFilter('18kerfinal4-6t2ivv', [
  "all",
  [
    "match",
    [
      "get",
      "mikoreltidotartam"
    ],
    [
      "1945 után",
      "középkor",
      "újkor",
      "1900-1945",
      "19. század",
      "18. század",
      "ókor"
    ],
    true,
    false
  ]
]);

map.setFilter('bp18finaladattal-b1eqei', null);
map.setPaintProperty('18kerfinal4-6t2ivv', 'line-color', [
  "match",
  ["get", "mikoreltidotartam"],
  ["18. század"],
  "#f782e7",
  ["19. század"],
  "#ae7ee2",
  ["1900-1945"],
  "#57a0e5",
  ["1945 után"],
  "#84d7b4",
  ["középkor"],
  "#f4926c",
  ["ókor"],
  "#fbd16f",
  [
    
    "újkor"
  ],
  "#e56693",
  "#c7c7c7"
]);
      $('#nemlegend').css("display","none");
$('#valoslegend').css("display","none");
$('#nemzetiseglegend').css("display","none");
$('#foglalkozaslegend').css("display","none");
$('#korszaklegend').css("display","block");
$('#kormanylegend').css("display","none");}

   if(enter==0&&enter2==0&&enter3==0&&enter4==0&&enter5==0){map.setFilter('18kerfinal4-6t2ivv', null);}
if(enter>0&&enter2==0&&enter3==0&&enter4==0&&enter5==0){map.setFilter('18kerfinal4-6t2ivv', ['all',items7[enter]]);}
if(enter==0&&enter2>0&&enter3==0&&enter4==0&&enter5==0){map.setFilter('18kerfinal4-6t2ivv', ['all',items8[enter2]]);}
if(enter==0&&enter2==0&&enter3>0&&enter4==0&&enter5==0){map.setFilter('18kerfinal4-6t2ivv', ['all',items9[enter3]]);}
if(enter==0&&enter2==0&&enter3==0&&enter4>0&&enter5==0){map.setFilter('18kerfinal4-6t2ivv', ['all',items10[enter4]]);}
if(enter==0&&enter2==0&&enter3==0&&enter4==0&&enter5>0){map.setFilter('18kerfinal4-6t2ivv', ['all',items11[enter5]]);}
if(enter>0&&enter2>0&&enter3==0&&enter4==0&&enter5==0){map.setFilter('18kerfinal4-6t2ivv', ['all',items7[enter], items8[enter2]]);}
if(enter>0&&enter2==0&&enter3>0&&enter4==0&&enter5==0){map.setFilter('18kerfinal4-6t2ivv', ['all',items7[enter], items9[enter3]]);}
if(enter>0&&enter2==0&&enter3==0&&enter4>0&&enter5==0){map.setFilter('18kerfinal4-6t2ivv', ['all',items7[enter], items10[enter4]]);}
if(enter>0&&enter2==0&&enter3==0&&enter4==0&&enter5>0){map.setFilter('18kerfinal4-6t2ivv', ['all',items7[enter], items11[enter5]]);}
if(enter==0&&enter2>0&&enter3>0&&enter4==0&&enter5==0){map.setFilter('18kerfinal4-6t2ivv', ['all',items8[enter2], items9[enter3]]);}
if(enter==0&&enter2>0&&enter3==0&&enter4>0&&enter5==0){map.setFilter('18kerfinal4-6t2ivv', ['all',items8[enter2], items10[enter4]]);}
if(enter==0&&enter2>0&&enter3==0&&enter4==0&&enter5>0){map.setFilter('18kerfinal4-6t2ivv', ['all',items8[enter2], items11[enter5]]);}
if(enter==0&&enter2==0&&enter3>0&&enter4>0&&enter5==0){map.setFilter('18kerfinal4-6t2ivv', ['all',items9[enter3], items10[enter4]]);}
if(enter==0&&enter2==0&&enter3>0&&enter4==0&&enter5>0){map.setFilter('18kerfinal4-6t2ivv', ['all',items9[enter3], items11[enter5]]);}
if(enter==0&&enter2==0&&enter3==0&&enter4>0&&enter5>0){map.setFilter('18kerfinal4-6t2ivv', ['all',items10[enter4], items11[enter5]]);}
if(enter>0&&enter2>0&&enter3>0&&enter4==0&&enter5==0){map.setFilter('18kerfinal4-6t2ivv', ['all',items7[enter], items8[enter2], items9[enter3]]);}
if(enter>0&&enter2>0&&enter3==0&&enter4>0&&enter5==0){map.setFilter('18kerfinal4-6t2ivv', ['all',items7[enter], items8[enter2], items10[enter4]]);}
if(enter>0&&enter2>0&&enter3==0&&enter4==0&&enter5>0){map.setFilter('18kerfinal4-6t2ivv', ['all',items7[enter], items8[enter2], items11[enter5]]);}
if(enter>0&&enter2==0&&enter3>0&&enter4>0&&enter5==0){map.setFilter('18kerfinal4-6t2ivv', ['all',items7[enter], items9[enter3], items10[enter4]]);}
if(enter>0&&enter2==0&&enter3>0&&enter4==0&&enter5>0){map.setFilter('18kerfinal4-6t2ivv', ['all',items7[enter], items9[enter3], items11[enter5]]);}
if(enter>0&&enter2==0&&enter3==0&&enter4>0&&enter5>0){map.setFilter('18kerfinal4-6t2ivv', ['all',items7[enter], items10[enter4], items11[enter5]]);}
if(enter==0&&enter2>0&&enter3>0&&enter4>0&&enter5==0){map.setFilter('18kerfinal4-6t2ivv', ['all',items8[enter2], items9[enter3], items10[enter4]]);}
if(enter==0&&enter2>0&&enter3>0&&enter4==0&&enter5>0){map.setFilter('18kerfinal4-6t2ivv', ['all',items8[enter2], items9[enter3], items11[enter5]]);}
if(enter==0&&enter2>0&&enter3==0&&enter4>0&&enter5>0){map.setFilter('18kerfinal4-6t2ivv', ['all',items8[enter2], items10[enter4], items11[enter5]]);}
if(enter==0&&enter2==0&&enter3>0&&enter4>0&&enter5>0){map.setFilter('18kerfinal4-6t2ivv', ['all',items9[enter3], items10[enter4], items11[enter5]]);}
if(enter>0&&enter2>0&&enter3>0&&enter4>0&&enter5==0){map.setFilter('18kerfinal4-6t2ivv', ['all',items7[enter], items8[enter2], items9[enter3], items10[enter4]]);}
if(enter>0&&enter2>0&&enter3>0&&enter4==0&&enter5>0){map.setFilter('18kerfinal4-6t2ivv', ['all',items7[enter], items8[enter2], items9[enter3], items11[enter5]]);}
if(enter>0&&enter2>0&&enter3==0&&enter4>0&&enter5>0){map.setFilter('18kerfinal4-6t2ivv', ['all',items7[enter], items8[enter2], items10[enter4], items11[enter5]]);}
if(enter>0&&enter2==0&&enter3>0&&enter4>0&&enter5>0){map.setFilter('18kerfinal4-6t2ivv', ['all',items7[enter], items9[enter3], items10[enter4], items11[enter5]]);}
if(enter==0&&enter2>0&&enter3>0&&enter4>0&&enter5>0){map.setFilter('18kerfinal4-6t2ivv', ['all',items8[enter2], items9[enter3], items10[enter4], items11[enter5]]);}
if(enter>0&&enter2>0&&enter3>0&&enter4>0&&enter5>0){map.setFilter('18kerfinal4-6t2ivv', ['all',items7[enter], items8[enter2], items9[enter3], items10[enter4], items11[enter5]]);}

if(enter==0&&enter2==0&&enter3==0&&enter4==0&&enter5==0){map.on('mousemove', '18kerfinal4-6t2ivv', function(e) {map.getCanvas().style.cursor = 'pointer';var features = map.queryRenderedFeatures(e.point, {layers: ['18kerfinal4-6t2ivv']});if (!features.length) {return;}var props = features[0].properties;var state = features[0].state;var feature = features[0];popup.setLngLat(e.lngLat).setHTML('<span style="font-weight:bold; font-family:Montserrat">Utca neve: </span><span style="font-family:Montserrat">' + feature.properties.kozt_nev + '</span>').addTo(map);});map.on('mouseleave', '18kerfinal4-6t2ivv', function () {map.getCanvas().style.cursor = 'default';popup.remove();});}
if(enter>0&&enter2==0&&enter3==0&&enter4==0&&enter5==0){map.on('mousemove', '18kerfinal4-6t2ivv', function(e) {map.getCanvas().style.cursor = 'pointer';var features = map.queryRenderedFeatures(e.point, {layers: ['18kerfinal4-6t2ivv']});if (!features.length) {return;}var props = features[0].properties;var state = features[0].state;var feature = features[0];popup.setLngLat(e.lngLat).setHTML('<span style="font-weight:bold; font-family:Montserrat">Utca neve: </span><span style="font-family:Montserrat">' + feature.properties.kozt_nev + '</span><br><span style="font-weight:bold; font-family:Montserrat">Létrejövetel korszaka: </span><span style="font-family:Montserrat">' + feature.properties.letrejottevidotartam + '</span>').addTo(map);});map.on('mouseleave', '18kerfinal4-6t2ivv', function () {map.getCanvas().style.cursor = 'default';popup.remove();});}
if(enter==0&&enter2>0&&enter3==0&&enter4==0&&enter5==0){map.on('mousemove', '18kerfinal4-6t2ivv', function(e) {map.getCanvas().style.cursor = 'pointer';var features = map.queryRenderedFeatures(e.point, {layers: ['18kerfinal4-6t2ivv']});if (!features.length) {return;}var props = features[0].properties;var state = features[0].state;var feature = features[0];popup.setLngLat(e.lngLat).setHTML('<span style="font-weight:bold; font-family:Montserrat">Utca neve: </span><span style="font-family:Montserrat">' + feature.properties.kozt_nev + '</span><br><span style="font-weight:bold; font-family:Montserrat">Kategória: </span><span style="font-family:Montserrat">' + feature.properties.tipus + '</span>').addTo(map);});map.on('mouseleave', '18kerfinal4-6t2ivv', function () {map.getCanvas().style.cursor = 'default';popup.remove();});}
if(enter==0&&enter2==0&&enter3>0&&enter4==0&&enter5==0){map.on('mousemove', '18kerfinal4-6t2ivv', function(e) {map.getCanvas().style.cursor = 'pointer';var features = map.queryRenderedFeatures(e.point, {layers: ['18kerfinal4-6t2ivv']});if (!features.length) {return;}var props = features[0].properties;var state = features[0].state;var feature = features[0];popup.setLngLat(e.lngLat).setHTML('<span style="font-weight:bold; font-family:Montserrat">Utca neve: </span><span style="font-family:Montserrat">' + feature.properties.kozt_nev + '</span><br><span style="font-weight:bold; font-family:Montserrat">Személy neme: </span><span style="font-family:Montserrat">' + feature.properties.nem + '</span>').addTo(map);});map.on('mouseleave', '18kerfinal4-6t2ivv', function () {map.getCanvas().style.cursor = 'default';popup.remove();});}
if(enter==0&&enter2==0&&enter3==0&&enter4>0&&enter5==0){map.on('mousemove', '18kerfinal4-6t2ivv', function(e) {map.getCanvas().style.cursor = 'pointer';var features = map.queryRenderedFeatures(e.point, {layers: ['18kerfinal4-6t2ivv']});if (!features.length) {return;}var props = features[0].properties;var state = features[0].state;var feature = features[0];popup.setLngLat(e.lngLat).setHTML('<span style="font-weight:bold; font-family:Montserrat">Utca neve: </span><span style="font-family:Montserrat">' + feature.properties.kozt_nev + '</span><br><span style="font-weight:bold; font-family:Montserrat">Személy foglalkozása: </span><span style="font-family:Montserrat">' + feature.properties.foglalkozas + '</span>').addTo(map);});map.on('mouseleave', '18kerfinal4-6t2ivv', function () {map.getCanvas().style.cursor = 'default';popup.remove();});}
if(enter==0&&enter2==0&&enter3==0&&enter4==0&&enter5>0){map.on('mousemove', '18kerfinal4-6t2ivv', function(e) {map.getCanvas().style.cursor = 'pointer';var features = map.queryRenderedFeatures(e.point, {layers: ['18kerfinal4-6t2ivv']});if (!features.length) {return;}var props = features[0].properties;var state = features[0].state;var feature = features[0];popup.setLngLat(e.lngLat).setHTML('<span style="font-weight:bold; font-family:Montserrat">Utca neve: </span><span style="font-family:Montserrat">' + feature.properties.kozt_nev + '</span><br><span style="font-weight:bold; font-family:Montserrat">Mikor élt? </span><span style="font-family:Montserrat">' + feature.properties.mikoreltidotartam + '</span>').addTo(map);});map.on('mouseleave', '18kerfinal4-6t2ivv', function () {map.getCanvas().style.cursor = 'default';popup.remove();});}
if(enter>0&&enter2>0&&enter3==0&&enter4==0&&enter5==0){map.on('mousemove', '18kerfinal4-6t2ivv', function(e) {map.getCanvas().style.cursor = 'pointer';var features = map.queryRenderedFeatures(e.point, {layers: ['18kerfinal4-6t2ivv']});if (!features.length) {return;}var props = features[0].properties;var state = features[0].state;var feature = features[0];popup.setLngLat(e.lngLat).setHTML('<span style="font-weight:bold; font-family:Montserrat">Utca neve: </span><span style="font-family:Montserrat">' + feature.properties.kozt_nev + '</span><br><span style="font-weight:bold; font-family:Montserrat">Létrejövetel korszaka: </span><span style="font-family:Montserrat">' + feature.properties.letrejottevidotartam + '</span><br><span style="font-weight:bold; font-family:Montserrat">Kategória: </span><span style="font-family:Montserrat">' + feature.properties.tipus + '</span>').addTo(map);});map.on('mouseleave', '18kerfinal4-6t2ivv', function () {map.getCanvas().style.cursor = 'default';popup.remove();});}
if(enter>0&&enter2==0&&enter3>0&&enter4==0&&enter5==0){map.on('mousemove', '18kerfinal4-6t2ivv', function(e) {map.getCanvas().style.cursor = 'pointer';var features = map.queryRenderedFeatures(e.point, {layers: ['18kerfinal4-6t2ivv']});if (!features.length) {return;}var props = features[0].properties;var state = features[0].state;var feature = features[0];popup.setLngLat(e.lngLat).setHTML('<span style="font-weight:bold; font-family:Montserrat">Utca neve: </span><span style="font-family:Montserrat">' + feature.properties.kozt_nev + '</span><br><span style="font-weight:bold; font-family:Montserrat">Létrejövetel korszaka: </span><span style="font-family:Montserrat">' + feature.properties.letrejottevidotartam + '</span><br><span style="font-weight:bold; font-family:Montserrat">Személy neme: </span><span style="font-family:Montserrat">' + feature.properties.nem + '</span>').addTo(map);});map.on('mouseleave', '18kerfinal4-6t2ivv', function () {map.getCanvas().style.cursor = 'default';popup.remove();});}
if(enter>0&&enter2==0&&enter3==0&&enter4>0&&enter5==0){map.on('mousemove', '18kerfinal4-6t2ivv', function(e) {map.getCanvas().style.cursor = 'pointer';var features = map.queryRenderedFeatures(e.point, {layers: ['18kerfinal4-6t2ivv']});if (!features.length) {return;}var props = features[0].properties;var state = features[0].state;var feature = features[0];popup.setLngLat(e.lngLat).setHTML('<span style="font-weight:bold; font-family:Montserrat">Utca neve: </span><span style="font-family:Montserrat">' + feature.properties.kozt_nev + '</span><br><span style="font-weight:bold; font-family:Montserrat">Létrejövetel korszaka: </span><span style="font-family:Montserrat">' + feature.properties.letrejottevidotartam + '</span><br><span style="font-weight:bold; font-family:Montserrat">Személy foglalkozása: </span><span style="font-family:Montserrat">' + feature.properties.foglalkozas + '</span>').addTo(map);});map.on('mouseleave', '18kerfinal4-6t2ivv', function () {map.getCanvas().style.cursor = 'default';popup.remove();});}
if(enter>0&&enter2==0&&enter3==0&&enter4==0&&enter5>0){map.on('mousemove', '18kerfinal4-6t2ivv', function(e) {map.getCanvas().style.cursor = 'pointer';var features = map.queryRenderedFeatures(e.point, {layers: ['18kerfinal4-6t2ivv']});if (!features.length) {return;}var props = features[0].properties;var state = features[0].state;var feature = features[0];popup.setLngLat(e.lngLat).setHTML('<span style="font-weight:bold; font-family:Montserrat">Utca neve: </span><span style="font-family:Montserrat">' + feature.properties.kozt_nev + '</span><br><span style="font-weight:bold; font-family:Montserrat">Létrejövetel korszaka: </span><span style="font-family:Montserrat">' + feature.properties.letrejottevidotartam + '</span><br><span style="font-weight:bold; font-family:Montserrat">Mikor élt? </span><span style="font-family:Montserrat">' + feature.properties.mikoreltidotartam + '</span>').addTo(map);});map.on('mouseleave', '18kerfinal4-6t2ivv', function () {map.getCanvas().style.cursor = 'default';popup.remove();});}
if(enter==0&&enter2>0&&enter3>0&&enter4==0&&enter5==0){map.on('mousemove', '18kerfinal4-6t2ivv', function(e) {map.getCanvas().style.cursor = 'pointer';var features = map.queryRenderedFeatures(e.point, {layers: ['18kerfinal4-6t2ivv']});if (!features.length) {return;}var props = features[0].properties;var state = features[0].state;var feature = features[0];popup.setLngLat(e.lngLat).setHTML('<span style="font-weight:bold; font-family:Montserrat">Utca neve: </span><span style="font-family:Montserrat">' + feature.properties.kozt_nev + '</span><br><span style="font-weight:bold; font-family:Montserrat">Kategória: </span><span style="font-family:Montserrat">' + feature.properties.tipus + '</span><br><span style="font-weight:bold; font-family:Montserrat">Személy neme: </span><span style="font-family:Montserrat">' + feature.properties.nem + '</span>').addTo(map);});map.on('mouseleave', '18kerfinal4-6t2ivv', function () {map.getCanvas().style.cursor = 'default';popup.remove();});}
if(enter==0&&enter2>0&&enter3==0&&enter4>0&&enter5==0){map.on('mousemove', '18kerfinal4-6t2ivv', function(e) {map.getCanvas().style.cursor = 'pointer';var features = map.queryRenderedFeatures(e.point, {layers: ['18kerfinal4-6t2ivv']});if (!features.length) {return;}var props = features[0].properties;var state = features[0].state;var feature = features[0];popup.setLngLat(e.lngLat).setHTML('<span style="font-weight:bold; font-family:Montserrat">Utca neve: </span><span style="font-family:Montserrat">' + feature.properties.kozt_nev + '</span><br><span style="font-weight:bold; font-family:Montserrat">Kategória: </span><span style="font-family:Montserrat">' + feature.properties.tipus + '</span><br><span style="font-weight:bold; font-family:Montserrat">Személy foglalkozása: </span><span style="font-family:Montserrat">' + feature.properties.foglalkozas + '</span>').addTo(map);});map.on('mouseleave', '18kerfinal4-6t2ivv', function () {map.getCanvas().style.cursor = 'default';popup.remove();});}
if(enter==0&&enter2>0&&enter3==0&&enter4==0&&enter5>0){map.on('mousemove', '18kerfinal4-6t2ivv', function(e) {map.getCanvas().style.cursor = 'pointer';var features = map.queryRenderedFeatures(e.point, {layers: ['18kerfinal4-6t2ivv']});if (!features.length) {return;}var props = features[0].properties;var state = features[0].state;var feature = features[0];popup.setLngLat(e.lngLat).setHTML('<span style="font-weight:bold; font-family:Montserrat">Utca neve: </span><span style="font-family:Montserrat">' + feature.properties.kozt_nev + '</span><br><span style="font-weight:bold; font-family:Montserrat">Kategória: </span><span style="font-family:Montserrat">' + feature.properties.tipus + '</span><br><span style="font-weight:bold; font-family:Montserrat">Mikor élt? </span><span style="font-family:Montserrat">' + feature.properties.mikoreltidotartam + '</span>').addTo(map);});map.on('mouseleave', '18kerfinal4-6t2ivv', function () {map.getCanvas().style.cursor = 'default';popup.remove();});}
if(enter==0&&enter2==0&&enter3>0&&enter4>0&&enter5==0){map.on('mousemove', '18kerfinal4-6t2ivv', function(e) {map.getCanvas().style.cursor = 'pointer';var features = map.queryRenderedFeatures(e.point, {layers: ['18kerfinal4-6t2ivv']});if (!features.length) {return;}var props = features[0].properties;var state = features[0].state;var feature = features[0];popup.setLngLat(e.lngLat).setHTML('<span style="font-weight:bold; font-family:Montserrat">Utca neve: </span><span style="font-family:Montserrat">' + feature.properties.kozt_nev + '</span><br><span style="font-weight:bold; font-family:Montserrat">Személy neme: </span><span style="font-family:Montserrat">' + feature.properties.nem + '</span><br><span style="font-weight:bold; font-family:Montserrat">Személy foglalkozása: </span><span style="font-family:Montserrat">' + feature.properties.foglalkozas + '</span>').addTo(map);});map.on('mouseleave', '18kerfinal4-6t2ivv', function () {map.getCanvas().style.cursor = 'default';popup.remove();});}
if(enter==0&&enter2==0&&enter3>0&&enter4==0&&enter5>0){map.on('mousemove', '18kerfinal4-6t2ivv', function(e) {map.getCanvas().style.cursor = 'pointer';var features = map.queryRenderedFeatures(e.point, {layers: ['18kerfinal4-6t2ivv']});if (!features.length) {return;}var props = features[0].properties;var state = features[0].state;var feature = features[0];popup.setLngLat(e.lngLat).setHTML('<span style="font-weight:bold; font-family:Montserrat">Utca neve: </span><span style="font-family:Montserrat">' + feature.properties.kozt_nev + '</span><br><span style="font-weight:bold; font-family:Montserrat">Személy neme: </span><span style="font-family:Montserrat">' + feature.properties.nem + '</span><br><span style="font-weight:bold; font-family:Montserrat">Mikor élt? </span><span style="font-family:Montserrat">' + feature.properties.mikoreltidotartam + '</span>').addTo(map);});map.on('mouseleave', '18kerfinal4-6t2ivv', function () {map.getCanvas().style.cursor = 'default';popup.remove();});}
if(enter==0&&enter2==0&&enter3==0&&enter4>0&&enter5>0){map.on('mousemove', '18kerfinal4-6t2ivv', function(e) {map.getCanvas().style.cursor = 'pointer';var features = map.queryRenderedFeatures(e.point, {layers: ['18kerfinal4-6t2ivv']});if (!features.length) {return;}var props = features[0].properties;var state = features[0].state;var feature = features[0];popup.setLngLat(e.lngLat).setHTML('<span style="font-weight:bold; font-family:Montserrat">Utca neve: </span><span style="font-family:Montserrat">' + feature.properties.kozt_nev + '</span><br><span style="font-weight:bold; font-family:Montserrat">Személy foglalkozása: </span><span style="font-family:Montserrat">' + feature.properties.foglalkozas + '</span><br><span style="font-weight:bold; font-family:Montserrat">Mikor élt? </span><span style="font-family:Montserrat">' + feature.properties.mikoreltidotartam + '</span>').addTo(map);});map.on('mouseleave', '18kerfinal4-6t2ivv', function () {map.getCanvas().style.cursor = 'default';popup.remove();});}
if(enter>0&&enter2>0&&enter3>0&&enter4==0&&enter5==0){map.on('mousemove', '18kerfinal4-6t2ivv', function(e) {map.getCanvas().style.cursor = 'pointer';var features = map.queryRenderedFeatures(e.point, {layers: ['18kerfinal4-6t2ivv']});if (!features.length) {return;}var props = features[0].properties;var state = features[0].state;var feature = features[0];popup.setLngLat(e.lngLat).setHTML('<span style="font-weight:bold; font-family:Montserrat">Utca neve: </span><span style="font-family:Montserrat">' + feature.properties.kozt_nev + '</span><br><span style="font-weight:bold; font-family:Montserrat">Létrejövetel korszaka: </span><span style="font-family:Montserrat">' + feature.properties.letrejottevidotartam + '</span><br><span style="font-weight:bold; font-family:Montserrat">Kategória: </span><span style="font-family:Montserrat">' + feature.properties.tipus + '</span><br><span style="font-weight:bold; font-family:Montserrat">Személy neme: </span><span style="font-family:Montserrat">' + feature.properties.nem + '</span>').addTo(map);});map.on('mouseleave', '18kerfinal4-6t2ivv', function () {map.getCanvas().style.cursor = 'default';popup.remove();});}
if(enter>0&&enter2>0&&enter3==0&&enter4>0&&enter5==0){map.on('mousemove', '18kerfinal4-6t2ivv', function(e) {map.getCanvas().style.cursor = 'pointer';var features = map.queryRenderedFeatures(e.point, {layers: ['18kerfinal4-6t2ivv']});if (!features.length) {return;}var props = features[0].properties;var state = features[0].state;var feature = features[0];popup.setLngLat(e.lngLat).setHTML('<span style="font-weight:bold; font-family:Montserrat">Utca neve: </span><span style="font-family:Montserrat">' + feature.properties.kozt_nev + '</span><br><span style="font-weight:bold; font-family:Montserrat">Létrejövetel korszaka: </span><span style="font-family:Montserrat">' + feature.properties.letrejottevidotartam + '</span><br><span style="font-weight:bold; font-family:Montserrat">Kategória: </span><span style="font-family:Montserrat">' + feature.properties.tipus + '</span><br><span style="font-weight:bold; font-family:Montserrat">Személy foglalkozása: </span><span style="font-family:Montserrat">' + feature.properties.foglalkozas + '</span>').addTo(map);});map.on('mouseleave', '18kerfinal4-6t2ivv', function () {map.getCanvas().style.cursor = 'default';popup.remove();});}
if(enter>0&&enter2>0&&enter3==0&&enter4==0&&enter5>0){map.on('mousemove', '18kerfinal4-6t2ivv', function(e) {map.getCanvas().style.cursor = 'pointer';var features = map.queryRenderedFeatures(e.point, {layers: ['18kerfinal4-6t2ivv']});if (!features.length) {return;}var props = features[0].properties;var state = features[0].state;var feature = features[0];popup.setLngLat(e.lngLat).setHTML('<span style="font-weight:bold; font-family:Montserrat">Utca neve: </span><span style="font-family:Montserrat">' + feature.properties.kozt_nev + '</span><br><span style="font-weight:bold; font-family:Montserrat">Létrejövetel korszaka: </span><span style="font-family:Montserrat">' + feature.properties.letrejottevidotartam + '</span><br><span style="font-weight:bold; font-family:Montserrat">Kategória: </span><span style="font-family:Montserrat">' + feature.properties.tipus + '</span><br><span style="font-weight:bold; font-family:Montserrat">Mikor élt? </span><span style="font-family:Montserrat">' + feature.properties.mikoreltidotartam + '</span>').addTo(map);});map.on('mouseleave', '18kerfinal4-6t2ivv', function () {map.getCanvas().style.cursor = 'default';popup.remove();});}
if(enter>0&&enter2==0&&enter3>0&&enter4>0&&enter5==0){map.on('mousemove', '18kerfinal4-6t2ivv', function(e) {map.getCanvas().style.cursor = 'pointer';var features = map.queryRenderedFeatures(e.point, {layers: ['18kerfinal4-6t2ivv']});if (!features.length) {return;}var props = features[0].properties;var state = features[0].state;var feature = features[0];popup.setLngLat(e.lngLat).setHTML('<span style="font-weight:bold; font-family:Montserrat">Utca neve: </span><span style="font-family:Montserrat">' + feature.properties.kozt_nev + '</span><br><span style="font-weight:bold; font-family:Montserrat">Létrejövetel korszaka: </span><span style="font-family:Montserrat">' + feature.properties.letrejottevidotartam + '</span><br><span style="font-weight:bold; font-family:Montserrat">Személy neme: </span><span style="font-family:Montserrat">' + feature.properties.nem + '</span><br><span style="font-weight:bold; font-family:Montserrat">Személy foglalkozása: </span><span style="font-family:Montserrat">' + feature.properties.foglalkozas + '</span>').addTo(map);});map.on('mouseleave', '18kerfinal4-6t2ivv', function () {map.getCanvas().style.cursor = 'default';popup.remove();});}
if(enter>0&&enter2==0&&enter3>0&&enter4==0&&enter5>0){map.on('mousemove', '18kerfinal4-6t2ivv', function(e) {map.getCanvas().style.cursor = 'pointer';var features = map.queryRenderedFeatures(e.point, {layers: ['18kerfinal4-6t2ivv']});if (!features.length) {return;}var props = features[0].properties;var state = features[0].state;var feature = features[0];popup.setLngLat(e.lngLat).setHTML('<span style="font-weight:bold; font-family:Montserrat">Utca neve: </span><span style="font-family:Montserrat">' + feature.properties.kozt_nev + '</span><br><span style="font-weight:bold; font-family:Montserrat">Létrejövetel korszaka: </span><span style="font-family:Montserrat">' + feature.properties.letrejottevidotartam + '</span><br><span style="font-weight:bold; font-family:Montserrat">Személy neme: </span><span style="font-family:Montserrat">' + feature.properties.nem + '</span><br><span style="font-weight:bold; font-family:Montserrat">Mikor élt? </span><span style="font-family:Montserrat">' + feature.properties.mikoreltidotartam + '</span>').addTo(map);});map.on('mouseleave', '18kerfinal4-6t2ivv', function () {map.getCanvas().style.cursor = 'default';popup.remove();});}
if(enter>0&&enter2==0&&enter3==0&&enter4>0&&enter5>0){map.on('mousemove', '18kerfinal4-6t2ivv', function(e) {map.getCanvas().style.cursor = 'pointer';var features = map.queryRenderedFeatures(e.point, {layers: ['18kerfinal4-6t2ivv']});if (!features.length) {return;}var props = features[0].properties;var state = features[0].state;var feature = features[0];popup.setLngLat(e.lngLat).setHTML('<span style="font-weight:bold; font-family:Montserrat">Utca neve: </span><span style="font-family:Montserrat">' + feature.properties.kozt_nev + '</span><br><span style="font-weight:bold; font-family:Montserrat">Létrejövetel korszaka: </span><span style="font-family:Montserrat">' + feature.properties.letrejottevidotartam + '</span><br><span style="font-weight:bold; font-family:Montserrat">Személy foglalkozása: </span><span style="font-family:Montserrat">' + feature.properties.foglalkozas + '</span><br><span style="font-weight:bold; font-family:Montserrat">Mikor élt? </span><span style="font-family:Montserrat">' + feature.properties.mikoreltidotartam + '</span>').addTo(map);});map.on('mouseleave', '18kerfinal4-6t2ivv', function () {map.getCanvas().style.cursor = 'default';popup.remove();});}
if(enter==0&&enter2>0&&enter3>0&&enter4>0&&enter5==0){map.on('mousemove', '18kerfinal4-6t2ivv', function(e) {map.getCanvas().style.cursor = 'pointer';var features = map.queryRenderedFeatures(e.point, {layers: ['18kerfinal4-6t2ivv']});if (!features.length) {return;}var props = features[0].properties;var state = features[0].state;var feature = features[0];popup.setLngLat(e.lngLat).setHTML('<span style="font-weight:bold; font-family:Montserrat">Utca neve: </span><span style="font-family:Montserrat">' + feature.properties.kozt_nev + '</span><br><span style="font-weight:bold; font-family:Montserrat">Kategória: </span><span style="font-family:Montserrat">' + feature.properties.tipus + '</span><br><span style="font-weight:bold; font-family:Montserrat">Személy neme: </span><span style="font-family:Montserrat">' + feature.properties.nem + '</span><br><span style="font-weight:bold; font-family:Montserrat">Személy foglalkozása: </span><span style="font-family:Montserrat">' + feature.properties.foglalkozas + '</span>').addTo(map);});map.on('mouseleave', '18kerfinal4-6t2ivv', function () {map.getCanvas().style.cursor = 'default';popup.remove();});}
if(enter==0&&enter2>0&&enter3>0&&enter4==0&&enter5>0){map.on('mousemove', '18kerfinal4-6t2ivv', function(e) {map.getCanvas().style.cursor = 'pointer';var features = map.queryRenderedFeatures(e.point, {layers: ['18kerfinal4-6t2ivv']});if (!features.length) {return;}var props = features[0].properties;var state = features[0].state;var feature = features[0];popup.setLngLat(e.lngLat).setHTML('<span style="font-weight:bold; font-family:Montserrat">Utca neve: </span><span style="font-family:Montserrat">' + feature.properties.kozt_nev + '</span><br><span style="font-weight:bold; font-family:Montserrat">Kategória: </span><span style="font-family:Montserrat">' + feature.properties.tipus + '</span><br><span style="font-weight:bold; font-family:Montserrat">Személy neme: </span><span style="font-family:Montserrat">' + feature.properties.nem + '</span><br><span style="font-weight:bold; font-family:Montserrat">Mikor élt? </span><span style="font-family:Montserrat">' + feature.properties.mikoreltidotartam + '</span>').addTo(map);});map.on('mouseleave', '18kerfinal4-6t2ivv', function () {map.getCanvas().style.cursor = 'default';popup.remove();});}
if(enter==0&&enter2>0&&enter3==0&&enter4>0&&enter5>0){map.on('mousemove', '18kerfinal4-6t2ivv', function(e) {map.getCanvas().style.cursor = 'pointer';var features = map.queryRenderedFeatures(e.point, {layers: ['18kerfinal4-6t2ivv']});if (!features.length) {return;}var props = features[0].properties;var state = features[0].state;var feature = features[0];popup.setLngLat(e.lngLat).setHTML('<span style="font-weight:bold; font-family:Montserrat">Utca neve: </span><span style="font-family:Montserrat">' + feature.properties.kozt_nev + '</span><br><span style="font-weight:bold; font-family:Montserrat">Kategória: </span><span style="font-family:Montserrat">' + feature.properties.tipus + '</span><br><span style="font-weight:bold; font-family:Montserrat">Személy foglalkozása: </span><span style="font-family:Montserrat">' + feature.properties.foglalkozas + '</span><br><span style="font-weight:bold; font-family:Montserrat">Mikor élt? </span><span style="font-family:Montserrat">' + feature.properties.mikoreltidotartam + '</span>').addTo(map);});map.on('mouseleave', '18kerfinal4-6t2ivv', function () {map.getCanvas().style.cursor = 'default';popup.remove();});}
if(enter==0&&enter2==0&&enter3>0&&enter4>0&&enter5>0){map.on('mousemove', '18kerfinal4-6t2ivv', function(e) {map.getCanvas().style.cursor = 'pointer';var features = map.queryRenderedFeatures(e.point, {layers: ['18kerfinal4-6t2ivv']});if (!features.length) {return;}var props = features[0].properties;var state = features[0].state;var feature = features[0];popup.setLngLat(e.lngLat).setHTML('<span style="font-weight:bold; font-family:Montserrat">Utca neve: </span><span style="font-family:Montserrat">' + feature.properties.kozt_nev + '</span><br><span style="font-weight:bold; font-family:Montserrat">Személy neme: </span><span style="font-family:Montserrat">' + feature.properties.nem + '</span><br><span style="font-weight:bold; font-family:Montserrat">Személy foglalkozása: </span><span style="font-family:Montserrat">' + feature.properties.foglalkozas + '</span><br><span style="font-weight:bold; font-family:Montserrat">Mikor élt? </span><span style="font-family:Montserrat">' + feature.properties.mikoreltidotartam + '</span>').addTo(map);});map.on('mouseleave', '18kerfinal4-6t2ivv', function () {map.getCanvas().style.cursor = 'default';popup.remove();});}
if(enter>0&&enter2>0&&enter3>0&&enter4>0&&enter5==0){map.on('mousemove', '18kerfinal4-6t2ivv', function(e) {map.getCanvas().style.cursor = 'pointer';var features = map.queryRenderedFeatures(e.point, {layers: ['18kerfinal4-6t2ivv']});if (!features.length) {return;}var props = features[0].properties;var state = features[0].state;var feature = features[0];popup.setLngLat(e.lngLat).setHTML('<span style="font-weight:bold; font-family:Montserrat">Utca neve: </span><span style="font-family:Montserrat">' + feature.properties.kozt_nev + '</span><br><span style="font-weight:bold; font-family:Montserrat">Létrejövetel korszaka: </span><span style="font-family:Montserrat">' + feature.properties.letrejottevidotartam + '</span><br><span style="font-weight:bold; font-family:Montserrat">Kategória: </span><span style="font-family:Montserrat">' + feature.properties.tipus + '</span><br><span style="font-weight:bold; font-family:Montserrat">Személy neme: </span><span style="font-family:Montserrat">' + feature.properties.nem + '</span><br><span style="font-weight:bold; font-family:Montserrat">Személy foglalkozása: </span><span style="font-family:Montserrat">' + feature.properties.foglalkozas + '</span>').addTo(map);});map.on('mouseleave', '18kerfinal4-6t2ivv', function () {map.getCanvas().style.cursor = 'default';popup.remove();});}
if(enter>0&&enter2>0&&enter3>0&&enter4==0&&enter5>0){map.on('mousemove', '18kerfinal4-6t2ivv', function(e) {map.getCanvas().style.cursor = 'pointer';var features = map.queryRenderedFeatures(e.point, {layers: ['18kerfinal4-6t2ivv']});if (!features.length) {return;}var props = features[0].properties;var state = features[0].state;var feature = features[0];popup.setLngLat(e.lngLat).setHTML('<span style="font-weight:bold; font-family:Montserrat">Utca neve: </span><span style="font-family:Montserrat">' + feature.properties.kozt_nev + '</span><br><span style="font-weight:bold; font-family:Montserrat">Létrejövetel korszaka: </span><span style="font-family:Montserrat">' + feature.properties.letrejottevidotartam + '</span><br><span style="font-weight:bold; font-family:Montserrat">Kategória: </span><span style="font-family:Montserrat">' + feature.properties.tipus + '</span><br><span style="font-weight:bold; font-family:Montserrat">Személy neme: </span><span style="font-family:Montserrat">' + feature.properties.nem + '</span><br><span style="font-weight:bold; font-family:Montserrat">Mikor élt? </span><span style="font-family:Montserrat">' + feature.properties.mikoreltidotartam + '</span>').addTo(map);});map.on('mouseleave', '18kerfinal4-6t2ivv', function () {map.getCanvas().style.cursor = 'default';popup.remove();});}
if(enter>0&&enter2>0&&enter3==0&&enter4>0&&enter5>0){map.on('mousemove', '18kerfinal4-6t2ivv', function(e) {map.getCanvas().style.cursor = 'pointer';var features = map.queryRenderedFeatures(e.point, {layers: ['18kerfinal4-6t2ivv']});if (!features.length) {return;}var props = features[0].properties;var state = features[0].state;var feature = features[0];popup.setLngLat(e.lngLat).setHTML('<span style="font-weight:bold; font-family:Montserrat">Utca neve: </span><span style="font-family:Montserrat">' + feature.properties.kozt_nev + '</span><br><span style="font-weight:bold; font-family:Montserrat">Létrejövetel korszaka: </span><span style="font-family:Montserrat">' + feature.properties.letrejottevidotartam + '</span><br><span style="font-weight:bold; font-family:Montserrat">Kategória: </span><span style="font-family:Montserrat">' + feature.properties.tipus + '</span><br><span style="font-weight:bold; font-family:Montserrat">Személy foglalkozása: </span><span style="font-family:Montserrat">' + feature.properties.foglalkozas + '</span><br><span style="font-weight:bold; font-family:Montserrat">Mikor élt? </span><span style="font-family:Montserrat">' + feature.properties.mikoreltidotartam + '</span>').addTo(map);});map.on('mouseleave', '18kerfinal4-6t2ivv', function () {map.getCanvas().style.cursor = 'default';popup.remove();});}
if(enter>0&&enter2==0&&enter3>0&&enter4>0&&enter5>0){map.on('mousemove', '18kerfinal4-6t2ivv', function(e) {map.getCanvas().style.cursor = 'pointer';var features = map.queryRenderedFeatures(e.point, {layers: ['18kerfinal4-6t2ivv']});if (!features.length) {return;}var props = features[0].properties;var state = features[0].state;var feature = features[0];popup.setLngLat(e.lngLat).setHTML('<span style="font-weight:bold; font-family:Montserrat">Utca neve: </span><span style="font-family:Montserrat">' + feature.properties.kozt_nev + '</span><br><span style="font-weight:bold; font-family:Montserrat">Létrejövetel korszaka: </span><span style="font-family:Montserrat">' + feature.properties.letrejottevidotartam + '</span><br><span style="font-weight:bold; font-family:Montserrat">Személy neme: </span><span style="font-family:Montserrat">' + feature.properties.nem + '</span><br><span style="font-weight:bold; font-family:Montserrat">Személy foglalkozása: </span><span style="font-family:Montserrat">' + feature.properties.foglalkozas + '</span><br><span style="font-weight:bold; font-family:Montserrat">Mikor élt? </span><span style="font-family:Montserrat">' + feature.properties.mikoreltidotartam + '</span>').addTo(map);});map.on('mouseleave', '18kerfinal4-6t2ivv', function () {map.getCanvas().style.cursor = 'default';popup.remove();});}
if(enter==0&&enter2>0&&enter3>0&&enter4>0&&enter5>0){map.on('mousemove', '18kerfinal4-6t2ivv', function(e) {map.getCanvas().style.cursor = 'pointer';var features = map.queryRenderedFeatures(e.point, {layers: ['18kerfinal4-6t2ivv']});if (!features.length) {return;}var props = features[0].properties;var state = features[0].state;var feature = features[0];popup.setLngLat(e.lngLat).setHTML('<span style="font-weight:bold; font-family:Montserrat">Utca neve: </span><span style="font-family:Montserrat">' + feature.properties.kozt_nev + '</span><br><span style="font-weight:bold; font-family:Montserrat">Kategória: </span><span style="font-family:Montserrat">' + feature.properties.tipus + '</span><br><span style="font-weight:bold; font-family:Montserrat">Személy neme: </span><span style="font-family:Montserrat">' + feature.properties.nem + '</span><br><span style="font-weight:bold; font-family:Montserrat">Személy foglalkozása: </span><span style="font-family:Montserrat">' + feature.properties.foglalkozas + '</span><br><span style="font-weight:bold; font-family:Montserrat">Mikor élt? </span><span style="font-family:Montserrat">' + feature.properties.mikoreltidotartam + '</span>').addTo(map);});map.on('mouseleave', '18kerfinal4-6t2ivv', function () {map.getCanvas().style.cursor = 'default';popup.remove();});}
if(enter>0&&enter2>0&&enter3>0&&enter4>0&&enter5>0){map.on('mousemove', '18kerfinal4-6t2ivv', function(e) {map.getCanvas().style.cursor = 'pointer';var features = map.queryRenderedFeatures(e.point, {layers: ['18kerfinal4-6t2ivv']});if (!features.length) {return;}var props = features[0].properties;var state = features[0].state;var feature = features[0];popup.setLngLat(e.lngLat).setHTML('<span style="font-weight:bold; font-family:Montserrat">Utca neve: </span><span style="font-family:Montserrat">' + feature.properties.kozt_nev + '</span><br><span style="font-weight:bold; font-family:Montserrat">Létrejövetel korszaka: </span><span style="font-family:Montserrat">' + feature.properties.letrejottevidotartam + '</span><br><span style="font-weight:bold; font-family:Montserrat">Kategória: </span><span style="font-family:Montserrat">' + feature.properties.tipus + '</span><br><span style="font-weight:bold; font-family:Montserrat">Személy neme: </span><span style="font-family:Montserrat">' + feature.properties.nem + '</span><br><span style="font-weight:bold; font-family:Montserrat">Személy foglalkozása: </span><span style="font-family:Montserrat">' + feature.properties.foglalkozas + '</span><br><span style="font-weight:bold; font-family:Montserrat">Mikor élt? </span><span style="font-family:Montserrat">' + feature.properties.mikoreltidotartam + '</span>').addTo(map);});map.on('mouseleave', '18kerfinal4-6t2ivv', function () {map.getCanvas().style.cursor = 'default';popup.remove();});}
})});



 $('#interakciogomb').on('click', function() {
    {
     setTimeout(function() {

        $('#interakciogomb').css("display","none");
        $('#interakciogomb').css("opacity",0);
        $('#visszagomb').css("display","block");
        
        $('.elsokep').css("opacity",0);
        $('.masodikkep').css("opacity",0);
        $('.harmadikkep').css("opacity",0);
        $('.negyedikkep').css("opacity",0);
        $('.otodikkep').css("opacity",0);
        $('.hatodikkep').css("opacity",0);
        $('.hetedikkep').css("opacity",0);
        $('.nyolcadikkep').css("opacity",0);
        $('.kilencedikkep').css("opacity",0);
        $('.tizedikkep').css("opacity",0);
        

 $('body').css("overflow-y",'hidden');
        $('#card').css("opacity",0);
        $('#card').css("pointer-events","none");
        
        $('#card').css("z-index", -1);

    
}, 0);
        map.boxZoom.enable();
map.scrollZoom.enable();
map.dragPan.enable();
map.dragRotate.enable();
map.keyboard.enable();
map.doubleClickZoom.enable();
map.touchZoomRotate.enable();
        map.getCanvas().style.cursor = 'default';
       
        
    } 
    });

$('#visszagomb').on('click', function() {
    {setTimeout(function() {$('#card').css("z-index", 10);

$('.elsokep').css("opacity",1);
        $('.masodikkep').css("opacity",1);
        $('.harmadikkep').css("opacity",1);
        $('.negyedikkep').css("opacity",1);
        $('.otodikkep').css("opacity",1);
        $('.hatodikkep').css("opacity",1);
        $('.hetedikkep').css("opacity",1);
        $('.nyolcadikkep').css("opacity",1);
        $('.kilencedikkep').css("opacity",1);
        $('.tizedikkep').css("opacity",1);
 
        $('#card').css("pointer-events","none");
       $('body').css("overflow-y",'auto');
        $('#interakciogomb').css("display","block");

        $('#interakciogomb').css("opacity",1);
        $('#visszagomb').css("display","none");
        setTimeout(function() {$('#card').css("opacity",1);
           }, 0);}, 1000);
        
         map.boxZoom.disable();
map.scrollZoom.disable();
map.dragPan.disable();
map.dragRotate.disable();
map.keyboard.disable();
map.doubleClickZoom.disable();
map.touchZoomRotate.disable();
        map.getCanvas().style.cursor = 'default';
        map.fitBounds([
[19.13245, 47.38461], // Southwest coordinates
[19.40805, 47.47007] // Northeast coordinates // northeastern corner of the bounds
]);
    } 
    });




$('#linktomap2').on('click', function() {
    {
        $('#linktomap3').css("display", "inline-block");
        $('#linktomap2').css("display", "none");
    } 
    });
    $('#linktomap3').on('click', function() {
    {
        $('#linktomap2').css("display", "inline-block");
        $('#linktomap3').css("display", "none");
    } 
    });
    document.getElementById('linktomap2').addEventListener('click', function () {

map.fitBounds([
[18.62299, 47.34620],[19.44429, 47.62912] // northeastern corner of the bounds
]);
   // this animation is considered essential with respect to prefers-reduced-motion
});
document.getElementById('linktomap3').addEventListener('click', function () {

map.fitBounds([
[15.32512, 45.70971], // Southwest coordinates
[23.61874, 48.64377] // northeastern corner of the bounds
]);
});

        mapboxgl.accessToken =
            'pk.eyJ1IjoiYXRsbyIsImEiOiJjam5mdDVldmkwbTJ6M3BwNW13ZXhuYXM4In0.gikvkhPkud0GJy1FxG6-Zg';
     
var bounds = [
[19.09973, 47.37496], // Southwest coordinates
[19.37812, 47.47354] // Northeast coordinates
];
var bounds2 = [[19.13661, 47.38098], // Southwest coordinates
[19.39221, 47.47155] // Northeast coordinates // northeastern corner of the bounds
];

var bounds3 = [[19.09973, 47.37496], // Southwest coordinates
[19.37812, 47.47354] // Northeast coordinates // northeastern corner of the bounds
];
        
        var map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/atlo/cl2ru78xo001814pdv986j98e', //hosted style id
            center: [19.26970, 47.42736], //Lng, Lat
     zoom:11.00,
     minZoom:9.3,
                bearing: 0// starting zoom

        });


map.boxZoom.disable();
map.scrollZoom.disable();
map.dragPan.disable();
map.dragRotate.disable();
map.keyboard.disable();
map.doubleClickZoom.disable();
map.touchZoomRotate.disable();
        map.getCanvas().style.cursor = 'default';

          var popup = new mapboxgl.Popup({ className: "popup",
    closeButton: false,
    closeOnClick: false,
    offset: [0, -5]
  });


        var chapters = {
            'ch1': {
                pitch: 0,
                 center: [19.26970, 47.42736], //Lng, Lat
     zoom:11.00,
                bearing: 0,
            },
            'ch1vv': {
                pitch: 0,
                 center: [19.26970, 47.42736], //Lng, Lat
     zoom:11.00,
                bearing: 0,
            },
            'ch1v': {
                pitch: 0,
                center: [19.31510, 47.48174],
                zoom:9.38,
                bearing: 0,
            },
            'ch2': {
                pitch: 0,
                 center: [19.26970, 47.42736], //Lng, Lat
     zoom:11.00,
                bearing: 0,
            },
            'ch3': {
               pitch: 0,
                center: [19.26970, 47.42736], //Lng, Lat
     zoom:11.00,
                bearing: 0,
            },
            'ch3v': {
                pitch: 0,
                 center: [19.21720, 47.44844], //Lng, Lat
     zoom:12.1,
                bearing: 0,
            },
            'ch4': {
                pitch: 0,
                center: [19.26970, 47.42736], //Lng, Lat
     zoom:11.00,
                bearing: 0,
            },
            'ch5': {
                pitch: 0,
                 center: [19.26970, 47.42736], //Lng, Lat
     zoom:11.00,
                bearing: 0,
            },
            'ch5v': {
                pitch: 0,
                 center: [19.26970, 47.42736], //Lng, Lat
     zoom:11.00,
                bearing: 0,
            },
            'ch6': {
                pitch: 0,
                center: [19.26970, 47.42736], //Lng, Lat
     zoom:11.00,
                bearing: 0,
            },
            'ch6v': {
                pitch: 0,
                maxBounds: bounds,
                bearing: 0,
            },
            'ch7': {
                pitch: 0,
                maxBounds: bounds,
                bearing: 0,
            },
            'ch7v': {
                pitch: 0,
                maxBounds: bounds,
                bearing: 0,
            },
            
            'ch8': {
                pitch: 0,
                maxBounds: bounds,
                bearing: 0,
            },
            'ch8v': {
                pitch: 0,
                maxBounds: bounds,
                bearing: 0,
            },
            'ch9': {
                pitch: 0,
                maxBounds: bounds,
                bearing: 0,
            },
            'ch10': {
                pitch: 0,
                maxBounds: bounds,
                bearing: 0,
            },
            'ch11': {
                pitch: 0,
                maxBounds: bounds,
                bearing: 0,
            }
        }; // On every scroll event, check which element is on screen
        window.onscroll = function () {
            var chapterNames = Object.keys(chapters);
            for (var i = 0; i < chapterNames.length; i++) {
                var chapterName = chapterNames[i];
                if (isElementOnScreen(chapterName)) {
                    setActiveChapter(chapterName);
                    break;
                }
            }
        };
  map.on('load', function () {
    map.addSource('budapest-1nowgb', {
type: 'vector',
url: 'mapbox://atlo.ax6z19l7'
});
map.addLayer({
'id': 'budapest-1nowgb',
'type': 'fill',
'source': 'budapest-1nowgb',
'source-layer': 'budapest-1nowgb',
'layout': {
     "visibility": "visible"
},
'paint': {
"fill-color": "#f5fff6",
            "fill-opacity": 1,
          }
});

map.addSource('budapest-3m9ti7', {
type: 'vector',
url: 'mapbox://atlo.0ir0ff4g'
});
map.addLayer({
'id': 'budapest-3m9ti7',
'type': 'line',
'source': 'budapest-3m9ti7',
'source-layer': 'budapest-3m9ti7',
'layout': {
     "visibility": "visible"
},
'paint': {
"line-color": "#ccc",
            "line-opacity": 0,

          },

});

map.addSource('budapest-4ot5on', {
type: 'vector',
url: 'mapbox://atlo.6itmwv1o'
});
map.addLayer({
'id': 'budapest-4ot5on',
'type': 'line',
'source': 'budapest-4ot5on',
'source-layer': 'budapest-4ot5on',
'layout': {
     "visibility": "visible"
},
'paint': {
"line-color": "#f5fff6",
            "line-opacity": 0,
            "line-width":50,
            
          },

});



map.addSource('hatar18ker-766cuw', {
type: 'vector',
url: 'mapbox://atlo.4z02568s'
});
map.addLayer({
'id': 'hatar18ker-766cuw',
'type': 'line',
'source': 'hatar18ker-766cuw',
'source-layer': 'hatar18ker-766cuw',
'layout': {
     "visibility": "visible"
},
'paint': {
"line-color": "black",
            "line-opacity": 0.4,
          }
});

map.addSource('bp18korvonal-dl0w81', {
type: 'vector',
url: 'mapbox://atlo.8xubv804'
});
map.addLayer({
'id': 'bp18korvonal-dl0w81',
'type': 'line',
'source': 'bp18korvonal-dl0w81',
'source-layer': 'bp18korvonal-dl0w81',
'layout': {
     "visibility": "visible"
},
'paint': {
"line-color": "black",
            "line-opacity": 0.4,
          }
});

map.addSource('18kerfinal4-6t2ivv', {
type: 'vector',
url: 'mapbox://atlo.4slvahd4'
});
map.addLayer({
'id': '18kerfinal4-6t2ivv',
'type': 'line',
'source': '18kerfinal4-6t2ivv',
'source-layer': '18kerfinal4-6t2ivv',
'layout': {
     "visibility": "visible",
},
'paint': {
'line-color': 'hsla(0, 0%, 0%, 0.3)',
"line-opacity": 1,
"line-opacity-transition": {
    "duration": 500,
},
'line-width':[
  "interpolate",
  ["linear"],
  ["zoom"],
  12.8,
  1.5,
  22,
  4
]
}
});






map.addSource('bp18finaladattal-b1eqei', {
type: 'vector',
url: 'mapbox://atlo.1h0gh5n0'
});
map.addLayer({
'id': 'bp18finaladattal-b1eqei',
'type': 'line',
'source': 'bp18finaladattal-b1eqei',
'source-layer': 'bp18finaladattal-b1eqei',
'layout': {
     "visibility": "visible",
},
'paint': {
'line-color': 'rgba(0,0,0,0.1)',
'line-opacity':0,
'line-width':[
  "interpolate",
  ["linear"],
  ["zoom"],
  12.8,
  1.2,
  22,
  4
]
}
});


map.addSource('bp18telepek-482y30', {
type: 'vector',
url: 'mapbox://atlo.a9ff1as6'
});
map.addLayer({
'id': 'bp18telepek-482y30',
'type': 'fill',
'source': 'bp18telepek-482y30',
'source-layer': 'bp18telepek-482y30',
'layout': {
     "visibility": "none"
},
'paint': {
"fill-color": [
  "match",
  ["get", "NAME"],
  [
    "Lónyaytelep",
    "Rendessytelep",
    "Erzsébettelep",
    "Bókaytelep",
    "Kossuth Ferenc-telep",
    "Újpéteritelep"
  ],
  "hsla(24, 100%, 76%, 0.25)",
  [
    
    "Szemeretelep",
    "Erdőskert",
    "Miklóstelep",
    "Szent Imre kertváros",
    "Ganztelep",
    "Ganzkertváros",
    "Liptáktelep",
  ],
  "hsla(144, 73%, 71%, 0.25)",
  [
    
    
    "Gloriett telep",
    "Bélatelep",
    "Ferihegy"
  ],
  "hsla(198, 51%, 68%, 0.25)",
  [
    "Halmierdő",
    "Lakatos-lakótelep",
    "Szent Lőrinc-lakótelep",
    "Belsőmajor"
  ],
   "hsla(273, 80%, 78%, 0.25)",
  [
    "Havanna-lakótelep",
    "Almáskert",
    "Krepuska Géza-telep",
   
  ],
 
  "hsla(348, 53%, 68%, 0.25)",
  "hsla(0, 0%, 0%, 0.25)"
],
            "fill-opacity": 1,
           
          }
});

map.addSource('1916hazak-6yutfm', {
type: 'vector',
url: 'mapbox://atlo.bzkkm5wx'
});
map.addLayer({
'id': '1916hazak-6yutfm',
'type': 'circle',
'source': '1916hazak-6yutfm',
'source-layer': '1916hazak-6yutfm',
'layout': {
     "visibility": "none"
},
'paint': {
"circle-color": [
  "match",
  ["get", "tulnevlakasketto"],
  ["Balás Imre"],
  "#d98293",
  [
    "Bókay Árpádné és társai"
  ],
  "#80ebaa",
  [
    "Szemere Miklós"
  ],
  "#83bed7",
  [
    "Kispesti takarékpénztár"
  ],
  "#cc9bf4",
  [
    "Kőbányai takarékpénztár"
  ],
  "#ffb685",
  "rgba(222,222,222,1)"
],
            "circle-opacity": 1,
            "circle-radius":[
  "interpolate",
  ["linear"],
  ["zoom"],
  12.8,
1.2,
  22,
  12
]
            
          },

});

map.addSource('telcent-62k7gk', {
type: 'vector',
url: 'mapbox://atlo.b53bb72v'
});
map.addLayer({
'id': 'telcent-62k7gk',
'type': 'symbol',
'source': 'telcent-62k7gk',
'source-layer': 'telcent-62k7gk',
'layout': {
     "visibility": "none",
     "text-field":["get", "nevekuj"],
     
     "text-font":[
  "Montserrat Regular"
],
"text-max-width":20,
     "text-anchor":"left",
     "text-justify":"left",
     "text-size":12
},


'paint': {
"text-color": "#000000",
            "text-opacity": 0.8,
            "text-halo-color": "#ffffff",
                "text-halo-width": 0,
          }
});

});




  
         

        var marker = new mapboxgl.Marker({
            draggable: true
        }).setLngLat([map.getCenter().lng, map.getCenter().lat])
        var activeChapterName = 'ch1';
        function setActiveChapter(chapterName) {
         
            if (chapterName === activeChapterName) return;
            if (chapterName === "ch1") {
                $('#card').css("margin-left","32vw");
           $('.arrow2').fadeIn("normal");
$('#interakciogomb').css("display","none");
                
                map.setLayoutProperty('utcanevekfinal-3k5vb2', 'visibility', "none");
               

                $('#chart').css("opacity",0);
               
                
                document.getElementById('chart').src = 'https://flo.uri.sh/story/1544173/embed#slide-0';
                
                $('#linktomap2').css("display", "none");
                 $('#linktomap3').css("display", "none");
                map.setPaintProperty('18kerfinal4-6t2ivv', 'line-color', "hsla(0, 0%, 0%, 0.3)");

            
                    
                       
                        map.on('mousemove', '18kerfinal4-6t2ivv', function(e) {
  map.getCanvas().style.cursor = 'default';
popup.remove();
  var features = map.queryRenderedFeatures(e.point, {
    layers: ['18kerfinal4-6t2ivv'] // replace this with the name of the layer
  });});
  map.on('mouseleave', '18kerfinal4-6t2ivv', function () {
map.getCanvas().style.cursor = 'default';
popup.remove();
});
   $('#yesfilter').css("display", "block");
        $('#nofilter').css("display", "none");
        
         
            $('#chart').css("transition","0s");
           
$('.infoegy').fadeOut("normal");
$('.infoketto').fadeOut("normal");
               
map.setLayoutProperty('bp18telepek-482y30', 'visibility',"none");
map.setLayoutProperty('1916hazak-6yutfm', 'visibility',"none");

map.setFilter('bp18telepek-482y30',null);
            map.setPaintProperty('budapest-3m9ti7', 'line-opacity', 0);
            map.setPaintProperty('budapest-1nowgb', 'fill-opacity', 1);

$('#chart3').css("opacity",0);
 map.setLayoutProperty('telcent-62k7gk', 'visibility',"none");
             map.setFilter('telcent-62k7gk',null);
              map.setPaintProperty('18kerfinal4-6t2ivv', 'line-width', [
  "interpolate",
  ["linear"],
  ["zoom"],
  12.8,
  1.5,
  22,
  4
]);
        } else if (chapterName === "ch1vv") {

            map.setPaintProperty('18kerfinal4-6t2ivv', 'line-width', [
  "interpolate",
  ["linear"],
  ["zoom"],
  12.8,
  1.5,
  22,
  4
]);
            map.setLayoutProperty('1916hazak-6yutfm', 'visibility',"none");
map.setLayoutProperty('bp18telepek-482y30', 'visibility',"none");
map.setFilter('bp18telepek-482y30',null);
                $('#card').css("left","auto");
                $('#card').css("right",0);
                $('#card').css("margin-right","6vw");
            map.setPaintProperty('budapest-3m9ti7', 'line-opacity', 0);
            map.setPaintProperty('budapest-1nowgb', 'fill-opacity', 1);
            map.on('mousemove', '18kerfinal4-6t2ivv', function(e) {
  map.getCanvas().style.cursor = 'default';
popup.remove();
  var features = map.queryRenderedFeatures(e.point, {
    layers: ['18kerfinal4-6t2ivv'] // replace this with the name of the layer
  });});
  map.on('mouseleave', '18kerfinal4-6t2ivv', function () {
map.getCanvas().style.cursor = 'default';
popup.remove();
});
$('.infoegy').fadeOut("normal");
$('.infoketto').fadeOut("normal");
            $('#interakciogomb').on('click', function() {
    {setTimeout(function() {
    $('#chart').css("z-index", -1);
$('#chart2').css("z-index", -1);
$('#chart').css("opacity",0);
$('#chart2').css("opacity",0);}, 0);}});
            
$('#visszagomb').on('click', function() {
    {setTimeout(function() {$('#chart').css("z-index", 10);
$('#chart2').css("z-index", -1);
$('#chart').css("opacity",1);
$('#chart2').css("opacity",0);}, 1000);}});
      $('.arrow2').fadeOut("normal");
            $('#interakciogomb').css("display","none");
            $('#chart').css("transition","0s");
           
            
            map.setLayoutProperty('utcanevekfinal-3k5vb2', 'visibility', "visible");
             map.setFilter('utcanevekfinal-8k6pps',null);
        map.setFilter('utcanevekfinal-3k5vb2',null);
              $('#chart').css("opacity",1);
                
                document.getElementById('chart').src = 'https://flo.uri.sh/story/1544173/embed#slide-0';
                            $('#linktomap2').css("display", "none");
          
            
              
$('#yesfilter2').css("display", "block");
        $('#nofilter2').css("display", "none");
        map.setLayoutProperty('telcent-62k7gk', 'visibility',"none");
             map.setFilter('telcent-62k7gk',null);
            } else if (chapterName === "ch1v") {
                 map.setPaintProperty('18kerfinal4-6t2ivv', 'line-width', [
  "interpolate",
  ["linear"],
  ["zoom"],
  12.8,
  1.5,
  22,
  4
]);
map.setLayoutProperty('bp18telepek-482y30', 'visibility',"none");
map.setFilter('bp18telepek-482y30',null);
 map.on('mousemove', '18kerfinal4-6t2ivv', function(e) {
  map.getCanvas().style.cursor = 'default';
popup.remove();
  var features = map.queryRenderedFeatures(e.point, {
    layers: ['18kerfinal4-6t2ivv'] // replace this with the name of the layer
  });});
  map.on('mouseleave', '18kerfinal4-6t2ivv', function () {
map.getCanvas().style.cursor = 'default';
popup.remove();
});
            map.setPaintProperty('budapest-3m9ti7', 'line-opacity', 1);
            map.setPaintProperty('budapest-3m9ti7', 'line-width', 1);
            map.setPaintProperty('budapest-1nowgb', 'fill-opacity', 0);

$('.infoegy').fadeIn("normal");
$('.infoketto').fadeIn("normal");
                $('#interakciogomb').on('click', function() {
    {setTimeout(function() {
    $('#chart').css("z-index", -1);
$('#chart2').css("z-index", -1);
$('#chart').css("opacity",0);
$('#chart2').css("opacity",0);}, 0);}});
            
$('#visszagomb').on('click', function() {
    {setTimeout(function() {$('#chart').css("z-index", 10);
$('#chart2').css("z-index", -1);
$('#chart').css("opacity",1);
$('#chart2').css("opacity",0);}, 1000);}});
$('.arrow2').fadeOut("normal");
            $('#chart').css("transition","0.3s");
            $('#chart2').css("transition","0.3s");
            
            map.setLayoutProperty('utcanevekfinal-8k6pps', 'visibility', "visible");
            map.setLayoutProperty('utcanevekfinal-3k5vb2', 'visibility', "visible");
             map.setFilter('utcanevekfinal-8k6pps',null);
        map.setFilter('utcanevekfinal-3k5vb2',null);
              $('#chart').css("opacity",1);
                
                document.getElementById('chart').src = 'https://flo.uri.sh/story/1544173/embed#slide-0';
                            $('#linktomap2').css("display", "none");
          
            
               
$('#yesfilter2').css("display", "block");
        $('#nofilter2').css("display", "none");
        
            map.setPaintProperty('18kerfinal4-6t2ivv', 'line-color', "hsla(0, 0%, 0%, 0.3)");
            map.setPaintProperty('budapest-3m9ti7', 'line-color', "#ccc");
            map.setPaintProperty('budapest-4ot5on', 'line-opacity', 0);
map.setFilter('18kerfinal4-6t2ivv',null);
            $('#interakciogomb').css("display","none");
            $('#chart3').css("opacity",0);
             map.setLayoutProperty('telcent-62k7gk', 'visibility',"none");
             map.setFilter('telcent-62k7gk',null);
                $('.elsokep').css("z-index",-1);
                $('.masodikkep').css("z-index",-1);
              } else if (chapterName === "ch2") {
                
                $('.elsokep').css("z-index",10);
                $('.masodikkep').css("z-index",10);

                $('.harmadikkep').css("z-index",-1);
                $('.negyedikkep').css("z-index",-1);
                map.setLayoutProperty('bp18telepek-482y30', 'visibility',"visible");
map.setFilter('bp18telepek-482y30',[
  "all",
  [
    "match",
    ["get", "NAME"],
    ["Lónyaytelep",
    "Rendessytelep",
    "Erzsébettelep",
    "Bókaytelep",
    "Kossuth Ferenc-telep",
    "Újpéteritelep"],
    true,
    false
  ]
]);
map.setPaintProperty('bp18telepek-482y30', 'fill-color',[
  "match",
  ["get", "NAME"],
  [
    "Lónyaytelep",
    "Rendessytelep",
    "Erzsébettelep",
    "Bókaytelep",
    "Kossuth Ferenc-telep",
    "Újpéteritelep"
  ],
  "hsla(24, 100%, 76%, 0.25)",
  [
    
    "Szemeretelep",
    "Erdőskert",
    "Miklóstelep",
    "Szent Imre kertváros",
    "Ganztelep",
    "Ganzkertváros",
    "Liptáktelep",
    
  ],
  "hsla(144, 73%, 71%, 0.25)",
  [
    
    
    "Gloriett telep",
    "Bélatelep",
    "Ferihegy"
  ],
  "hsla(198, 51%, 68%, 0.25)",
  [
    "Halmierdő",
    "Lakatos-lakótelep",
    "Szent Lőrinc-lakótelep",
    "Belsőmajor"
  ],
   "hsla(273, 80%, 78%, 0.25)",
  [
    "Havanna-lakótelep",
    "Almáskert",
    "Krepuska Géza-telep",
   
  ],
 
  "hsla(348, 53%, 68%, 0.25)",
  "hsla(0, 0%, 0%, 0.25)"
]);

map.setPaintProperty('bp18telepek-482y30', 'fill-outline-color',[
  "match",
  ["get", "NAME"],
  [
    "Lónyaytelep",
    "Rendessytelep",
    "Erzsébettelep",
    "Bókaytelep",
    "Kossuth Ferenc-telep",
    "Újpéteritelep"
  ],
  "hsla(24, 100%, 76%, 1)",
  [
    
    "Szemeretelep",
    "Erdőskert",
    "Miklóstelep",
    "Szent Imre kertváros",
    "Ganztelep",
    "Ganzkertváros",
    "Liptáktelep",
    
  ],
  "hsla(144, 73%, 71%, 1)",
  [
    
    
    "Gloriett telep",
    "Bélatelep",
    "Ferihegy"
  ],
  "hsla(198, 51%, 68%, 1)",
  [
    "Halmierdő",
    "Lakatos-lakótelep",
    "Szent Lőrinc-lakótelep",
    "Belsőmajor"
  ],
   "hsla(273, 80%, 78%, 1)",
  [
    "Havanna-lakótelep",
    "Almáskert",
    "Krepuska Géza-telep",
   
  ],
 
  "hsla(348, 53%, 68%, 1)",
  "hsla(0, 0%, 0%, 1)"
]);



 map.setLayoutProperty('telcent-62k7gk', 'visibility',"visible");
map.setFilter('telcent-62k7gk',[
  "all",
  [
    "match",
    ["get", "nev"],
    ["Lónyaytelep",
    "Rendessytelep",
    "Erzsébettelep",
    "Bókaytelep",
    "Kossuth Ferenc-telep",
    "Újpéteritelep"],
    true,
    false
  ]
]);


map.setFilter('18kerfinal4-6t2ivv',[
  "all",
  [
    "match",
    [
      "get",
      "letrejottevidotartam"
    ],
    [
      "1836-1909"
    ],
    true,
    false
  ]
]);
map.setPaintProperty('18kerfinal4-6t2ivv', 'line-color', [
  "interpolate",
  ["linear"],
  ["get", "letrejottev"],
  1836,
  "hsl(24, 99%, 66%)",
  1837,
  "#ffb685",
  2017,
  "#ffb685"
]);

map.setPaintProperty('18kerfinal4-6t2ivv', 'line-width', [
  "interpolate",
  ["linear"],
  ["zoom"],
  12.8,
  [
    "match",
    ["get", "letrejottev"],
    [1836],
    2.8,
    1.5
  ],
  22,
  [
    "match",
    ["get", "letrejottev"],
    [1836],
    6.5,
    4
  ]
]);

            map.setPaintProperty('budapest-3m9ti7', 'line-opacity', 0);
            map.setPaintProperty('budapest-4ot5on', 'line-opacity', 1);
            map.setPaintProperty('budapest-3m9ti7', 'line-color', "#f5fff6");
            map.setPaintProperty('budapest-1nowgb', 'fill-opacity', 1);

  $('.infoegy').fadeOut("normal");
  $('.infoketto').fadeOut("normal");
  {setTimeout(function() {$('.infoegy').css("z-index",-1);
  $('.infoketto').css("z-index",-1);}, 250);}

            $('#interakciogomb').css("display","block");
                $('#interakciogomb').on('click', function() {
    {setTimeout(function() {
    $('#chart').css("z-index", -1);
$('#chart2').css("z-index", -1);
$('#chart').css("opacity",0);
$('#chart2').css("opacity",0);}, 0);}});
            
$('#visszagomb').on('click', function() {
    {setTimeout(function() {$('#chart').css("z-index", 10);
$('#chart2').css("z-index", -1);
$('#chart').css("opacity",1);
$('#chart2').css("opacity",0);}, 1000);}});
            $('.arrow2').fadeOut("normal");
                 map.setLayoutProperty('utcanevekfinal-8k6pps', 'visibility', "visible");
            map.setLayoutProperty('utcanevekfinal-3k5vb2', 'visibility', "visible");
           
 map.setFilter('utcanevekfinal-8k6pps',null);
        map.setFilter('utcanevekfinal-3k5vb2',null);
               
                $('#chart').css("display", "block");
                document.getElementById('chart').src = 'https://flo.uri.sh/story/1544173/embed#slide-1';
             
                 map.on('mousemove', '18kerfinal4-6t2ivv', function(e) {
  map.getCanvas().style.cursor = 'pointer';
  $('.infoegy').fadeOut("normal");
   {setTimeout(function() {
  $('.infoegy').css("z-index",-1);}, 250);}
  var features = map.queryRenderedFeatures(e.point, {
    layers: ['18kerfinal4-6t2ivv'] // replace this with the name of the layer
  });

 if (!features.length) {
    return;
  }

  var props = features[0].properties;

        var state = features[0].state;
  
  var feature = features[0];
            popup.setLngLat(e.lngLat)
                .setHTML('<span style="font-weight:bold; font-family:Montserrat">Utca mai neve: </span><span style="font-family:Montserrat">' + feature.properties.kozt_nev + '</span><br><span style="font-weight:bold; font-family:Montserrat">Év: </span><span style="font-family:Montserrat">' + feature.properties.letrejottev+ '</span><br><span style="font-weight:bold; font-family:Montserrat">Korábbi nevek: </span><br><span style="font-family:Montserrat">' + feature.properties.atnevezesegyalt+ '</span>')
                .addTo(map);

        });


        // Change it back to a pointer when it leaves.
map.on('mouseleave', '18kerfinal4-6t2ivv', function () {
map.getCanvas().style.cursor = 'default';
popup.remove();
}); 

$('#yesfilter').css("display", "block");
        $('#nofilter').css("display", "none");
          $('.ferfi').removeClass("selected");
        $('.no').removeClass("unselected");
        $('.no span').css("background-color","#fc0099");
        $('.ferfi span').css("background-color","#00ccff");
        $('.ferfi').removeClass("unselected");
        $('.no').removeClass("selected");
        $('.ferfi').removeClass("unselected");
        $('.no').removeClass("selected");
        $('.ferfi').removeClass("selected");
        $('.no').removeClass("unselected");
        $('#yesfilter3').css("display", "block");
        $('#nofilter3').css("display", "none");
        $('.valosferfi').removeClass("selected");
        $('.valosno').removeClass("unselected");
        $('.valosno span').css("background-color","#fc0099");
        $('.valosferfi span').css("background-color","#00ccff");
        $('.valosferfi').removeClass("unselected");
        $('.valosno').removeClass("selected");
        $('.valosferfi').removeClass("unselected");
        $('.valosno').removeClass("selected");
        $('.valosferfi').removeClass("selected");
        $('.valosno').removeClass("unselected");
        $('#chart3').css("opacity",0);
              } else if (chapterName === "ch3") {

                $('.harmadikkep').css("z-index",10);
                $('.negyedikkep').css("z-index",10);
                $('.elsokep').css("z-index",-1);
                $('.masodikkep').css("z-index",-1);
                $('.otodikkep').css("z-index",-1);
                $('.hatodikkep').css("z-index",-1);
                 map.setPaintProperty('18kerfinal4-6t2ivv', 'line-width', [
  "interpolate",
  ["linear"],
  ["zoom"],
  12.8,
  1.5,
  22,
  4
]);
                 map.setLayoutProperty('bp18telepek-482y30', 'visibility',"visible");
map.setFilter('bp18telepek-482y30',[
  "all",
  [
    "match",
    ["get", "NAME"],
    [
    "Havanna-lakótelep",
    "Liptáktelep",
    "Szemeretelep",
    "Erdőskert",
    "Miklóstelep",
    "Ganztelep",
    "Ganzkertváros",
    "Szent Imre kertváros"],
    true,
    false
  ]
]);

map.setPaintProperty('bp18telepek-482y30', 'fill-color',[
  "match",
  ["get", "NAME"],
  [
    "Lónyaytelep",
    "Rendessytelep",
    "Erzsébettelep",
    "Bókaytelep",
    "Kossuth Ferenc-telep",
    "Újpéteritelep"
  ],
  "hsla(24, 100%, 76%, 0.25)",
  [
    
    "Szemeretelep",
    "Erdőskert",
    "Miklóstelep",
    "Szent Imre kertváros",
    "Ganztelep",
    "Ganzkertváros",
    "Liptáktelep",
     "Havanna-lakótelep",
  ],
  "hsla(144, 73%, 71%, 0.25)",
  [
    
    
    "Gloriett telep",
    "Bélatelep",
    "Ferihegy"
  ],
  "hsla(198, 51%, 68%, 0.25)",
  [
    "Halmierdő",
    "Lakatos-lakótelep",
    "Szent Lőrinc-lakótelep",
    "Belsőmajor"
  ],
   "hsla(273, 80%, 78%, 0.25)",
  [
   
    "Almáskert",
    "Krepuska Géza-telep",
   
  ],
 
  "hsla(348, 53%, 68%, 0.25)",
  "hsla(0, 0%, 0%, 0.25)"
]);

map.setPaintProperty('bp18telepek-482y30', 'fill-outline-color',[
  "match",
  ["get", "NAME"],
  [
    "Lónyaytelep",
    "Rendessytelep",
    "Erzsébettelep",
    "Bókaytelep",
    "Kossuth Ferenc-telep",
    "Újpéteritelep"
  ],
  "hsla(24, 100%, 76%, 1)",
  [
    
    "Szemeretelep",
    "Erdőskert",
    "Miklóstelep",
    "Szent Imre kertváros",
    "Ganztelep",
    "Ganzkertváros",
    "Liptáktelep",
    "Havanna-lakótelep",
    
  ],
  "hsla(144, 73%, 71%, 1)",
  [
    
    
    "Gloriett telep",
    "Bélatelep",
    "Ferihegy"
  ],
  "hsla(198, 51%, 68%, 1)",
  [
    "Halmierdő",
    "Lakatos-lakótelep",
    "Szent Lőrinc-lakótelep",
    "Belsőmajor"
  ],
   "hsla(273, 80%, 78%, 1)",
  [
    
    "Almáskert",
    "Krepuska Géza-telep",
   
  ],
 
  "hsla(348, 53%, 68%, 1)",
  "hsla(0, 0%, 0%, 1)"
]);

 map.setLayoutProperty('telcent-62k7gk', 'visibility',"visible");
map.setFilter('telcent-62k7gk',[
  "all",
  [
    "match",
    ["get", "nev"],
    ["Havannatelep_ketto",
    "Liptáktelep",
    "Szemeretelep",
    "Erdőskert",
    "Miklóstelep",
    "Ganztelep",
    "Ganzkertváros",
    "Szent Imre-kertváros"],
    true,
    false
  ]
]);
                map.setFilter('18kerfinal4-6t2ivv',[
  "all",
  [
    "match",
    [
      "get",
      "letrejottevidotartam"
    ],
    [
      "1836-1909",
      "1910-1929"
    ],
    true,
    false
  ]
]);
map.setPaintProperty('18kerfinal4-6t2ivv', 'line-color', [
  "match",
  [
    "get",
    "letrejottevidotartam"
  ],
  ["1836-1909"],
  "hsla(0, 0%, 0%, 0.07)",
  ["1910-1929"],
  "#80ebaa",
  "hsla(0, 0%, 0%, 0)"
]);

                $('#interakciogomb').on('click', function() {
    {setTimeout(function() {
    $('#chart').css("z-index", -1);
$('#chart2').css("z-index", -1);
$('#chart').css("opacity",0);
$('#chart2').css("opacity",0);}, 0);}});
            
$('#visszagomb').on('click', function() {
    {setTimeout(function() {$('#chart').css("z-index", 10);
$('#chart2').css("z-index", -1);
$('#chart').css("opacity",1);
$('#chart2').css("opacity",0);}, 1000);}});
              
                $('#chart').css("display", "block");
                document.getElementById('chart').src = 'https://flo.uri.sh/story/1544173/embed#slide-2';
               



                 map.on('mousemove', '18kerfinal4-6t2ivv', function(e) {
  map.getCanvas().style.cursor = 'pointer';
  $('.infoegy').fadeOut("normal");
   {setTimeout(function() {
  $('.infoegy').css("z-index",-1);}, 250);}
  var features = map.queryRenderedFeatures(e.point, {
    layers: ['18kerfinal4-6t2ivv'] // replace this with the name of the layer
  });

 if (!features.length) {
    return;
  }

  var props = features[0].properties;

        var state = features[0].state;
  
  var feature = features[0];
            popup.setLngLat(e.lngLat)
                .setHTML('<span style="font-weight:bold; font-family:Montserrat">Utca mai neve: </span><span style="font-family:Montserrat">' + feature.properties.kozt_nev + '</span><br><span style="font-weight:bold; font-family:Montserrat">Év: </span><span style="font-family:Montserrat">' + feature.properties.letrejottev+ '</span><br><span style="font-weight:bold; font-family:Montserrat">Korábbi nevek: </span><br><span style="font-family:Montserrat">' + feature.properties.atnevezeskettoalt+ '</span>')
                .addTo(map);

        });


        // Change it back to a pointer when it leaves.
map.on('mouseleave', '18kerfinal4-6t2ivv', function () {
map.getCanvas().style.cursor = 'default';
popup.remove();
}); 
$('#chart3').css("opacity",0);
map.setLayoutProperty('1916hazak-6yutfm', 'visibility',"none");
map.setLayoutProperty('18kerfinal4-6t2ivv', 'visibility',"visible");
$('#visszagomb').on('click', function() {
    map.boxZoom.disable();
map.scrollZoom.disable();
map.dragPan.disable();
map.dragRotate.disable();
map.keyboard.disable();
map.doubleClickZoom.disable();
map.touchZoomRotate.disable();
        map.getCanvas().style.cursor = 'default';
        map.fitBounds([
[19.13245, 47.38461], // Southwest coordinates
[19.40805, 47.47007] // Northeast coordinates // northeastern corner of the bounds
]);
    
    });

 } else if (chapterName === "ch3v") {

    $('#visszagomb').on('click', function() {
    map.boxZoom.disable();
map.scrollZoom.disable();
map.dragPan.disable();
map.dragRotate.disable();
map.keyboard.disable();
map.doubleClickZoom.disable();
map.touchZoomRotate.disable();
        map.getCanvas().style.cursor = 'default';
        map.fitBounds([
[19.15265, 47.42827], // Southwest coordinates
[19.28254, 47.46826] // Northeast coordinates // northeastern corner of the bounds
]);
    
    });



                $('.harmadikkep').css("z-index",-1);
                $('.negyedikkep').css("z-index",-1);
                $('.elsokep').css("z-index",-1);
                $('.masodikkep').css("z-index",-1);
                $('.otodikkep').css("z-index",-1);
                $('.hatodikkep').css("z-index",-1);
     map.on('mousemove', '1916hazak-6yutfm', function(e) {
  map.getCanvas().style.cursor = 'pointer';
  $('.infoegy').fadeOut("normal");
   {setTimeout(function() {
  $('.infoegy').css("z-index",-1);}, 250);}
  var features = map.queryRenderedFeatures(e.point, {
    layers: ['1916hazak-6yutfm'] // replace this with the name of the layer
  });

 if (!features.length) {
    return;
  }

  var props = features[0].properties;

        var state = features[0].state;
  
  var feature = features[0];
            popup.setLngLat(e.lngLat)
                .setHTML('<span style="font-weight:bold; font-family:Montserrat">Cím (1916): </span><span style="font-family:Montserrat">' + feature.properties.utanevhazszam + '</span><br><span style="font-weight:bold; font-family:Montserrat">Tulajdonos: </span><span style="font-family:Montserrat">' + feature.properties.tulnevlakasketto+ '</span><br><span style="font-weight:bold; font-family:Montserrat">Mai cím: </span><span style="font-family:Montserrat">' + feature.properties.utcanevma+ '</span>')
                .addTo(map);

        });


        // Change it back to a pointer when it leaves.
map.on('mouseleave', '1916hazak-6yutfm', function () {
map.getCanvas().style.cursor = 'default';
popup.remove();
}); 
    map.setLayoutProperty('1916hazak-6yutfm', 'visibility',"visible");
map.setLayoutProperty('bp18telepek-482y30', 'visibility',"none");
map.setFilter('bp18telepek-482y30',null);
map.setLayoutProperty('telcent-62k7gk', 'visibility',"none");
map.setFilter('telcent-62k7gk',null);


                map.setFilter('18kerfinal4-6t2ivv',[
  "all",
  [
    "match",
    ["get", "letrejottev"],
    [
      1836,
      1875,
      1887,
      1893,
      1896,
      1897,
      1898,
      1899,
      1900,
      1906,
      1907,
      1910,
      1911,
      1912,
      1914
    ],
    true,
    false
  ]
]);
map.setPaintProperty('18kerfinal4-6t2ivv', 'line-color', [
  "case",
  [
    "match",
    ["get", "letrejottev"],
    [
      1836,
      1875,
      1887,
      1893,
      1896,
      1897,
      1898,
      1899,
      1900,
      1906,
      1907,
      1910,
      1911,
      1912,
      1914
    ],
    true,
    false
  ],
  "rgba(0,0,0,0.1)",
  "hsla(0, 0%, 0%, 0.07)"
]);

                $('#interakciogomb').on('click', function() {
    {setTimeout(function() {
    $('#chart').css("z-index", -1);
$('#chart2').css("z-index", -1);
$('#chart').css("opacity",0);
$('#chart2').css("opacity",0);}, 0);}});
            
$('#visszagomb').on('click', function() {
    {setTimeout(function() {$('#chart').css("z-index", 10);
$('#chart2').css("z-index", -1);
$('#chart').css("opacity",1);
$('#chart2').css("opacity",0);}, 1000);}});
              
                $('#chart').css("display", "block");
                document.getElementById('chart').src = 'https://flo.uri.sh/story/1544173/embed#slide-13';
               


 map.setPaintProperty('utcanevekfinal-8k6pps', 'line-color', [
  "match",
  ["get", "valosnem"],
  ["valós férfi", "valós nő"],
  [
    "case",
    [
      "match",
      ["get", "valosnem"],
      ["", "valós nő"],
      true,
      false
    ],
    "#ecbf09",
    [
      "match",
      ["get", "valosnem"],
      ["valós nő"],
      true,
      false
    ],
    "#ff711f",
    "hsl(179, 88%, 40%)"
  ],
  "hsla(0, 0%, 0%, 0.3)"
]);
            map.setPaintProperty('utcanevekfinal-3k5vb2', 'line-color', [
  "match",
  ["get", "valosnem"],
  ["valós férfi", "valós nő"],
  [
    "case",
    [
      "match",
      ["get", "valosnem"],
      ["", "valós nő"],
      true,
      false
    ],
    "hsl(17, 100%, 62%)",
    [
      "match",
      ["get", "valosnem"],
      ["valós nő"],
      true,
      false
    ],
    "hsla(22, 100%, 51%, 0)",
    "hsl(184, 68%, 29%)"
  ],
  "#4d4c4c"
]);

                map.on('mousemove', '18kerfinal4-6t2ivv', function(e) {
  map.getCanvas().style.cursor = 'default';
popup.remove();
  var features = map.queryRenderedFeatures(e.point, {
    layers: ['18kerfinal4-6t2ivv'] // replace this with the name of the layer
  });});
  map.on('mouseleave', '18kerfinal4-6t2ivv', function () {
map.getCanvas().style.cursor = 'default';
popup.remove();
});
$('#chart3').css("opacity",0);
      } else if (chapterName === "ch4") {
        $('#visszagomb').on('click', function() {
    map.boxZoom.disable();
map.scrollZoom.disable();
map.dragPan.disable();
map.dragRotate.disable();
map.keyboard.disable();
map.doubleClickZoom.disable();
map.touchZoomRotate.disable();
        map.getCanvas().style.cursor = 'default';
        map.fitBounds([
[19.13245, 47.38461], // Southwest coordinates
[19.40805, 47.47007] // Northeast coordinates // northeastern corner of the bounds
]);
    
    });

                $('.otodikkep').css("z-index",10);
                $('.hatodikkep').css("z-index",10);
                $('.hetedikkep').css("z-index",-1);
                $('.nyolcadikkep').css("z-index",-1);

                $('.harmadikkep').css("z-index",-1);
                $('.negyedikkep').css("z-index",-1);
    map.setLayoutProperty('1916hazak-6yutfm', 'visibility',"none");

map.setLayoutProperty('18kerfinal4-6t2ivv', 'visibility',"visible");
         map.setLayoutProperty('bp18telepek-482y30', 'visibility',"visible");
map.setFilter('bp18telepek-482y30',[
  "all",
  [
    "match",
    ["get", "NAME"],
    [
    
"Gloriett telep",
    "Bélatelep",
    ],
    true,
    false
  ]
]);

map.setPaintProperty('bp18telepek-482y30', 'fill-color',[
  "match",
  ["get", "NAME"],
  [
    "Lónyaytelep",
    "Rendessytelep",
    "Erzsébettelep",
    "Bókaytelep",
    "Kossuth Ferenc-telep",
    "Újpéteritelep"
  ],
  "hsla(24, 100%, 76%, 0.25)",
  [
    
    "Szemeretelep",
    "Erdőskert",
    "Miklóstelep",
    "Szent Imre kertváros",
    "Ganztelep",
    "Ganzkertváros",
    "Liptáktelep",
    
  ],
  "hsla(144, 73%, 71%, 0.25)",
  [
    
    
    "Gloriett telep",
    "Bélatelep",
    "Ferihegy"
  ],
  "hsla(198, 51%, 68%, 0.25)",
  [
    "Halmierdő",
    "Lakatos-lakótelep",
    "Szent Lőrinc-lakótelep",
    "Belsőmajor"
  ],
   "hsla(273, 80%, 78%, 0.25)",
  [
    "Havanna-lakótelep",
    "Almáskert",
    "Krepuska Géza-telep",
   
  ],
 
  "hsla(348, 53%, 68%, 0.25)",
  "hsla(0, 0%, 0%, 0.25)"
]);

map.setPaintProperty('bp18telepek-482y30', 'fill-outline-color',[
  "match",
  ["get", "NAME"],
  [
    "Lónyaytelep",
    "Rendessytelep",
    "Erzsébettelep",
    "Bókaytelep",
    "Kossuth Ferenc-telep",
    "Újpéteritelep"
  ],
  "hsla(24, 100%, 76%, 1)",
  [
    
    "Szemeretelep",
    "Erdőskert",
    "Miklóstelep",
    "Szent Imre kertváros",
    "Ganztelep",
    "Ganzkertváros",
    "Liptáktelep",
    
    
  ],
  "hsla(144, 73%, 71%, 1)",
  [
    
    
    "Gloriett telep",
    "Bélatelep",
    "Ferihegy"
  ],
  "hsla(198, 51%, 68%, 1)",
  [
    "Halmierdő",
    "Lakatos-lakótelep",
    "Szent Lőrinc-lakótelep",
    "Belsőmajor"
  ],
   "hsla(273, 80%, 78%, 1)",
  [
    "Havanna-lakótelep",
    "Almáskert",
    "Krepuska Géza-telep",
   
  ],
 
  "hsla(348, 53%, 68%, 1)",
  "hsla(0, 0%, 0%, 1)"
]);

map.setLayoutProperty('telcent-62k7gk', 'visibility',"visible");
map.setFilter('telcent-62k7gk',[
  "all",
  [
    "match",
    ["get", "nev"],
    [
   "Gloriett-telep",
    
    "Bélatelep",
    ],
    true,
    false
  ]
]);
        map.setFilter('18kerfinal4-6t2ivv',[
  "all",
  [
    "match",
    [
      "get",
      "letrejottevidotartam"
    ],
    [
      "1836-1909",
      "1910-1929",
      "1926-1949"
    ],
    true,
    false
  ]
]);
map.setPaintProperty('18kerfinal4-6t2ivv', 'line-color', [
  "match",
  [
    "get",
    "letrejottevidotartam"
  ],
  ["1836-1909"],
  "hsla(0, 0%, 0%, 0.07)",
  ["1910-1929"],
  "hsla(0, 0%, 0%, 0.07)",
  ["1926-1949"],
  "#83bed7",
  "hsla(0, 0%, 0%, 0)"
]);

  map.on('mousemove', '18kerfinal4-6t2ivv', function(e) {
  map.getCanvas().style.cursor = 'pointer';
  $('.infoegy').fadeOut("normal");
   {setTimeout(function() {
  $('.infoegy').css("z-index",-1);}, 250);}
  var features = map.queryRenderedFeatures(e.point, {
    layers: ['18kerfinal4-6t2ivv'] // replace this with the name of the layer
  });

 if (!features.length) {
    return;
  }

  var props = features[0].properties;

        var state = features[0].state;
  
  var feature = features[0];
            popup.setLngLat(e.lngLat)
                .setHTML('<span style="font-weight:bold; font-family:Montserrat">Utca mai neve: </span><span style="font-family:Montserrat">' + feature.properties.kozt_nev + '</span><br><span style="font-weight:bold; font-family:Montserrat">Év: </span><span style="font-family:Montserrat">' + feature.properties.letrejottev+ '</span><br><span style="font-weight:bold; font-family:Montserrat">Korábbi nevek: </span><br><span style="font-family:Montserrat">' + feature.properties.atnevezesharomalt+ '</span>')
                .addTo(map);

        });


        // Change it back to a pointer when it leaves.
map.on('mouseleave', '18kerfinal4-6t2ivv', function () {
map.getCanvas().style.cursor = 'default';
popup.remove();
}); 

        $('#interakciogomb').on('click', function() {
    {setTimeout(function() {
    $('#chart').css("z-index", -1);
$('#chart2').css("z-index", -1);
$('#chart').css("opacity",0);
$('#chart2').css("opacity",0);}, 0);}});
            
$('#visszagomb').on('click', function() {
    {setTimeout(function() {$('#chart').css("z-index", 10);
$('#chart2').css("z-index", -1);
$('#chart').css("opacity",1);
$('#chart2').css("opacity",0);}, 1000);}});
       
        $('#yesfilter3').css("display", "block");
        $('#nofilter3').css("display", "none");
       
         map.setFilter('utcanevekfinal-8k6pps',null);
        map.setFilter('utcanevekfinal-3k5vb2',null);
               
        $('#chart').css("display", "block");
        $('#chart').css("height", "13vh");
        $('#chart').css("width", "60vw");
        $('#chart2').css("z-index", -1);
        $('#chart2').css("opacity", 0);
        $('#chart').css("opacity", 1);
        $('#chart').css("z-index", 10);
                document.getElementById('chart').src = 'https://flo.uri.sh/story/1544173/embed#slide-3';
          
               
                $('#chart3').css("opacity",0);
                } else if (chapterName === "ch5") {

                $('.otodikkep').css("z-index",-1);
                $('.hatodikkep').css("z-index",-1);
                $('.kilencedikkep').css("z-index",-1);
                $('.tizedikkep').css("z-index",-1);
                $('.hetedikkep').css("z-index",10);
                $('.nyolcadikkep').css("z-index",10);
                     map.setLayoutProperty('bp18telepek-482y30', 'visibility',"visible");
map.setFilter('bp18telepek-482y30',[
  "all",
  [
    "match",
    ["get", "NAME"],
    [ "Halmierdő",
    "Lakatos-lakótelep",
    "Szent Lőrinc-lakótelep",
    "Belsőmajor"],
    true,
    false
  ]
]);

map.setLayoutProperty('telcent-62k7gk', 'visibility',"visible");
map.setFilter('telcent-62k7gk',[
  "all",
  [
    "match",
    ["get", "nev"],
    [ "Halmierdő",
    "Lakatostelep",
    "Szent Lőrinc-lakótelep",
    "Belsőmajor"],
    true,
    false
  ]
]);
                    document.getElementById('chart').src = 'https://flo.uri.sh/story/1544173/embed#slide-4';
                      map.setFilter('18kerfinal4-6t2ivv',[
  "all",
  [
    "match",
    [
      "get",
      "letrejottevidotartam"
    ],
    [
      "1836-1909",
      "1910-1929",
      "1926-1949",
      "1950-1974"
    ],
    true,
    false
  ]
]);
map.setPaintProperty('18kerfinal4-6t2ivv', 'line-color', [
  "match",
  [
    "get",
    "letrejottevidotartam"
  ],
  ["1836-1909"],
  "hsla(0, 0%, 0%, 0.07)",
  ["1910-1929"],
  "hsla(0, 0%, 0%, 0.07)",
  ["1926-1949"],
  "hsla(0, 0%, 0%, 0.07)",
  ["1950-1974"],
  "#cc9bf4",
  "hsla(0, 0%, 0%, 0)"
]);

  map.on('mousemove', '18kerfinal4-6t2ivv', function(e) {
  map.getCanvas().style.cursor = 'pointer';
  $('.infoegy').fadeOut("normal");
   {setTimeout(function() {
  $('.infoegy').css("z-index",-1);}, 250);}
  var features = map.queryRenderedFeatures(e.point, {
    layers: ['18kerfinal4-6t2ivv'] // replace this with the name of the layer
  });

 if (!features.length) {
    return;
  }

  var props = features[0].properties;

        var state = features[0].state;
  
  var feature = features[0];
            popup.setLngLat(e.lngLat)
                .setHTML('<span style="font-weight:bold; font-family:Montserrat">Utca mai neve: </span><span style="font-family:Montserrat">' + feature.properties.kozt_nev + '</span><br><span style="font-weight:bold; font-family:Montserrat">Év: </span><span style="font-family:Montserrat">' + feature.properties.letrejottev+ '</span><br><span style="font-weight:bold; font-family:Montserrat">Korábbi nevek: </span><br><span style="font-family:Montserrat">' + feature.properties.atnevezesnegyalt+ '</span>')
                .addTo(map);

        });


        // Change it back to a pointer when it leaves.
map.on('mouseleave', '18kerfinal4-6t2ivv', function () {
map.getCanvas().style.cursor = 'default';
popup.remove();
}); 
                   
                    $('#interakciogomb').on('click', function() {
    {setTimeout(function() {
    $('#chart').css("z-index", -1);
$('#chart2').css("z-index", -1);
$('#chart').css("opacity",0);
$('#chart2').css("opacity",0);}, 0);}});
            
$('#visszagomb').on('click', function() {
    {setTimeout(function() {$('#chart').css("z-index", 10);
$('#chart2').css("z-index", -1);
$('#chart').css("opacity",1);
$('#chart2').css("opacity",0);}, 1000);}});
               
        
$('#chart3').css("opacity",0);
} else if (chapterName === "ch5v") {

                $('.kilencedikkep').css("z-index",10);
                $('.tizedikkep').css("z-index",10);
                $('.hetedikkep').css("z-index",-1);
                $('.nyolcadikkep').css("z-index",-1);
     map.setPaintProperty('bp18finaladattal-b1eqei','line-opacity',0);
     map.setLayoutProperty('bp18telepek-482y30', 'visibility',"visible");
map.setFilter('bp18telepek-482y30',[
  "all",
  [
    "match",
    ["get", "NAME"],
    ["Havanna-lakótelep",
    "Almáskert",
    "Krepuska Géza-telep"],
    
    true,
    false
  ]
]);

map.setLayoutProperty('telcent-62k7gk', 'visibility',"visible");
map.setFilter('telcent-62k7gk',[
  "all",
  [
    "match",
   ["get", "nev"],
    ["Havannatelep",
    "Almáskert",
    "Krepuska Géza-telep"],
    
    true,
    false
  ]
]);
    document.getElementById('chart').src = 'https://flo.uri.sh/story/1544173/embed#slide-5';

                 map.setFilter('18kerfinal4-6t2ivv',[
  "all",
  [
    "match",
    [
      "get",
      "letrejottevidotartam"
    ],
    [
      "1836-1909",
      "1910-1929",
      "1926-1949",
      "1950-1974",
      "1975-2021"
    ],
    true,
    false
  ]
]);
map.setPaintProperty('18kerfinal4-6t2ivv', 'line-color', [
  "match",
  [
    "get",
    "letrejottevidotartam"
  ],
  ["1836-1909"],
  "hsla(0, 0%, 0%, 0.07)",
  ["1910-1929"],
  "hsla(0, 0%, 0%, 0.07)",
  ["1926-1949"],
  "hsla(0, 0%, 0%, 0.07)",
  ["1950-1974"],
  "hsla(0, 0%, 0%, 0.07)",
  ["1975-2021"],
  "#d98293",
  "hsla(0, 0%, 0%, 0)"
]);


  map.on('mousemove', '18kerfinal4-6t2ivv', function(e) {
  map.getCanvas().style.cursor = 'pointer';
  $('.infoegy').fadeOut("normal");
   {setTimeout(function() {
  $('.infoegy').css("z-index",-1);}, 250);}
  var features = map.queryRenderedFeatures(e.point, {
    layers: ['18kerfinal4-6t2ivv'] // replace this with the name of the layer
  });

 if (!features.length) {
    return;
  }

  var props = features[0].properties;

        var state = features[0].state;
  
  var feature = features[0];
            popup.setLngLat(e.lngLat)
                .setHTML('<span style="font-weight:bold; font-family:Montserrat">Utca mai neve: </span><span style="font-family:Montserrat">' + feature.properties.kozt_nev + '</span><br><span style="font-weight:bold; font-family:Montserrat">Év: </span><span style="font-family:Montserrat">' + feature.properties.letrejottev+ '</span><br><span style="font-weight:bold; font-family:Montserrat">Korábbi nevek: </span><br><span style="font-family:Montserrat">' + feature.properties.atnevezesotalt+ '</span>')
                .addTo(map);

        });


        // Change it back to a pointer when it leaves.
map.on('mouseleave', '18kerfinal4-6t2ivv', function () {
map.getCanvas().style.cursor = 'default';
popup.remove();
}); 

   

                document.getElementById('chart2').src = 'https://flo.uri.sh/story/1544173/embed#slide-6';
                $('#chart2').css("z-index", -1);
         setTimeout(function() {  $('#chart2').css("opacity", 0);
}, 0);
                
                $('#chart2').css("width", "35vw");
                $('#chart2').css("margin-right", "3vw");
              
                $('#card').css("left","auto");
                $('#card').css("right",0);
                $('#card').css("margin-right","6vw");
                $('#chart3').css("opacity",0);
               } else if (chapterName === "ch6") {

                $('.kilencedikkep').css("z-index",-1);
                $('.tizedikkep').css("z-index",-1);
map.setLayoutProperty('bp18telepek-482y30', 'visibility',"none");
map.setFilter('bp18telepek-482y30',null);

map.setLayoutProperty('telcent-62k7gk', 'visibility',"none");
map.setFilter('telcent-62k7gk',null);


$('#card').css("right","auto");
                $('#card').css("left",0);
                $('#card').css("margin-left","13vw");
 
map.setFilter('18kerfinal4-6t2ivv', [
  "all",
  [
    "match",
    ["get", "vannincs"],
    ["van"],
    true,
    false
  ]
]);

map.setFilter('bp18finaladattal-b1eqei', [
  "all",
  [
    "match",
    ["get", "vannincs"],
    ["nincs"],
    true,
    false
  ]
]);
map.setPaintProperty('bp18finaladattal-b1eqei','line-opacity',1);
                map.setPaintProperty('18kerfinal4-6t2ivv', 'line-color', [
  "match",
  [
    "get",
    "letrejottevidotartam"
  ],
  ["1836-1909"],
  "#ffb685",
  ["1910-1929"],
  "#80ebaa",
  ["1926-1949"],
  "#83bed7",
  ["1950-1974"],
  "#cc9bf4",
  ["1975-2021"],
  "#d98293",
  "hsla(0, 0%, 0%, 0.07)"
]);

                 map.on('mousemove', '18kerfinal4-6t2ivv', function(e) {
  map.getCanvas().style.cursor = 'pointer';
  $('.infoegy').fadeOut("normal");
   {setTimeout(function() {
  $('.infoegy').css("z-index",-1);}, 250);}
  var features = map.queryRenderedFeatures(e.point, {
    layers: ['18kerfinal4-6t2ivv'] // replace this with the name of the layer
  });

 if (!features.length) {
    return;
  }

  var props = features[0].properties;

        var state = features[0].state;
  
  var feature = features[0];
            popup.setLngLat(e.lngLat)
                .setHTML('<span style="font-weight:bold; font-family:Montserrat">Utca neve: </span><span style="font-family:Montserrat">' + feature.properties.kozt_nev + '</span><br><span style="font-weight:bold; font-family:Montserrat">Év: </span><span style="font-family:Montserrat">' + feature.properties.letrejottev+ '</span>')
                .addTo(map);

        });


        // Change it back to a pointer when it leaves.
map.on('mouseleave', '18kerfinal4-6t2ivv', function () {
map.getCanvas().style.cursor = 'default';
popup.remove();
}); 
                     
                  $('#interakciogomb').on('click', function() {
    {setTimeout(function() {
    $('#chart').css("z-index", -1);
$('#chart2').css("z-index", -1);
$('#chart').css("opacity",0);
$('#chart2').css("opacity",0);}, 0);}});
            
$('#visszagomb').on('click', function() {
    {setTimeout(function() {$('#chart').css("z-index", 10);
$('#chart2').css("z-index", 8);
$('#chart').css("opacity",1);
$('#chart2').css("opacity",1);}, 1000);}});

        
                $('#chart').css("display", "block");
                document.getElementById('chart2').src = 'https://flo.uri.sh/story/1544173/embed#slide-6';
                document.getElementById('chart').src = 'https://flo.uri.sh/story/1544173/embed#slide-5';
                $('#chart2').css("z-index", 8);
         setTimeout(function() {  $('#chart2').css("opacity", 1);
}, 100);

                $('#chart2').css("width", "35vw");
                $('#chart2').css("margin-right", "3vw");
                 $('#chart3').css("width", "35vw");
                $('#chart3').css("margin-right", "3vw");
            

        

$('#chart3').css("opacity",0);
        } else if (chapterName === "ch6v") {
$('#chart3').css("opacity",0);
document.getElementById('chart2').src = 'https://flo.uri.sh/story/1544173/embed#slide-8';
document.getElementById('chart').src = 'https://flo.uri.sh/story/1544173/embed#slide-7';




               map.setPaintProperty('18kerfinal4-6t2ivv', 'line-color', [
  "match",
  [
    "get",
    "tipus"
  ],
  ["Ásvány"],
  "#ffa061",
  ["Helynév/helységnév"],
  "#83a9e7",
  ["Növény"],
  "#80d19c",
  ["Személy"],
  "#ee87b0",
  "#d6d6d6"
]);

 
 map.on('mousemove', '18kerfinal4-6t2ivv', function(e) {
  map.getCanvas().style.cursor = 'pointer';
  $('.infoegy').fadeOut("normal");
   {setTimeout(function() {
  $('.infoegy').css("z-index",-1);}, 250);}
  var features = map.queryRenderedFeatures(e.point, {
    layers: ['18kerfinal4-6t2ivv'] // replace this with the name of the layer
  });

 if (!features.length) {
    return;
  }

  var props = features[0].properties;

        var state = features[0].state;
  
  var feature = features[0];
            popup.setLngLat(e.lngLat)
                .setHTML('<span style="font-weight:bold; font-family:Montserrat">Utca neve: </span><span style="font-family:Montserrat">' + feature.properties.kozt_nev + '</span><br><span style="font-weight:bold; font-family:Montserrat">Kategória: </span><span style="font-family:Montserrat">' + feature.properties.tipus+ '</span>')
                .addTo(map);

        });


        // Change it back to a pointer when it leaves.
map.on('mouseleave', '18kerfinal4-6t2ivv', function () {
map.getCanvas().style.cursor = 'default';
popup.remove();
}); 


          

                  $('#interakciogomb').on('click', function() {
    {setTimeout(function() {
    $('#chart').css("z-index", -1);
$('#chart2').css("z-index", -1);
$('#chart').css("opacity",0);
$('#chart2').css("opacity",0);}, 0);}});
            
$('#visszagomb').on('click', function() {
    {setTimeout(function() {$('#chart').css("z-index", 10);
$('#chart2').css("z-index", 8);
$('#chart').css("opacity",1);
$('#chart2').css("opacity",1);}, 1000);}});

        

               
$('#chart2').css("opacity",1);

        
$('#chart').css("height",'13vh');
 $('#card').css("right","auto");
                $('#card').css("left",0);
                $('#card').css("margin-left","13vw");
               map.setFilter('18kerfinal4-6t2ivv', [
  "all",
  [
    "match",
    ["get", "vannincs"],
    ["van"],
    true,
    false
  ]
]);

map.setFilter('bp18finaladattal-b1eqei', [
  "all",
  [
    "match",
    ["get", "vannincs"],
    ["nincs"],
    true,
    false
  ]
]);
$('#chart3').css("opacity",0);
            } else if (chapterName === "ch7") {
 $('#card').css("left","auto");
                $('#card').css("right",0);
                $('#card').css("margin-right","6vw");


map.setFilter('18kerfinal4-6t2ivv', [
  "all",
  [
    "match",
    ["get", "nem"],
    ["férfi", "nő"],
    true,
    false
  ]
]);

map.setFilter('bp18finaladattal-b1eqei', [
  "all",
  [
    "match",
    ["get", "nem"],
    ["férfi", "nő"],
    false,
    true
  ]
]);
            map.setPaintProperty('18kerfinal4-6t2ivv', 'line-color', [
  "match",
  [
    "get",
    "nem"
  ],
  ["férfi"],
  "#93cbd2",
  ["nő"],
  "#ffbf75",
  "hsla(0, 0%, 0%, 0.07)"
]);

map.on('mousemove', '18kerfinal4-6t2ivv', function(e) {
  map.getCanvas().style.cursor = 'pointer';
  $('.infoegy').fadeOut("normal");
   {setTimeout(function() {
  $('.infoegy').css("z-index",-1);}, 250);}
  var features = map.queryRenderedFeatures(e.point, {
    layers: ['18kerfinal4-6t2ivv'] // replace this with the name of the layer
  });

 if (!features.length) {
    return;
  }

  var props = features[0].properties;

        var state = features[0].state;
  
  var feature = features[0];
            popup.setLngLat(e.lngLat)
                .setHTML('<span style="font-weight:bold; font-family:Montserrat">Utca neve: </span><span style="font-family:Montserrat">' + feature.properties.kozt_nev + '</span><br><span style="font-weight:bold; font-family:Montserrat">Névadó neme: </span><span style="font-family:Montserrat">' + feature.properties.nem+ '</span>')
                .addTo(map);

        });


        // Change it back to a pointer when it leaves.
map.on('mouseleave', '18kerfinal4-6t2ivv', function () {
map.getCanvas().style.cursor = 'default';
popup.remove();
}); 
     
                  $('#interakciogomb').on('click', function() {
    {setTimeout(function() {
    $('#chart').css("z-index", -1);
$('#chart2').css("z-index", -1);
$('#chart').css("opacity",0);
$('#chart2').css("opacity",0);}, 0);}});
            
$('#visszagomb').on('click', function() {
    {setTimeout(function() {$('#chart').css("z-index", 10);
$('#chart2').css("z-index", 8);
$('#chart').css("opacity",1);
$('#chart2').css("opacity",0);
$('#chart3').css("opacity",0);}, 1000);}});

document.getElementById('chart2').src = 'https://flo.uri.sh/story/1544173/embed#slide-8';

document.getElementById('chart').src = 'https://flo.uri.sh/story/1544173/embed#slide-9';
                     
$('#chart2').css("opacity",0);
$('#chart3').css("opacity",0);
$('#chart').css("height",'17vh');
               
$('#chart').css("opacity",1);
 } else if (chapterName === "ch7v") {
$('#card').css("left","auto");
                $('#card').css("right",0);
                $('#card').css("margin-right","6vw");


map.setFilter('18kerfinal4-6t2ivv', [
  "all",
  [
    "match",
    ["get", "utcanevbokor"],
    ["XVIII. kerületi személyiségek"],
    true,
    false
  ]
]);

map.setFilter('bp18finaladattal-b1eqei', [
  "all",
  [
    "match",
    ["get", "nem"],
    ["férfi", "nő"],
    false,
    true
  ]
]);
            map.setPaintProperty('18kerfinal4-6t2ivv', 'line-color', [
  "match",
  [
    "get",
    "utcanevbokor"
  ],
  ["XVIII. kerületi személyiségek"],
  "#93cbd2",
  "hsla(0, 0%, 0%, 0.07)"
]);

map.on('mousemove', '18kerfinal4-6t2ivv', function(e) {
  map.getCanvas().style.cursor = 'pointer';
  $('.infoegy').fadeOut("normal");
   {setTimeout(function() {
  $('.infoegy').css("z-index",-1);}, 250);}
  var features = map.queryRenderedFeatures(e.point, {
    layers: ['18kerfinal4-6t2ivv'] // replace this with the name of the layer
  });

 if (!features.length) {
    return;
  }

  var props = features[0].properties;

        var state = features[0].state;
  
  var feature = features[0];
            popup.setLngLat(e.lngLat)
                .setHTML('<span style="font-weight:bold; font-family:Montserrat">Utca neve: </span><span style="font-family:Montserrat">' + feature.properties.kozt_nev + '</span><br><span style="font-weight:bold; font-family:Montserrat">Névadó neme: </span><span style="font-family:Montserrat">' + feature.properties.nem+ '</span>')
                .addTo(map);

        });


        // Change it back to a pointer when it leaves.
map.on('mouseleave', '18kerfinal4-6t2ivv', function () {
map.getCanvas().style.cursor = 'default';
popup.remove();
}); 
     
                  $('#interakciogomb').on('click', function() {
    {setTimeout(function() {
    $('#chart').css("z-index", -1);
$('#chart2').css("z-index", -1);
$('#chart').css("opacity",0);
$('#chart2').css("opacity",0);}, 0);}});
            
$('#visszagomb').on('click', function() {
    {setTimeout(function() {$('#chart').css("z-index", 10);
$('#chart2').css("z-index", 8);
$('#chart').css("opacity",1);
$('#chart2').css("opacity",0);
$('#chart3').css("opacity",0);}, 1000);}});

document.getElementById('chart2').src = 'https://flo.uri.sh/story/1544173/embed#slide-8';

document.getElementById('chart').src = 'https://flo.uri.sh/story/1544173/embed#slide-9';
                     
$('#chart2').css("opacity",0);
$('#chart3').css("opacity",0);
$('#chart').css("height",'17vh');
               
$('#chart').css("opacity",1);

              } else if (chapterName === "ch8") {

map.setFilter('18kerfinal4-6t2ivv', [
  "all",
  [
    "match",
    ["get", "foglalkozas"],
    [
      "sportoló",
      "tudós",
      "hadvezér/katona",
      "egyéb",
      "uralkodó",
      "politikus/államférfi",
      "író/költő",
      "művész",
      "egyházi"
    ],
    true,
    false
  ]
]);

map.setFilter('bp18finaladattal-b1eqei', [
  "all",
  [
    "match",
    ["get", "foglalkozas"],
    [
      "sportoló",
      "tudós",
      "hadvezér/katona",
      "egyéb",
      "uralkodó",
      "politikus/államférfi",
      "író/költő",
      "művész",
      "egyházi"
    ],
    false,
    true
  ]
]);

       map.on('mousemove', '18kerfinal4-6t2ivv', function(e) {
  map.getCanvas().style.cursor = 'pointer';
  $('.infoegy').fadeOut("normal");
   {setTimeout(function() {
  $('.infoegy').css("z-index",-1);}, 250);}
  var features = map.queryRenderedFeatures(e.point, {
    layers: ['18kerfinal4-6t2ivv'] // replace this with the name of the layer
  });

 if (!features.length) {
    return;
  }

  var props = features[0].properties;

        var state = features[0].state;
  
  var feature = features[0];
            popup.setLngLat(e.lngLat)
                .setHTML('<span style="font-weight:bold; font-family:Montserrat">Utca neve: </span><span style="font-family:Montserrat">' + feature.properties.kozt_nev + '</span><br><span style="font-weight:bold; font-family:Montserrat">Névadó foglalkozása: </span><span style="font-family:Montserrat">' + feature.properties.foglalkozas+ '</span>')
                .addTo(map);

        });


        // Change it back to a pointer when it leaves.
map.on('mouseleave', '18kerfinal4-6t2ivv', function () {
map.getCanvas().style.cursor = 'default';
popup.remove();
}); 

$('#card').css("right","auto");
                $('#card').css("left",0);
                $('#card').css("margin-left","13vw");
map.setPaintProperty('18kerfinal4-6t2ivv', 'line-color', [
  "match",
  ["get", "foglalkozas"],
  ["író/költő"],
  "#eed65d",
  ["hadvezér/katona"],
  "#f79250",
  ["uralkodó"],
  "#ff85ce",
  ["politikus/államférfi"],
  "#5c9ef5",
  ["tudós"],
  "#b4f486",
  ["művész"],
  "#82f2f0",
  [
    
    "egyházi"
  ],
  "#cd8bf9",
  [
    
    "sportoló"
  ],
  "#9d6b9e",
  "#c7c7c7"
]);

document.getElementById('chart3').src = 'https://flo.uri.sh/story/1544173/embed#slide-10';
document.getElementById('chart').src = 'https://flo.uri.sh/story/1544173/embed#slide-9';
     
$('#chart').css("opacity",0);                
$('#chart3').css("opacity",1);
                    
                  $('#interakciogomb').on('click', function() {
    {setTimeout(function() {
    $('#chart').css("z-index", -1);
$('#chart3').css("z-index", -1);
$('#chart').css("opacity",0);
$('#chart3').css("opacity",0);}, 0);}});
            
$('#visszagomb').on('click', function() {
    {setTimeout(function() {$('#chart').css("z-index", 10);
$('#chart3').css("z-index", 8);
$('#chart').css("opacity",0);
$('#chart3').css("opacity",1);}, 1000);}});


              
$('.szurokmind').css("display", "none"); 

                $('#chart').css("display", "block");

        

            } else if (chapterName === "ch8v") {

map.setFilter('18kerfinal4-6t2ivv', [
  "all",
  [
    "match",
    [
      "get",
      "mikoreltidotartam"
    ],
    [
      "1945 után",
      "középkor",
      "újkor",
      "1900-1945",
      "19. század",
      "18. század",
      "ókor"
    ],
    true,
    false
  ]
]);

map.setFilter('bp18finaladattal-b1eqei', [
  "all",
  [
    "match",
    [
      "get",
      "mikoreltidotartam"
    ],
    [
      "1945 után",
      "középkor",
      "újkor",
      "1900-1945",
      "19. század",
      "18. század",
      "ókor"
    ],
    false,
    true
  ]
]);

       map.on('mousemove', '18kerfinal4-6t2ivv', function(e) {
  map.getCanvas().style.cursor = 'pointer';
  $('.infoegy').fadeOut("normal");
   {setTimeout(function() {
  $('.infoegy').css("z-index",-1);}, 250);}
  var features = map.queryRenderedFeatures(e.point, {
    layers: ['18kerfinal4-6t2ivv'] // replace this with the name of the layer
  });

 if (!features.length) {
    return;
  }

  var props = features[0].properties;

        var state = features[0].state;
  
  var feature = features[0];
            popup.setLngLat(e.lngLat)
                .setHTML('<span style="font-weight:bold; font-family:Montserrat">Utca neve: </span><span style="font-family:Montserrat">' + feature.properties.kozt_nev + '</span><br><span style="font-weight:bold; font-family:Montserrat">Korszak: </span><span style="font-family:Montserrat">' + feature.properties.mikoreltidotartam+ '</span><br><span style="font-weight:bold; font-family:Montserrat">Mikor élt? </span><span style="font-family:Montserrat">' + feature.properties.mikoreltevszam+ '</span>')
                .addTo(map);

        });


        // Change it back to a pointer when it leaves.
map.on('mouseleave', '18kerfinal4-6t2ivv', function () {
map.getCanvas().style.cursor = 'default';
popup.remove();
}); 


map.setPaintProperty('18kerfinal4-6t2ivv', 'line-color', [
  "match",
  ["get", "mikoreltidotartam"],
  ["18. század"],
  "#f782e7",
  ["19. század"],
  "#ae7ee2",
  ["1900-1945"],
  "#57a0e5",
  ["1945 után"],
  "#84d7b4",
  ["középkor"],
  "#f4926c",
  ["ókor"],
  "#fbd16f",
  [
    
    "újkor"
  ],
  "#e56693",
  "#c7c7c7"
]);

                document.getElementById('chart3').src = 'https://flo.uri.sh/story/1544173/embed#slide-11';
                

                
       

               
                 $('#interakciogomb').on('click', function() {
    {setTimeout(function() {
    $('#chart').css("z-index", -1);
$('#chart3').css("z-index", -1);
$('#chart').css("opacity",0);
$('#chart3').css("opacity",0);}, 0);}});
            
$('#visszagomb').on('click', function() {
    {setTimeout(function() {$('#chart').css("z-index", 10);
$('#chart3').css("z-index", 8);
$('#chart').css("opacity",0);
$('#chart3').css("opacity",1);}, 1000);}});
$('.arrow2').fadeOut("normal");
                 
            } else if (chapterName === "ch9") {


map.setFilter('18kerfinal4-6t2ivv', [
  "all",
  [
    "match",
    [
      "get",
      "mikoreltidotartam"
    ],
    [
      "1945 után",
      "középkor",
      "újkor",
      "1900-1945",
      "19. század",
      "18. század",
      "ókor"
    ],
    true,
    false
  ]
]);

map.setFilter('bp18finaladattal-b1eqei', [
  "all",
  [
    "match",
    [
      "get",
      "mikoreltidotartam"
    ],
    [
      "1945 után",
      "középkor",
      "újkor",
      "1900-1945",
      "19. század",
      "18. század",
      "ókor"
    ],
    false,
    true
  ]
]);
                 map.on('mousemove', '18kerfinal4-6t2ivv', function(e) {
  map.getCanvas().style.cursor = 'pointer';
  $('.infoegy').fadeOut("normal");
   {setTimeout(function() {
  $('.infoegy').css("z-index",-1);}, 250);}
  var features = map.queryRenderedFeatures(e.point, {
    layers: ['18kerfinal4-6t2ivv'] // replace this with the name of the layer
  });

 if (!features.length) {
    return;
  }

  var props = features[0].properties;

        var state = features[0].state;
  
  var feature = features[0];
            popup.setLngLat(e.lngLat)
                .setHTML('<span style="font-weight:bold; font-family:Montserrat">Utca neve: </span><span style="font-family:Montserrat">' + feature.properties.kozt_nev + '</span><br><span style="font-weight:bold; font-family:Montserrat">Korszak: </span><span style="font-family:Montserrat">' + feature.properties.mikoreltidotartam+ '</span><br><span style="font-weight:bold; font-family:Montserrat">Mikor élt? </span><span style="font-family:Montserrat">' + feature.properties.mikoreltevszam+ '</span>')
                .addTo(map);

        });


        // Change it back to a pointer when it leaves.
map.on('mouseleave', '18kerfinal4-6t2ivv', function () {
map.getCanvas().style.cursor = 'default';
popup.remove();
}); 

                map.setPaintProperty('18kerfinal4-6t2ivv', 'line-color', [
  "match",
  ["get", "mikoreltidotartam"],
  ["18. század"],
  "#f782e7",
  ["19. század"],
  "#ae7ee2",
  ["1900-1945"],
  "#57a0e5",
  ["1945 után"],
  "#84d7b4",
  ["középkor"],
  "#f4926c",
  ["ókor"],
  "#fbd16f",
  [
    
    "újkor"
  ],
  "#e56693",
  "#c7c7c7"
]);
 document.getElementById('chart3').src = 'https://flo.uri.sh/story/1544173/embed#slide-12';
                    $('.szurokmind').css("display", "none"); 
                $('#interakciogomb').on('click', function() {
    {setTimeout(function() {
    $('#chart').css("z-index", -1);
$('#chart3').css("z-index", -1);
$('#chart').css("opacity",0);
$('#chart3').css("opacity",0);}, 0);}});
            
$('#visszagomb').on('click', function() {
    {setTimeout(function() {$('#chart').css("z-index", 10);
$('#chart3').css("z-index", 8);
$('#chart').css("opacity",0);
$('#chart3').css("opacity",1);}, 1000);}});
               
         $('#chart').css("z-index", 10); 
                  $('#chart3').css("z-index", 8);
                   $('#chart3').css("opacity", 1); 
$('#chart3').fadeIn("normal");
$('.szurokmind').fadeOut("normal"); 
$('#chart2').css("z-index", 8);
              } else if (chapterName === "ch10") {
$('#chart2').css("z-index", -1);
                 map.setPaintProperty('18kerfinal4-6t2ivv', 'line-color', 'hsla(0, 0%, 0%, 0.3)');
 map.setFilter('18kerfinal4-6t2ivv', [
  "all",
  [
    "match",
    ["get", "vannincs"],
    ["van"],
    true,
    false
  ]
]);

map.setFilter('bp18finaladattal-b1eqei', [
  "all",
  [
    "match",
    ["get", "vannincs"],
    ["nincs"],
    true,
    false
  ]
]);

map.on('mousemove', '18kerfinal4-6t2ivv', function(e) {
  map.getCanvas().style.cursor = 'pointer';
  $('.infoegy').fadeOut("normal");
   {setTimeout(function() {
  $('.infoegy').css("z-index",-1);}, 250);}
  var features = map.queryRenderedFeatures(e.point, {
    layers: ['18kerfinal4-6t2ivv'] // replace this with the name of the layer
  });

 if (!features.length) {
    return;
  }

  var props = features[0].properties;

        var state = features[0].state;
  
  var feature = features[0];
            popup.setLngLat(e.lngLat)
                .setHTML('<span style="font-weight:bold; font-family:Montserrat">Utca neve: </span><span style="font-family:Montserrat">' + feature.properties.kozt_nev + '</span>')
                .addTo(map);

        });


        // Change it back to a pointer when it leaves.
map.on('mouseleave', '18kerfinal4-6t2ivv', function () {
map.getCanvas().style.cursor = 'default';
popup.remove();
}); 
                $('#interakciogomb').on('click', function() {
    {setTimeout(function() {
    $('#chart').css("z-index", -1);
$('#chart3').css("z-index", -1);
$('#chart').css("opacity",0);
$('#chart3').css("opacity",0);}, 0);}});
            
$('#visszagomb').on('click', function() {
    {setTimeout(function() {$('#chart').css("z-index", -1);
$('#chart3').css("z-index", -1);
$
$('#chart').css("opacity",0);
$('#chart3').css("opacity",0);}, 1000);}});
$('.szurokmind').fadeIn("normal"); 
                  $('#chart3').fadeOut("normal"); 
            
                $('.legend4').css("z-index",8);
                $('.titlestory2').css("display","none");
                $('.endimages').css("z-index",-1);
                $('.endimages').css("display","none");
                $('.endfekete').css("display","none");

                $('.endfekete').css("z-index",-1);
 $('#prop2').val("0");
     $('#prop4').val("0");
     $('#prop6').val("0");
     $('#prop8').val("0");
     $('#prop10').val("0");
     $('#prop12').val("0");
     $('#prop14').val("0");
    document.getElementById('one').value=0;
 document.getElementById('two').value=0;
  document.getElementById('four').value=0;
  document.getElementById('five').value=0;
 document.getElementById('six').value=0;
  document.getElementById('seven').value=0;
  document.getElementById('three').value=0;
  document.getElementById('eight').value=0;
  
     

    
     $('#nemlegend').css("display","none");
$('#valoslegend').css("display","none");
$('#nemzetiseglegend').css("display","none");
$('#foglalkozaslegend').css("display","none");
$('#korszaklegend').css("display","none");
$('#kormanylegend').css("display","none");


              
            } else if (chapterName === "ch11") {


 map.setPaintProperty('18kerfinal4-6t2ivv', 'line-color', 'rgba(0,0,0,0.1)');
 map.setFilter('18kerfinal4-6t2ivv', [
  "all",
  [
    "match",
    ["get", "vannincs"],
    ["van"],
    true,
    false
  ]
]);

map.setFilter('bp18finaladattal-b1eqei', [
  "all",
  [
    "match",
    ["get", "vannincs"],
    ["nincs"],
    true,
    false
  ]
]);
               $('#nemlegend').css("display","none");
$('#valoslegend').css("display","none");
$('#nemzetiseglegend').css("display","none");
$('#foglalkozaslegend').css("display","none");
$('#korszaklegend').css("display","none");
$('#kormanylegend').css("display","none");
 $('#prop2').val("0");
     $('#prop4').val("0");
     $('#prop6').val("0");
     $('#prop8').val("0");
     $('#prop10').val("0");
     $('#prop12').val("0");
     $('#prop14').val("0");
    document.getElementById('one').value=0;
 document.getElementById('two').value=0;
  document.getElementById('four').value=0;
  document.getElementById('five').value=0;
 document.getElementById('six').value=0;
  document.getElementById('seven').value=0;
  document.getElementById('three').value=0;
  document.getElementById('eight').value=0;
  
     

     map.setPaintProperty('utcanevekfinal-8k6pps', 'line-color', "hsla(0, 0%, 0%, 0.3)");map.setFilter('utcanevekfinal-8k6pps',null);map.setPaintProperty('utcanevekfinal-3k5vb2', 'line-color', "#4d4c4c");map.setFilter('utcanevekfinal-3k5vb2',null);
               
                $('#nemlegend').css("display","none");
$('#valoslegend').css("display","none");
$('#nemzetiseglegend').css("display","none");
$('#foglalkozaslegend').css("display","none");
$('#korszaklegend').css("display","none");
$('#kormanylegend').css("display","none");
                 $('#prop2').val("0");
     $('#prop4').val("0");
     $('#prop6').val("0");
     $('#prop8').val("0");
     $('#prop10').val("0");
     $('#prop12').val("0");
     $('#prop14').val("0");
    document.getElementById('one').value=0;
 document.getElementById('two').value=0;
  document.getElementById('four').value=0;
  document.getElementById('five').value=0;
 document.getElementById('six').value=0;
  document.getElementById('seven').value=0;
  document.getElementById('three').value=0;
  document.getElementById('eight').value=0;
  
     

     map.setPaintProperty('utcanevekfinal-8k6pps', 'line-color', "hsla(0, 0%, 0%, 0.3)");map.setFilter('utcanevekfinal-8k6pps',null);map.setPaintProperty('utcanevekfinal-3k5vb2', 'line-color', "#4d4c4c");map.setFilter('utcanevekfinal-3k5vb2',null);
                $('.endimages').css("display","block");

                $('.endimages').css("z-index",15);

                $('.endfekete').css("display","block");

                $('.endfekete').css("z-index",13);
                $('.titlestory2').css("display","block");
                $('.legend4').css("z-index",-1);
                
$('.szurokmind').css("display", "none"); 
              
            } else if (chapterName === "ch12") {
             
            } else if (chapterName === "ch13") {
              
            } else if (chapterName === "ch14") {
            
             } else if (chapterName === "ch15") {
             
            } else if (chapterName === "ch16") {
           
            } else if (chapterName === "ch17") {
           
            } 
            map.flyTo(chapters[chapterName]);

            document.getElementById(chapterName).setAttribute('class', 'active');
            document.getElementById(activeChapterName).setAttribute('class', '');

            activeChapterName = chapterName;
        }
        function isElementOnScreen(id) {
            var element = document.getElementById(id);
            var bounds = element.getBoundingClientRect();
            return bounds.top < window.innerHeight && bounds.bottom > 0;
        }
