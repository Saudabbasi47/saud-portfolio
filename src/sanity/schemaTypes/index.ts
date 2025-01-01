import { type SchemaTypeDefinition } from 'sanity';
import Hero from './hero'; // Import the hero schema
import skills from './skills';
import project from './project';
import about from './about';
import projects from './projects';
import contact from './contact';
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    Hero,
    skills,
    about,
    contact,
    project,
    projects,


  ],// Add the hero schema here
};
