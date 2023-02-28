const days = document.querySelectorAll(`days`);
const hours = document.querySelectorAll(`hours`);
const minutes = document.querySelectorAll(`minutes`);
const seconds = document.querySelectorAll(`seconds`);

/*
Burada dinamik hale getirmek için kullandık yani sadece 2024 için saymayacak
her sene diğer bir yıl için yenilenecek.
Bunun içinde Şuan ki bulunduğumuz yılı aldık ve hedef yıl olarak +1 yazacağız
*/
const currentYear = new Date().getFullYear();

const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);

function updateCountdowntime() {
  const currentTime = new Date(); //Şimdiki zaman
  const diff = newYearTime - currentTime;

  const day = Math.floor(diff / 1000 / 60 / 60 / 24);
  const hour = Math.floor(diff / 1000 / 60 / 60) % 24;
  const minute = Math.floor(diff / 1000 / 60) % 60;
  const second = Math.floor(diff / 1000) % 60;

  document.getElementById("days").innerText = day < 10 ? `0${day}` : day;
  document.getElementById("hours").innerText = hour < 10 ? `0${hour}` : hour;
  document.getElementById("minutes").innerText = minute < 10 ? `0${minute}` : minute;
  document.getElementById("seconds").innerText = second < 10 ? `0${second}` : second;
}

//1000 millisecond=1 second
//Increases one second every 1000 milliseconds
setInterval(updateCountdowntime, 1000);

function karTanesi() {
	// <i> elemanı oluştur
	var karTanesi = document.createElement('i');
	// id den elementi çağırıp zemin değişkenine at
	var zemin = document.getElementById("karAlani");
	// tag adından body çağırıp body değişkenine at
	var body = document.getElementsByTagName("BODY")[0];
	// bodyYukseklik değişkenine body yüksekliğini ata
	var bodyYukseklik = body.clientHeight;
	// zemine atadığımız elementin yüksekliğini body ile aynı yap
	zemin.style.height = bodyYukseklik + "px";
	// FontAwesome ikonu görünmesi için gerekli class'ları ekle
	karTanesi.classList.add('fa','fa-snowflake-o');
	// Kar tanelerine 0' dan ekran genişliğine kadar rastgele sol boşluk ver
	karTanesi.style.left = Math.random() * body.clientWidth + 'px';
	// 0 ile 1 arasında rastgele opacity değeri oluştur bu sayede solgun kar taneleri oluşsun
	karTanesi.style.opacity = Math.random();
	// 2 ile 5 arasında rastgele animationDuration süresi oluştur
	karTanesi.style.animationDuration = Math.random() * 3 + 2 + 's';
	// zemin değişkeni içine oluşturulan i etiketini yerleştir
	zemin.appendChild(karTanesi);
	// Sürekli olarak bir element oluşturmak bir süre sonra tarayıcıyı yoracaktır
	// bu yüzden oluşan kar tanesini 7 saniye sonra tamamen kaldır
	setTimeout(() => { karTanesi.remove(); }, 7000);
}
// her 80ms geçtiğinde karTanesi oluşturan fonksiyonu çalıştır
setInterval(karTanesi,10); 