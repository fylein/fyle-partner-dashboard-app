import { TrimCharacterPipe } from './trim-character.pipe';

describe('TrimCharacterPipe', () => {
  it('create an instance', () => {
    const pipe = new TrimCharacterPipe();
    expect(pipe).toBeTruthy();
  });

  it('should trim characters > 4', () => {
    const name = 'Fyle for Automated Testing Webapp Testing';
    const pipe = new TrimCharacterPipe();
    expect(pipe.transform(name, 4)).toEqual('Fyle...');
  });

  it('should trim characters > 10', () => {
    const name = 'Ashwin';
    const pipe = new TrimCharacterPipe();
    expect(pipe.transform(name, 40)).toEqual(name);
  });
});
