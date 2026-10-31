import type { Firestore } from 'firebase/firestore';

/**
 * Client Firebase configuration.
 * Note: Firebase client configuration and API keys are meant to be public in web apps.
 * Data security and access permissions are strictly enforced on the server-side via firestore.rules.
 */
const firebaseConfig = {
  projectId: "gen-lang-client-0167793489",
  appId: "1:926870084992:web:6c6742f74db112ddf5f565",
  apiKey: "AIzaSyBZGRXLc3JXq1M49LQIHC0ZIWiBKd5oiGY",
  authDomain: "gen-lang-client-0167793489.firebaseapp.com",
  storageBucket: "gen-lang-client-0167793489.firebasestorage.app",
  messagingSenderId: "926870084992",
};

const DATABASE_ID = "ai-studio-prosperwogbeitsu-9def5c23-e9d7-4fea-9481-a20dc4b31cd5";

let firestoreInstance: Firestore | null = null;

export async function getDb(): Promise<Firestore> {
  if (firestoreInstance) return firestoreInstance;
  const [{ initializeApp, getApps, getApp }, { getFirestore }] = await Promise.all([
    import('firebase/app'),
    import('firebase/firestore'),
  ]);
  const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
  firestoreInstance = getFirestore(app, DATABASE_ID);
  return firestoreInstance;
}

export async function submitInquiryToFirestore(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
  status: 'new';
}) {
  const db = await getDb();
  const { collection, addDoc } = await import('firebase/firestore');
  return addDoc(collection(db, 'inquiries'), data);
}

export async function fetchEndorsementsFromFirestore() {
  const db = await getDb();
  const { collection, getDocs, query, limit } = await import('firebase/firestore');
  const q = query(collection(db, 'endorsements'), limit(20));
  const snapshot = await getDocs(q);
  const items: any[] = [];
  snapshot.forEach((doc) => {
    items.push({ id: doc.id, ...doc.data() });
  });
  return items;
}

export async function submitEndorsementToFirestore(data: {
  authorName: string;
  authorRole: string;
  organization: string;
  skillFocus: string;
  message: string;
  createdAt: string;
}) {
  const db = await getDb();
  const { collection, addDoc } = await import('firebase/firestore');
  return addDoc(collection(db, 'endorsements'), data);
}
