const express = require("express");
const app = express();
const path = require("path");
// const { config } = require("process");
const config = require("config");
app.use(express.json());

// dasturchi muhiti
// development
// testing
// product
// set port=9090

// urlencoded middleware bu htmldagi formdan foydalansak bizga boshqacha tartibda keladi shuni togillash uchun
// shu ishlatiladi, ishlatish uchun postmanda rawni yonidagi ww.x urlencodedga otiladi va key undan keyn value ketadi
// app.use(express.urlencoded({ extended: true }));

// static bu biror bir faylni brauzerda korish uchun ishlatiladi uning ucun falyni nomi va
// qaysi papkaga kirmoqchi bolganimiz app.use(express.static('middleware'))  brauzerda login.js deb localhost:8080/ qoyib yozamiz
// app.use(express.static("middleware"));

// config method
// console.log(process.env.NODE_ENV);
// console.log(app.get("env"));
// console.log(config.get("name"));
// console.log(config.get("url"));
// console.log(config.get("bossPassword"));

// middleware
// app.use(require("./middleware/math"));
// app.use(require("./middleware/login"));

// epxress js Node.js platformasi uchun mo'ljallangan, moslashuvchan frameworki. U server tomonida JavaScript bilan veb-ilovalarni va API-larni yaratish uchun ishlatiladi. Express.js HTTP so'rovlarini boshqarish, 'rnatilgan middlewarelarni qo'llash kabi vazifalarni soddalashtiradi.
// Routing — bu URL manzili va HTTP metodlariga qarab so'rovlarni to'g'ri funksiyaga yo'naltirish jarayoni.
// Middleware — bu Express.js ilovasida so'rov va javob o'rtasida bajariladigan funksiyalarni ifodalaydi.
// Express.js-da statik fayllarni xizmat ko'rsatish uchun express.static middleware'si ishlatiladi.
// app.listen() metodi Express.js serverini ishga tushirish va ma'lum bir portda so'rovlarni eshitishni boshlash uchun ishlatiladi.
// res.send() xmetodini har qanday turdagi ma'lumotlarni yuborish uchun ishlatish mumkin. Bu matn (string), HTML, JSON, yoki boshqa turdagi ma'lumotlarni bo'lishi mumkin.
// res.json() metodi faqat JSON formatidagi ma'lumotlarni yuborish uchun ishlatiladi.

// routing
// app.get('/api/movies/:kino/:year', (req, res) => {
//    res.send(req.params)
//    res.send(req.query)
// })

// real project
// const movies = [
//     {id:1, name:'Harry Potter', year: 1996},
//     {id:2, name:'The Moon', year: 2004},
//     {id:3, name:'Scary Clown', year: 2018},
// ]

// app.get('/api/movies/:id', (req, res) => {
//     const movie = movies.find((mov) => mov.id === parseInt(req.params.id))
//     if(!movie)
//         return res.status(404).send("Movie not x")
//     res.send(movie)
// })

app.get('/', (req, res) => {
  res.send('salom')
})

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`${port} running in mine laptop`);
});