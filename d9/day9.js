const diskMap = `3862661670678085717870987066944388237122304387269526457922502763481789248860331275352261208057669164151786821267912912843756969762848733948147993167117987933260444111774981131046423127175391198132981556528886466841904153649781277634134462907446885521455261816827393693365787514157407057815067531283609939702491483692118848754199274930671713112463785536324065963870335246678963763726482884525850924546326162806111582168467928714746722135549182813311357913767784772057532215509849329438692631404536853075567677649217971898253752889665535729441681394169328065824974875236246829434715368379917054666169484640328312687686856934686335482475418948464312408116998373542665883885409969358775724793145487879242845351955713129714201538831838815217875978893510632238164136339832353066972996532394316253993598292538992698265645609135462016793077823110238350549616181835454778658492274752133885133617848131772264841284426255741812575847706824989369827790814863999436844435832394788125212563539120887592164845927156683646516884736895976162448078701810217211997757714597305943112091768739894935415080588665689588619214751452699225377448842552382714645731391293291719196493806420466963821479937998462940907597111280698091997249927394984480954720871455522683349717912972398086312742835749443356665382482770211460511847409428804324945190519697225633853884598989467548409177952915248884524871481341273810539844663145274965849925501619773290702917424719965397599656155619464517239527648838667212656252509065287996102291749635765924179496879987567988421552916225462068141585288857989397522893298078547573475029397729471482742227415093678467433833585581974520801299555867966523965521365240602420591049689515322573584587801813602737629254792342684399207550203422651452829091843828666741886361941380552364895732677532945225445298545679472991194588789818975821977958358236852846851074693762121156169170679638669072888470996698698374982094784536102671142687227696156687359545913072753828833789421251134588549560537474174274167164375818115569365786518851515634984176981023925274248657175863332734124558717190392686964463898278833362473217918744242090592361309077901789943455782980437866148266648980659885934632858133637318495144611352682679558948174555785341394959554518481324379954389571949379798699927799842081708213809849972491784743442738742363489984465616505556306247958538534230308012931179983252384480115232765927384128862290535123997064967921551968216067658445409994693229553190459426193113793462729654714541266069245934201721578789679223389611985783185797937312862861989920935961875627421238928754244822498298665832613926169739278723828972685450562612558094574686115640425076166086834288335478566380959426152235381969113578136127653214578726569672177757481990592677591569289624693855367864437951118494481241313526478573307773311253763345553095453366702172817326719879157047369364472279262067515174116997714272688669339979897217558899345834344966403858412176709094608719582046901639122512327762926371605024823564358012374344677845349011308996708160703385696392217086873042216245284096206590258140362787618397985785133588166394813531523575497665984748579865421286145347967544617355616620207468509685696956538653995117478190196190328737127351872593682230331381552715898574835927779470509619399569104717331323633665152076471081199643221597503889534134441446152839311617824499217950604416593594616887444297271961504964902858351364606440618647719726737095179832247079189522425276259212552027323533116778252327405972734575551119403612284766322733905559125351114520262840347187922185431868391254622267339750808529473186773152977727791885934945536782586173364954507447429356986334453713376019457998214560224675647962282411485066527577468242625764608756537664616360281146641181148875239238136456571091365245519271426217975916188374354719778370694847326183996887983989762272598897623762789682111487747557896857476771613071698071208484796888617050711686915423611427858895888289867251451846209998658497353429475094436575972760651597956247494359546596488297911046748476983292924345522544333754329274253245822043834444737874643897356157523141105796906143226239218495219870583024137351246969651989725742201012365368375032775784413722501795788424259582389941728769764359299863956232401938318976315442397796269915634475189474153432659777441340685198858318749727702884732056581353851878313090502293837633297917774941423967194643747886173899146029887162325536746971769963557111265048418749726489729230529246987656789130283033343366511362558290499733893894227774204164628029561191944681837498331268445743467015584077473130826665529438124478936691667650262478647546796086396988217868377680741187433976653075688496464792827651956152781810409264678544874652224854845230919776227276134182927886371781977575745824299293176388345219489777103169934482927992519850186256977232745384345690606096722086531054827142827933438246692165795834519794345723445282968837191288679796611764191370708183338748634595344430478457338775252320413494528328856361628366501058751568424410995865331158414912207158476286709068184347751415282459411170396794957694694749472958537393536321165334295258231365877691174728144848302347336747883420782751306576558356345232276325223611312665535783543410942630734984212886722768526749622431308493868466849178234322599789184517314099955896958265242924305677483850119859566447756898861530482049463652784781272668741159951270479689576778267421764987182053918843852097357657942028542552479783999230168240776373878973244579398980811181621131285919578735905722346885689199857270397678761211301347755731259232433279618064937289638559561292734875797411364333183391756124217117145925427066639841641973411585791077668619657962837761913032585365467161448479941154418511323270921094225474371789631584748077346244505540411486383952622611392656672790308622974921157449237080243677522496144913876644157492517095268516812840536142625550365522862694763797588261362549262040957715451348969185303064599189465295762528552070103168457973193833362381198625478316538853954296644136621618921731314753886082709135628666772434723415175256933566589145388816768087862921272499385369985172684231311183721259356179133393942831346534517295701174838160491914424392223250772934212469639382333925368789535434983475856368657582322558368061381528285986441190513335768231716022325385335337494423219482716529213368456239424498235436539412701787553796748147617642408971768068227349437420832044427661567698249595703520942859893949825537201976439842305867795026528313333329735948605267945349364142355913501293379350699035967997346534747786176953633288772036315825532097893072614724641394181356893786507513256826503174205644809856458833101289871745833173478682919788499139847087721369321559299783896610615493532213149045367323933371437463495923162545172142446437624887972662699249411550317448728082995247533886603441434014295748255396741840827296638813494250539826209378368165563974203846339987969893737383496765721241237469955945672455388213299793852086128133733151248022141782935511442795904251835928483026194622695359445855229131453932217046237862175381691244279218137882917034923323953069741546893810796391345539911221883617958595522156946031423021704482735671197723218782519253616723478616923973559061469281747089186559381333315758248378166288699879538340163351735457104446689385226477526495386624891520987712685015774735611063911618463337843410196996581988334259714523585639569764267760217965995111153461434866334572853778912639671261765485717235897854881379208541236275744398422413155859634318534476161543126052485451345742121539613082567840623997143692134996864528459563303449295168874860713460881665165274916372997251939544451254657614966084707993574421647568516037211389757392428519219373687133283495112120418193682674628321576279303453108835503762999316486783979739467229294936701979172617387291565752342563626114135913921449474949768255384764694631642983703069723776598634279454951843325646396215653473714992216876486791177387718016898333378957332170212261629258148850194215936086249836997025336321154968426510754430385564741834611874327816994788665922342976532057658473223786426575754843774995476666521378716930926361966574133251787287504948323424875987521184473934828961264049109729959040999223336963142157483070853419908772756967661847884337835086702250484223366335201924539724562234342630604334192458242280827538983897262789943430662188242185715780106423134256935332832697536187294628438912946184835311496162332859769727832481177548213645846550764379828047875394926854328255775138472415235166455172565318589498162889159714705615152340359718536710117465462039961687276870286619369136512321716850619328818887542662726977609518759815526081133419924216728131352856389516603656584623123342229245868951126334234949982271863434148676112214253835265641715143985062124890358368898933389633238835313984916128667280609029222512891635595290448577654012442775519954232749298912344615946393304531599321103252487368184773899337218129675887133391977861257671941924756618961640158786502176452689765099994659757311977631778698366181513978126396684137345636443253179312926885423922892093464182102622158254688699316478497454448764719882127472975153971382904090574814496348861011969021496896168348478016712712324798478342739980177192895144162637917758106660496815555843353122447876252824708277382298897174905234238670722131547956278669336860825790466778417886238416659873464973146991897835633566946181201773729981955913455618653594724773832392679725262895523966438332719331823960728140586697902138901058271313125919482357348979242911694359154134801564648169447921832154247991147252756487201125685979598461105724392469407525467273128283964078482664179675725863673061233079977461369520192520437632323492514485572687804352752979496082185627656914195937301389416767205157204568128511531522659875272642271158749384836228541946556733186969915076661332484387351568382055514692749337681317944723779364741838258624471853662478968161926625707872992527851037873368213333729395318068904324183646366154462348224751773080693548875494265532677316533559607193669624439771976513689072809363319198548471412787337028498491457140101372234653428347395546663043472621164858578987118362322551181243258389476469429979506864399253132033899036929551903295234127619086558479381517423874867992921192551052326822686823596571939217264528603142416749533289515997768584119557167817507113626436668368508164784341101657135434762712792411426387503987813324827399493334858424654514109476718856837631405961517983871327832663368199992877468637138744398524439928524375303527267886726848702254977968857536339046545254716343794968138367367653694824175919699744791682683858199774924736897133411538432757399473105814496192693719493116367730608813234094659929927099791784132365539352547134961227831728983564416036293685706025942184831249364645488910984580584915119417425570433521262076849665838530696085325982709483869930745090522868579858242831714812304897785444206754428592979885796068764935386171641698517391517824377313994792114128531278339172592224101381813527944317658552377826935279444376383177851191132062153130968515947042876040246117981073729444552715819081123161119162233622369485853216889993769524576380388476277746702755155085582613333165221525728120459751351750155416411281195172775018265534445820913927683891897078502174409485983771888067198242646388909617343541374150978065814056997271593880359524275724128724719492692427262098394851186445805730281632354174532594285164312623482810115358499754845022327398963284858044306956915733346871131489125740132628719848268515753377708333613848253638997887679962748572721460287873962357892020672712798428872568626942541945668542951071908610954662589385412464467317992018335593165321359990106548705974594258448227219566207880184532213665694227508996214219844436444011843957514676608799219865973122126352629327953398986482547444703963226212243256108196296837649070445378495266408474198584435422312431113281438458467465468826708523528449664930286543973617196753649211489273263539408454576151829088901191294894766238256459554567606876555581902122338399129955449260443777984677911681501117285142651858151878996513396149389993751658296283611264201579103772411998248980337223864287609550583621762352426624219392162398523750571819112918554910472445783932609735972763368971581111766176135630187878419048357221588343904519496930138393483676612549341158819236461197465138596097268662245715115170826973974221508499978439889091365784797064183649442817955815464521692937546347762176647985704716426150964345962615981725874718175357532712968145341263461922714683826324981624423866189552457072817034379624601991895534471626413961842377123763538192569894949565526895266010124265722632796693312574435915782245226344882653134120845229293295845467329024895483216690132756275743113270707923908414848151179270318781886887698638158527636260298551243325413985922889332757935980615979806147725897266170608098196615545443269478572399348168538487925270779446267154209928876313925990411221599511556082286075541889629479802553993886197481867339529899794188514144325074162793399131654699927142193240252194211480145082716763919312657890533243247216202215142534207585859879257460243129384990297510488416522051951943298314204224294033634034104572789236591892457730829026605013152436267967489422802298499763145747112858663934549935987046838093647697343096844759794142556393533656402836237977644747804125467779405798604876194673303534619822963422792484405332322792871545944791702961328163251645825369784935413639273854259265254036603211899018666887127993775484725791425213657683241611209863925899735778694769152079394387939141402943411141319076268427568624628172314786361968151754328471738465623353147784113698454372122151808396845811989050931685145990756434378642855256264289203322819931782751802921996233323586901643226158898672614823678399491811767137803057354897181428429221986738731879281991284637566666701199878970608031921274237039791012859576863414363792205844967440973773848654441020145716239777603393427544555254171329656548916572818738246886199762719985305177241952382120251642476339313956252336344040721088614149289613753487689081835684673525776961838189564868968920219742225372297016427660639628487473428475953325477918522424798694717047713432608264543096415263869692586885346188239927258825475153946471947031465141137644604165102141601410171014381433831533362220933323294535185836403934435290111478551318949368418868408282718770425543428865378028848071672277333961547098904995429010579313599048583390677012874979347174967068233553213148295969458175607150583868509380935196896432808081646222454379771750903847166032797673758264931367561556595092437939713218302313604415819548181668859716164399108677335248483328285238634281401214969052516711943510742118599153777065411559694253805941434714517632209512646167165844306436118368436430908625305492923944178897775977565795372558485499612435365270942793843458631096743675459356392289687246816480681697304291221331666196947667836927516030663463801598214220387329422826378641987351736527905975694989916328762835451333636498429513834332285718303539117875989567614738247261161071672689447539827457895218916755381642306389941536811056939583305625467814222565674216568070818552903149848419504427676293143384402220103725326958706278889740382412292218213893935910715761392584512011904879842416525420351933362215114427926411795674318079456382979434438618613158284750386484383347203295565927285482835110913738313666476469903364518746101380774098571093476339864718402162761192639044911595578665137758852244142695656756778371117859362218322468448664388378879894934988168116428460541976298423351834492263244111609432447522451338905789208644373653816238601490186046886141302865691856816350791860713754655751521951911779199383557266676624713387559935895959535845586427569337869199734756486441227399125235372042744049133860385466794173639526216460743622489934658741315550262380335511504039364446332115411622178051682943823067421459501827435883299582677260863749934564227157593670766520817717465866187049676114294049429625289991909473291449213966991393561735307812779220253228682142118531833176404671132845761187568882283389282694311695731769214730893256372516874847412991494314626762163134909398608020984572723427464551878856245319782956345551888883896530574529545684219033153596244133112440935176395835469766467389438910545043981059211212908850367119472520106218526932594532619010256916819684447672251383884920356573553078592618306950846716658147578419937363128662774218807216685146369854877289593768531996606619967362212360905568971477141267617126443496363024202071584354535693924870786238915545554268708397607579719937611751792445575845584083149053246130612948999791389674989752931525943259564980294564854914817432131995328610165085645931912099766947254622993185607065151180288781277938585021908917713816863076968214657881513856514666912163713424356893424472604614803190594783766498814465468649779771783523626014526269569621134266329537635363757756256929145589661572656944571261362769107149807813707349399324679372813566643247952639365940915410976025493474253036968748427326537421386845375928176958408840634925518058745644131192988113463923636733952526378827236252171369896359432413952035771169874214979461974926881292669933705628255942581116504632218134944576267223593939986885338942685551496232475249245696846510516496417851366880907842154522705813757624599548167421846555976125762844546722617096759670703580225976151540459164724431779318346863532666251451932722177485624440547652883779228290622944449682322147186556123172839983106343866464286124815318433694651468973610921735346168237510936070911795179738351596122850289949248318448440993316199363875642813665952480412936105947418450248761425562414538848710991692892140661573927842195152388229124350207427464027954453698817655063641164563494234297856142674641493558834890837991361964772585104875387612352276786222353014511766249550464296249262392382361768412086121982707593115542375114191589309814252254161986212134934251951449619323729774625290211612973163264776264450482913466196568889659532731354962497345220459167971569715559368271451634592598188997691122792963312588623593651756298343722335427625979267359970803034989023174868897854801093409311104712266527524978752116518918659314773663152172565994955726193881232270368550615871815234617350136739801731207191544390471867561440206223155292637588243313685946175350376314592265205219343222636544604321373754899562615823279891904614731843953132307391798371755349295132737335321488374448722842463342288814189891799248206151786616365081758196967056926223838442612037662761878331894997173212873392512186779060359751757093427235108034279212455920983130658214406432898362301323289088604911393280467063357768188952377695873024983193393158919911105860561253533960942945734585833882823336479840276745336628425483296413197091327490792457825357809610759818661229679093817316558625588213807445726567997870134278494127259354783321181616857872302176367899752084709665893110999611622959495221249594664951233775699595456296415016169537756844392856796168978799438860625650555121129682439018656723542396414824746469414764466257815829597682864810781110692117718874822530655365591859445112989886175458507944603030366952632750371592882780672113942683678016933418769726623142267613501231294136381193152657341526769141562129512578412455345194218178599610914781856792575324669035156273252395289835461441952954317710741296271312695049145241281587624764227055538236353098999234938330544490835842377473718880685980676760796117325492109184595521338796953743458452593095667779161683118172562995402955215464966987129240896298801066607436846090718314934356743764274112369685859318885158672389543441906847723263774762558067378497587327371136737462463850676853505983464381102221139740332196714677583377638462755632473319935767811689826576532233934959534352198039712010461751426246151924788119644220581045448894844930982086599880901838299969997576332533524054209822306918147340684928451`;

const exampleMap = `2333133121414131402`;

// even row index => (number) block(s) file
// odd row index => (number) block(s) free space (.)

const exampleMapArray = exampleMap.split("");

// create an object with ID number
// factory function
// function createPerson(firstName, lastName) {
//     return {
//       firstName: firstName,
//       lastName: lastName,
//       getFullName() {
//         return firstName + ' ' + lastName;
//       },
//     };
//   }

const disk = (IdNumber, quantityOfIdNumber, freeSpace) => {
  return {
    "ID number": IdNumber,
    "quantity Of ID Number": quantityOfIdNumber,
    "free space": freeSpace,
  };
};

let quantityOfIdNumber = [];

quantityOfIdNumber = exampleMapArray.map((i) => {
  parseInt(i);
  if (i % 2 === 0) {
    return quantityOfIdNumber.push(exampleMap[i]);
  }
});
