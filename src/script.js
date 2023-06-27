import { $ } from './query';

const projects = [
  {
    title: 'Kanbanish',
    image_url: 'todo_landing_half.png',
    description:
      'A full-featured project and tasks management app inspired by Trello. Complete with subtasks, calendar view, sorting, online sync and more with a clean, accessible, and responsive UI!',
    stack: ['JavaScript', 'TailwindCSS', 'Firebase', 'Webpack'],
  },
  {
    title: 'Privvit',
    image_url: 'privvit_home.png',
    description:
      'Reddit but private. A full stack stripped-down clone of Reddit but with invite-only boards.',
    stack: [
      'Node.js',
      'Express',
      'Nunjucks',
      'Alpine',
      'TailwindCSS',
      'MongoDB',
    ],
  },
  {
    title: 'CV Maker',
    image_url: 'cv_maker_banner.png',
    description:
      'Create your own CV and export it to PDF in just a few steps. ',
    stack: ['React', 'Material UI'],
  },
];

const template = $('#card-template');
const projectSection = $('#projects');

for (const project of projects) {
  const card = template.content.cloneNode(true);
  $.data('id', 'image', card).setAttribute(
    'src',
    '/public/images/' + project.image_url
  );
  $.data('id', 'title', card).textContent = project.title;
  $.data('id', 'description', card).textContent = project.description;

  const techStack = project.stack.map(
    (tech) => `<div class="badge badge-outline">${tech}</div>`
  );
  $.data('id', 'stack', card).innerHTML = techStack.join('\n');

  projectSection.append(card);
}
