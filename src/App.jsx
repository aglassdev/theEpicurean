import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './Home';
import Destinations from './Destinations';
import Methodology from './Methodology';
import RestaurantTemplate from './RestaurantTemplate';

// Lazy-loaded listing pages (code split for fast deployment)
const DenmarkCopenhagenRestaurants = lazy(() => import('./denmark/copenhagen/Restaurants'));
const FranceProvenceMentonRestaurants = lazy(() => import('./france/provence-alpes-cote-dazur/menton/Restaurants'));
const ItalyEmiliaRomagnaModenaRestaurants = lazy(() => import('./italy/emilia-romagna/modena/Restaurants'));
const SpainCataloniaBarcelonaRestaurants = lazy(() => import('./spain/catalonia/barcelona/Restaurants'));
const SpainCataloniaGironaRestaurants = lazy(() => import('./spain/catalonia/girona/Restaurants'));
const UKEnglandLondonRestaurants = lazy(() => import('./uk/england/london/Restaurants'));
const UKEnglandSouthEastBrayRestaurants = lazy(() => import('./uk/england/south-east/bray/Restaurants'));
const USACaliforniaNapaValleyRestaurants = lazy(() => import('./usa/california/napa-valley/Restaurants'));
const USADCRestaurants = lazy(() => import('./usa/dc/Restaurants'));
const USANewYorkNewYorkCityRestaurants = lazy(() => import('./usa/newyork/newyorkcity/Restaurants'));
const USAVirginiaNovaRestaurants = lazy(() => import('./usa/virginia/nova/Restaurants'));
const USAVirginiaWashingtonRestaurants = lazy(() => import('./usa/virginia/washington/Restaurants'));
const USACaliforniaAlamedaRestaurants = lazy(() => import('./usa/california/alameda/Restaurants'));
const USACaliforniaAlhambraRestaurants = lazy(() => import('./usa/california/alhambra/Restaurants'));
const USACaliforniaAnaheimRestaurants = lazy(() => import('./usa/california/anaheim/Restaurants'));
const USACaliforniaAptosRestaurants = lazy(() => import('./usa/california/aptos/Restaurants'));
const USACaliforniaArcadiaRestaurants = lazy(() => import('./usa/california/arcadia/Restaurants'));
const USACaliforniaAthertonRestaurants = lazy(() => import('./usa/california/atherton/Restaurants'));
const USACaliforniaBellGardensRestaurants = lazy(() => import('./usa/california/bell-gardens/Restaurants'));
const USACaliforniaBelmontRestaurants = lazy(() => import('./usa/california/belmont/Restaurants'));
const USACaliforniaBerkeleyRestaurants = lazy(() => import('./usa/california/berkeley/Restaurants'));
const USACaliforniaBeverlyHillsRestaurants = lazy(() => import('./usa/california/beverly-hills/Restaurants'));
const USACaliforniaBigSurRestaurants = lazy(() => import('./usa/california/big-sur/Restaurants'));
const USACaliforniaBodegaBayRestaurants = lazy(() => import('./usa/california/bodega-bay/Restaurants'));
const USACaliforniaBoonvilleRestaurants = lazy(() => import('./usa/california/boonville/Restaurants'));
const USACaliforniaBuenaParkRestaurants = lazy(() => import('./usa/california/buena-park/Restaurants'));
const USACaliforniaBurlingameRestaurants = lazy(() => import('./usa/california/burlingame/Restaurants'));
const USACaliforniaCalistogaRestaurants = lazy(() => import('./usa/california/calistoga/Restaurants'));
const USACaliforniaCampbellRestaurants = lazy(() => import('./usa/california/campbell/Restaurants'));
const USACaliforniaCarlsbadRestaurants = lazy(() => import('./usa/california/carlsbad/Restaurants'));
const USACaliforniaCarmelByTheSeaRestaurants = lazy(() => import('./usa/california/carmel-by-the-sea/Restaurants'));
const USACaliforniaCarmelValleyRestaurants = lazy(() => import('./usa/california/carmel-valley/Restaurants'));
const USACaliforniaCerritosRestaurants = lazy(() => import('./usa/california/cerritos/Restaurants'));
const USACaliforniaCityOfIndustryRestaurants = lazy(() => import('./usa/california/city-of-industry/Restaurants'));
const USACaliforniaCoronadoRestaurants = lazy(() => import('./usa/california/coronado/Restaurants'));
const USACaliforniaCorteMaderaRestaurants = lazy(() => import('./usa/california/corte-madera/Restaurants'));
const USACaliforniaCostaMesaRestaurants = lazy(() => import('./usa/california/costa-mesa/Restaurants'));
const USACaliforniaCulverCityRestaurants = lazy(() => import('./usa/california/culver-city/Restaurants'));
const USACaliforniaCupertinoRestaurants = lazy(() => import('./usa/california/cupertino/Restaurants'));
const USACaliforniaDalyCityRestaurants = lazy(() => import('./usa/california/daly-city/Restaurants'));
const USACaliforniaDelMarRestaurants = lazy(() => import('./usa/california/del-mar/Restaurants'));
const USACaliforniaElCerritoRestaurants = lazy(() => import('./usa/california/el-cerrito/Restaurants'));
const USACaliforniaElGranadaRestaurants = lazy(() => import('./usa/california/el-granada/Restaurants'));
const USACaliforniaElkRestaurants = lazy(() => import('./usa/california/elk/Restaurants'));
const USACaliforniaEncinitasRestaurants = lazy(() => import('./usa/california/encinitas/Restaurants'));
const USACaliforniaEncinoRestaurants = lazy(() => import('./usa/california/encino/Restaurants'));
const USACaliforniaFairfaxRestaurants = lazy(() => import('./usa/california/fairfax/Restaurants'));
const USACaliforniaForestvilleRestaurants = lazy(() => import('./usa/california/forestville/Restaurants'));
const USACaliforniaFullertonRestaurants = lazy(() => import('./usa/california/fullerton/Restaurants'));
const USACaliforniaGardenGroveRestaurants = lazy(() => import('./usa/california/garden-grove/Restaurants'));
const USACaliforniaGardenaRestaurants = lazy(() => import('./usa/california/gardena/Restaurants'));
const USACaliforniaGeyservilleRestaurants = lazy(() => import('./usa/california/geyserville/Restaurants'));
const USACaliforniaGlenEllenRestaurants = lazy(() => import('./usa/california/glen-ellen/Restaurants'));
const USACaliforniaGlendaleRestaurants = lazy(() => import('./usa/california/glendale/Restaurants'));
const USACaliforniaHalfMoonBayRestaurants = lazy(() => import('./usa/california/half-moon-bay/Restaurants'));
const USACaliforniaHaywardRestaurants = lazy(() => import('./usa/california/hayward/Restaurants'));
const USACaliforniaHealdsburgRestaurants = lazy(() => import('./usa/california/healdsburg/Restaurants'));
const USACaliforniaHermosaBeachRestaurants = lazy(() => import('./usa/california/hermosa-beach/Restaurants'));
const USACaliforniaHollywoodRestaurants = lazy(() => import('./usa/california/hollywood/Restaurants'));
const USACaliforniaHuntingtonBeachRestaurants = lazy(() => import('./usa/california/huntington-beach/Restaurants'));
const USACaliforniaInglewoodRestaurants = lazy(() => import('./usa/california/inglewood/Restaurants'));
const USACaliforniaInvernessRestaurants = lazy(() => import('./usa/california/inverness/Restaurants'));
const USACaliforniaKentfieldRestaurants = lazy(() => import('./usa/california/kentfield/Restaurants'));
const USACaliforniaLaJollaRestaurants = lazy(() => import('./usa/california/la-jolla/Restaurants'));
const USACaliforniaLaPuenteRestaurants = lazy(() => import('./usa/california/la-puente/Restaurants'));
const USACaliforniaLafayetteRestaurants = lazy(() => import('./usa/california/lafayette/Restaurants'));
const USACaliforniaLagunaBeachRestaurants = lazy(() => import('./usa/california/laguna-beach/Restaurants'));
const USACaliforniaLarkspurRestaurants = lazy(() => import('./usa/california/larkspur/Restaurants'));
const USACaliforniaLivermoreRestaurants = lazy(() => import('./usa/california/livermore/Restaurants'));
const USACaliforniaLongBeachRestaurants = lazy(() => import('./usa/california/long-beach/Restaurants'));
const USACaliforniaLosAlamosRestaurants = lazy(() => import('./usa/california/los-alamos/Restaurants'));
const USACaliforniaLosAltosRestaurants = lazy(() => import('./usa/california/los-altos/Restaurants'));
const USACaliforniaLosAngelesRestaurants = lazy(() => import('./usa/california/los-angeles/Restaurants'));
const USACaliforniaLosGatosRestaurants = lazy(() => import('./usa/california/los-gatos/Restaurants'));
const USACaliforniaLosOlivosRestaurants = lazy(() => import('./usa/california/los-olivos/Restaurants'));
const USACaliforniaManhattanBeachRestaurants = lazy(() => import('./usa/california/manhattan-beach/Restaurants'));
const USACaliforniaMarinaDelReyRestaurants = lazy(() => import('./usa/california/marina-del-rey/Restaurants'));
const USACaliforniaMarshallRestaurants = lazy(() => import('./usa/california/marshall/Restaurants'));
const USACaliforniaMenloParkRestaurants = lazy(() => import('./usa/california/menlo-park/Restaurants'));
const USACaliforniaMillValleyRestaurants = lazy(() => import('./usa/california/mill-valley/Restaurants'));
const USACaliforniaMillbraeRestaurants = lazy(() => import('./usa/california/millbrae/Restaurants'));
const USACaliforniaMonroviaRestaurants = lazy(() => import('./usa/california/monrovia/Restaurants'));
const USACaliforniaMontecitoRestaurants = lazy(() => import('./usa/california/montecito/Restaurants'));
const USACaliforniaMontereyRestaurants = lazy(() => import('./usa/california/monterey/Restaurants'));
const USACaliforniaMountainViewRestaurants = lazy(() => import('./usa/california/mountain-view/Restaurants'));
const USACaliforniaNapaRestaurants = lazy(() => import('./usa/california/napa/Restaurants'));
const USACaliforniaNewburyParkRestaurants = lazy(() => import('./usa/california/newbury-park/Restaurants'));
const USACaliforniaNewportBeachRestaurants = lazy(() => import('./usa/california/newport-beach/Restaurants'));
const USACaliforniaNovatoRestaurants = lazy(() => import('./usa/california/novato/Restaurants'));
const USACaliforniaOaklandRestaurants = lazy(() => import('./usa/california/oakland/Restaurants'));
const USACaliforniaOceansideRestaurants = lazy(() => import('./usa/california/oceanside/Restaurants'));
const USACaliforniaOjaiRestaurants = lazy(() => import('./usa/california/ojai/Restaurants'));
const USACaliforniaOrangeRestaurants = lazy(() => import('./usa/california/orange/Restaurants'));
const USACaliforniaPalmSpringsRestaurants = lazy(() => import('./usa/california/palm-springs/Restaurants'));
const USACaliforniaPaloAltoRestaurants = lazy(() => import('./usa/california/palo-alto/Restaurants'));
const USACaliforniaPasadenaRestaurants = lazy(() => import('./usa/california/pasadena/Restaurants'));
const USACaliforniaPasoRoblesRestaurants = lazy(() => import('./usa/california/paso-robles/Restaurants'));
const USACaliforniaPebbleBeachRestaurants = lazy(() => import('./usa/california/pebble-beach/Restaurants'));
const USACaliforniaPetalumaRestaurants = lazy(() => import('./usa/california/petaluma/Restaurants'));
const USACaliforniaPleasantonRestaurants = lazy(() => import('./usa/california/pleasanton/Restaurants'));
const USACaliforniaPointReyesStationRestaurants = lazy(() => import('./usa/california/point-reyes-station/Restaurants'));
const USACaliforniaPomonaRestaurants = lazy(() => import('./usa/california/pomona/Restaurants'));
const USACaliforniaRanchoPalosVerdesRestaurants = lazy(() => import('./usa/california/rancho-palos-verdes/Restaurants'));
const USACaliforniaRedwoodCityRestaurants = lazy(() => import('./usa/california/redwood-city/Restaurants'));
const USACaliforniaRosemeadRestaurants = lazy(() => import('./usa/california/rosemead/Restaurants'));
const USACaliforniaRosevilleRestaurants = lazy(() => import('./usa/california/roseville/Restaurants'));
const USACaliforniaRowlandHeightsRestaurants = lazy(() => import('./usa/california/rowland-heights/Restaurants'));
const USACaliforniaRutherfordRestaurants = lazy(() => import('./usa/california/rutherford/Restaurants'));
const USACaliforniaSacramentoRestaurants = lazy(() => import('./usa/california/sacramento/Restaurants'));
const USACaliforniaSaintHelenaRestaurants = lazy(() => import('./usa/california/saint-helena/Restaurants'));
const USACaliforniaSanAnselmoRestaurants = lazy(() => import('./usa/california/san-anselmo/Restaurants'));
const USACaliforniaSanBrunoRestaurants = lazy(() => import('./usa/california/san-bruno/Restaurants'));
const USACaliforniaSanCarlosRestaurants = lazy(() => import('./usa/california/san-carlos/Restaurants'));
const USACaliforniaSanDiegoRestaurants = lazy(() => import('./usa/california/san-diego/Restaurants'));
const USACaliforniaSanFranciscoRestaurants = lazy(() => import('./usa/california/san-francisco/Restaurants'));
const USACaliforniaSanGabrielRestaurants = lazy(() => import('./usa/california/san-gabriel/Restaurants'));
const USACaliforniaSanJoseRestaurants = lazy(() => import('./usa/california/san-jose/Restaurants'));
const USACaliforniaSanJuanCapistranoRestaurants = lazy(() => import('./usa/california/san-juan-capistrano/Restaurants'));
const USACaliforniaSanLeandroRestaurants = lazy(() => import('./usa/california/san-leandro/Restaurants'));
const USACaliforniaSanLuisObispoRestaurants = lazy(() => import('./usa/california/san-luis-obispo/Restaurants'));
const USACaliforniaSanMateoRestaurants = lazy(() => import('./usa/california/san-mateo/Restaurants'));
const USACaliforniaSanRafaelRestaurants = lazy(() => import('./usa/california/san-rafael/Restaurants'));
const USACaliforniaSantaAnaRestaurants = lazy(() => import('./usa/california/santa-ana/Restaurants'));
const USACaliforniaSantaBarbaraRestaurants = lazy(() => import('./usa/california/santa-barbara/Restaurants'));
const USACaliforniaSantaMonicaRestaurants = lazy(() => import('./usa/california/santa-monica/Restaurants'));
const USACaliforniaSaratogaRestaurants = lazy(() => import('./usa/california/saratoga/Restaurants'));
const USACaliforniaSausalitoRestaurants = lazy(() => import('./usa/california/sausalito/Restaurants'));
const USACaliforniaSealBeachRestaurants = lazy(() => import('./usa/california/seal-beach/Restaurants'));
const USACaliforniaSeasideRestaurants = lazy(() => import('./usa/california/seaside/Restaurants'));
const USACaliforniaSebastopolRestaurants = lazy(() => import('./usa/california/sebastopol/Restaurants'));
const USACaliforniaShermanOaksRestaurants = lazy(() => import('./usa/california/sherman-oaks/Restaurants'));
const USACaliforniaSolvangRestaurants = lazy(() => import('./usa/california/solvang/Restaurants'));
const USACaliforniaSonomaRestaurants = lazy(() => import('./usa/california/sonoma/Restaurants'));
const USACaliforniaStudioCityRestaurants = lazy(() => import('./usa/california/studio-city/Restaurants'));
const USACaliforniaTempleCityRestaurants = lazy(() => import('./usa/california/temple-city/Restaurants'));
const USACaliforniaTorranceRestaurants = lazy(() => import('./usa/california/torrance/Restaurants'));
const USACaliforniaTustinRestaurants = lazy(() => import('./usa/california/tustin/Restaurants'));
const USACaliforniaVallejoRestaurants = lazy(() => import('./usa/california/vallejo/Restaurants'));
const USACaliforniaVeniceRestaurants = lazy(() => import('./usa/california/venice/Restaurants'));
const USACaliforniaWestHollywoodRestaurants = lazy(() => import('./usa/california/west-hollywood/Restaurants'));
const USACaliforniaWestminsterRestaurants = lazy(() => import('./usa/california/westminster/Restaurants'));
const USACaliforniaWoodlandHillsRestaurants = lazy(() => import('./usa/california/woodland-hills/Restaurants'));
const USACaliforniaWoodsideRestaurants = lazy(() => import('./usa/california/woodside/Restaurants'));
const USACaliforniaYountvilleRestaurants = lazy(() => import('./usa/california/yountville/Restaurants'));
const USANewyorkAlbanyRestaurants = lazy(() => import('./usa/newyork/albany/Restaurants'));
const USANewyorkArdsleyRestaurants = lazy(() => import('./usa/newyork/ardsley/Restaurants'));
const USANewyorkBronxRestaurants = lazy(() => import('./usa/newyork/bronx/Restaurants'));
const USANewyorkBronxvilleRestaurants = lazy(() => import('./usa/newyork/bronxville/Restaurants'));
const USANewyorkBrooklynRestaurants = lazy(() => import('./usa/newyork/brooklyn/Restaurants'));
const USANewyorkDobbsFerryRestaurants = lazy(() => import('./usa/newyork/dobbs-ferry/Restaurants'));
const USANewyorkEastchesterRestaurants = lazy(() => import('./usa/newyork/eastchester/Restaurants'));
const USANewyorkElmsfordRestaurants = lazy(() => import('./usa/newyork/elmsford/Restaurants'));
const USANewyorkHartsdaleRestaurants = lazy(() => import('./usa/newyork/hartsdale/Restaurants'));
const USANewyorkHastingsOnHudsonRestaurants = lazy(() => import('./usa/newyork/hastings-on-hudson/Restaurants'));
const USANewyorkIrvingtonRestaurants = lazy(() => import('./usa/newyork/irvington/Restaurants'));
const USANewyorkMamaroneckRestaurants = lazy(() => import('./usa/newyork/mamaroneck/Restaurants'));
const USANewyorkMountKiscoRestaurants = lazy(() => import('./usa/newyork/mount-kisco/Restaurants'));
const USANewyorkNewRochelleRestaurants = lazy(() => import('./usa/newyork/new-rochelle/Restaurants'));
const USANewyorkNewYorkRestaurants = lazy(() => import('./usa/newyork/new-york/Restaurants'));
const USANewyorkNorthSalemRestaurants = lazy(() => import('./usa/newyork/north-salem/Restaurants'));
const USANewyorkPeekskillRestaurants = lazy(() => import('./usa/newyork/peekskill/Restaurants'));
const USANewyorkPleasantvilleRestaurants = lazy(() => import('./usa/newyork/pleasantville/Restaurants'));
const USANewyorkPoundRidgeRestaurants = lazy(() => import('./usa/newyork/pound-ridge/Restaurants'));
const USANewyorkQueensRestaurants = lazy(() => import('./usa/newyork/queens/Restaurants'));
const USANewyorkRyeRestaurants = lazy(() => import('./usa/newyork/rye/Restaurants'));
const USANewyorkScarsdaleRestaurants = lazy(() => import('./usa/newyork/scarsdale/Restaurants'));
const USANewyorkStatenIslandRestaurants = lazy(() => import('./usa/newyork/staten-island/Restaurants'));
const USANewyorkTarrytownRestaurants = lazy(() => import('./usa/newyork/tarrytown/Restaurants'));
const USANewyorkWestHarrisonRestaurants = lazy(() => import('./usa/newyork/west-harrison/Restaurants'));
const USANewyorkWhitePlainsRestaurants = lazy(() => import('./usa/newyork/white-plains/Restaurants'));
const USATexasArlingtonRestaurants = lazy(() => import('./usa/texas/arlington/Restaurants'));
const USATexasAustinRestaurants = lazy(() => import('./usa/texas/austin/Restaurants'));
const USATexasBellaireRestaurants = lazy(() => import('./usa/texas/bellaire/Restaurants'));
const USATexasDallasRestaurants = lazy(() => import('./usa/texas/dallas/Restaurants'));
const USATexasFortWorthRestaurants = lazy(() => import('./usa/texas/fort-worth/Restaurants'));
const USATexasHoustonRestaurants = lazy(() => import('./usa/texas/houston/Restaurants'));
const USATexasLockhartRestaurants = lazy(() => import('./usa/texas/lockhart/Restaurants'));
const USATexasMckinneyRestaurants = lazy(() => import('./usa/texas/mckinney/Restaurants'));
const USATexasPearlandRestaurants = lazy(() => import('./usa/texas/pearland/Restaurants'));
const USATexasSanAntonioRestaurants = lazy(() => import('./usa/texas/san-antonio/Restaurants'));
const USATexasSeguinRestaurants = lazy(() => import('./usa/texas/seguin/Restaurants'));
const USATexasSpringRestaurants = lazy(() => import('./usa/texas/spring/Restaurants'));
const USATexasTomballRestaurants = lazy(() => import('./usa/texas/tomball/Restaurants'));
const USAColoradoAspenRestaurants = lazy(() => import('./usa/colorado/aspen/Restaurants'));
const USAColoradoAvonRestaurants = lazy(() => import('./usa/colorado/avon/Restaurants'));
const USAColoradoBeaverCreekRestaurants = lazy(() => import('./usa/colorado/beaver-creek/Restaurants'));
const USAColoradoBoulderRestaurants = lazy(() => import('./usa/colorado/boulder/Restaurants'));
const USAColoradoDenverRestaurants = lazy(() => import('./usa/colorado/denver/Restaurants'));
const USAColoradoVailRestaurants = lazy(() => import('./usa/colorado/vail/Restaurants'));
const USAGeorgiaAtlantaRestaurants = lazy(() => import('./usa/georgia/atlanta/Restaurants'));
const USAGeorgiaAvondaleEstatesRestaurants = lazy(() => import('./usa/georgia/avondale-estates/Restaurants'));
const USAGeorgiaChambleeRestaurants = lazy(() => import('./usa/georgia/chamblee/Restaurants'));
const USAGeorgiaDecaturRestaurants = lazy(() => import('./usa/georgia/decatur/Restaurants'));
const USAGeorgiaJohnsCreekRestaurants = lazy(() => import('./usa/georgia/johns-creek/Restaurants'));
const USAGeorgiaMariettaRestaurants = lazy(() => import('./usa/georgia/marietta/Restaurants'));
const USAGeorgiaRoswellRestaurants = lazy(() => import('./usa/georgia/roswell/Restaurants'));
const USAFloridaBoyntonBeachRestaurants = lazy(() => import('./usa/florida/boynton-beach/Restaurants'));
const USAFloridaCoralGablesRestaurants = lazy(() => import('./usa/florida/coral-gables/Restaurants'));
const USAFloridaFortLauderdaleRestaurants = lazy(() => import('./usa/florida/fort-lauderdale/Restaurants'));
const USAFloridaLakeBuenaVistaRestaurants = lazy(() => import('./usa/florida/lake-buena-vista/Restaurants'));
const USAFloridaMiamiRestaurants = lazy(() => import('./usa/florida/miami/Restaurants'));
const USAFloridaMiamiBeachRestaurants = lazy(() => import('./usa/florida/miami-beach/Restaurants'));
const USAFloridaOrlandoRestaurants = lazy(() => import('./usa/florida/orlando/Restaurants'));
const USAFloridaPalmBeachRestaurants = lazy(() => import('./usa/florida/palm-beach/Restaurants'));
const USAFloridaPalmBeachGardensRestaurants = lazy(() => import('./usa/florida/palm-beach-gardens/Restaurants'));
const USAFloridaSafetyHarborRestaurants = lazy(() => import('./usa/florida/safety-harbor/Restaurants'));
const USAFloridaStPetersburgRestaurants = lazy(() => import('./usa/florida/st-petersburg/Restaurants'));
const USAFloridaSurfsideRestaurants = lazy(() => import('./usa/florida/surfside/Restaurants'));
const USAFloridaTampaRestaurants = lazy(() => import('./usa/florida/tampa/Restaurants'));
const USAFloridaWestPalmBeachRestaurants = lazy(() => import('./usa/florida/west-palm-beach/Restaurants'));
const USAFloridaWinterGardenRestaurants = lazy(() => import('./usa/florida/winter-garden/Restaurants'));
const USAFloridaWinterParkRestaurants = lazy(() => import('./usa/florida/winter-park/Restaurants'));
const USAIllinoisChicagoRestaurants = lazy(() => import('./usa/illinois/chicago/Restaurants'));
const USAMinnesotaDuluthRestaurants = lazy(() => import('./usa/minnesota/duluth/Restaurants'));
const USADcWashingtonRestaurants = lazy(() => import('./usa/dc/washington/Restaurants'));

// Map of paths to lazy components
const listingComponents = {
  '/denmark/copenhagen/restaurants': DenmarkCopenhagenRestaurants,
  '/france/provence-alpes-cote-dazur/menton/restaurants': FranceProvenceMentonRestaurants,
  '/italy/emilia-romagna/modena/restaurants': ItalyEmiliaRomagnaModenaRestaurants,
  '/spain/catalonia/barcelona/restaurants': SpainCataloniaBarcelonaRestaurants,
  '/spain/catalonia/girona/restaurants': SpainCataloniaGironaRestaurants,
  '/uk/england/london/restaurants': UKEnglandLondonRestaurants,
  '/uk/england/south-east/bray/restaurants': UKEnglandSouthEastBrayRestaurants,
  '/usa/california/napa-valley/restaurants': USACaliforniaNapaValleyRestaurants,
  '/usa/dc/restaurants': USADCRestaurants,
  '/usa/newyork/newyorkcity/restaurants': USANewYorkNewYorkCityRestaurants,
  '/usa/virginia/nova/restaurants': USAVirginiaNovaRestaurants,
  '/usa/virginia/washington/restaurants': USAVirginiaWashingtonRestaurants,
  '/usa/california/alameda/restaurants': USACaliforniaAlamedaRestaurants,
  '/usa/california/alhambra/restaurants': USACaliforniaAlhambraRestaurants,
  '/usa/california/anaheim/restaurants': USACaliforniaAnaheimRestaurants,
  '/usa/california/aptos/restaurants': USACaliforniaAptosRestaurants,
  '/usa/california/arcadia/restaurants': USACaliforniaArcadiaRestaurants,
  '/usa/california/atherton/restaurants': USACaliforniaAthertonRestaurants,
  '/usa/california/bell-gardens/restaurants': USACaliforniaBellGardensRestaurants,
  '/usa/california/belmont/restaurants': USACaliforniaBelmontRestaurants,
  '/usa/california/berkeley/restaurants': USACaliforniaBerkeleyRestaurants,
  '/usa/california/beverly-hills/restaurants': USACaliforniaBeverlyHillsRestaurants,
  '/usa/california/big-sur/restaurants': USACaliforniaBigSurRestaurants,
  '/usa/california/bodega-bay/restaurants': USACaliforniaBodegaBayRestaurants,
  '/usa/california/boonville/restaurants': USACaliforniaBoonvilleRestaurants,
  '/usa/california/buena-park/restaurants': USACaliforniaBuenaParkRestaurants,
  '/usa/california/burlingame/restaurants': USACaliforniaBurlingameRestaurants,
  '/usa/california/calistoga/restaurants': USACaliforniaCalistogaRestaurants,
  '/usa/california/campbell/restaurants': USACaliforniaCampbellRestaurants,
  '/usa/california/carlsbad/restaurants': USACaliforniaCarlsbadRestaurants,
  '/usa/california/carmel-by-the-sea/restaurants': USACaliforniaCarmelByTheSeaRestaurants,
  '/usa/california/carmel-valley/restaurants': USACaliforniaCarmelValleyRestaurants,
  '/usa/california/cerritos/restaurants': USACaliforniaCerritosRestaurants,
  '/usa/california/city-of-industry/restaurants': USACaliforniaCityOfIndustryRestaurants,
  '/usa/california/coronado/restaurants': USACaliforniaCoronadoRestaurants,
  '/usa/california/corte-madera/restaurants': USACaliforniaCorteMaderaRestaurants,
  '/usa/california/costa-mesa/restaurants': USACaliforniaCostaMesaRestaurants,
  '/usa/california/culver-city/restaurants': USACaliforniaCulverCityRestaurants,
  '/usa/california/cupertino/restaurants': USACaliforniaCupertinoRestaurants,
  '/usa/california/daly-city/restaurants': USACaliforniaDalyCityRestaurants,
  '/usa/california/del-mar/restaurants': USACaliforniaDelMarRestaurants,
  '/usa/california/el-cerrito/restaurants': USACaliforniaElCerritoRestaurants,
  '/usa/california/el-granada/restaurants': USACaliforniaElGranadaRestaurants,
  '/usa/california/elk/restaurants': USACaliforniaElkRestaurants,
  '/usa/california/encinitas/restaurants': USACaliforniaEncinitasRestaurants,
  '/usa/california/encino/restaurants': USACaliforniaEncinoRestaurants,
  '/usa/california/fairfax/restaurants': USACaliforniaFairfaxRestaurants,
  '/usa/california/forestville/restaurants': USACaliforniaForestvilleRestaurants,
  '/usa/california/fullerton/restaurants': USACaliforniaFullertonRestaurants,
  '/usa/california/garden-grove/restaurants': USACaliforniaGardenGroveRestaurants,
  '/usa/california/gardena/restaurants': USACaliforniaGardenaRestaurants,
  '/usa/california/geyserville/restaurants': USACaliforniaGeyservilleRestaurants,
  '/usa/california/glen-ellen/restaurants': USACaliforniaGlenEllenRestaurants,
  '/usa/california/glendale/restaurants': USACaliforniaGlendaleRestaurants,
  '/usa/california/half-moon-bay/restaurants': USACaliforniaHalfMoonBayRestaurants,
  '/usa/california/hayward/restaurants': USACaliforniaHaywardRestaurants,
  '/usa/california/healdsburg/restaurants': USACaliforniaHealdsburgRestaurants,
  '/usa/california/hermosa-beach/restaurants': USACaliforniaHermosaBeachRestaurants,
  '/usa/california/hollywood/restaurants': USACaliforniaHollywoodRestaurants,
  '/usa/california/huntington-beach/restaurants': USACaliforniaHuntingtonBeachRestaurants,
  '/usa/california/inglewood/restaurants': USACaliforniaInglewoodRestaurants,
  '/usa/california/inverness/restaurants': USACaliforniaInvernessRestaurants,
  '/usa/california/kentfield/restaurants': USACaliforniaKentfieldRestaurants,
  '/usa/california/la-jolla/restaurants': USACaliforniaLaJollaRestaurants,
  '/usa/california/la-puente/restaurants': USACaliforniaLaPuenteRestaurants,
  '/usa/california/lafayette/restaurants': USACaliforniaLafayetteRestaurants,
  '/usa/california/laguna-beach/restaurants': USACaliforniaLagunaBeachRestaurants,
  '/usa/california/larkspur/restaurants': USACaliforniaLarkspurRestaurants,
  '/usa/california/livermore/restaurants': USACaliforniaLivermoreRestaurants,
  '/usa/california/long-beach/restaurants': USACaliforniaLongBeachRestaurants,
  '/usa/california/los-alamos/restaurants': USACaliforniaLosAlamosRestaurants,
  '/usa/california/los-altos/restaurants': USACaliforniaLosAltosRestaurants,
  '/usa/california/los-angeles/restaurants': USACaliforniaLosAngelesRestaurants,
  '/usa/california/los-gatos/restaurants': USACaliforniaLosGatosRestaurants,
  '/usa/california/los-olivos/restaurants': USACaliforniaLosOlivosRestaurants,
  '/usa/california/manhattan-beach/restaurants': USACaliforniaManhattanBeachRestaurants,
  '/usa/california/marina-del-rey/restaurants': USACaliforniaMarinaDelReyRestaurants,
  '/usa/california/marshall/restaurants': USACaliforniaMarshallRestaurants,
  '/usa/california/menlo-park/restaurants': USACaliforniaMenloParkRestaurants,
  '/usa/california/mill-valley/restaurants': USACaliforniaMillValleyRestaurants,
  '/usa/california/millbrae/restaurants': USACaliforniaMillbraeRestaurants,
  '/usa/california/monrovia/restaurants': USACaliforniaMonroviaRestaurants,
  '/usa/california/montecito/restaurants': USACaliforniaMontecitoRestaurants,
  '/usa/california/monterey/restaurants': USACaliforniaMontereyRestaurants,
  '/usa/california/mountain-view/restaurants': USACaliforniaMountainViewRestaurants,
  '/usa/california/napa/restaurants': USACaliforniaNapaRestaurants,
  '/usa/california/newbury-park/restaurants': USACaliforniaNewburyParkRestaurants,
  '/usa/california/newport-beach/restaurants': USACaliforniaNewportBeachRestaurants,
  '/usa/california/novato/restaurants': USACaliforniaNovatoRestaurants,
  '/usa/california/oakland/restaurants': USACaliforniaOaklandRestaurants,
  '/usa/california/oceanside/restaurants': USACaliforniaOceansideRestaurants,
  '/usa/california/ojai/restaurants': USACaliforniaOjaiRestaurants,
  '/usa/california/orange/restaurants': USACaliforniaOrangeRestaurants,
  '/usa/california/palm-springs/restaurants': USACaliforniaPalmSpringsRestaurants,
  '/usa/california/palo-alto/restaurants': USACaliforniaPaloAltoRestaurants,
  '/usa/california/pasadena/restaurants': USACaliforniaPasadenaRestaurants,
  '/usa/california/paso-robles/restaurants': USACaliforniaPasoRoblesRestaurants,
  '/usa/california/pebble-beach/restaurants': USACaliforniaPebbleBeachRestaurants,
  '/usa/california/petaluma/restaurants': USACaliforniaPetalumaRestaurants,
  '/usa/california/pleasanton/restaurants': USACaliforniaPleasantonRestaurants,
  '/usa/california/point-reyes-station/restaurants': USACaliforniaPointReyesStationRestaurants,
  '/usa/california/pomona/restaurants': USACaliforniaPomonaRestaurants,
  '/usa/california/rancho-palos-verdes/restaurants': USACaliforniaRanchoPalosVerdesRestaurants,
  '/usa/california/redwood-city/restaurants': USACaliforniaRedwoodCityRestaurants,
  '/usa/california/rosemead/restaurants': USACaliforniaRosemeadRestaurants,
  '/usa/california/roseville/restaurants': USACaliforniaRosevilleRestaurants,
  '/usa/california/rowland-heights/restaurants': USACaliforniaRowlandHeightsRestaurants,
  '/usa/california/rutherford/restaurants': USACaliforniaRutherfordRestaurants,
  '/usa/california/sacramento/restaurants': USACaliforniaSacramentoRestaurants,
  '/usa/california/saint-helena/restaurants': USACaliforniaSaintHelenaRestaurants,
  '/usa/california/san-anselmo/restaurants': USACaliforniaSanAnselmoRestaurants,
  '/usa/california/san-bruno/restaurants': USACaliforniaSanBrunoRestaurants,
  '/usa/california/san-carlos/restaurants': USACaliforniaSanCarlosRestaurants,
  '/usa/california/san-diego/restaurants': USACaliforniaSanDiegoRestaurants,
  '/usa/california/san-francisco/restaurants': USACaliforniaSanFranciscoRestaurants,
  '/usa/california/san-gabriel/restaurants': USACaliforniaSanGabrielRestaurants,
  '/usa/california/san-jose/restaurants': USACaliforniaSanJoseRestaurants,
  '/usa/california/san-juan-capistrano/restaurants': USACaliforniaSanJuanCapistranoRestaurants,
  '/usa/california/san-leandro/restaurants': USACaliforniaSanLeandroRestaurants,
  '/usa/california/san-luis-obispo/restaurants': USACaliforniaSanLuisObispoRestaurants,
  '/usa/california/san-mateo/restaurants': USACaliforniaSanMateoRestaurants,
  '/usa/california/san-rafael/restaurants': USACaliforniaSanRafaelRestaurants,
  '/usa/california/santa-ana/restaurants': USACaliforniaSantaAnaRestaurants,
  '/usa/california/santa-barbara/restaurants': USACaliforniaSantaBarbaraRestaurants,
  '/usa/california/santa-monica/restaurants': USACaliforniaSantaMonicaRestaurants,
  '/usa/california/saratoga/restaurants': USACaliforniaSaratogaRestaurants,
  '/usa/california/sausalito/restaurants': USACaliforniaSausalitoRestaurants,
  '/usa/california/seal-beach/restaurants': USACaliforniaSealBeachRestaurants,
  '/usa/california/seaside/restaurants': USACaliforniaSeasideRestaurants,
  '/usa/california/sebastopol/restaurants': USACaliforniaSebastopolRestaurants,
  '/usa/california/sherman-oaks/restaurants': USACaliforniaShermanOaksRestaurants,
  '/usa/california/solvang/restaurants': USACaliforniaSolvangRestaurants,
  '/usa/california/sonoma/restaurants': USACaliforniaSonomaRestaurants,
  '/usa/california/studio-city/restaurants': USACaliforniaStudioCityRestaurants,
  '/usa/california/temple-city/restaurants': USACaliforniaTempleCityRestaurants,
  '/usa/california/torrance/restaurants': USACaliforniaTorranceRestaurants,
  '/usa/california/tustin/restaurants': USACaliforniaTustinRestaurants,
  '/usa/california/vallejo/restaurants': USACaliforniaVallejoRestaurants,
  '/usa/california/venice/restaurants': USACaliforniaVeniceRestaurants,
  '/usa/california/west-hollywood/restaurants': USACaliforniaWestHollywoodRestaurants,
  '/usa/california/westminster/restaurants': USACaliforniaWestminsterRestaurants,
  '/usa/california/woodland-hills/restaurants': USACaliforniaWoodlandHillsRestaurants,
  '/usa/california/woodside/restaurants': USACaliforniaWoodsideRestaurants,
  '/usa/california/yountville/restaurants': USACaliforniaYountvilleRestaurants,
  '/usa/newyork/albany/restaurants': USANewyorkAlbanyRestaurants,
  '/usa/newyork/ardsley/restaurants': USANewyorkArdsleyRestaurants,
  '/usa/newyork/bronx/restaurants': USANewyorkBronxRestaurants,
  '/usa/newyork/bronxville/restaurants': USANewyorkBronxvilleRestaurants,
  '/usa/newyork/brooklyn/restaurants': USANewyorkBrooklynRestaurants,
  '/usa/newyork/dobbs-ferry/restaurants': USANewyorkDobbsFerryRestaurants,
  '/usa/newyork/eastchester/restaurants': USANewyorkEastchesterRestaurants,
  '/usa/newyork/elmsford/restaurants': USANewyorkElmsfordRestaurants,
  '/usa/newyork/hartsdale/restaurants': USANewyorkHartsdaleRestaurants,
  '/usa/newyork/hastings-on-hudson/restaurants': USANewyorkHastingsOnHudsonRestaurants,
  '/usa/newyork/irvington/restaurants': USANewyorkIrvingtonRestaurants,
  '/usa/newyork/mamaroneck/restaurants': USANewyorkMamaroneckRestaurants,
  '/usa/newyork/mount-kisco/restaurants': USANewyorkMountKiscoRestaurants,
  '/usa/newyork/new-rochelle/restaurants': USANewyorkNewRochelleRestaurants,
  '/usa/newyork/new-york/restaurants': USANewyorkNewYorkRestaurants,
  '/usa/newyork/north-salem/restaurants': USANewyorkNorthSalemRestaurants,
  '/usa/newyork/peekskill/restaurants': USANewyorkPeekskillRestaurants,
  '/usa/newyork/pleasantville/restaurants': USANewyorkPleasantvilleRestaurants,
  '/usa/newyork/pound-ridge/restaurants': USANewyorkPoundRidgeRestaurants,
  '/usa/newyork/queens/restaurants': USANewyorkQueensRestaurants,
  '/usa/newyork/rye/restaurants': USANewyorkRyeRestaurants,
  '/usa/newyork/scarsdale/restaurants': USANewyorkScarsdaleRestaurants,
  '/usa/newyork/staten-island/restaurants': USANewyorkStatenIslandRestaurants,
  '/usa/newyork/tarrytown/restaurants': USANewyorkTarrytownRestaurants,
  '/usa/newyork/west-harrison/restaurants': USANewyorkWestHarrisonRestaurants,
  '/usa/newyork/white-plains/restaurants': USANewyorkWhitePlainsRestaurants,
  '/usa/texas/arlington/restaurants': USATexasArlingtonRestaurants,
  '/usa/texas/austin/restaurants': USATexasAustinRestaurants,
  '/usa/texas/bellaire/restaurants': USATexasBellaireRestaurants,
  '/usa/texas/dallas/restaurants': USATexasDallasRestaurants,
  '/usa/texas/fort-worth/restaurants': USATexasFortWorthRestaurants,
  '/usa/texas/houston/restaurants': USATexasHoustonRestaurants,
  '/usa/texas/lockhart/restaurants': USATexasLockhartRestaurants,
  '/usa/texas/mckinney/restaurants': USATexasMckinneyRestaurants,
  '/usa/texas/pearland/restaurants': USATexasPearlandRestaurants,
  '/usa/texas/san-antonio/restaurants': USATexasSanAntonioRestaurants,
  '/usa/texas/seguin/restaurants': USATexasSeguinRestaurants,
  '/usa/texas/spring/restaurants': USATexasSpringRestaurants,
  '/usa/texas/tomball/restaurants': USATexasTomballRestaurants,
  '/usa/colorado/aspen/restaurants': USAColoradoAspenRestaurants,
  '/usa/colorado/avon/restaurants': USAColoradoAvonRestaurants,
  '/usa/colorado/beaver-creek/restaurants': USAColoradoBeaverCreekRestaurants,
  '/usa/colorado/boulder/restaurants': USAColoradoBoulderRestaurants,
  '/usa/colorado/denver/restaurants': USAColoradoDenverRestaurants,
  '/usa/colorado/vail/restaurants': USAColoradoVailRestaurants,
  '/usa/georgia/atlanta/restaurants': USAGeorgiaAtlantaRestaurants,
  '/usa/georgia/avondale-estates/restaurants': USAGeorgiaAvondaleEstatesRestaurants,
  '/usa/georgia/chamblee/restaurants': USAGeorgiaChambleeRestaurants,
  '/usa/georgia/decatur/restaurants': USAGeorgiaDecaturRestaurants,
  '/usa/georgia/johns-creek/restaurants': USAGeorgiaJohnsCreekRestaurants,
  '/usa/georgia/marietta/restaurants': USAGeorgiaMariettaRestaurants,
  '/usa/georgia/roswell/restaurants': USAGeorgiaRoswellRestaurants,
  '/usa/florida/boynton-beach/restaurants': USAFloridaBoyntonBeachRestaurants,
  '/usa/florida/coral-gables/restaurants': USAFloridaCoralGablesRestaurants,
  '/usa/florida/fort-lauderdale/restaurants': USAFloridaFortLauderdaleRestaurants,
  '/usa/florida/lake-buena-vista/restaurants': USAFloridaLakeBuenaVistaRestaurants,
  '/usa/florida/miami/restaurants': USAFloridaMiamiRestaurants,
  '/usa/florida/miami-beach/restaurants': USAFloridaMiamiBeachRestaurants,
  '/usa/florida/orlando/restaurants': USAFloridaOrlandoRestaurants,
  '/usa/florida/palm-beach/restaurants': USAFloridaPalmBeachRestaurants,
  '/usa/florida/palm-beach-gardens/restaurants': USAFloridaPalmBeachGardensRestaurants,
  '/usa/florida/safety-harbor/restaurants': USAFloridaSafetyHarborRestaurants,
  '/usa/florida/st-petersburg/restaurants': USAFloridaStPetersburgRestaurants,
  '/usa/florida/surfside/restaurants': USAFloridaSurfsideRestaurants,
  '/usa/florida/tampa/restaurants': USAFloridaTampaRestaurants,
  '/usa/florida/west-palm-beach/restaurants': USAFloridaWestPalmBeachRestaurants,
  '/usa/florida/winter-garden/restaurants': USAFloridaWinterGardenRestaurants,
  '/usa/florida/winter-park/restaurants': USAFloridaWinterParkRestaurants,
  '/usa/illinois/chicago/restaurants': USAIllinoisChicagoRestaurants,
  '/usa/minnesota/duluth/restaurants': USAMinnesotaDuluthRestaurants,
  '/usa/dc/washington/restaurants': USADcWashingtonRestaurants,
};

const LoadingSpinner = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontSize: '18px',
    color: '#666'
  }}>
    Loading...
  </div>
);

const DynamicPage = () => {
  const location = useLocation();
  const [content, setContent] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const loadContent = async () => {
      try {
        setLoading(true);
        setError(null);
        setContent(null);

        const path = location.pathname.slice(1);
        const fullPath = `/${path}`;
        console.log('Loading path:', fullPath);

        // Check if this is a listing page
        const ListingComponent = listingComponents[fullPath];
        if (ListingComponent) {
          setContent({ type: 'component', Component: ListingComponent });
          setLoading(false);
          return;
        }

        // Otherwise, try to load restaurant JSON
        const pathParts = path.split('/');
        const lastPart = pathParts[pathParts.length - 1];

        const toPascalCase = (str) => {
          return str.split('-').map(word =>
            word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
          ).join('');
        };

        const basePath = pathParts.slice(0, -1).join('/');

        const nameVariations = [
          toPascalCase(lastPart),
          lastPart.split('-').map(word =>
            word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
          ).join('-'),
          lastPart,
          lastPart.toLowerCase(),
          lastPart.charAt(0).toUpperCase() + lastPart.slice(1).toLowerCase(),
        ];

        const pathVariations = nameVariations.map(name =>
          `/components/${basePath}/${name}.json`
        );

        console.log('Trying JSON paths:', pathVariations);

        let data = null;
        let lastError = null;

        for (const tryPath of pathVariations) {
          try {
            const response = await fetch(tryPath);
            if (response.ok) {
              try {
                data = await response.json();
                console.log('✓ Loaded JSON from:', tryPath);
                break;
              } catch (jsonErr) {
                lastError = `Invalid JSON: ${jsonErr.message}`;
              }
            } else {
              lastError = `HTTP ${response.status}: ${response.statusText}`;
            }
          } catch (err) {
            lastError = err.message;
            continue;
          }
        }

        if (data) {
          setContent({ type: 'restaurant', data });
          setLoading(false);
        } else {
          throw new Error(`Restaurant not found: ${lastPart}. Last error: ${lastError || 'No matching files'}`);
        }

      } catch (err) {
        console.error('Error loading content:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    loadContent();
  }, [location.pathname]);

  if (loading) return <LoadingSpinner />;

  if (error) {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        padding: '40px',
        textAlign: 'center',
        backgroundColor: '#f5f5f5'
      }}>
        <div style={{ fontSize: '72px', marginBottom: '20px' }}>404</div>
        <h2 style={{ marginBottom: '20px' }}>Page Not Found</h2>
        <p style={{ color: '#666', marginTop: '10px', fontSize: '16px', maxWidth: '600px' }}>
          {error}
        </p>
        <div style={{ display: 'flex', gap: '15px', marginTop: '30px' }}>
          <a href="/" style={{ padding: '12px 24px', backgroundColor: '#333', color: 'white',
            textDecoration: 'none', borderRadius: '5px', fontSize: '16px' }}>Return Home</a>
          <a href="/destinations" style={{ padding: '12px 24px', backgroundColor: '#555', color: 'white',
            textDecoration: 'none', borderRadius: '5px', fontSize: '16px' }}>Browse Destinations</a>
        </div>
      </div>
    );
  }

  if (content.type === 'component') {
    const Component = content.Component;
    return (
      <Suspense fallback={<LoadingSpinner />}>
        <Component />
      </Suspense>
    );
  }

  return <RestaurantTemplate {...content.data} />;
};

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/methodology" element={<Methodology />} />
          <Route path="*" element={<DynamicPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
