import { Track } from './track';

export interface Album {
  id: number;
  name: string;
  releaseDate: string;
  coverImage: string;
  tracks: Track[];
}
