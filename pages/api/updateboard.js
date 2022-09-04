import * as firebaseAdmin from 'firebase-admin';

const credential = firebaseAdmin.credential.cert(
  JSON.parse(process.env.FIREBASE_CREDENTIALS)
);

firebaseAdmin.initializeApp({
  credential,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
});

async function getBoard(req, res) {
  const boardId = req.query.boardId;

  let boardRef;
  if (!boardId) {
    const boardRef = db.collection('boards').where('current', '==', true)
  } else {
    const boardRef = db.collection('boards').where(firebase.firestore.FieldPath.documentId(), '==', boardId)
    if (!boardRef) {
      res.status(404).json({ error: 'Board not found' });
      return;
    }
  }

  const db = firebaseAdmin.firestore();

  const board = await boardRef.get();
  try {
    await res.status(200).send(board.data());
  } catch (error) {
    await res.status(500).send(error);
  }
}

export default function handler(req, res) {
  if (req.method === 'GET') { 
    getBoard(req, res);
    return;
  }
}
