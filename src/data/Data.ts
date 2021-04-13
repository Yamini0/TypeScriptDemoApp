interface Fruit {
    id: number;
    name: string;
    price: number;
  }
  
  const Fruits: Fruit[] = [
    {
      id: 1,
      name: 'Apple',
      price: 10,
    },
    {
      id: 2,
      name: 'Banana',
      price: 5,
    },
    {
      id: 3,
      name: 'Mango',
      price: 20,
    },
    {
      id: 4,
      name: 'Cherry',
      price: 50,
    },
    {
      id: 5,
      name: 'Lichi',
      price: 60,
    },
  ];
  
  export { Fruits, Fruit };
  