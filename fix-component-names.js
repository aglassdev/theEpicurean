import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Mapping of file paths to their new component names
const fixes = [
  // China
  { file: 'src/china/xiamen/xiamen/1927DongYuanSiChu.jsx', oldName: '1927DongYuanSiChu', newName: 'OneNineTwoSevenDongYuanSiChu' },
  { file: 'src/china/shanghai/shanghai/1515WestChophouse.jsx', oldName: '1515WestChophouse', newName: 'OneFiveOneFiveWestChophouse' },
  { file: 'src/china/beijing/beijing/1949DuckDeChine.jsx', oldName: '1949DuckDeChine', newName: 'OneNineFourNineDuckDeChine' },
  { file: 'src/china/chengdu/chengdu/8.jsx', oldName: '8', newName: 'Eight' },
  { file: 'src/china/shanghai/shanghai/102House.jsx', oldName: '102House', newName: 'OneZeroTwoHouse' },
  { file: 'src/china/shanghai/shanghai/8OttoEMezzoBombana.jsx', oldName: '8OttoEMezzoBombana', newName: 'EightOttoEMezzoBombana' },
  
  // France
  { file: 'src/france/paris/paris/114Faubourg.jsx', oldName: '114Faubourg', newName: 'OneOneFourFaubourg' },
  { file: 'src/france/strasbourg/strasbourg/1741.jsx', oldName: '1741', newName: 'OneSevenFourOne' },
  { file: 'src/france/paris/paris/20Eiffel.jsx', oldName: '20Eiffel', newName: 'TwoZeroEiffel' },
  { file: 'src/france/paris/paris/24LeRestaurant.jsx', oldName: '24LeRestaurant', newName: 'TwoFourLeRestaurant' },
  { file: 'src/france/paris/paris/19SaintRoch.jsx', oldName: '19SaintRoch', newName: 'OneNineSaintRoch' },
  { file: 'src/france/paris/paris/1920ByNorbertTarayre.jsx', oldName: '1920ByNorbertTarayre', newName: 'OneNineTwoZeroByNorbertTarayre' },
  { file: 'src/france/paris/paris/52FaubourgStdenis.jsx', oldName: '52FaubourgStdenis', newName: 'FiveTwoFaubourgStdenis' },
  { file: 'src/france/bagnols/bagnols/1217.jsx', oldName: '1217', newName: 'OneTwoOneSeven' },
  { file: 'src/france/le-montier-les-bains/le-montier-les-bains/16me.jsx', oldName: '16me', newName: 'OneSixMe' },
  { file: 'src/france/la-baule/la-baule/14Avenue.jsx', oldName: '14Avenue', newName: 'OneFourAvenue' },
  { file: 'src/france/beaune/beaune/8Clos.jsx', oldName: '8Clos', newName: 'EightClos' },
  { file: 'src/france/metz/metz/83Restaurant.jsx', oldName: '83Restaurant', newName: 'EightThreeRestaurant' },
  { file: 'src/france/paris/paris/144.jsx', oldName: '144', newName: 'OneFourFour' },
  
  // Germany
  { file: 'src/germany/hamburg/hamburg/100200Kitchen.jsx', oldName: '100200Kitchen', newName: 'OneZeroZeroTwoZeroZeroKitchen' },
  { file: 'src/germany/limburg-an-der-lahn/limburg-an-der-lahn/360.jsx', oldName: '360', newName: 'ThreeSixZero' },
  { file: 'src/germany/baiersbronn/baiersbronn/1789.jsx', oldName: '1789', newName: 'OneSevenEightNine' },
  { file: 'src/germany/stuttgart/stuttgart/5.jsx', oldName: '5', newName: 'Five' },
  { file: 'src/germany/dsseldorf/dsseldorf/1876DanielDalben.jsx', oldName: '1876DanielDalben', newName: 'OneEightSevenSixDanielDalben' },
  { file: 'src/germany/munich/munich/1804Hirschau.jsx', oldName: '1804Hirschau', newName: 'OneEightZeroFourHirschau' },
  { file: 'src/germany/fulda/fulda/1906.jsx', oldName: '1906', newName: 'OneNineZeroSix' },
  { file: 'src/germany/berlin/berlin/136.jsx', oldName: '136', newName: 'OneThreeSix' },
  { file: 'src/germany/sdharz/sdharz/20zwanzig.jsx', oldName: '20zwanzig', newName: 'TwoZeroZwanzig' },
  { file: 'src/germany/wuppertal/wuppertal/79.jsx', oldName: '79', newName: 'SevenNine' },
  { file: 'src/germany/dsseldorf/dsseldorf/20Restobar.jsx', oldName: '20Restobar', newName: 'TwoZeroRestobar' },
  { file: 'src/germany/karlsruhe/karlsruhe/5SensesByMarioAliberti.jsx', oldName: '5SensesByMarioAliberti', newName: 'FiveSensesByMarioAliberti' },
  { file: 'src/germany/berlin/berlin/893Ryotei.jsx', oldName: '893Ryotei', newName: 'EightNineThreeRyotei' },
  { file: 'src/germany/heidelberg/heidelberg/959.jsx', oldName: '959', newName: 'NineFiveNine' },
  
  // Hungary
  { file: 'src/hungary/esztergom/esztergom/42.jsx', oldName: '42', newName: 'FourTwo' },
  { file: 'src/hungary/szkesfehrvr/szkesfehrvr/67Sigma.jsx', oldName: '67Sigma', newName: 'SixSevenSigma' },
  
  // Ireland
  { file: 'src/ireland/adare/adare/1826Adare.jsx', oldName: '1826Adare', newName: 'OneEightTwoSixAdare' },
  
  // Italy
  { file: 'src/italy/genoa/genoa/20tre.jsx', oldName: '20tre', newName: 'TwoZeroTre' },
  { file: 'src/italy/naples/naples/177Toledo.jsx', oldName: '177Toledo', newName: 'OneSevenSevenToledo' },
  { file: 'src/italy/cuneo/cuneo/4Ciance.jsx', oldName: '4Ciance', newName: 'FourCiance' },
  { file: 'src/italy/naples/naples/50Kal.jsx', oldName: '50Kal', newName: 'FiveZeroKal' },
  { file: 'src/italy/milan/milan/28Posti.jsx', oldName: '28Posti', newName: 'TwoEightPosti' },
  { file: 'src/italy/naples/naples/30CiroCascella.jsx', oldName: '30CiroCascella', newName: 'ThreeZeroCiroCascella' },
  { file: 'src/italy/soprabolzano/soprabolzano/1908.jsx', oldName: '1908', newName: 'OneNineZeroEight' },
  { file: 'src/italy/empoli/empoli/20Posti.jsx', oldName: '20Posti', newName: 'TwoZeroPosti' },
  { file: 'src/italy/sesto-san-giovanni/sesto-san-giovanni/85Bistrot.jsx', oldName: '85Bistrot', newName: 'EightFiveBistrot' },
  { file: 'src/italy/cesenatico/cesenatico/12Ristorante.jsx', oldName: '12Ristorante', newName: 'OneTwoRistorante' },
  { file: 'src/italy/piobesi-dalba/piobesi-dalba/219.jsx', oldName: '219', newName: 'TwoOneNine' },
  { file: 'src/italy/velo-veronese/velo-veronese/13Comuni.jsx', oldName: '13Comuni', newName: 'OneThreeComuni' },
  { file: 'src/italy/rome/rome/53Untitled.jsx', oldName: '53Untitled', newName: 'FiveThreeUntitled' },
  
  // Japan
  { file: 'src/japan/tokyo/tokyo/124Kagurazaka.jsx', oldName: '124Kagurazaka', newName: 'OneTwoFourKagurazaka' },
  
  // Netherlands
  { file: 'src/netherlands/the-hague/the-hague/624.jsx', oldName: '624', newName: 'SixTwoFour' },
  
  // Poland
  { file: 'src/poland/sopot/sopot/1911Restaurant.jsx', oldName: '1911Restaurant', newName: 'OneNineOneOneRestaurant' },
  
  // Portugal
  { file: 'src/portugal/lisbon/lisbon/2monkeys.jsx', oldName: '2monkeys', newName: 'TwoMonkeys' },
  { file: 'src/portugal/tonda/tonda/3Pipos.jsx', oldName: '3Pipos', newName: 'ThreePipos' },
  { file: 'src/portugal/lisbon/lisbon/100Maneiras.jsx', oldName: '100Maneiras', newName: 'OneZeroZeroManeiras' },
  { file: 'src/portugal/guimaraes/guimaraes/34.jsx', oldName: '34', newName: 'ThreeFour' },
  { file: 'src/portugal/almancil/almancil/2Passos.jsx', oldName: '2Passos', newName: 'TwoPassos' },
  
  // Singapore
  { file: 'src/singapore/other/singapore/545WhampoaPrawnNoodles.jsx', oldName: '545WhampoaPrawnNoodles', newName: 'FiveFourFiveWhampoaPrawnNoodles' },
  { file: 'src/singapore/other/singapore/91FriedKwayTeowMee.jsx', oldName: '91FriedKwayTeowMee', newName: 'NineOneFriedKwayTeowMee' },
  
  // South Korea
  { file: 'src/south-korea/seoul/seoul/7thDoor.jsx', oldName: '7thDoor', newName: 'SeventhDoor' },
  
  // Spain (additional)
  { file: 'src/spain/vitoria-gasteiz/vitoria-gasteiz/144.jsx', oldName: '144', newName: 'OneFourFour' },
  
  // Spain (from first batch)
  { file: 'src/spain/eivissa/eivissa/1742.jsx', oldName: '1742', newName: 'OneSevenFourTwo' },
  { file: 'src/spain/madrid/madrid/99SushiBarMAD.jsx', oldName: '99SushiBarMAD', newName: 'NineNineSushiBarMAD' },
  { file: 'src/spain/valladolid/valladolid/5Gustos.jsx', oldName: '5Gustos', newName: 'FiveGustos' },
  { file: 'src/spain/pollena/pollena/365.jsx', oldName: '365', newName: 'ThreeSixFive' },
  { file: 'src/spain/alcobendas/alcobendas/99SushiBarALC.jsx', oldName: '99SushiBarALC', newName: 'NineNineSushiBarALC' },
  { file: 'src/spain/castilleja-de-la-cuesta/castilleja-de-la-cuesta/12Tapas.jsx', oldName: '12Tapas', newName: 'OneTwoTapas' },
  { file: 'src/spain/valencia/valencia/2Estaciones.jsx', oldName: '2Estaciones', newName: 'TwoEstaciones' },
  
  // Sweden
  { file: 'src/sweden/gothenburg/gothenburg/28.jsx', oldName: '28', newName: 'TwoEight' },
  
  // Switzerland
  { file: 'src/switzerland/vals/vals/7132Silver.jsx', oldName: '7132Silver', newName: 'SevenOneThreeTwoSilver' },
  { file: 'src/switzerland/grindelwald/grindelwald/1910GourmetByHausers.jsx', oldName: '1910GourmetByHausers', newName: 'OneNineOneZeroGourmetByHausers' },
  { file: 'src/switzerland/saanen/saanen/16Artbarrestaurant.jsx', oldName: '16Artbarrestaurant', newName: 'OneSixArtbarrestaurant' },
  { file: 'src/switzerland/charmey/charmey/4Saisons.jsx', oldName: '4Saisons', newName: 'FourSaisons' },
  
  // Thailand
  { file: 'src/thailand/bangkok/bangkok/100Mahaseth.jsx', oldName: '100Mahaseth', newName: 'OneZeroZeroMahaseth' },
  { file: 'src/thailand/bangkok/bangkok/8020.jsx', oldName: '8020', newName: 'EightZeroTwoZero' },
  
  // UAE
  { file: 'src/uae/other/dubai/11Woodfire.jsx', oldName: '11Woodfire', newName: 'OneOneWoodfire' },
  { file: 'src/uae/other/dubai/3fils.jsx', oldName: '3fils', newName: 'ThreeFils' },
  { file: 'src/uae/other/dubai/21Grams.jsx', oldName: '21Grams', newName: 'TwoOneGrams' },
  { file: 'src/uae/other/dubai/99SushiBar.jsx', oldName: '99SushiBar', newName: 'NineNineSushiBar' },
  
  // UK
  { file: 'src/uk/london/london/64GoodgeStreet.jsx', oldName: '64GoodgeStreet', newName: 'SixFourGoodgeStreet' },
  { file: 'src/uk/ledbury/ledbury/33TheHomend.jsx', oldName: '33TheHomend', newName: 'ThreeThreeTheHomend' },
  { file: 'src/uk/london/london/1890ByGordonRamsay.jsx', oldName: '1890ByGordonRamsay', newName: 'OneEightNineZeroByGordonRamsay' },
  { file: 'src/uk/city-of-bristol/city-of-bristol/1YorkPlace.jsx', oldName: '1YorkPlace', newName: 'OneYorkPlace' },
  { file: 'src/uk/birmingham/birmingham/670Grams.jsx', oldName: '670Grams', newName: 'SixSevenZeroGrams' },
  { file: 'src/uk/achnasheen/achnasheen/1887.jsx', oldName: '1887', newName: 'OneEightEightSeven' },
  { file: 'src/uk/malvern-wells/malvern-wells/1919AtTheCottageInTheWood.jsx', oldName: '1919AtTheCottageInTheWood', newName: 'OneNineOneNineAtTheCottageInTheWood' },
  { file: 'src/uk/pooley-bridge/pooley-bridge/1863Restaurant.jsx', oldName: '1863Restaurant', newName: 'OneEightSixThreeRestaurant' },
  { file: 'src/uk/london/london/104Restaurant.jsx', oldName: '104Restaurant', newName: 'OneZeroFourRestaurant' },
  { file: 'src/uk/winchcombe/winchcombe/5NorthSt.jsx', oldName: '5NorthSt', newName: 'FiveNorthSt' },
  { file: 'src/uk/brighton-and-hove/brighton-and-hove/64.jsx', oldName: '64', newName: 'SixFour' },
  { file: 'src/uk/london/london/45JermynSt.jsx', oldName: '45JermynSt', newName: 'FourFiveJermynSt' },
  { file: 'src/uk/liverpool/liverpool/8ByAndrewSheridan.jsx', oldName: '8ByAndrewSheridan', newName: 'EightByAndrewSheridan' },
  { file: 'src/uk/newcastle-upon-tyne/newcastle-upon-tyne/21.jsx', oldName: '21', newName: 'TwoOne' },
  { file: 'src/uk/egham/egham/1215.jsx', oldName: '1215', newName: 'OneTwoOneFive' },
  { file: 'src/uk/emsworth/emsworth/36OnTheQuay.jsx', oldName: '36OnTheQuay', newName: 'ThreeSixOnTheQuay' },
  { file: 'src/uk/dumfries/dumfries/1610AtTheGlobeInn.jsx', oldName: '1610AtTheGlobeInn', newName: 'OneSixOneZeroAtTheGlobeInn' },
  { file: 'src/uk/edinburgh/edinburgh/1925AtPompadour.jsx', oldName: '1925AtPompadour', newName: 'OneNineTwoFiveAtPompadour' },
  
  // USA
  { file: 'src/usa/other/new-york/63Clinton.jsx', oldName: '63Clinton', newName: 'SixThreeClinton' },
  { file: 'src/usa/other/busan/1001pyeongnaeng.jsx', oldName: '1001pyeongnaeng', newName: 'OneZeroZeroOnePyeongnaeng' },
  { file: 'src/usa/other/new-york/8282.jsx', oldName: '8282', newName: 'EightTwoEightTwo' },
  { file: 'src/usa/other/oceanside/24Suns.jsx', oldName: '24Suns', newName: 'TwoFourSuns' },
  { file: 'src/usa/other/new-york/53.jsx', oldName: '53', newName: 'FiveThree' },
  { file: 'src/usa/other/new-york/4CharlesPrimeRib.jsx', oldName: '4CharlesPrimeRib', newName: 'FourCharlesPrimeRib' },
  { file: 'src/usa/other/washington/1789WAS.jsx', oldName: '1789WAS', newName: 'OneSevenEightNineWAS' },
  { file: 'src/usa/other/san-antonio/2mSmokehouse.jsx', oldName: '2mSmokehouse', newName: 'TwoMSmokehouse' },
  { file: 'src/usa/other/san-francisco/7Adams.jsx', oldName: '7Adams', newName: 'SevenAdams' },
  { file: 'src/usa/other/los-angeles/715.jsx', oldName: '715', newName: 'SevenOneFive' },
  { file: 'src/usa/other/san-francisco/3rdCousin.jsx', oldName: '3rdCousin', newName: 'ThreeRdCousin' },
  { file: 'src/usa/other/palm-springs/4Saints.jsx', oldName: '4Saints', newName: 'FourSaints' },
  { file: 'src/usa/other/brooklyn/6Restaurant.jsx', oldName: '6Restaurant', newName: 'SixRestaurant' },
  
  // Argentina
  { file: 'src/argentina/mendoza/mendoza/1884FrancisMallmann.jsx', oldName: '1884FrancisMallmann', newName: 'OneEightEightFourFrancisMallmann' },
  { file: 'src/argentina/mendoza/mendoza/5SuelosCocinaDeFinca.jsx', oldName: '5SuelosCocinaDeFinca', newName: 'FiveSuelosCocinaDeFinca' },
  { file: 'src/argentina/buenos-aires/buenos-aires/4taPared.jsx', oldName: '4taPared', newName: 'FourTaPared' },
  
  // Austria
  { file: 'src/austria/nudorf-am-attersee/nudorf-am-attersee/1erBeislImLexenhof.jsx', oldName: '1erBeislImLexenhof', newName: 'OneErBeislImLexenhof' },
];

const basePath = __dirname;

fixes.forEach(({ file, oldName, newName }) => {
  const filePath = path.join(basePath, file);
  
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace const declaration
    content = content.replace(
      `const ${oldName} = () => (`,
      `const ${newName} = () => (`
    );
    
    // Replace export statement
    content = content.replace(
      `export default ${oldName};`,
      `export default ${newName};`
    );
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✓ Fixed: ${file}`);
  } catch (error) {
    console.error(`✗ Error fixing ${file}:`, error.message);
  }
});

console.log('\nDone! All component names have been fixed.');
