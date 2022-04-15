// types
import { Category, Film } from './types';

export function migration(amount: number): Film[] {
  const films: Film[] = [];

  for (let i = 0; i < amount; i++) {
    const [r, g, b] = [0, Math.round(Math.random()), 1].sort(
      () => Math.random() - 0.5
    );

    const action = Math.round(180 * r + Math.random() * 75);
    const commedy = Math.round(180 * g + Math.random() * 75);
    const drama = Math.round(180 * b + Math.random() * 75);

    const categories: Record<number, Category> = {
      1: 'Ação',
      2: 'Comédia',
      3: 'Aventura',
      4: 'Drama',
      5: 'Suspense',
      6: 'Romance',
    };

    films.push({
      action,
      commedy,
      drama,
      category: categories[r * 1 + g * 2 + b * 4],
    });
  }

  return films;
}
