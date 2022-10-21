import firebase from 'firebase-admin';

const firebaseConfig = {
  apiKey: "AIzaSyCQFg6nA7OO2HQ-epju-EUUHfevxGdoVjY",
  authDomain: "film-5e78e.firebaseapp.com",
  projectId: "film-5e78e",
  storageBucket: "film-5e78e.appspot.com",
  messagingSenderId: "304669018160",
  appId: "1:304669018160:web:dcb5029a9ba146741245f5",
  measurementId: "G-05V8G2KF3R",
  type: "service_account",
  project_id: "film-5e78e",
  private_key_id: "04ab6546ab4defca83239fcaf569e0f80ab5728f",
  private_key: "-----BEGIN PRIVATE KEY-----\nMIIEuwIBADANBgkqhkiG9w0BAQEFAASCBKUwggShAgEAAoIBAQC4S3DEuuHpUCkr\nprnovTjz4Ouar9DoRJI7FoDbcRIAuBvuP56Fk7d6aO+a8U8UQFLyF7Fy9NYR8l05\nkuWpx0dDv4noiiQIqXmqKxJcThkPMRXCXVsl6cT4v3I23Mc8GdpCpfT0W9gUVd7w\nxPdKxNdogfFx70hiPsx/e2rQWP/315JfuREUfhyDoEPbklHAD7P9tvdOv6mvSjX6\nQDKl4H888jKcjW1jHiI9nVZGMly0WuTtrMT8hI0eXUSOYcAAFlWwqaZMkA+axA0Z\nBh+G3yUJABdT1Prk1F/GNO0ccIdcPTplJMlY81jr50+00QIbLJLDjI5V9N+gMrnr\nQSUs2oUXAgMBAAECgf8lT2c1qqAAKUwJKTNxMXylrga1UylqwfuJW/NHpf2d8rDP\nXuW453WEZFkU/GReXO4EA2bXsu6JUn7/4kquQKndXM8kt5T95VGY9ayVxZIhDnaf\n4tPGH8tfqxvnGfdw2ywfxNp6RcWB7n9xw3dV6Yy7XdnkxE7jKv+uZXooxabpPy5M\n7+CWTktOwd9ZKMTYpXseY1G8QHeYhnNux1tccpa9DcdFAo1BW4hCm6WBLHdbzHhp\n4v5GQANawn85yrF7NFIWjBwvoCxEjimIWDxokBxiTgyYvRXWDcmoyugIelSZ2ZYo\nUCNyfgqk31C5rVrn+IDT4i18cMI0/l+iBR7eAaECgYEA5AFdySUUZ0gKiOpnuO/8\n1uQOgp8otMHbm2BdpmPuclUnlEJ2w2gvOndZiXnHCEg6Ll+8u1HQCOGOa3humwoA\naQwSOVG8wPRMbr0nzLt585ndfNmiAbMcMytr1nGrsErWKecpB2Uw00/hW+hHvTZx\nhoVNN4HqoxjWgY7YUpxzS9ECgYEAzuwqthocoCXel4DvbQL+V1y7lUpR/wxMenJt\nYX8JSqqJNxHkyg3GvFseRzfC2eI3s0qZNKUTKQW47ZiyTzdQpK7zyRSoULWbIvL/\nqH7j58ZVGCdGxPXtz6kfNFAhkzrAlMx9GzHg+vjD5W9nqIxs49mMTNO2P82Q4PRw\nrtd7xGcCgYEAiUvpVb5mUusmrNu6KbsZ3azmr/F3aaFyxFV7Dz8NzvtIIhcDvRd3\nmRVVbVtPZsVXg6VS2NmjFDX+tOiIcgPLy3XhY3K83tQ9UlHFLZuXDAGTRiMnUy6v\nxIBZJ4C7iiUGYaU5J6Lfi9+GLPnqeR3XrtGGde5dhGjogoup59Ud+IECgYAiU5ti\nSkKlbqLWj1UoyG5ZH9Eemw2vOeMWDRWILwLjmBbbQ+SogFCPvq3vMpjofFaxL5bq\n3Neo3oInKEWsTojaSQu4N+0UNoxd5+HxmdtE/+nt79YVppak9HFwxDpNqll4VdQL\nRuMDv3EABtMzathFlDlqJVT+kKOQLfzjhGvL0QKBgET3F5AC8OYYxkQElAQP9Cdl\nIKiRXQevV+xzdt9YiqZ3GDf5VDlFotMi1rm/hi1TxBknDMrLQ2JGdmVAwKJLanLa\nYhy1krXrqBW/jjCnPwneckZaCN9IEKiFmPQdCuYwPx8kV08VzJqFpvggCIcbU+8y\noiLtvkYFhxSfZgOi+zoJ\n-----END PRIVATE KEY-----\n",
  client_email: "firebase-adminsdk-jjmfb@film-5e78e.iam.gserviceaccount.com",
  client_id: "115884213663795698548",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-jjmfb%40film-5e78e.iam.gserviceaccount.com"
};

const app = firebase.initializeApp({
    credential: firebase.credential.cert(firebaseConfig)
})

const db = firebase.firestore(app)
const Logs = db.collection('Logs')

export {
    Logs
}