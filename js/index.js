const testimonials = [
  {
    image: './images/image-tanya.jpg',
    testimonial:
      '“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”',
    name: 'Tanya Sinclair',
    profession: 'UX Engineer',
  },
  {
    image: './images/image-john.jpg',
    testimonial:
      '“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”',
    name: 'John Tarkpo',
    profession: 'Junior Front-end Developer',
  },
]

const slider = document.querySelector('.slider')
const image = document.querySelector('.slider__image img')
const testimonial = document.querySelector('.slider__testimonial--text')
const data = document.querySelector('.slider__testimonial--data p')
const profession = document.querySelector('.slider__testimonial--data span')

const buttons = document.querySelectorAll('button')

let index = 0

const animateTransitions = () => {
  slider.classList.add('animate-slider')
  if (index + 1 === testimonials.length) {
    slider.addEventListener('transitionend', switchSlides)
    index = 0
  } else {
    slider.addEventListener('transitionend', switchSlides)
    index++
  }
}

const switchSlides = () => {
  image.src = testimonials[index].image
  image.alt = `${testimonials[index].name} image`
  data.innerText = testimonials[index].name
  profession.innerText = testimonials[index].profession
  testimonial.innerText = testimonials[index].testimonial
  slider.classList.remove('animate-slider')
}

buttons.forEach((button) => {
  button.addEventListener('click', animateTransitions)
})
