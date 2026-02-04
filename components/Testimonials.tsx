export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Camille Martin',
      city: 'Biviers',
      text: 'Service professionnel et ponctuel. Mon jardin n\'a jamais eu l\'air aussi beau. Je recommande vivement Jardin Clair !',
      rating: 5,
    },
    {
      id: 2,
      name: 'Pierre Durand',
      city: 'Montbonnot',
      text: 'Équipe sympathique et efficace. Ils ont complètement transformé mon jardin négligé. Très satisfait du devis et du résultat.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Sophie Leclerc',
      city: 'Chambéry',
      text: 'Intervention rapide, déchets verts bien évacués, et ils respectent vraiment l\'environnement. À recommander sans hésitation.',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Ce que nos clients disent
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Satisfaction garantie à chaque intervention
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 shadow-md hover:shadow-lg dark:shadow-gray-700 dark:hover:shadow-gray-600 transition-shadow"
            >
              {/* Stars */}
              <div className="flex mb-4" aria-label={`${testimonial.rating} stars`}>
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg leading-relaxed italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.city}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
