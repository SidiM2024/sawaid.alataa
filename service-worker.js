// service-worker.js
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

// إعدادات Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDtNky0qQbKDGC45pxuqJ4Tq_AMmXpANwI",
  authDomain: "sawaid-4939e.firebaseapp.com",
  projectId: "sawaid-4939e",
  storageBucket: "sawaid-4939e.appspot.com",
  messagingSenderId: "817695160648",
  appId: "1:817695160648:web:f34385ce7ec33c88ba9b7d",
  measurementId: "G-44YGD8B1W9"
};

// تهيئة Firebase
firebase.initializeApp(firebaseConfig);

// تهيئة Firebase Messaging
const messaging = firebase.messaging();

// معالجة الإشعارات في الخلفية
messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
