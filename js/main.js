let recher = document.getElementById('inp');
let btn = document.getElementById('btn');
let out = document.getElementById('output')
let out2 = document.getElementById('output2')

let cart1 = ['6921734907325','8682961000651', '862961000477', '8682961000323', '8682961000446', '8682961000460', '8682961000484', '8682961000439', '8082411740210', '10030962', '8697950362863', '8682102800713', '10092213', '10092204'];
let cart2 = ['8681569564251'];
let cart3 = ['8682225136966', '8682225136959'];
let cart4 = ['8682225136942', '3213008117220'];
let cart5 = ['8682225137130', '8682225137147', '8682225136881']
let cart6 = ['5054903763925'];
let cart7 = ['6949205000023', '6224008420361', '6223603571676', '0883314752960', '0883314795004', '8711295837265', '6900201379360', '8682225131916', '9062987401103', '1310202322008'];
let cart8 = ['8000807069295'];
let cart9 = ['698308011693', '192502701838', '3213009117342', '8683024017845', '6193603575113', '6192904902086', '5414882001508', '6192904902062', '541246006365', '8699885645394', '6976627980084'];
let cart10 = ['2190110589'];
let cart11 = ['5414882002048'];
let cart12 = ['8697806192019'];
let cart13 = ['8684308700217'];
let cart14 = ['8681690007252', '8698308011723', '8693357591110', '0792649247808', '3213008117169', '8682378009957', '8718973016134'];
let cart15 = ['8718973015069', '1600250400637', '6996562109441', '8697853092838', '6192904901751', '6192904900754', '6192904902093', '8698543380165', '5414886185419', '8682397002014'];
let cart16 = ['8682961000811', '8682102800706', '8696219004513', '8718973033469', '6972364640014', '10025132', '5054903762003', '8683027450540', '6193603574949', '8698543365582', '8422175794515', '8680801606728','8693395003354'];
let cart17 = ['8681569571808'];
let cart18 = ['8681569564060'];
let cart19 = ['6222007903199'];
let cart20 = ['6193603579036'];
let cart21 = ['5054025002155'];
let cart22 = ['5054025002155'];
let cart23 = ['3800034950824', '3800034952330', '3800034961615', '3800034974615', '3800034958042', '8682378009995', '8682378010137', '8697465006078', '8008033004349'];
let cart24 = ['8698308168489'];
let cart25 = ['10072217'];
let cart26 = ['8682961000347','8682961000392', '8682961000484', '8682961001023', '8682961000361', '8682961000330', '8682961000422', '8682961000293', '8682205051388', '8719202164763'];
let cart27 = ['8682378010007', '8682378010052', '3310202322006', '9062987401103', '3213008117220', '10096702', '3213009117342', '6192008320731'];
let cart28 = ['86985660345888', '8698560345871', '8711252174853', '8682205052903', '8682205052996', '8720573157063'];
let cart29 = ['1310202322008', '8697970610197', '8692531002060', '8682397823213', '8008033750079', '8008033543565', '8691400020327'];

let Palet1 = cart1.concat(cart2,cart3,cart4,cart5,cart6,cart7,cart8,cart9,cart10,cart11,cart12,cart13,cart14,cart15,cart16,cart17,cart18,cart19,cart20,cart21,cart22,cart23,cart24,cart25,cart26,cart27,cart28,cart29);

let Palet2 = ['8684308700514', '8684308700781','8684308700163',
    '8684308700231', '8684308701986', '6942023203652',
    '6942023203652', '6942023203614', '8684308700101',
    '8684308700125', '8697465007624', '8697465007617',
    '8684308700804', '8684308700231', '863314929386',
    '883314963076', '883314939859', '883314963083', '8833149293079',
    '8718973015090', '8422175182800', '8720573157063',
    '8697970610920', '6955693041523', '8682205052996',
    '8695737106921', '8682952306045', '5414883005826',
    '8682961000408', '8682961000309', '8682961000699',
    '8682961000446', '8682961000330', '8682961000484',
    '8682961000477', '8682961000460', '8682961000392',
    '8682961000453', '8719202164763', '8711295837265',
    '8697970610197', '5412460006365', '6941870596092',
    '8699303355126'
];

let cartp1 = ['8697806192019', '6976627980121', '9780201379914',
    '3213008117169', '0883314982060', '8693357501348', 
    '8414926539896', '6221208018206', '8697480553052',
    '6224010803145', '0792649247808', '6191731600189',
    '0792649247515', '8682665334519', '5414886539007',
    '5414886538994', '6192502714364', '6224010803138',
    '5414886310262', '6192502713404'
];
let cartp2 = ['8697806192019', '8082411741545', '8719202101683', '6955693027237'];
let cartp3 = ['8007427003913', '8435271264882', '8718973033469',
    '8697404117315', '8001895002409', '8682961000323',
    '8680801606728', '8681690005524', '8682397830204',
    '8711295837265', '8682397809972', '8682397809934',
    '8693357508224', '8719202939231', '868562542108',
    '8719202641998'
];
let cartp4 = ['5054025002155'];
let cartp5 = ['5054025002155', '5054903675884', '6976627980077',
    '2110202322003', '8682397810107', '8699462254063'
];
let cartp6 = [
    '5414883005864', '86992434448', '868237801068', '8682961000453',
    '8682961000422', '8682961000446', '8682961000392',
    '8682961000484', '8682961000477', '8682961000408',
    '8682961000491', '8682961000439', '8682961000323',
    '8682961000309', '8682961000460', '8682961000361',
    '8682378010366', '8682378009957'
];
let cartp7 = [
    '5905197265926', '8682397001079', '8682190114600',
    '8683024013854', '8682397810107', '8682397830204',
    '8691400020327', '8683024013694', '8698308160025',
    '3256390151991'
];
let cartp8 = ['86940427993'];

let Palet3 = cartp1.concat(cartp2,cartp2,cartp3,cartp4,cartp5,cartp6,cartp7,cartp8);

let a = cart1.length + cart2.length;
let b = a  + cart3.length; 
let c = b + cart4.length; 
let d = c + cart5.length; 
let e = d + cart6.length; 
let f = e + cart7.length; 
let j = f + cart8.length; 
let h = j + cart9.length;
let i = h + cart10.length;
let g = i + cart11.length;
let k = g + cart12.length;
let l = k + cart13.length;
let m = l + cart14.length;
let n = m + cart15.length;
let o = n + cart16.length;
let p = o + cart17.length;
let q = p + cart18.length;
let r = q + cart19.length;
let s = r + cart20.length;
let t = s + cart21.length;
let u = t + cart22.length;
let v = u + cart23.length;
let w = v + cart24.length;
let x = w + cart25.length;
let y = x + cart26.length;
let z = y + cart27.length;
let aa = z + cart28.length;
let ba = aa + cart29.length;
let ca = ba + Palet2.length;
let da = ca + cartp1.length;
let ea = da + cartp2.length;
let fa = ea + cartp3.length;
let ga = fa + cartp4.length;
let ha = ga + cartp5.length;
let ia = ha + cartp6.length;
let ja = ia + cartp7.length;
let ka = ja + cartp8.length;

let stok = Palet1.concat(Palet2,Palet3);
let repet = document.getElementById('repet')
console.log(stok.length);

btn.onclick = () => {
    let reslt = stok.indexOf(`${recher.value}`);
    console.log(reslt)
    if (reslt == -1){
        out.innerHTML = 'n\'existe pas'
        out.style.backgroundImage = "linear-gradient(0deg,#ffdd1b, red)";
        out.style.boxShadow = "2px 2px 13px"
    } else {
        out.innerHTML = 'existe \n';
        out.style.backgroundImage = "linear-gradient(0deg,#ffdd1b, red)";
        let stok2 = stok.slice(reslt + 1);

        let reslt2 = stok2.indexOf(`${recher.value}`);
        console.log(reslt2)
        if (reslt2 != -1){
            repet.innerHTML += 'repetition: OK'
        };
        if(reslt < cart1.length){
            out.innerHTML += 'donne le Palette1, carton 1 '
        } if (reslt > cart1.length && reslt < a ){
            out.innerHTML += 'donne le Palette1, carton 2 '
        } if (reslt >= a  && reslt < b){
            out.innerHTML += 'donne le Palette1, carton 3 '
        } if (reslt >= b && reslt < c){
            out.innerHTML += 'donne le Palette1, carton 4 '
        } if (reslt >= c && reslt < d){
            out.innerHTML += 'donne le Palette1, carton 5 '
        } if (reslt >= d && reslt < e){
            out.innerHTML += 'donne le Palette1, carton 6'
        } if (reslt >= e && reslt < f ){
            out.innerHTML += 'donne le Palette1, carton 7 '
        } if (reslt >= f && reslt < j ){
            out.innerHTML += 'donne le Palette1, carton 8 '
        } if (reslt >= j && reslt < h){
            out.innerHTML += 'donne le Palette1, carton 9 '
        } if (reslt >= h && reslt < i){
            out.innerHTML += 'donne le Palette1, carton 10 '
        } if (reslt >= i && reslt < g){
            out.innerHTML += 'donne le Palette1, carton 11 '
        } if (reslt >= g && reslt < k){
            out.innerHTML += 'donne le Palette1, carton 12 '
        } if (reslt >= k &&  reslt < l){
            out.innerHTML += 'donne le Palette1, carton 13 '
        } if (reslt >= l && reslt < m){
            out.innerHTML += 'donne le Palette1, carton 14 '
        } if (reslt >= m && reslt < n){
            out.innerHTML += 'donne le Palette1, carton 15 '
        } if (reslt >= n && reslt < o){
            out.innerHTML += 'donne le Palette1, carton 16 '
        } if (reslt >= o && reslt < p){
            out.innerHTML += 'donne le Palette1, carton 17 '
        } if (reslt >= p && reslt < q) {
            out.innerHTML += 'donne le Palette1, carton 18 '
        } if (reslt >= q && reslt < r){
            out.innerHTML += 'donne le Palette1, carton 19 '
        } if (reslt >= r && reslt < s){
            out.innerHTML += 'donne le Palette1, carton 20 '
        } if (reslt >= s && reslt < t){
            out.innerHTML += 'donne le Palette1, carton 21 '
        } if (reslt >= t && reslt < u){
            out.innerHTML += 'donne le Palette1, carton 22 '
        } if (reslt >= u && reslt < v){
            out.innerHTML += 'donne le Palette1, carton 23 '
        } if (reslt >= v && reslt < w){
            out.innerHTML += 'donne le Palette1, carton 24 '
        } if (reslt >= w && reslt < x){
            out.innerHTML += 'donne le Palette1, carton 25 '
        } if (reslt >= x && reslt < y){
            out.innerHTML += 'donne le Palette1, carton 26 '
        } if (reslt >= y && reslt < z){
            out.innerHTML += 'donne le Palette1, carton 27 '
        } if (reslt >= z && reslt < aa){
            out.innerHTML += 'donne le Palette1, carton 28 '
        } if (reslt >= aa && reslt < ba){
            out.innerHTML += 'donne le Palette1, carton 29 '
        } if (reslt >= ba && reslt < ca){
            out.innerHTML += 'donne le Palette2'
        } if (reslt >= ca && reslt < ea ){
            out.innerHTML += 'donne le Palette 3, carton 1 '
        } if (reslt >= ea && reslt < fa){
            out.innerHTML += 'donne le Palette 3, carton 2 '
        } if (reslt >= fa && reslt < ga){
            out.innerHTML += 'donne le Palette 3, carton 3 '
        } if (reslt >= ga && reslt < ha){
            out.innerHTML += 'donne le Palette 3, carton 4 '
        } if (reslt >= ha && reslt < ia){
            out.innerHTML += 'donne le Palette 3, carton 5 '
        } if (reslt >= ia && reslt < ja ){
            out.innerHTML += 'donne la Palette 3, carton 6'
        }
    }
};

// switch (day) {
//     case 0:
//         console.log("Saturday");
//         break;
//     case 1:
//         console.log("Sunday");
//         break;
// }
