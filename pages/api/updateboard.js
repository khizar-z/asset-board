import { initializeApp, applicationDefault, cert } from 'firebase-admin/app';
import { getFirestore, Timestamp, FieldValue } from 'firebase-admin/firestore';
import { resolve } from 'styled-jsx/css';
const admin = require('firebase-admin');

const serviceAccount = JSON.parse(process.env.FIREBASE_CREDENTIALS);

if (admin.apps.length === 0) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: process.env.FIREBASE_DATABASE_URL,
  });
}

const db = getFirestore();
/* db.collection('boards').doc('1').get().then(r => {
  console.log(r)
}) */

async function getBoard(req, res) {
  const boardId = await req.query.boardId;

  let boardRef;
  if (!boardId) {
    boardRef = db.collection('boards').where('current', '==', true)
  } else {
    boardRef = db.collection('boards').doc(boardId)
    if (boardRef.empty) {
      return await res.status(404).json({ error: 'Board not found' });
    }
  }


  return boardRef.get().then((board) => {
    return res.status(200).send(board.docs[0].data());
  }).catch((err) => {
    return res.status(500).send({ error: err });
  });
}

export default async function handler(req, res) {
  return new Promise((resolve) => {
    if (req.method === 'GET') { 
      getBoard(req, res);
      return resolve();
    }
  });
}
