import { FilterContactsPipe } from './filter-contacts.pipe';

describe('FilterPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterContactsPipe();
    expect(pipe).toBeTruthy();
  });
});
