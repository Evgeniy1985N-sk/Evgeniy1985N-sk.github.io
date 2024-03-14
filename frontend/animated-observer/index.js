
const blocksObserver = new IntersectionObserver(
  (entries, obsever) => {

    entries.forEach(item => {
      const target = item.target;

      // console.log(item)

      if (item.isIntersecting) {
        target.classList.add('start-anim');

        if (target.classList.contains('lazy-load-js')) {
          const attr = document.createAttribute('src');
          attr.value = `${target.dataset.src}`;
          target.setAttributeNode(attr);
        }
        
      }

      else {
        item.target.classList.remove('start-anim');
      }

    })

  },
  {}
);

document
  .querySelectorAll('.animated-js, .lazy-load-js')
  .forEach((block) => blocksObserver.observe(block))