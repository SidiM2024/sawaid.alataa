// service-worker.js
importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-messaging.js');

// يجب أن تكون هذه هي إعدادات Firebase الخاصة بك
const firebaseConfig = {
  apiKey: "AIzaSyDtNky0qQbKDGC45pxuqJ4Tq_AMmXpANwI",
  authDomain: "sawaid-4939e.firebaseapp.com",
  projectId: "sawaid-4939e",
  storageBucket: "sawaid-4939e.firebasestorage.app",
  messagingSenderId: "817695160648",
  appId: "1:817695160648:web:f34385ce7ec33c88ba9b7d",
  measurementId: "G-44YGD8B1W9"
};

// تهيئة Firebase داخل الـ Service Worker
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// هذه هي الطريقة التي سيتم بها عرض الإشعارات في الخلفية
messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});