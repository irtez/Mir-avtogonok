function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

$(document).ready(function() { 

	let a = getRandomInt(4); b = getRandomInt(4); c = getRandomInt(4);

	let autotexts = ['Audi Sport Quattro S1 E2', 'Porsche 917', 'McLaren MP4/4', 'Ford GT40', 'Tyrrell P34'];
	let autoimages = ['https://автогурман.com/wp-content/uploads/2016/07/1985-audi-sport-quattro-s1-e2-13.jpg', 'https://a.d-cd.net/4c56211s-1920.jpg', 
					'https://avatars.mds.yandex.net/get-zen_doc/3808423/pub_5f68f6b394e9b0682f2b356c_5f68fc0cf52b7a18810286e7/scale_1200', 
					'https://automotive-heritage.ru/upload/ford_gt40_le_mans_3.jpg', 
					'https://media.hagerty.com/media/wp-content/uploads/2020/08/49_2020-CGA-Tyrrell-P-34-four-wheeler-scaled.jpg'];
	let autolinks = ['12.html#text21', '12.html#text28', '12.html#text27', '12.html#text24', '12.html#text210']
	
	let racestexts = ['Ралли Дакар', 'Формула E', 'Формула-1', 'Автогонки серии GT3', 'Чемпионат мира по ралли WRC'];
	let raceimages = ['https://img5.goodfon.ru/wallpaper/nbig/f/cf/avto-mini-sport-mashina-avtomobil-rally-dakar-dakar-ralli--4.jpg',
	'https://amsrus.ru/wp-content/uploads/2021/09/Formula-E.jpg',
	'https://sportsfan.ru/wp-content/uploads/2020/07/Формула-7.jpg',
	'https://img.zr.ru/_ah/img/vi-HMo9dacxNi0_YUhJg9Q',
	'https://avatars.mds.yandex.net/get-zen_doc/1897428/pub_5d7bc92104af1f00adb08abe_5d7c8b61027a1500ac3e388b/scale_1200'];
	let racelinks = ['14.html#text310', '14.html#text39', '14.html#text31', '14.html#text35', '14.html#text37'];

	let pilottexts = ['Михаэль Шумахер', 'Фернандо Алонсо', 'Кими Райкконен', 'Льюис Хэмилтон', 'Даниэль Риккардо'];
	let pilotimages = ['https://cdn.nur.kz/images/1120/40dc0b16ab559082.jpeg',
	'https://world.korupciya.com/wp-content/uploads/2016/08/d8a96e747960e317ae7414e4b9f20150.jpg',
	'https://images.vfl.ru/ii/1493511373/99d42d85/17047738.jpg',
	'https://3kmu.ru/wp-content/uploads/2021/05/novost-27.05.2021-1024x717.jpg',
	'https://autosport.com.ru/files/news/2016/02/10/_79p0662.jpg'];
	let pilotlinks = ['13.html#text410', '13.html#text49', '13.html#text46', '13.html#text47', '13.html#text42'];

	function fill1(text, image, link) {
		$("div.supmain").append('<div class="main"><div class="inmainsup"><a href="'+ link + 
			'" class="inmain"><div id="imgmain1" class="imgback"><p class="imgback">Подробнее</p></div></a><h3 class="inmain">' + text +
			'</h3></div></div>');
		$("#imgmain1").css({
		'background-image' : 'url(' + image + ')'
		});
		
	};
	function fill2(text, image, link) {
		$("div.supmain").append('<div class="main"><div class="inmainsup"><div class="pod" data-tooltip="При обновлении страницы изображения меняются">?</div><a href="'+ link + 
			'" class="inmain"><div id="imgmain2" class="imgback"><p class="imgback">Подробнее</p></div></a><h3 class="inmain">' + text +
			'</h3></div></div>');
		$("#imgmain2").css({
		'background-image' : 'url(' + image + ')'
		});
		
	};
	function fill3(text, image, link) {
		$("div.supmain").append('<div class="main"><div class="inmainsup"><a href="'+ link + 
			'" class="inmain"><div id="imgmain3" class="imgback"><p class="imgback">Подробнее</p></div></a><h3 class="inmain">' + text +
			'</h3></div></div>');
		$("#imgmain3").css({
		'background-image' : 'url(' + image + ')'
		});
	};


	fill1(autotexts[a], autoimages[a], autolinks[a]);
	fill2(racestexts[b], raceimages[b], racelinks[b]);
	fill3(pilottexts[c], pilotimages[c], pilotlinks[c]);

	
	
	
	
});