// import { Directive } from 'vue';

const LazyloadDirective = {
  // Привязываем директиву к элементу, когда он привязывается к DOM
  beforeMount(el, binding) {
    // Создаем экземпляр Intersection Observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Когда элемент становится видимым, устанавливаем его src атрибут
          el.src = binding.value;
          // Отключаем наблюдение, чтобы избежать повторной загрузки
          observer.unobserve(el);
        }
      });
    });

    // Наблюдаем за элементом
    observer.observe(el);
  },
};

export default LazyloadDirective;