import { useEffect, useState } from 'react'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import './ProjectPage.css'

const getImageSrc = (image) =>
  image && image.startsWith('http')
    ? image
    : `${process.env.PUBLIC_URL}/images/${image}`

const ProjectPage = ({ project }) => {
  const rawSlides = project.slides && project.slides.length ? project.slides : []
  const slides = rawSlides.map((image, index) => ({
    id: `${project.slug || project.name}-slide-${index + 1}`,
    image,
  }))
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    setActiveSlide(0)
  }, [project.slug])

  if (!project) return null

  const showPreviousSlide = () => {
    setActiveSlide(
      (currentSlide) => (currentSlide - 1 + slides.length) % slides.length
    )
  }

  const showNextSlide = () => {
    setActiveSlide((currentSlide) => (currentSlide + 1) % slides.length)
  }

  return (
    <main className='project-page'>
      <a href='#projects' className='link project-page__back'>
        Back to projects
      </a>

      <section className='project-page__intro'>
        <h1 className='project-page__title'>{project.name}</h1>
        <p className='project-page__description'>{project.description}</p>
      </section>

      {slides.length ? (
        <section
          className='project-page__slideshow'
          aria-label={`${project.name} images`}
        >
          <img
            className='project-page__image'
            src={getImageSrc(slides[activeSlide].image)}
            alt={`${project.name} slide ${activeSlide + 1}`}
          />

          {slides.length > 1 && (
            <>
              <div className='project-page__controls'>
                <button
                  type='button'
                  className='btn btn--icon project-page__arrow'
                  onClick={showPreviousSlide}
                  aria-label='show previous image'
                >
                  <ArrowBackIosIcon fontSize='small' />
                </button>

                <button
                  type='button'
                  className='btn btn--icon project-page__arrow'
                  onClick={showNextSlide}
                  aria-label='show next image'
                >
                  <ArrowForwardIosIcon fontSize='small' />
                </button>
              </div>

              <div className='project-page__dots'>
                {slides.map((slide, index) => (
                  <button
                    type='button'
                    key={slide.id}
                    className={`project-page__dot${
                      index === activeSlide ? ' project-page__dot--active' : ''
                    }`}
                    onClick={() => setActiveSlide(index)}
                    aria-label={`show image ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </section>
      ) : null}
    </main>
  )
}

export default ProjectPage
