import express from 'express';
import fetch from 'node-fetch';

const app = express();
const port = 3001;

app.use(express.json());

const backendURL = 'https://www.hb-studios.com';

function pingBackend() {
  fetch(backendURL)
    .then(response => {
      if (response.ok) {
        console.log('Ping gönderildi, backend aktif!');
      } else {
        console.error('Ping gönderme hatası:', response.status);
      }
    })
    .catch(error => {
      console.error('Ping gönderme hatası:', error);
    });
}

const pingInterval = setInterval(pingBackend, 1000); // Örneğin her 1 saniyede bir ping göndermek için

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

pingBackend(); // İlk ping gönderimi
