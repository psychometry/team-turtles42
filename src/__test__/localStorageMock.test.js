beforeAll(()=>{
  localStorage.clear();
});
afterEach(()=>{
  localStorage.clear();
});

it('saves to localStorage', () => {
  const key = 'dessert', value = 'brownie';
  const mockSet =jest.spyOn(Object.getPrototypeOf(localStorage), 'setItem');
  localStorage.setItem(key, value);
  
  expect(mockSet).toHaveBeenLastCalledWith(key, value);
  expect(localStorage.getItem(key)).toBe(value);
  expect(localStorage.length).toBe(1);
});

it('loads from localStorage', () => {
  const key = 'dessert', value = 'fudge brownie';
  localStorage.setItem(key, value);
  const mockGet =jest.spyOn(Object.getPrototypeOf(localStorage), 'getItem');
  const dessert = localStorage.getItem(key);
  
  expect(mockGet).toHaveBeenLastCalledWith(key);
  expect(dessert).toBe(value);
});

it('clears localStorage', () => {
  const key = 'dessert', value = 'brownie';

  localStorage.setItem(key, value);
  const mockClear =jest.spyOn(Object.getPrototypeOf(localStorage), 'clear');
  localStorage.clear();
  expect(mockClear).toHaveBeenCalled();
  // expect(localStorage.store).toEqual({});
  expect(localStorage.length).toBe(0);
});