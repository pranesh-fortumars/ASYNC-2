import { describe, it, expect } from 'vitest';
import { heroData, aboutData } from '@/data/portfolio';

describe('Portfolio Data Layer', () => {
  it('should contain hero data', () => {
    expect(heroData.name).toBe('Pranesh S');
    expect(heroData.titles.length).toBeGreaterThan(0);
    expect(heroData.roles.length).toBeGreaterThan(0);
  });

  it('should contain about data', () => {
    expect(aboutData.title).toBe('About Me');
    expect(aboutData.stats.length).toBe(3);
    expect(aboutData.story.length).toBeGreaterThan(0);
  });
});
