interface Fruit {
    id: number;
    names: string;
    price: number;
  }
  
  const Fruits: Fruit[] = [
    {
      id: 1,
      names: 'Apple',
      price: 10,
    },
    {
      id: 2,
      names: 'Banana',
      price: 5,
    },
    {
      id: 3,
      names: 'Mango',
      price: 20,
    },
    {
      id: 4,
      names: 'Cherry',
      price: 50,
    },
    {
      id: 5,
      names: 'Lichi',
      price: 60,
    },
  ];
  
  export { Fruits, Fruit };
  