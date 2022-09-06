const dev = process.env.NODE_ENV !== 'production';

export const server = dev ? 'http://localhost:3000/api/updateboard' : 'the-board-gyzlfd2t3-khizar-zaman.vercel.app';