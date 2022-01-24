const fetchProduct = require('../async');

describe('Async', () => {
  it('async-done', done => {
    fetchProduct().then(item => {
      expect(item).toEqual({ items: 'Milk', price: 2000 });
      done();
    });
  });

  it('async-return', () => {
    return fetchProduct().then(item => {
      expect(item).toEqual({ items: 'Milk', price: 2000 });
    });
  });

  it('async-await', async () => {
    const product = await fetchProduct();
    expect(product).toEqual({ items: 'Milk', price: 2000 });
  });

  it('async-resolves', () => {
    return expect(fetchProduct()).resolves.toEqual({
      items: 'Milk',
      price: 2000,
    });
  });

  it('async-resolves', () => {
    return expect(fetchProduct('error')).rejects.toBe('network error');
  });
});
