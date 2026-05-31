import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import './ProjectContainer.css'

const getProjectSlug = (project) =>
  project.slug ||
  project.name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

const getImageSrc = (image) =>
  image && image.startsWith('http')
    ? image
    : `${process.env.PUBLIC_URL}/images/${image}`

const ProjectContainer = ({ project }) => (
  <div className='project'>
    {project.image && (
      <img
        className='project__image'
        src={getImageSrc(project.image)}
        alt={`${project.name} screenshot`}
      />
    )}

    <h3>{project.name}</h3>

    <p className='project__description'>{project.description}</p>
    {project.stack && (
      <ul className='project__stack'>
        {project.stack.map((item) => (
          <li key={uniqid()} className='project__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}

    {project.sourceCode && (
      <a
        href={project.sourceCode}
        aria-label='source code'
        className='link link--icon'
      >
        <GitHubIcon />
      </a>
    )}

    {project.livePreview && (
      <a
        href={`#project/${getProjectSlug(project)}`}
        aria-label='live preview'
        className='link link--icon'
      >
        <LaunchIcon />
      </a>
    )}
  </div>
)

export default ProjectContainer
