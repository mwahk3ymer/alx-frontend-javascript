// taskFirst function to instantiate variables using const
export function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
}

// getLast function remains the same

// taskNext function to instantiate variables using let
export function taskNext() {
  let combination = 'But sometimes let';
  combination += getLast();

  return combination;
}
