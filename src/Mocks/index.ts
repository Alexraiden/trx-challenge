const cardListMock1 = [
  { title: 'Alex', body: 'bobody', id: '1', parentId: '0' },
  { title: 'John', body: 'bobody2', id: '2', parentId: '0' },
  { title: 'Amelie', body: 'bobody', id: '3', parentId: '0' },
  { title: 'Jose', body: 'bobody2', id: '4', parentId: '0' },
]
const cardListMock2 = [
  { title: 'Alban', body: 'bobody', id: '5', parentId: '1' },
  { title: 'Adrien', body: 'bobody2', id: '6', parentId: '1' },
  { title: 'Christine', body: 'bobody', id: '7', parentId: '1' },
  { title: 'Lucas', body: 'bobody2', id: '8', parentId: '1' },
  { title: 'Adrien', body: 'bobody', id: '9', parentId: '1' },
  { title: 'Jean', body: 'bobody2', id: '10', parentId: '1' },
]

export const columnsMock: Record<string, any> = {
  todo: {
    id: 'todo',
    cardList: cardListMock1,
    title: 'todo',
  },
  done: {
    id: 'done',
    cardList: cardListMock2,
    title: 'done',
  },
}
