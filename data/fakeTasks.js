import { v4 as uuidv4 } from 'uuid';

const fakeTasks = [
  {
    id: uuidv4(),
    task: {
      checked: false,
      date: new Date('2021-04-01'),
      title: 'Feed the cat',
    },
  },
  {
    id: uuidv4(),
    task: {
      checked: false,
      date: new Date('2021-04-10'),
      title: 'Walk the cat',
    },
  },
  {
    id: uuidv4(),
    task: {
      checked: false,
      date: new Date('2021-04-15'),
      title: 'Bring the cat to the vet',
    },
  },
  {
    id: uuidv4(),
    task: {
      checked: false,
      date: new Date('2021-04-21'),
      title: 'Feed the cat',
    },
  },
];

export default fakeTasks;
