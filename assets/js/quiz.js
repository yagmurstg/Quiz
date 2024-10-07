
let quiz1 = prompt("1. İstanbul'un hangi semti Asya ve Avrupa yakasını birbirine bağlar? \n A)Kadıköy B)Beşiktaş C)Üsküdar D)Beykoz")

let dogruSayac = 0;

if(quiz1 === 'C') {
  dogruSayac = dogruSayac + 1;
} else if(quiz1 === 'A' || quiz1 === 'B' || quiz1 === 'D') {
  alert('Cevabınız Yanlış!')
} else {alert('Geçersiz karakter!')
}

let quiz2 = prompt("2. İstanbul Boğazı'nda yer alan ve tarihi bir yapıya ev sahipliği yapan ada hangisidir? \n A)Kız Kulesi B)Büyükada C)Heybeliada D)Burgazada")


if(quiz2 == 'A') {
  dogruSayac = dogruSayac + 1;
} else if(quiz2 === 'B' || quiz2 === 'C' || quiz2 === 'D') {
  alert('Cevabınız Yanlış!')
} else {alert('Geçersiz karakter!')
}

let quiz3 = prompt("3. İstanbul'un en eski ve en büyük kapalı çarşısı hangisidir? \n A)Mısır Çarşısı B)Kapalıçarşı C)İstiklal Caddesi D)Balat Pazarı")


if(quiz3 == 'B') {
  dogruSayac = dogruSayac + 1;
} else if(quiz3 === 'A' || quiz3 === 'C' || quiz3 === 'D') {
  alert('Cevabınız Yanlış!')
} else {alert('Geçersiz karakter!')
}

let quiz4 = prompt("4. İstanbul'un fethini gerçekleştiren Osmanlı Padişahı kimdir? \n A)Yavuz Sultan Selim B)Kanuni Sultan Süleyman C)Fatih Sultan Mehmet D)II. Murat")


if(quiz4 == 'C') {
  dogruSayac = dogruSayac + 1;
} else if(quiz4 === 'A' || quiz4 === 'B' || quiz4 === 'D') {
  alert('Cevabınız Yanlış!')
} else {alert('Geçersiz karakter!')
}

let quiz5 = prompt("5. İstanbul’un hangi meydanı şehrin merkezi olarak kabul edilir? \n A)Sultanahmet Meydanı B)Taksim Meydanı C)Eminönü Meydanı D)Beyazıt Meydanı")


if(quiz5 == 'B') {
  dogruSayac = dogruSayac + 1;
} else if(quiz5 === 'A' || quiz5 === 'C' || quiz5 === 'D') {
  alert('Cevabınız Yanlış!')
} else {alert('Geçersiz karakter!')
}

let quiz6 = prompt("6. Ayasofya, 1935 yılında hangi amaçla kullanılmaya başlanmıştır? \n A)Kilise B)Cami C)Müze D)Saray")


if(quiz6 == 'C') {
  dogruSayac = dogruSayac + 1;
} else if(quiz6 === 'A' || quiz6 === 'B' || quiz6 === 'D') {
  alert('Cevabınız Yanlış!')
} else {alert('Geçersiz karakter!')
}

let quiz7 = prompt("7. İstanbul'da düzenlenen en büyük kültür festivali hangisidir? \n A)İstanbul Film Festivali Kilise B)İstanbul Bienali C)İstanbul Tiyatro Festivali D) İstanbul Müzik Festivali")


if(quiz7 == 'A') {
  dogruSayac = dogruSayac + 1;
} else if(quiz7 === 'C' || quiz7 === 'B' || quiz7 === 'D') {
  alert('Cevabınız Yanlış!')
} else {alert('Geçersiz karakter!')
}


let quiz8 = prompt("8. İstanbul Boğazı’ndan geçen ilk köprü hangisidir? \n A)Fatih Sultan Mehmet Köprüsü B)Yavuz Sultan Selim Köprüsü C)Haliç Köprüsü D)15 Temmuz Şehitler Köprüsü")


if(quiz8 === 'D') {
  dogruSayac = dogruSayac + 1;
} else if(quiz8 === 'A' || quiz8 === 'B' || quiz8 === 'C') {
  alert('Cevabınız Yanlış!')
} else {alert('Geçersiz karakter!')
}

let quiz9 = prompt("9. İstanbul’un en yüksek tepesi hangisidir? \n A)Çamlıca Tepesi B)Beyazıt Tepesi C)Yuşa Tepesi D)Aydos Tepesi")


if(quiz9 === 'D') {
  dogruSayac = dogruSayac + 1;
} else if(quiz9 === 'A' || quiz9 === 'B' || quiz9 === 'C') {
  alert('Cevabınız Yanlış!')
} else {alert('Geçersiz karakter!')
}

let quiz10 = prompt("İstanbul'un eski adı nedir? \n A)Konstantinopolis B)Roma C)Atina D)İzmir")


if(quiz10 == 'A') {
  dogruSayac = dogruSayac + 1;
} else if(quiz10 === 'C' || quiz10 === 'B' || quiz10 === 'D') {
  alert('Cevabınız Yanlış!')
} else {alert('Geçersiz karakter!')
}

alert("Doğru yaptığınız soru sayısı:" + dogruSayac)