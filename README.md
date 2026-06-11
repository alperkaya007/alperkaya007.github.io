# Alper Kaya — Kişisel Portfolyo Sitesi

Web developer iş başvuruları için hazırlanmış kişisel portfolyo sitesi.
Tema [devonstank.com](https://devonstank.com/) sitesinden uyarlanmıştır.

## Özellikler

- **Saf HTML / CSS / JavaScript** — framework yok, hızlı ve hafif
- **TR / EN dil desteği** — sağ üstteki düğmeyle anında değişir, tercih hatırlanır
- **Scroll-reveal animasyonları** — aşağı indikçe yazılar ve kartlar belirir
- **Animasyonlu hero** — yüzen portre, şekil değiştiren blob, süzülen kod ikonları, daktilo efekti
- **Tamamen responsive** — mobil, tablet ve masaüstü uyumlu
- **Tema** — Poppins fontu; `#1a1a1a` koyu, `#f3f3f3` açık, `#e1a87a` vurgu rengi

## Çalıştırma

`index.html` dosyasına çift tıklamak yeterli. Ya da basit bir sunucuyla:

```
cd websitem
python -m http.server 8000
# http://localhost:8000
```

## Kişiselleştirme

| Ne | Nerede |
|---|---|
| İsim, başlık, tanıtım metinleri | `index.html` (TR) + `js/main.js` içindeki `translations` (TR/EN) |
| Projeler | `index.html` → `#projects` bölümü |
| Deneyim & eğitim | `index.html` → `#experience` bölümü |
| Yetenek rozetleri | `index.html` → `#skills` bölümü |
| Renkler | `css/style.css` → en üstteki `:root` değişkenleri |
| Daktilo cümleleri | `js/main.js` → `typewriter` dizileri |
| Tespit etiketleri (hero) | `js/main.js` → `detectLabels` dizisi |

> **Not:** İçerik CV'den gerçek bilgilerle dolduruldu; GitHub (alperkaya007)
> ve LinkedIn footer'da bağlı. Projelere GitHub repo linki eklemek istersen
> `#projects` kartlarına `Projeyi İncele` linkleri geri eklenebilir.

## Yayın

Site **https://alperkaya007.github.io** adresinde yayında
(repo: [alperkaya007/alperkaya007.github.io](https://github.com/alperkaya007/alperkaya007.github.io), GitHub Pages `main` dalından otomatik yayınlanır).

Değişiklikleri yayınlamak için:

```
git add -A
git commit -m "açıklama"
git push
```
