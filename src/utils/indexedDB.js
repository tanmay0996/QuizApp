// src/utils/indexedDB.js
import { openDB } from 'idb';

const DB_NAME = 'QuizAppDB';
const DB_VERSION = 1;
const STORE_NAME = 'quizHistory';

// Initialize (or open) the database
export const initDB = async () => {
  return openDB(DB_NAME, DB_VERSION, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id', autoIncrement: true });
      }
    },
  });
};

// Save a quiz attempt (history) into the database
export const saveQuizHistory = async (historyData) => {
  const db = await initDB();
  const tx = db.transaction(STORE_NAME, 'readwrite');
  await tx.store.add(historyData);
  await tx.done;
  console.log('Saved quiz history:', historyData);
};

// Retrieve all saved quiz attempts
export const getQuizHistory = async () => {
  const db = await initDB();
  const allHistory = await db.getAll(STORE_NAME);
  console.log('Fetched quiz history:', allHistory);
  return allHistory;
};
